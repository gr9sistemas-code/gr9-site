'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E5E5EA] shadow-sm'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="GR9 Sistemas - Página Inicial">
            <Image
              src="/logo-original.png"
              alt="GR9 Sistemas Inteligentes"
              width={160}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            <Link
              href="/"
              className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200 font-medium text-sm"
            >
              A Empresa
            </Link>
            <Link
              href="/erp"
              className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200 font-medium text-sm"
            >
              ERP Têxtil
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/erp#contato"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 text-sm shadow-sm shadow-amber-500/20"
              aria-label="Agendar demonstração gratuita do ERP"
            >
              Agendar Demonstração
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#F5F5F7] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-[#1D1D1F] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1D1D1F] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1D1D1F] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-[#E5E5EA]`}
      >
        <nav className="px-4 py-4 flex flex-col gap-4" aria-label="Navegação mobile">
          <Link
            href="/"
            className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200 font-medium py-2 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            A Empresa
          </Link>
          <Link
            href="/erp"
            className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200 font-medium py-2 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            ERP Têxtil
          </Link>
          <Link
            href="/erp#contato"
            className="inline-flex items-center justify-center bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-5 py-3 rounded-full transition-colors duration-200 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Agendar Demonstração
          </Link>
        </nav>
      </div>
    </header>
  )
}
