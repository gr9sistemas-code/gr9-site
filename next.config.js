/** @type {import('next').NextConfig} */

/*
 * DEPLOY MODE:
 *
 * Opção A — Export estático (FTP/Locaweb):
 *   Descomente `output: 'export'` abaixo.
 *   Neste modo, a API Route /api/leads NÃO funcionará localmente.
 *   Você precisará hospedar a API em um serviço separado (ex: Vercel, Render)
 *   e configurar NEXT_PUBLIC_API_URL apontando para ela.
 *
 * Opção B — Node.js / Vercel (recomendado com Pipedrive):
 *   Mantenha `output: 'export'` comentado.
 *   A API Route /api/leads funcionará normalmente no mesmo servidor.
 *   Para Locaweb com Node.js, use o plano de hospedagem Node da Locaweb.
 */
const nextConfig = {
  // output: 'export', // Descomente para gerar site estático (Opção A)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
