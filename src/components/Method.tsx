"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    subtitle: "Entendemos seu negócio",
    description:
      "Mergulhamos no seu negócio, mercado e público. Analisamos sua presença digital, concorrentes e oportunidades. Nada genérico — tudo sob medida.",
    accent: "from-accent-1 to-accent-2",
  },
  {
    number: "02",
    title: "Estratégia",
    subtitle: "Montamos o plano de ação",
    description:
      "Definimos metas claras, canais prioritários e um cronograma de execução. Cada ação é pensada para gerar resultados mensuráveis no menor tempo.",
    accent: "from-accent-2 to-accent-3",
  },
  {
    number: "03",
    title: "Execução",
    subtitle: "Colocamos tudo para rodar",
    description:
      "Tráfego, conteúdo, automação — tudo funcionando em sincronia. Acompanhamos cada métrica e otimizamos constantemente para maximizar seu ROI.",
    accent: "from-accent-3 to-accent-1",
  },
];

export default function Method() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="metodo" ref={containerRef} className="relative py-24 md:py-40 px-4 md:px-8">
      {/* Noise */}
      <div className="absolute -top-[20rem] -left-[20rem] w-[calc(100%+40rem)] h-[calc(100%+40rem)] opacity-[0.02] animate-noise pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <span className="gradient-text-animated text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] font-sora mb-4 block">
            Nosso Método
          </span>
          <h2 className="font-sora text-[clamp(2rem,5vw,4rem)] font-normal leading-[0.95] tracking-[-0.03em]">
            3 passos para{" "}
            <span className="gradient-text">transformar</span>
            <br />
            seu negócio pet.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: i * 0.15,
              }}
            >
              {/* Double-bezel */}
              <div className="bg-white/[0.03] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem]">
                <div className="bg-dark-surface rounded-[calc(2rem-0.375rem)] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] relative overflow-hidden">
                  {/* Gradient line top */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${step.accent} opacity-50`} />

                  <span className="gradient-text font-sora text-5xl md:text-6xl font-bold opacity-20 mb-6 block leading-none">
                    {step.number}
                  </span>
                  <h3 className="font-sora text-2xl md:text-3xl font-medium mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-accent-2 text-sm font-medium mb-4 font-sora">
                    {step.subtitle}
                  </p>
                  <p className="text-white/40 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
