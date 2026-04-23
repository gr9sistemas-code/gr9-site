import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import LeadForm from '@/components/LeadForm'
import FAQAccordion from '@/components/FAQAccordion'
import ERPScreenshot from '@/components/ERPScreenshot'
import SolucaoVisual from '@/components/SolucaoVisual'

export const metadata: Metadata = {
  title: 'GR9 Loja | ERP para Atacado Têxtil',
  description:
    'O GR9 Loja é um sistema de gestão desenvolvido especificamente para atacadistas do setor têxtil. Controle de estoque, romaneios, transferência entre lojas e muito mais.',
}

const dores = [
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" /></svg>,
    titulo: 'Sistema genérico demais',
    descricao: 'Paga caro por um ERP cheio de módulos que não têm nada a ver com atacado têxtil. Funcionalidades que nunca abre, complexidade que só atrapalha.',
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 19.5m9.75-9.75c0 .621-.504 1.125-1.125 1.125H12m8.625-9.75c.621 0 1.125.504 1.125 1.125M21 12v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125-.504-1.125-1.125v-1.5m0 0c0-.621.504-1.125 1.125-1.125M3.375 4.5h15a2.25 2.25 0 012.25 2.25v.75m-18.75 0h18.75" /></svg>,
    titulo: 'Planilha que não escala',
    descricao: 'Controla o estoque no Excel, mas na hora do movimento a coisa desanda. Saldo errado, retrabalho e cliente esperando.',
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
    titulo: 'Não sabe o que tem em estoque',
    descricao: 'Dificuldade de saber exatamente quanto tem de cada tecido, em qual loja. Decisão no chute e o prejuízo aparece depois.',
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
    titulo: 'Romaneio na mão',
    descricao: 'Monta a venda sem ter um sistema que organize, calcule e gere o relatório automaticamente. Tempo perdido e margem para erro em todo pedido.',
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
    titulo: 'Sem visão dos clientes',
    descricao: 'Não sabe quem compra mais, o que mais sai e onde está o dinheiro da operação. Gestão no escuro.',
  },
  {
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
    titulo: 'Transferência entre lojas vira confusão',
    descricao: 'Quando o estoque está em mais de um ponto, o controle escapa. Cada loja no seu mundo, sem integração real.',
  },
]

const funcionalidades = [
  {
    wide: true,
    bg: 'bg-[#EEF2FF]',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    titulo: 'Gestão de Estoque por Peça, Quilo ou Metro',
    descricao: 'Cadastre e controle seus tecidos da forma que sua operação trabalha. O sistema se adapta à unidade que você usa, não o contrário.',
  },
  {
    wide: false,
    bg: 'bg-white',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    titulo: 'Romaneios de Venda',
    descricao: 'Emita um PDF com tudo que saiu na hora.',
  },
  {
    wide: false,
    bg: 'bg-white',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    titulo: 'Transferência entre Lojas',
    descricao: 'Cada loja com seu saldo, tudo integrado.',
  },
  {
    wide: false,
    bg: 'bg-[#FFFBEB]',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      </svg>
    ),
    titulo: 'Etiquetas de Tecido',
    descricao: 'Identificação rápida dos produtos no estoque.',
  },
  {
    wide: true,
    bg: 'bg-[#F5F5F7]',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
    titulo: 'Entrada de Mercadoria',
    descricao: 'Registre entradas rapidamente e mantenha o estoque sempre atualizado. Sem lançamentos duplicados, sem perda de histórico.',
  },
  {
    wide: false,
    bg: 'bg-white',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    titulo: 'ABC de Clientes',
    descricao: 'Saiba quem são seus maiores compradores.',
  },
  {
    wide: false,
    bg: 'bg-white',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    titulo: 'Faturamento Mensal',
    descricao: 'Volume de vendas mês a mês, de forma clara.',
  },
]

