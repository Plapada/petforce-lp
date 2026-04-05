# Project Progress

## Goal
Landing page cinematográfica para PetForce — agência de marketing digital 100% nichada no mercado pet. Foco em conversão via WhatsApp.

## Status
In Progress

## Completed
- [x] Inicializar projeto Next.js 15 + Tailwind v4 + Framer Motion + Lenis
- [x] Configurar layout com fonts Sora + Outfit, tema dark, CSS global
- [x] Preloader cinematográfico com progress bar + clip-path wipe exit
- [x] Navbar glassmorphism com pill transform on scroll + menu mobile
- [x] Hero section com headline impactante + CTA WhatsApp + gradientes
- [x] Marquee infinito com todos os serviços (3x duplicação + GPU)
- [x] Seção Sobre/Por que PetForce com 4 cards double-bezel + parallax
- [x] Seção Serviços com 6 cards double-bezel + ícones + tags
- [x] Seção Método (3 steps) com sticky scroll + scroll-linked animations
- [x] Seção Stats com count-up numbers (easeOutExpo + IntersectionObserver)
- [x] CTA final com gradientes + botão WhatsApp grande
- [x] Footer com links, social, contato
- [x] Custom Cursor com lerp interpolation + contextual states
- [x] Botão WhatsApp flutuante com pulse
- [x] Build compilando com sucesso

## In Progress
- [ ] Testar no browser e ajustar detalhes visuais
- [ ] Substituir número do WhatsApp pelo real do cliente

## Pending
- [ ] Adicionar imagens/assets reais da marca (aguardando PDF de branding)
- [ ] Adicionar seção de depoimentos/social proof
- [ ] Adicionar seção FAQ
- [ ] SEO avançado (structured data, sitemap)
- [ ] Otimizações de performance (lazy loading, image optimization)
- [ ] Deployar na Vercel

## Decisions Made
- **Stack**: Next.js 15 App Router + Tailwind v4 + Framer Motion + Lenis
- **Estilo**: Dark premium (inspirado em schauundhorch.de) — #0A0A0A base + gradient verde neon
- **Fonts**: Sora (headlines) + Outfit (body) — ambas premium, não-banidas
- **Dials**: Todos em 8 (cinematic) — preloader, custom cursor, sticky scroll, marquee
- **Conversão**: Todo CTA leva para WhatsApp
- **Referência**: schauundhorch.de (Next.js, dark theme, Sora font, sticky sections, glassmorphism)

## Known Issues / Blockers
- Número do WhatsApp está placeholder (5500000000000) — precisa do número real
- Aguardando PDF de branding para extrair assets (logo, cores exatas)
- Instagram não acessível sem login (Firecrawl bloqueado, Playwright requer auth)

## Resume From Here
O site está funcional com build passando. Próximos passos:
1. Receber o PDF de branding e extrair logo/assets
2. Substituir número do WhatsApp
3. Testar no browser e fazer ajustes visuais finos
4. Considerar adicionar seções extras (depoimentos, FAQ)
5. Deploy na Vercel
