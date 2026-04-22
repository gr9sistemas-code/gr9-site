import type { Metadata } from 'next'
import Link from 'next/link'
import ConversionScripts from '@/components/ConversionScripts'

export const metadata: Metadata = {
  title: 'Obrigado pelo Contato | GR9 Sistemas',
  description: 'Recebemos seu contato. Nossa equipe entrará em contato em breve.',
  robots: { index: false, follow: false },
}

export default function ObrigadoPage() {
  return (
    <>
      {/* Pixels de conversão — configure NEXT_PUBLIC_GOOGLE_ADS_ID, NEXT_PUBLIC_GOOGLE_ADS_CONVERSION e NEXT_PUBLIC_META_PIXEL_ID no .env.local */}
      <ConversionScripts />

      <section className="min-h-screen flex items-center justify-center py-24 px-4">
        <div className="max-w-xl w-full text-center">
          {/* Ícone de sucesso */}
          <div className="w-24 h-24 bg-green-500/10 border-2 border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-12 h-12 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Conteúdo */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Mensagem enviada com sucesso
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-[#F9FAFB] mb-4">
            Recebemos seu contato!
          </h1>

          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-3">
            Obrigado pelo interesse no ERP GR9 Sistemas. Nossa equipe especializada vai analisar
            suas informações e entrar em contato em <strong className="text-[#F9FAFB]">até 1 dia útil</strong> para
            agendar sua demonstração gratuita.
          </p>

          <p className="text-[#6B7280] text-sm mb-10">
            Enquanto isso, fique à vontade para explorar nosso site e conhecer mais sobre o produto.
          </p>

          {/* Próximos passos */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
            <h2 className="text-[#F9FAFB] font-semibold mb-4">O que acontece agora?</h2>
            <div className="flex flex-col gap-4">
              {[
                { numero: '01', texto: 'Nossa equipe analisa seu perfil e prepara uma demonstração personalizada.' },
                { numero: '02', texto: 'Você recebe uma ligação ou mensagem para confirmar o melhor horário.' },
                { numero: '03', texto: 'Realizamos a demonstração ao vivo focada na realidade da sua empresa.' },
              ].map((step) => (
                <div key={step.numero} className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-[#2563EB]/20 text-[#3B82F6] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {step.numero}
                  </span>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{step.texto}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
              aria-label="Voltar para a página inicial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para o site
            </Link>
            <Link
              href="/erp"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[#F9FAFB] font-semibold px-6 py-3 rounded-full transition-all duration-200"
              aria-label="Conhecer mais sobre o ERP"
            >
              Conhecer o ERP
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
