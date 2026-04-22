'use client'

import Image from 'next/image'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function ERPScreenshot() {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 20 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  const rotateX = useTransform(y, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(x, [-0.5, 0.5], ['-6deg', '6deg'])

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
      className="relative"
      style={{ perspective: '1200px' }}
      aria-hidden="true"
    >
      {/* Sombra externa suave */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#2563EB]/10 to-[#F59E0B]/5 blur-2xl pointer-events-none" />

      {/* Flutuação vertical suave */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Inclinação 3D pelo mouse */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1D1D1F]/15 border border-[#E5E5EA]"
        >
          {/* Reflexo superior sutil */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10 rounded-t-2xl"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Barra de título */}
          <div className="bg-[#0D1F3C] flex items-center gap-2 px-4 py-2.5 border-b border-[#1F3A5F]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-[#4B7BA8] text-xs font-mono">GR9 ERP · Gestão de Estoque</span>
          </div>

          {/* Screenshot real */}
          <div className="relative">
            <Image
              src="/erp-screenshot.png"
              alt="Interface do GR9 ERP — Tela de Gestão de Estoque"
              width={680}
              height={460}
              className="w-full h-auto block"
              priority
            />

            {/* Shimmer animado */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
              }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Badge flutuante — ao vivo */}
      <motion.div
        className="absolute -top-3 -right-3 bg-white border border-[#E5E5EA] rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg z-20"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-[#1D1D1F] text-xs font-medium">Sistema ao vivo</span>
      </motion.div>

      {/* Badge flutuante — estoque */}
      <motion.div
        className="absolute -bottom-3 -left-3 bg-white border border-[#E5E5EA] rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg z-20"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <span className="text-[#F59E0B] text-xs">📦</span>
        <span className="text-[#1D1D1F] text-xs font-medium">Estoque em tempo real</span>
      </motion.div>
    </div>
  )
}
