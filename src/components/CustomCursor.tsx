"use client";

import { useEffect, useRef, useState } from "react";

function lerp(current: number, target: number, factor: number) {
  return current + (target - current) * factor;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    function onMouseMove(e: MouseEvent) {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    }

    function onMouseOver(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest("[data-cursor]");
      if (el) {
        setIsHovering(true);
        const text = el.getAttribute("data-cursor-text") || "";
        setCursorText(text);
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    let animId: number;
    function animate() {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.1);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.1);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={dotRef}
      className="cursor-dot fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference flex items-center justify-center"
      style={{
        width: isHovering ? (cursorText ? 100 : 48) : 12,
        height: isHovering ? (cursorText ? 100 : 48) : 12,
        marginLeft: isHovering ? (cursorText ? -50 : -24) : -6,
        marginTop: isHovering ? (cursorText ? -50 : -24) : -6,
        borderRadius: "50%",
        background: isHovering ? "rgba(255,255,255,0.9)" : "#fff",
      }}
    >
      {cursorText && (
        <span className="text-[10px] font-sora font-bold uppercase tracking-widest text-black">
          {cursorText}
        </span>
      )}
    </div>
  );
}
