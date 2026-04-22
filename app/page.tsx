import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import LeadForm from '@/components/LeadForm'
import HeroVisual from '@/components/HeroVisual'

export const metadata: Metadata = {
  title: 'GR9 Sistemas | Mais de 30 anos desenvolvendo tecnologia para o têxtil',
  description:
    'A GR9 Sistemas desenvolve software de gestão para atacadistas do setor têxtil há mais de 30 anos. Conheça o GR9 Loja e transforme a operação da sua loja.',
}

const diferenciais = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    titulo: 'Especialização em Têxtil',
    descricao: 'Desenvolvemos software com profundo conhecimento do setor. Nossa equipe entende a linguagem, os processos e as dores reais de confecções e distribuidoras têxteis.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    titulo: 'Suporte Próximo',
    descricao: 'Não somos apenas fornecedores de software. Somos parceiros de negócio. Nosso time está disponível para tirar dúvidas, resolver problemas e apoiar sua equipe no dia a dia.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    titulo: 'Tecnologia Moderna',
    descricao: 'Investimos continuamente em atualização tecnológica para que nossos clientes tenham acesso às melhores ferramentas disponíveis no mercado, sem complexidade desnecessária.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-[#EEF2FF]/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0}>
                <div className="inline-flex items-center gap-2 bg-[#EEF2FF] border border-[#BFDBFE] text-[#2563EB] rounded-full px-4 py-1.5 text-sm font-medium mb-8">
                  <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" aria-hidden="true" />
                  Especialistas em software para o têxtil
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1D1D1F] leading-[0.92] mb-8">
                  Três décadas<br />
                  fazendo<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">
                    tecnologia<br />têxtil
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-lg md:text-xl text-[#6E6E73] leading-relaxed mb-10 max-w-md">
                  A GR9 Sistemas desenvolve software de gestão pensado para a operação real de quem trabalha com tecido.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3 mb-14">
                  <Link
                    href="/erp"
                    className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20 text-sm"
                  >
                    Conheça o ERP
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/erp#contato"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5F5F7] border border-[#D2D2D7] text-[#1D1D1F] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
                  >
                    Fale Conosco
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex items-center gap-8 pt-8 border-t border-[#E5E5EA]">
                  <div>
                    <p className="text-3xl font-black text-[#1D1D1F]">30+</p>
                    <p className="text-xs text-[#6E6E73] mt-0.5 font-medium uppercase tracking-wide">anos de mercado</p>
                  </div>
                  <div className="w-px h-10 bg-[#E5E5EA]" />
                  <div>
                    <p className="text-3xl font-black text-[#1D1D1F]">100%</p>
                    <p className="text-xs text-[#6E6E73] mt-0.5 font-medium uppercase tracking-wide">foco no têxtil</p>
                  </div>
                  <div className="w-px h-10 bg-[#E5E5EA]" />
                  <div>
                    <p className="text-3xl font-black text-[#1D1D1F]">Humano</p>
                    <p className="text-xs text-[#6E6E73] mt-0.5 font-medium uppercase tracking-wide">suporte direto</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right */}
            <div className="lg:col-span-5 hidden lg:block">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE A EMPRESA */}
      <section className="py-32 bg-white border-t border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4 block">Nossa história</span>
              <h2 className="text-5xl md:text-6xl font-black text-[#1D1D1F] leading-tight mb-8">
                Quem está<br />por trás do<br />
                <span className="text-[#2563EB]">GR9 Loja</span>
              </h2>
              <p className="text-[#6E6E73] text-lg leading-relaxed">
                Somos uma empresa de tecnologia com mais de três décadas de história. Aprendemos que
                bom software não é o que tem mais funções. É o que resolve o problema certo, do jeito certo,
                para quem precisa.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="divide-y divide-[#F0F0F0]">
                {diferenciais.map((item, i) => (
                  <div key={item.titulo} className={`flex gap-5 ${i === 0 ? 'pb-8' : i === diferenciais.length - 1 ? 'pt-8' : 'py-8'}`}>
                    <div className="w-10 h-10 bg-[#EEF2FF] rounded-xl flex items-center justify-center text-[#2563EB] flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[#1D1D1F] font-bold text-base mb-1.5">{item.titulo}</h3>
                      <p className="text-[#6E6E73] leading-relaxed text-sm">{item.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* NOSSO PRODUTO */}
      <section className="py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4 block">Nosso produto</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1D1F] leading-tight mb-6">
                ERP especializado<br />para o setor têxtil
              </h2>
              <p className="text-[#6E6E73] text-lg leading-relaxed mb-8">
                O GR9 Loja foi desenvolvido para atender todas as etapas da operação têxtil: do controle
                de estoque e medições específicas a relatórios gerenciais em tempo real. Um sistema completo,
                simples de usar e construído para crescer junto com o seu negócio.
              </p>
              <Link
                href="/erp"
                className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:gap-3 transition-all duration-200 group"
              >
                Ver todas as funcionalidades
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Controle de Estoque', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg> },
                  { label: 'Transferência entre Lojas', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg> },
                  { label: 'Romaneios de Venda', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg> },
                  { label: 'Relatórios Gerenciais', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg> },
                ].map((item) => (
                  <div key={item.label} className="bg-white border border-[#E5E5EA] rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#BFDBFE] transition-all duration-200">
                    <span className="text-2xl mb-3 block">{item.icon}</span>
                    <p className="text-[#1D1D1F] font-semibold text-sm leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="py-32 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#60A5FA] uppercase tracking-widest mb-6">Dê o próximo passo</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Pronto para ver<br />como funciona?
            </h2>
            <p className="text-[#94A3B8] text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              Agende uma demonstração gratuita e veja o GR9 Loja funcionando na prática, sem compromisso.
            </p>
            <Link
              href="/erp#contato"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-500/30 text-base"
            >
              Quero uma demonstração gratuita
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FORMULÁRIO DE CONTATO */}
      <section id="contato" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4 block">Fale conosco</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#1D1D1F] mb-4">Entre em contato</h2>
                <p className="text-[#6E6E73] text-lg">
                  Tire suas dúvidas ou agende uma demonstração. Nossa equipe responde em até 1 dia útil.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white border border-[#E5E5EA] rounded-3xl p-8 md:p-10 shadow-sm">
                <LeadForm source="home" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
