export default function Logo({ className = '' }) {
  return (
    <span className={`group inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0 transition-transform duration-500 group-hover:rotate-90"
      >
        <defs>
          <linearGradient id="logo-grad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--tertiary)" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="14" stroke="var(--outline-variant)" strokeWidth="1.2" fill="none" />
        <path
          d="M16 3.5a12.5 12.5 0 1 1 -8.84 21.34"
          stroke="url(#logo-grad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="16" cy="3.5" r="2.1" fill="var(--primary)" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight text-on-surface">
        daiana
        <span className="text-primary">.</span>
      </span>
    </span>
  )
}
