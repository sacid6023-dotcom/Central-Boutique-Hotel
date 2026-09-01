import type { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`eyebrow inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-gold/70" />
      <span>{children}</span>
    </div>
  );
}
