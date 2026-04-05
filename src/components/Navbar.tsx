"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20PetForce%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 md:px-8 pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 2.8 }}
      >
        <motion.div
          className="pointer-events-auto mt-4 md:mt-6 flex items-center justify-between gap-4 md:gap-6 px-5 md:px-8 py-3 glass rounded-full"
          animate={{
            maxWidth: isScrolled ? 780 : 1100,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
          style={{ width: "100%" }}
        >
          {/* Logo */}
          <a href="#" className="shrink-0" data-cursor="hover">
            <Image
              src="/logo-horizontal.png"
              alt="PetForce"
              width={130}
              height={34}
              className="h-7 w-auto"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-colors"
                style={{ transitionDuration: "300ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                data-cursor="hover"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full border border-white/15 hover:border-accent-2/40 shrink-0 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
            style={{ transitionDuration: "300ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            data-cursor="hover"
            data-cursor-text="GO"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white whitespace-nowrap">
              Fale Conosco
            </span>
            <span className="w-8 h-8 rounded-full gradient-border flex items-center justify-center shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            data-cursor="hover"
            aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            <motion.span
              className="block w-5 h-[1.5px] bg-white rounded-full"
              animate={{ rotate: isMobileOpen ? 45 : 0, y: isMobileOpen ? 3 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            <motion.span
              className="block w-5 h-[1.5px] bg-white rounded-full"
              animate={{ rotate: isMobileOpen ? -45 : 0, y: isMobileOpen ? -3 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <motion.div
        className="fixed inset-0 z-[99] bg-dark/98 flex flex-col items-center justify-center gap-8 md:hidden"
        initial={false}
        animate={{
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileOpen(false)}
            className="font-sora text-3xl font-medium text-white/80 hover:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMobileOpen ? 1 : 0,
              y: isMobileOpen ? 0 : 20,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: isMobileOpen ? 0.15 + i * 0.08 : 0,
            }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-white font-sora text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isMobileOpen ? 1 : 0,
            y: isMobileOpen ? 0 : 20,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: isMobileOpen ? 0.5 : 0,
          }}
        >
          Fale Conosco
          <span className="w-8 h-8 rounded-full gradient-border flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </motion.a>
      </motion.div>
    </>
  );
}
