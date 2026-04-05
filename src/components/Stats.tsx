"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ end, suffix, label, delay }: StatItemProps) {
  const { count, ref } = useCountUp(end, 2000);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay }}
    >
      <span className="font-sora text-[clamp(3rem,8vw,6rem)] font-normal tracking-[-0.04em] leading-none gradient-text">
        {count}
        {suffix}
      </span>
      <span className="text-white/30 text-sm md:text-base font-light mt-3 uppercase tracking-[0.15em]">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="resultados" className="relative py-24 md:py-40 px-4 md:px-8">
      {/* Gradient separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <span className="gradient-text-animated text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] font-sora mb-4 block">
            Resultados Reais
          </span>
          <h2 className="font-sora text-[clamp(2rem,5vw,4rem)] font-normal leading-[0.95] tracking-[-0.03em]">
            Números que{" "}
            <span className="gradient-text">falam por si.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem end={80} suffix="+" label="Empresas aceleradas" delay={0} />
          <StatItem end={500} suffix="K+" label="Leads gerados" delay={0.1} />
          <StatItem end={12} suffix="M+" label="Em faturamento gerado" delay={0.2} />
          <StatItem end={98} suffix="%" label="De satisfação" delay={0.3} />
        </div>
      </div>

      {/* Gradient separator bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
