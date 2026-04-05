"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;

    function tick(now: number) {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsLoading(false), 400);
      }
    }

    requestAnimationFrame(tick);

    const hardTimeout = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(hardTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <Image
              src="/logo-vertical.png"
              alt="PetForce"
              width={180}
              height={180}
              className="w-28 md:w-40 h-auto"
              priority
            />

            <div className="flex flex-col items-center gap-3">
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full gradient-border rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <span className="font-outfit text-[11px] uppercase tracking-[0.3em] text-white/30 font-medium">
                {progress}%
              </span>
            </div>
          </motion.div>

          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-2/5 blur-[150px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
