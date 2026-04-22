export default function ERPMockup() {
  return (
    <div className="relative select-none" aria-hidden="true">
      {/* Brilho externo */}
      <div className="absolute -inset-1 bg-gradient-to-br from-[#2563EB]/20 to-[#1A5F82]/10 rounded-3xl blur-xl" />

      {/* Janela do app */}
      <div className="relative bg-[#0D1428] border border-[#2563EB]/25 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30">

        {/* Barra de título */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111827] border-b border-[#1F2937]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-3 text-[#4B5563] text-xs font-mono">GR9 ERP · Dashboard Principal</span>
        </div>

        <div className="flex" style={{ minHeight: '320px' }}>
          {/* Sidebar */}
          <div className="w-10 bg-[#0A0F1E] border-r border-[#1F2937] flex flex-col items-center gap-3 pt-3 pb-3">
            {[
              'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
              'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
              'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
              'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
            ].map((path, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${i === 0 ? 'bg-[#2563EB]/20' : 'hover:bg-white/5'}`}
              >
                <svg className={`w-3.5 h-3.5 ${i === 0 ? 'text-[#3B82F6]' : 'text-[#4B5563]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                </svg>
              </div>
            ))}
          </div>

          {/* Conteúdo principal */}
          <div className="flex-1 p-3 overflow-hidden">
            {/* Título da página */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[#F9FAFB] text-xs font-semibold">Dashboard</p>
                <p className="text-[#4B5563] text-[10px]">Resumo do dia · Atualizado agora</p>
              </div>
              <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-full px-2 py-0.5 text-[#F59E0B] text-[9px] font-semibold">
                ● Ao vivo
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { label: 'Vendas Hoje', value: 'R$ 18.420', delta: '+12%', color: 'text-green-400' },
                { label: 'Pedidos Abertos', value: '34', delta: '8 urgentes', color: 'text-amber-400' },
                { label: 'Estoque (m²)', value: '4.821', delta: 'atualizado', color: 'text-blue-400' },
                { label: 'NF-e Emitidas', value: '17', delta: 'hoje', color: 'text-purple-400' },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-[#111827] border border-[#1F2937] rounded-xl p-2">
                  <p className="text-[#6B7280] text-[8px] mb-0.5">{kpi.label}</p>
                  <p className="text-[#F9FAFB] text-xs font-bold">{kpi.value}</p>
                  <p className={`text-[8px] ${kpi.color}`}>{kpi.delta}</p>
                </div>
              ))}
            </div>

            {/* Gráfico de barras + mini tabela */}
            <div className="grid grid-cols-5 gap-2">
              {/* Gráfico */}
              <div className="col-span-3 bg-[#111827] border border-[#1F2937] rounded-xl p-2.5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[#9CA3AF] text-[9px] font-semibold">Vendas por semana (R$)</p>
                  <div className="flex gap-1">
                    {['1S','2S','3S','4S'].map(l => (
                      <span key={l} className="text-[8px] text-[#4B5563]">{l}</span>
                    ))}
                  </div>
                </div>
                {/* Barras */}
                <div className="flex items-end gap-1.5 h-20">
                  {[55, 72, 48, 88, 64, 91, 76].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                      <div
                        className="w-full rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 5
                            ? 'linear-gradient(to top, #2563EB, #3B82F6)'
                            : i === 6
                            ? 'linear-gradient(to top, #1D4ED8, #2563EB)'
                            : 'rgba(37,99,235,0.25)',
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  {['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map(d => (
                    <span key={d} className="text-[7px] text-[#4B5563]">{d}</span>
                  ))}
                </div>
              </div>

              {/* Mini lista de estoque */}
              <div className="col-span-2 bg-[#111827] border border-[#1F2937] rounded-xl p-2.5">
                <p className="text-[#9CA3AF] text-[9px] font-semibold mb-2">Estoque Crítico</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    { nome: 'Malha PV 30/1', qtd: '42m', status: 'baixo' },
                    { nome: 'Viscose Lisa', qtd: '18m', status: 'critico' },
                    { nome: 'Dry Fit Azul', qtd: '96m', status: 'ok' },
                    { nome: 'Renda Guipir', qtd: '8m', status: 'critico' },
                  ].map((item) => (
                    <div key={item.nome} className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'critico' ? 'bg-red-400' : item.status === 'baixo' ? 'bg-amber-400' : 'bg-green-400'}`} />
                        <span className="text-[#D1D5DB] text-[8px]">{item.nome}</span>
                      </div>
                      <span className={`text-[8px] font-semibold ${item.status === 'critico' ? 'text-red-400' : item.status === 'baixo' ? 'text-amber-400' : 'text-green-400'}`}>
                        {item.qtd}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Última linha: pedidos recentes */}
            <div className="mt-2 bg-[#111827] border border-[#1F2937] rounded-xl p-2.5">
              <p className="text-[#9CA3AF] text-[9px] font-semibold mb-1.5">Pedidos Recentes</p>
              <div className="flex flex-col gap-1">
                {[
                  { id: '#4821', cliente: 'Moda Sul Confecções', valor: 'R$ 3.240', status: 'Faturado', cor: 'text-green-400 bg-green-400/10' },
                  { id: '#4820', cliente: 'Têxtil Norte Ltda', valor: 'R$ 1.890', status: 'Em Separação', cor: 'text-amber-400 bg-amber-400/10' },
                  { id: '#4819', cliente: 'Uniflex Vestuário', valor: 'R$ 5.620', status: 'Aguardando', cor: 'text-blue-400 bg-blue-400/10' },
                ].map((p) => (
                  <div key={p.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#4B5563] text-[8px] font-mono">{p.id}</span>
                      <span className="text-[#D1D5DB] text-[8px]">{p.cliente}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#F9FAFB] text-[8px] font-semibold">{p.valor}</span>
                      <span className={`text-[7px] font-semibold px-1.5 py-0.5 rounded-full ${p.cor}`}>{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
