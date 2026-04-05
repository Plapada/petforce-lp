"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "100% Nichada no Mercado Pet",
    description:
      "Não somos uma agência genérica. Vivemos e respiramos o universo pet. Conhecemos profundamente as dores, desafios e oportunidades do seu segmento.",
  },
  {
    number: "02",
    title: "Estratégias Personalizadas e Assertivas",
    description:
      "Cada negócio é único. Desenvolvemos estratégias sob medida baseadas em dados, comportamento do seu público e objetivos específicos de crescimento.",
  },
  {
    number: "03",
    title: "Time Especialista em Performance",
    description:
      "Profissionais experientes e certificados em marketing digital, focados em gerar resultados mensuráveis e maximizar seu retorno sobre investimento.",
  },
  {
    number: "04",
    title: "Acompanhamento e Mentoria Estratégica",
    description:
      "Não apenas executamos. Educamos, orientamos e caminhamos junto com você em cada etapa do crescimento do seu negócio.",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useSpring(useTransform(scrollYProgress, [0, 1], [60, -60]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="sobre" className="relative py-24 md:py-40 px-4 md:px-8" ref={containerRef}>
      {/* Ambient glow */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-accent-2/3 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Split layout — Image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            style={{ y: imgY }}
          >
            <div className="bg-white/[0.03] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem]">
              <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden">
                <Image
                  src="/hero-vet.png"
                  alt="Clínica veterinária moderna — atendimento de excelência"
                  width={600}
                  height={600}
                  className="w-full h-auto aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              <span className="gradient-text-animated text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] font-sora mb-4 block">
                Por que a PetForce
              </span>
              <h2 className="font-sora text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[0.95] tracking-[-0.03em] mb-6">
                Onde estratégia<br />
                encontra o{" "}
                <span className="gradient-text">mercado pet.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            >
              <p className="text-lg text-white/40 font-light leading-relaxed mb-4">
                Mais de 80 empresas já aceleraram seus resultados com nossa metodologia exclusiva.
                Não vendemos promessas — entregamos crescimento real.
              </p>
              <p className="text-sm text-accent-2/70 font-sora font-medium flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Liderada por veterinários experientes
              </p>
            </motion.div>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: i * 0.1,
              }}
            >
              {/* Double-bezel card */}
              <div className="bg-white/[0.03] ring-1 ring-white/[0.06] p-1.5 rounded-[2rem] h-full">
                <div className="bg-dark-surface rounded-[calc(2rem-0.375rem)] p-8 md:p-10 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] group hover:bg-dark-card transition-colors" style={{ transitionDuration: "500ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
                  <span className="gradient-text font-sora text-sm font-bold mb-4 block">
                    {reason.number}
                  </span>
                  <h3 className="font-sora text-xl md:text-2xl font-medium mb-4 leading-tight tracking-tight text-white/90 group-hover:text-white transition-colors" style={{ transitionDuration: "300ms" }}>
                    {reason.title}
                  </h3>
                  <p className="text-white/40 font-light leading-relaxed text-base">
                    {reason.description}
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
