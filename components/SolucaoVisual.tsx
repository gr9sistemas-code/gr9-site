'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function SolucaoVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springConfig = { stiffness: 120, damping: 18 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)
  const rotateX = useTransform(y, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(x, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[440px] md:h-[520px]"
      style={{ perspective: '1100px' }}
    >
      {/* Glow decorativo atrás */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-[#F59E0B]/8 rounded-full blur-2xl pointer-events-none" />

      {/* Imagem de fundo */}
      <motion.div
        className="absolute top-6 right-0 w-[84%] rounded-2xl overflow-hidden shadow-lg border border-[#E5E5EA]"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', rotate: '2deg' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-10 rounded-2xl" />
        <img
          src="/solucao-2.png.png"
          alt="GR9 Loja — tela do sistema"
          className="w-full h-auto block opacity-75"
        />
      </motion.div>

      {/* Imagem principal */}
      <motion.div
        className="absolute bottom-0 left-0 w-[84%] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E5EA]"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', rotate: '-1.5deg' }}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      >
        {/* Reflexo superior */}
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/8 to-transparent pointer-events-none z-10" />

        {/* Shimmer */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(110deg, transparent 38%, rgba(255,255,255,0.1) 50%, transparent 62%)',
          }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
        />

        <img
          src="/solucao-1.png.png"
          alt="GR9 Loja em operação"
          className="w-full h-auto block"
        />
      </motion.div>

      {/* Badge — sistema ao vivo */}
      <motion.div
        className="absolute top-2 left-2 bg-white border border-[#E5E5EA] rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg z-20"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        <span className="text-[#1D1D1F] text-xs font-semibold">Sistema ao vivo</span>
      </motion.div>

      {/* Badge — multi-loja */}
      <motion.div
        className="absolute bottom-6 right-2 bg-white border border-[#E5E5EA] rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg z-20"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <svg className="w-3.5 h-3.5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>
        <span className="text-[#1D1D1F] text-xs font-semibold">Multi-loja integrado</span>
      </motion.div>
    </div>
  )
}
