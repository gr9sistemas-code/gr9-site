import { z } from 'zod'

export const leadSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(14, 'Telefone inválido').max(15, 'Telefone inválido'),
  empresa: z.string().min(2, 'Nome da empresa é obrigatório'),
  segmento: z.enum(['Confecção', 'Distribuidora', 'Atacado', 'Varejo Têxtil', 'Outro']).optional(),
  mensagem: z.string().optional(),
})

export type LeadFormData = z.infer<typeof leadSchema>

export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
  }
  return digits
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
}
