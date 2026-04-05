"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20PetForce%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/_petforce",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-24 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#" className="mb-4 block">
              <Image
                src="/logo-horizontal.png"
                alt="PetForce"
                width={150}
                height={40}
                className="h-9 w-auto"
              />
            </a>
            <p className="text-white/30 font-light leading-relaxed text-sm">
              Agência de marketing digital 100% nichada no mercado pet.
              Transformamos a presença digital de clínicas veterinárias e pet shops em resultados reais.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-2">
              Navegação
            </span>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white text-sm font-light transition-colors"
                style={{ transitionDuration: "300ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                data-cursor="hover"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-2">
              Social
            </span>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-white text-sm font-light transition-colors group"
                style={{ transitionDuration: "300ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                data-cursor="hover"
              >
                <span className="text-white/20 group-hover:text-accent-2 transition-colors" style={{ transitionDuration: "300ms" }}>
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-2">
              Contato
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full hover:border-accent-2/30 transition-colors group"
              style={{ transitionDuration: "300ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              data-cursor="hover"
            >
              <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors" style={{ transitionDuration: "300ms" }}>
                Fale pelo WhatsApp
              </span>
              <span className="w-6 h-6 rounded-full gradient-border flex items-center justify-center shrink-0">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] text-white/20 uppercase tracking-[0.15em] font-bold">
            &copy; {new Date().getFullYear()} PetForce. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-white/15 uppercase tracking-[0.15em]">
            Marketing Digital 100% Pet
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