const diferenciais = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" /></svg>,
    titulo: 'Mais de 30 anos no mercado',
    descricao: 'A GR9 existe há mais de três décadas desenvolvendo tecnologia. Não somos uma startup que descobriu o setor têxtil ontem. Entendemos a operação de dentro.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>,
    titulo: 'Feito sob medida',
    descricao: 'Não adaptamos um sistema genérico. Construímos uma solução pensando especificamente em quem vende tecido no atacado.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
    titulo: 'Suporte humano de verdade',
    descricao: 'Quando você tem dúvida, fala com uma pessoa. Sem chatbot, sem fila de ticket. A gente está junto na operação.',
  },
]

const passos = [
  {
    numero: '01',
    titulo: 'Demonstração gratuita',
    descricao: 'Você conhece o sistema sem compromisso e vê se faz sentido para a sua operação.',
  },
  {
    numero: '02',
    titulo: 'Implantação guiada',
    descricao: 'Nossa equipe configura tudo de acordo com a realidade da sua loja: estoque, produtos, usuários.',
  },
  {
    numero: '03',
    titulo: 'Operação com suporte',
    descricao: 'Você começa a usar com a segurança de ter alguém próximo para ajudar sempre que precisar.',
  },
]

const faqs = [
  {
    pergunta: 'O sistema funciona em mais de um computador na loja?',
    resposta: 'Sim. O GR9 Loja é acessado pelo navegador e funciona em rede local. Todos os computadores da loja acessam ao mesmo tempo.',
  },
  {
    pergunta: 'Funciona para loja com mais de um ponto de venda?',
    resposta: 'Sim. Você consegue controlar o estoque de cada loja separadamente e fazer transferências entre elas.',
  },
  {
    pergunta: 'Como funciona a implantação?',
    resposta: 'A nossa equipe configura o sistema para a realidade da sua operação. Você não precisa se preocupar com a parte técnica.',
  },
  {
    pergunta: 'Qual é o custo?',
    resposta: 'O modelo é taxa de implantação + licença de uso. Os valores são definidos de acordo com a operação. Entre em contato para receber uma proposta.',
  },
  {
    pergunta: 'O sistema é difícil de usar?',
    resposta: 'Foi feito para ser simples. A equipe da loja aprende rápido. O objetivo é que o sistema ajude, não complique.',
  },
]

