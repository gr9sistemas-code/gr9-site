import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página não encontrada | GR9 Sistemas',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-xl w-full text-center relative">
        {/* Número 404 estilizado */}
        <div className="relative mb-6 inline-block">
          <span className="text-[120px] md:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#1F2937] to-[#374151] leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[120px] md:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#2563EB]/20 to-[#3B82F6]/10 leading-none blur-sm select-none">
              404
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#1F2937] border border-[#374151] text-[#9CA3AF] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          Página não encontrada
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-4">
          Essa página não existe
        </h1>
        <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10">
          O endereço que você acessou não foi encontrado. Pode ser que o link esteja incorreto ou a página tenha sido removida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
            aria-label="Voltar para a página inicial"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Ir para o início
          </Link>
          <Link
            href="/erp"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[#F9FAFB] font-semibold px-6 py-3 rounded-full transition-all duration-200"
            aria-label="Conhecer o ERP"
          >
            Conhecer o ERP
          </Link>
        </div>
      </div>
    </section>
  )
}
