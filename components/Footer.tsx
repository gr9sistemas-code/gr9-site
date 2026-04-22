import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] border-t border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Descrição */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="GR9 Sistemas" className="inline-block">
              <Image
                src="/logo-original.png"
                alt="GR9 Sistemas Inteligentes"
                width={140}
                height={42}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-[#6E6E73] text-sm leading-relaxed">
              Software de gestão ERP especializado para a indústria têxtil brasileira. Tecnologia feita para quem vive o têxtil.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#1D1D1F] font-semibold mb-4 text-sm">Navegação</h3>
            <nav className="flex flex-col gap-3" aria-label="Links do rodapé">
              <Link href="/" className="text-[#6E6E73] hover:text-[#2563EB] transition-colors duration-200 text-sm">
                A Empresa
              </Link>
              <Link href="/erp" className="text-[#6E6E73] hover:text-[#2563EB] transition-colors duration-200 text-sm">
                ERP Têxtil
              </Link>
              <Link href="/erp#contato" className="text-[#6E6E73] hover:text-[#2563EB] transition-colors duration-200 text-sm">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-[#1D1D1F] font-semibold mb-4 text-sm">Contato</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contato@gr9.com.br"
                className="text-[#6E6E73] hover:text-[#2563EB] transition-colors duration-200 text-sm flex items-center gap-2"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                contato@gr9.com.br
              </a>
              <Link
                href="/erp#contato"
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-sm w-fit"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E5E5EA] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#86868B] text-sm">
            © 2025 GR9 Sistemas. Todos os direitos reservados.
          </p>
          <p className="text-[#86868B] text-xs">
            Software ERP para o Setor Têxtil Brasileiro
          </p>
        </div>
      </div>
    </footer>
  )
}
