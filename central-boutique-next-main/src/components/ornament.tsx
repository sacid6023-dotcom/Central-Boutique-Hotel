export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`} aria-hidden>
      <span className="h-px w-16 bg-gold/50" />
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-gold">
        <path
          d="M12 1c2 3.5 5 5 11 5-6 0-9 1.5-11 5-2-3.5-5-5-11-5 6 0 9-1.5 11-5z"
          fill="currentColor"
          opacity="0.9"
        />
      </svg>
      <span className="h-px w-16 bg-gold/50" />
    </div>
  );
}

export function Hairline({ className = "" }: { className?: string }) {
  return <div className={`hairline ${className}`} aria-hidden />;
}
