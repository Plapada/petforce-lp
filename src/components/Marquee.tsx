"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  "Tráfego Pago",
  "Landing Pages",
  "Gestão de Redes Sociais",
  "PromoClips",
  "Google Meu Negócio",
  "Reels de Impacto",
  "Identidade Visual",
  "Sites & E-commerce",
  "Bio Link",
  "GenIA",
];

export default function Marquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const repeated = [...items, ...items, ...items];

  return (
    <motion.section
      ref={ref}
      className="relative py-6 md:py-16 overflow-hidden border-y border-white/5"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="animate-marquee flex items-center gap-4 md:gap-8 whitespace-nowrap">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-4 md:gap-8 shrink-0">
            <span className="font-sora text-sm md:text-2xl font-light text-white/30 uppercase tracking-[0.1em]">
              {item}
            </span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full gradient-border shrink-0" />
          </div>
        ))}
      </div>

      {/* Gradient fades */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dark to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dark to-transparent pointer-events-none z-10" />
    </motion.section>
  );
}
