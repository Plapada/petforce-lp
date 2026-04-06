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
              width={340}
              height={80}
              className="h-7 md:h-10 w-auto max-w-[120px] md:max-w-none"
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

          {/* CTA Desktop — expands/collapses on scroll */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center shrink-0 rounded-full overflow-hidden"
            animate={{
              paddingLeft: isScrolled ? 0 : 20,
              paddingRight: isScrolled ? 0 : 6,
              paddingTop: isScrolled ? 0 : 6,
              paddingBottom: isScrolled ? 0 : 6,
              borderWidth: isScrolled ? 0 : 1,
              borderColor: isScrolled ? "rgba(255,255,255,0)" : "rgba(255,255,255,0.15)",
              backgroundColor: isScrolled ? "transparent" : "rgba(255,255,255,0.03)",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 22 }}
            data-cursor="hover"
            data-cursor-text={isScrolled ? "CHAT" : "GO"}
          >
            <motion.span
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-white whitespace-nowrap"
              animate={{
                width: isScrolled ? 0 : "auto",
                opacity: isScrolled ? 0 : 1,
                marginRight: isScrolled ? 0 : 12,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
            >
              Fale Conosco
            </motion.span>
            <span className="w-10 h-10 rounded-full gradient-border flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#000">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </span>
          </motion.a>

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
