import { NextRequest, NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validations'

const PIPEDRIVE_BASE = 'https://api.pipedrive.com/v1'

async function pipedrivePost(endpoint: string, body: Record<string, unknown>, token: string) {
  const res = await fetch(`${PIPEDRIVE_BASE}${endpoint}?api_token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Pipedrive ${endpoint} falhou: ${res.status} ${text}`)
  }
  return res.json()
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validação server-side
    const parsed = leadSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { nome, email, telefone, empresa, segmento, mensagem } = parsed.data
    const source = (body.source as string) || 'site'

    const token = process.env.PIPEDRIVE_API_TOKEN
    const pipelineId = process.env.PIPEDRIVE_PIPELINE_ID
    const stageId = process.env.PIPEDRIVE_STAGE_ID

    if (!token) {
      // Em ambiente sem Pipedrive configurado, retorna sucesso simulado
      console.warn('[Leads] PIPEDRIVE_API_TOKEN não configurado — lead não foi enviado ao CRM')
      return NextResponse.json({ success: true, simulated: true })
    }

    // 1. Criar Person no Pipedrive
    const personData = await pipedrivePost(
      '/persons',
      {
        name: nome,
        email: [{ value: email, primary: true }],
        phone: [{ value: telefone, primary: true }],
      },
      token
    )
    const personId: number = personData.data.id

    // 2. Criar Deal associado ao Person
    const dealBody: Record<string, unknown> = {
      title: `Lead ERP - ${empresa}`,
      person_id: personId,
    }
    if (pipelineId) dealBody.pipeline_id = Number(pipelineId)
    if (stageId) dealBody.stage_id = Number(stageId)

    const dealData = await pipedrivePost('/deals', dealBody, token)
    const dealId: number = dealData.data.id

    // 3. Adicionar nota com segmento, mensagem e origem
    const notaLinhas = [
      `Empresa: ${empresa}`,
      segmento ? `Segmento: ${segmento}` : null,
      `Origem: ${source}`,
      mensagem ? `\nMensagem:\n${mensagem}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    await pipedrivePost(
      '/notes',
      {
        content: notaLinhas,
        deal_id: dealId,
        person_id: personId,
      },
      token
    )

    return NextResponse.json({ success: true, dealId })
  } catch (err: unknown) {
    console.error('[Leads] Erro ao processar lead:', err)
    return NextResponse.json(
      { error: 'Erro interno ao processar o contato. Tente novamente.' },
      { status: 500 }
    )
  }
}
