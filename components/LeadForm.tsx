'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { leadSchema, LeadFormData, maskPhone } from '@/lib/validations'

interface LeadFormProps {
  showSegmento?: boolean
  source?: string
  empresaLabel?: string
}

export default function LeadForm({ showSegmento = false, source = 'site', empresaLabel = 'Nome da empresa' }: LeadFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  })

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskPhone(e.target.value)
    setValue('telefone', masked, { shouldValidate: true })
  }

  const onSubmit = async (data: LeadFormData) => {
    setIsLoading(true)
    setError('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Erro ao enviar')
      router.push('/obrigado')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass =
    'w-full bg-white border border-[#D2D2D7] rounded-xl px-4 py-3 text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200 text-sm'
  const labelClass = 'block text-sm font-medium text-[#1D1D1F] mb-1.5'
  const errorClass = 'text-red-500 text-xs mt-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nome" className={labelClass}>Nome completo *</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            className={inputClass}
            {...register('nome')}
            aria-describedby={errors.nome ? 'nome-error' : undefined}
          />
          {errors.nome && <p id="nome-error" className={errorClass}>{errors.nome.message}</p>}
        </div>

        <div>
          <label htmlFor="empresa" className={labelClass}>{empresaLabel} *</label>
          <input
            id="empresa"
            type="text"
            placeholder="Sua empresa"
            className={inputClass}
            {...register('empresa')}
            aria-describedby={errors.empresa ? 'empresa-error' : undefined}
          />
          {errors.empresa && <p id="empresa-error" className={errorClass}>{errors.empresa.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>E-mail corporativo *</label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com.br"
            className={inputClass}
            {...register('email')}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="telefone" className={labelClass}>WhatsApp *</label>
          <input
            id="telefone"
            type="tel"
            placeholder="(11) 99999-9999"
            className={inputClass}
            value={watch('telefone') || ''}
            onChange={handlePhoneChange}
            aria-describedby={errors.telefone ? 'telefone-error' : undefined}
          />
          {errors.telefone && <p id="telefone-error" className={errorClass}>{errors.telefone.message}</p>}
        </div>
      </div>

      {showSegmento && (
        <div>
          <label htmlFor="segmento" className={labelClass}>Segmento</label>
          <select
            id="segmento"
            className={`${inputClass} cursor-pointer`}
            {...register('segmento')}
          >
            <option value="">Selecione seu segmento</option>
            <option value="Confecção">Confecção</option>
            <option value="Distribuidora">Distribuidora</option>
            <option value="Atacado">Atacado</option>
            <option value="Varejo Têxtil">Varejo Têxtil</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="mensagem" className={labelClass}>Mensagem (opcional)</label>
        <textarea
          id="mensagem"
          rows={4}
          placeholder="Conte um pouco sobre sua empresa e o que busca em um sistema de gestão..."
          className={`${inputClass} resize-none`}
          {...register('mensagem')}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#F59E0B] hover:bg-[#D97706] disabled:bg-[#F59E0B]/50 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
        aria-label="Enviar formulário e solicitar demonstração"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Quero minha demonstração gratuita →
          </>
        )}
      </button>

      <p className="text-center text-[#86868B] text-xs">
        Sem compromisso. Nossa equipe entrará em contato em até 1 dia útil.
      </p>
    </form>
  )
}
