"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20PetForce%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

/* ── Floating particles canvas ── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf: number;
    const dpr = Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const PARTICLE_COUNT = Math.min(60, Math.floor(canvas.offsetWidth / 25));
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = (t: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const flicker = Math.sin(t * 0.001 + p.pulse) * 0.15 + 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 255, 20, ${p.alpha * flicker})`;
        ctx.fill();
      }

      /* connection lines between nearby particles */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 12000) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(57, 255, 20, ${0.06 * (1 - dist / 12000)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-5 md:px-8 overflow-hidden pt-32 pb-12 md:pt-24 md:pb-0">
      {/* Noise — high-res */}
      <div className="absolute -top-[20rem] -left-[20rem] w-[calc(100%+40rem)] h-[calc(100%+40rem)] opacity-[0.03] animate-noise pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      {/* ── 4K Ambient orbs — larger, sharper, animated ── */}
      <motion.div
        className="absolute top-[10%] -left-[10%] w-[400px] md:w-[900px] h-[400px] md:h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,163,0.08) 0%, rgba(0,255,163,0.02) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] -right-[10%] w-[350px] md:w-[800px] h-[350px] md:h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(220,255,80,0.07) 0%, rgba(220,255,80,0.02) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[30%] w-[200px] md:w-[500px] h-[200px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(57,255,20,0.05) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -20, 40, 0],
          opacity: [0.6, 1, 0.7, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Animated grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Particle field canvas ── */}
      <ParticleField />

      {/* ── Decorative rings — animated, scaled for 4K ── */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className="absolute w-[700px] h-[700px] border border-white/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] border border-accent-2/[0.04] rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] border border-white/[0.02] rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* ── Accent pulse rings (behind content) ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(57,255,20,0.06)",
        }}
        animate={{ scale: [1, 2.5], opacity: [0.15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(0,255,163,0.05)",
        }}
        animate={{ scale: [1, 2.5], opacity: [0.12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
        {/* Brand tag — logo icon + styled name matching the logo */}
        <motion.div
          className="mb-6 md:mb-10 flex items-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 3 }}
        >
          <Image
            src="/logo-vertical.png"
            alt=""
            width={206}
            height={175}
            className="h-12 md:h-20 w-auto"
            aria-hidden="true"
            priority
          />
          <span className="font-sora text-3xl md:text-6xl font-semibold tracking-tight drop-shadow-[0_0_30px_rgba(57,255,20,0.2)]">
            <span className="gradient-text-animated">Pet</span>
            <span className="text-white/70">Force</span>
            <span className="gradient-text text-sm md:text-xl align-super ml-1">&reg;</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-sora text-[clamp(2rem,6vw,5rem)] font-normal tracking-[-0.04em] leading-[0.95] mb-5 md:mb-8"
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
    </section>
  );
}
