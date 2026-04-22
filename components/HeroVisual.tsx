'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const cards: { icon: ReactNode; title: string; sub: string; delay: number; y: number }[] = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Controle de Estoque',
    sub: 'Por peça, quilo ou metro',
    delay: 0,
    y: -7,
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Romaneios em PDF',
    sub: 'Gerados na hora',
    delay: 0.5,
    y: 7,
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'ABC de Clientes',
    sub: 'Saiba quem mais compra',
    delay: 1,
    y: -5,
  },
]

export default function HeroVisual() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-5 py-12 min-h-[360px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#EEF2FF]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="text-[180px] font-black text-[#BFDBFE]/50 leading-none">30</span>
      </div>

      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          className={`relative bg-white border border-[#E5E5EA] rounded-2xl px-5 py-3.5 shadow-lg flex items-center gap-3 w-72 ${
            i === 1 ? 'self-end mr-4' : i === 2 ? 'self-start ml-4' : 'self-start ml-10'
          }`}
          animate={{ y: [0, card.y, 0] }}
          transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
        >
          <div className="w-8 h-8 bg-[#EEF2FF] rounded-lg flex items-center justify-center text-[#2563EB] flex-shrink-0">
            {card.icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1D1D1F]">{card.title}</p>
            <p className="text-xs text-[#6E6E73]">{card.sub}</p>
          </div>
          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
        </motion.div>
      ))}
    </div>
  )
}
