"use client";

import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20PetForce%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-5 md:px-8 overflow-hidden pt-24 pb-12 md:pt-0 md:pb-0">
      {/* Noise */}
      <div className="absolute -top-[20rem] -left-[20rem] w-[calc(100%+40rem)] h-[calc(100%+40rem)] opacity-[0.03] animate-noise pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      {/* Ambient glows — smaller on mobile */}
      <div className="absolute top-[15%] -left-[20%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent-1/5 blur-[120px] md:blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[20%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-accent-3/5 blur-[100px] md:blur-[180px] rounded-full pointer-events-none" />

      {/* Decorative circles — hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] border border-white/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[400px] h-[400px] border border-white/[0.05] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Tag */}
        <motion.div
          className="mb-5 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 3 }}
        >
          <span className="gradient-text-animated text-xl md:text-4xl font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] font-sora drop-shadow-[0_0_30px_rgba(57,255,20,0.3)]">
            PetForce
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-sora text-[clamp(2rem,10vw,7rem)] font-normal tracking-[-0.04em] leading-[0.92] mb-5 md:mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 3.15 }}
        >
          Sua clínica{" "}
          <span className="font-normal gradient-text drop-shadow-[0_0_20px_rgba(57,255,20,0.2)] inline-block">
            lotada
          </span>
          <br />
          de pacientes.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mb-4 md:mb-6 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 3.3 }}
        >
          Somos a agência liderada por veterinários experientes que entende o mercado pet como ninguém.
          Tráfego pago, redes sociais e automação que transformam seguidores em clientes reais na sua porta.
        </motion.p>

        <motion.div
          className="flex items-center gap-3 mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 0.6 }}
        >
          <div className="w-8 h-8 rounded-full gradient-border flex items-center justify-center text-[10px] font-bold text-black shrink-0">80+</div>
          <span className="text-white/30 text-sm font-light">empresas pet já aceleradas</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 3.45 }}
        >
          {/* Primary CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-center justify-center gap-3 md:gap-4 pl-6 md:pl-8 pr-2 py-2 rounded-full transition-all w-full sm:w-auto"
            style={{ transitionDuration: "400ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            data-cursor="hover"
            data-cursor-text="GO"
          >
            <span className="absolute inset-0 rounded-full gradient-border" />
            <span className="absolute inset-[1.5px] rounded-full bg-dark" />
            <span className="relative z-10 text-sm font-sora font-medium text-white group-hover:text-accent-2 transition-colors" style={{ transitionDuration: "300ms" }}>
              Quero mais clientes
            </span>
            <span className="relative z-10 w-9 h-9 md:w-10 md:h-10 rounded-full gradient-border flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#000">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#servicos"
            className="px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors border border-white/10 rounded-full hover:border-white/20 w-full sm:w-auto text-center"
            style={{ transitionDuration: "300ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            data-cursor="hover"
          >
            Conhecer serviços
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