export default function ErpPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-amber-50/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection delay={0}>
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-600 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" aria-hidden="true" />
                  ERP especializado para o atacado têxtil
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#1D1D1F] leading-[0.95] mb-8">
                  O ERP feito<br />para quem<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]">
                    vende tecido
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-lg text-[#6E6E73] leading-relaxed mb-10 max-w-md">
                  Chega de sistema genérico cheio de funções que você nunca usa. O GR9 Loja foi pensado para a realidade de quem vende rolo de tecido.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3 mb-14">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-500/20 text-sm"
                  >
                    Quero conhecer o sistema
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#funcionalidades"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5F5F7] border border-[#D2D2D7] text-[#1D1D1F] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
                  >
                    Ver funcionalidades
                  </a>
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
                    <p className="text-3xl font-black text-[#1D1D1F]">Têxtil</p>
                    <p className="text-xs text-[#6E6E73] mt-0.5 font-medium uppercase tracking-wide">100% especializado</p>
                  </div>
                  <div className="w-px h-10 bg-[#E5E5EA]" />
                  <div>
                    <p className="text-3xl font-black text-[#1D1D1F]">Humano</p>
                    <p className="text-xs text-[#6E6E73] mt-0.5 font-medium uppercase tracking-wide">suporte direto</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} direction="right">
              <ERPScreenshot />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DORES */}
      <section className="py-32 bg-white border-t border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-4 block">Reconhece isso?</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1D1F] leading-tight mb-6">
                Esses problemas<br />
                <span className="text-[#F59E0B]">te parecem</span><br />
                familiares?
              </h2>
              <p className="text-[#6E6E73] text-lg leading-relaxed mb-8">
                Se respondeu sim para um ou mais, sua operação está deixando dinheiro na mesa. A solução é mais simples do que parece.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-[#F59E0B] font-bold hover:gap-3 transition-all duration-200 group"
              >
                Quero resolver isso
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </AnimatedSection>

            <div className="divide-y divide-[#F0F0F0]">
              {dores.map((dor, i) => (
                <AnimatedSection key={dor.titulo} delay={i * 0.06}>
                  <div className="py-6 first:pt-0 last:pb-0 flex gap-4 group">
                    <div className="w-9 h-9 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5">{dor.icon}</div>
                    <div>
                      <h3 className="text-[#1D1D1F] font-semibold mb-1 text-sm">{dor.titulo}</h3>
                      <p className="text-[#6E6E73] text-sm leading-relaxed">{dor.descricao}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-32 bg-[#F5F5F7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4 block">A solução</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1D1F] leading-tight mb-6">
                Um sistema ajustado<br />à sua{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">operação</span>
              </h2>
              <p className="text-[#6E6E73] text-lg leading-relaxed mb-4">
                Na GR9, a gente não acredita em sistema de tamanho único. Lojas de atacado têxtil têm uma linguagem própria: rolo, quilo, metro, romaneio, grade de tecido. Por isso desenvolvemos o GR9 Loja, um sistema que fala a sua língua e funciona de verdade no dia a dia.
              </p>
              <p className="text-[#6E6E73] leading-relaxed mb-8">
                Nada de módulos que você nunca abre. Acessa pelo navegador, qualquer computador da loja, e já está funcionando.
              </p>
              <div className="flex flex-col gap-3">
                {['Controle por peça, quilo ou metro', 'Romaneios de venda em PDF', 'Transferência entre lojas integrada', 'ABC de clientes e produtos'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#EEF2FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#1D1D1F] text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <SolucaoVisual />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES — BENTO GRID */}
      <section id="funcionalidades" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-16">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4 block">Módulos</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1D1F] mb-4">
                O que o GR9 Loja<br />faz pela sua operação
              </h2>
              <p className="text-[#6E6E73] text-lg max-w-lg">
                Cada funcionalidade foi pensada para a realidade do atacado têxtil. Sem excessos, sem falta.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Row 1: wide + small */}
            {funcionalidades.slice(0, 2).map((f, i) => (
              <AnimatedSection
                key={f.titulo}
                delay={i * 0.08}
                className={i === 0 ? 'md:col-span-2' : ''}
              >
                <div className={`${f.bg} border border-[#E5E5EA] rounded-3xl p-7 h-full hover:shadow-md transition-all duration-200 hover:scale-[1.01] ${i === 0 ? 'flex gap-6 items-start' : 'flex flex-col'}`}>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2563EB] shadow-sm flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-[#1D1D1F] font-bold text-lg mb-2">{f.titulo}</h3>
                    <p className="text-[#6E6E73] leading-relaxed text-sm">{f.descricao}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Row 2: small + wide */}
            {funcionalidades.slice(2, 5).map((f, i) => (
              <AnimatedSection
                key={f.titulo}
                delay={(i + 2) * 0.08}
                className={i === 2 ? 'md:col-span-2' : ''}
              >
                <div className={`${f.bg} border border-[#E5E5EA] rounded-3xl p-7 h-full hover:shadow-md transition-all duration-200 hover:scale-[1.01] ${i === 2 ? 'flex gap-6 items-start' : 'flex flex-col'}`}>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2563EB] shadow-sm flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-[#1D1D1F] font-bold text-lg mb-2">{f.titulo}</h3>
                    <p className="text-[#6E6E73] leading-relaxed text-sm">{f.descricao}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Row 3: equal */}
            {funcionalidades.slice(5, 7).map((f, i) => (
              <AnimatedSection key={f.titulo} delay={(i + 5) * 0.08}>
                <div className={`${f.bg} border border-[#E5E5EA] rounded-3xl p-7 h-full flex flex-col hover:shadow-md transition-all duration-200 hover:scale-[1.01]`}>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2563EB] shadow-sm mb-4">
                    {f.icon}
                  </div>
                  <h3 className="text-[#1D1D1F] font-bold text-lg mb-2">{f.titulo}</h3>
                  <p className="text-[#6E6E73] leading-relaxed text-sm">{f.descricao}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE ESCOLHER A GR9 */}
      <section className="py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4 block">Diferenciais</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1D1F]">
                Por que as lojas escolhem a GR9
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5EA] bg-white border border-[#E5E5EA] rounded-3xl overflow-hidden shadow-sm">
            {diferenciais.map((d, i) => (
              <AnimatedSection key={d.titulo} delay={i * 0.1}>
                <div className="p-10">
                  <div className="w-12 h-12 bg-[#EEF2FF] rounded-2xl flex items-center justify-center text-[#2563EB] mb-5">{d.icon}</div>
                  <h3 className="text-[#1D1D1F] font-bold text-xl mb-3">{d.titulo}</h3>
                  <p className="text-[#6E6E73] leading-relaxed text-sm">{d.descricao}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-32 bg-white border-t border-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4 block">Processo</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1D1F]">
                Da contratação à operação<br />em 3 passos
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-9 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-[#E5E5EA]" aria-hidden="true" />
            {passos.map((passo, i) => (
              <AnimatedSection key={passo.titulo} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-[72px] h-[72px] bg-[#2563EB] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 z-10 relative">
                    <span className="text-white font-black text-xl">{passo.numero}</span>
                  </div>
                  <h3 className="text-[#1D1D1F] font-bold text-xl mb-3">{passo.titulo}</h3>
                  <p className="text-[#6E6E73] leading-relaxed text-sm max-w-xs">{passo.descricao}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="py-32 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-6">Vamos conversar?</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Pronto para organizar<br />sua operação?
            </h2>
            <p className="text-[#94A3B8] text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              Agende uma demonstração gratuita. Sem compromisso, sem chatbot — fala com uma pessoa real.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-500/30 text-base"
            >
              Quero uma demonstração gratuita
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4 block">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1D1F]">Dúvidas frequentes</h2>
            </div>
          </AnimatedSection>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="contato" className="py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-4 block">Solicite agora</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1D1D1F] mb-4">
                Solicite sua<br />demonstração
              </h2>
              <p className="text-[#6E6E73] text-lg leading-relaxed mb-10">
                Fale com a gente. Nossa equipe responde em até 1 dia útil.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>, texto: 'Demonstração gratuita, sem compromisso' },
                  { icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m5.833-4.329c.56-.694.96-1.487 1.128-2.326a6.7 6.7 0 00.112-1.224V4.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5c0 .422-.034.836-.112 1.224a6.718 6.718 0 01-1.128 2.326m-7.126 3.246l.083-.083" /></svg>, texto: 'Implantação guiada pela equipe GR9' },
                  { icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>, texto: 'Suporte humano, sem chatbot' },
                  { icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>, texto: 'Sistema feito sob medida para o têxtil' },
                ].map((item) => (
                  <div key={item.texto} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EEF2FF] rounded-lg flex items-center justify-center text-[#2563EB] flex-shrink-0">{item.icon}</div>
                    <span className="text-[#6E6E73] text-sm">{item.texto}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} direction="right">
              <div className="bg-white border border-[#E5E5EA] rounded-3xl p-8 md:p-10 shadow-sm">
                <h3 className="text-[#1D1D1F] font-bold text-xl mb-6">Solicite sua demonstração gratuita</h3>
                <LeadForm showSegmento={false} source="erp" empresaLabel="Nome da loja" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
