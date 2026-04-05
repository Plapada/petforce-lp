"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20PetForce%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-40 px-4 md:px-8 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-x-4 md:inset-x-8 top-8 bottom-8 rounded-[40px] md:rounded-[60px] overflow-hidden">
        <Image
          src="/about-team.png"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <span className="gradient-text-animated text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] font-sora mb-6 block">
            Pronto para crescer?
          </span>

          <h2 className="font-sora text-[clamp(2.5rem,7vw,6rem)] font-normal leading-[0.92] tracking-[-0.04em] mb-8">
            Seu próximo<br />
            <span className="gradient-text">paciente</span> está<br />
            te procurando.
          </h2>

          <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Enquanto você lê isso, tutores estão buscando clínicas e pet shops no Google e Instagram.
            A pergunta é: eles estão encontrando você ou seu concorrente?
          </p>

          {/* CTA Button */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 pl-10 pr-3 py-3 rounded-full relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            data-cursor="hover"
            data-cursor-text="GO"
          >
            {/* Gradient border */}
            <span className="absolute inset-0 rounded-full gradient-border" />
            <span className="absolute inset-[2px] rounded-full bg-dark" />

            <span className="relative z-10 font-sora text-base md:text-lg font-medium text-white">
              Falar com um especialista agora
            </span>

            <span className="relative z-10 w-12 h-12 rounded-full gradient-border flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </span>
          </motion.a>

          <p className="mt-6 text-white/20 text-sm font-light">
            Atendimento rápido pelo WhatsApp. Sem compromisso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
