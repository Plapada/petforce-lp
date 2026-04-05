"use client";

export function LogoIcon({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#39ff14" />
          <stop offset="100%" stopColor="#00ffa3" />
        </linearGradient>
      </defs>
      {/* Arrow body going up-right with dog head */}
      <path
        d="M20 95 L20 45 L5 60 L50 15 L50 35 L65 35 L65 20 C70 10 85 10 85 25 L85 30 C85 35 80 40 75 40 L65 40 L65 95 Z"
        fill="url(#logoGrad)"
      />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <LogoIcon size={28} />
      <span className="font-sora text-lg font-semibold tracking-tight">
        <span className="gradient-text">Pet</span>
        <span className="text-white/70">Force</span>
        <span className="text-accent-2 text-[8px] align-super ml-0.5">&reg;</span>
      </span>
    </div>
  );
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <span className={`font-sora font-semibold tracking-tight ${className}`}>
      <span className="gradient-text">Pet</span>
      <span className="text-white/70">Force</span>
      <span className="text-accent-2 text-[8px] align-super ml-0.5">&reg;</span>
    </span>
  );
}
