"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Tráfego Pago",
    description: "Campanhas no Google e Meta Ads otimizadas para o mercado pet. Cada real investido vira resultado mensurável.",
    details: "Criamos campanhas segmentadas para tutores de pets na sua região. Desde a pesquisa de palavras-chave até a otimização de lances, monitoramos cada centavo. Retargeting inteligente, audiências lookalike e criativos testados A/B para maximizar suas conversões.",
    tags: ["Google Ads", "Meta Ads", "Performance"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Landing Pages",
    description: "Páginas de alta conversão que transformam visitantes em agendamentos. Design premium focado em resultados.",
    details: "Landing pages construídas com copywriting persuasivo, formulários estratégicos e CTAs otimizados. Cada elemento é posicionado para guiar o visitante até o agendamento. Testes A/B contínuos para melhorar taxa de conversão.",
    tags: ["Conversão", "Design", "SEO"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Gestão de Redes Sociais",
    description: "Conteúdo estratégico que conecta sua marca ao tutor pet. Posts, stories e reels que engajam e convertem.",
    details: "Calendário editorial personalizado, produção de conteúdo educativo e promocional, gestão de comunidade e respostas. Monitoramento de métricas e relatórios mensais com insights acionáveis para crescimento orgânico.",
    tags: ["Instagram", "Conteúdo", "Engajamento"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: "PromoClips & Reels de Impacto",
    description: "Vídeos curtos e promocionais que param o scroll. Roteiro, gravação e edição pensados para o universo pet.",
    details: "Produção completa de vídeos verticais otimizados para Instagram Reels e TikTok. Roteiros que contam histórias, edição dinâmica com motion graphics e legendas. Conteúdo que viraliza e gera autoridade para sua marca.",
    tags: ["Vídeo", "Reels", "Viral"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Google Meu Negócio",
    description: "Otimização completa do seu perfil para aparecer nas buscas locais. Avaliações, fotos e informações estratégicas.",
    details: "Perfil otimizado com fotos profissionais, descrição estratégica e categorias corretas. Gestão ativa de avaliações, publicações regulares e otimização de keywords locais para dominar as buscas na sua região.",
    tags: ["SEO Local", "Google Maps", "Reviews"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Identidade Visual & Sites",
    description: "Marca profissional que transmite confiança. Logotipo, papelaria, sites institucionais e e-commerce completo.",
    details: "Criação de identidade visual completa: logo, tipografia, paleta de cores, manual de marca. Sites responsivos com foco em UX, SEO e velocidade. E-commerce com catálogo de produtos, carrinho e checkout integrado.",
    tags: ["Branding", "Web", "E-commerce"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: index * 0.08,
      }}
      data-cursor="hover"
    >
      {/* Double-bezel */}
      <div className="bg-white/[0.03] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem] h-full group">
        <div
          className="bg-dark-surface rounded-[calc(2rem-0.375rem)] p-8 md:p-9 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] hover:bg-dark-card transition-colors flex flex-col cursor-pointer"
          style={{ transitionDuration: "500ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setIsOpen(!isOpen); }}
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-accent-2 group-hover:border-accent-2/30 transition-colors" style={{ transitionDuration: "500ms" }}>
            {service.icon}
          </div>

          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-sora text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors" style={{ transitionDuration: "300ms" }}>
              {service.title}
            </h3>
            <motion.span
              className="mt-1 text-white/20 shrink-0"
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="8" y1="3" x2="8" y2="13" />
                <line x1="3" y1="8" x2="13" y2="8" />
              </svg>
            </motion.span>
          </div>

          <p className="text-white/40 font-light leading-relaxed text-[15px] mb-4">
            {service.description}
          </p>

          {/* Expandable details */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-2 border-t border-white/5">
                  <p className="text-white/30 font-light leading-relaxed text-sm">
                    {service.details}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-bold text-white/25 border border-white/[0.06] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-40 px-4 md:px-8">
      {/* Ambient glow */}
      <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-accent-1/3 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <span className="gradient-text-animated text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] font-sora mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-sora text-[clamp(2rem,5vw,4.5rem)] font-normal leading-[0.95] tracking-[-0.03em] mb-6">
            Tudo que seu negócio pet{" "}
            <span className="gradient-text">precisa para crescer.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed">
            Do primeiro clique ao agendamento. Cuidamos de toda a sua presença digital com
            estratégias feitas sob medida para o mercado pet.
          </p>
        </motion.div>

        {/* Mobile: flatlay image above cards */}
        <motion.div
          className="lg:hidden mb-8 max-w-xs mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <div className="bg-white/[0.03] ring-1 ring-white/[0.06] p-1 rounded-[1.5rem]">
            <div className="relative rounded-[calc(1.5rem-0.25rem)] overflow-hidden">
              <Image
                src="/services-flatlay.png"
                alt="Marketing digital — ferramentas e estratégias para o mercado pet"
                width={320}
                height={320}
                className="w-full h-auto aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Desktop: sticky sidebar + cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
          {/* Sticky sidebar image — desktop only */}
          <motion.div
            className="hidden lg:block sticky top-28"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <div className="bg-white/[0.03] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem]">
              <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden">
                <Image
                  src="/services-flatlay.png"
                  alt="Marketing digital — ferramentas e estratégias para o mercado pet"
                  width={280}
                  height={280}
                  className="w-full h-auto aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
