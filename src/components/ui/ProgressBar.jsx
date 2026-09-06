export default function ProgressBar({ label, value, accent = 'primary' }) {
  const accentClass = {
    primary: 'bg-primary shadow-[0_0_8px_var(--primary)]',
    secondary: 'bg-secondary shadow-[0_0_8px_var(--secondary)]',
    tertiary: 'bg-tertiary shadow-[0_0_8px_var(--tertiary)]',
  }[accent]

  return (
    <div>
      <div className="mb-2 flex items-center justify-between font-mono text-label-code uppercase text-on-surface-variant">
        <span>{label}</span>
        <span className="text-on-surface">{value}%</span>
      </div>
      <div className="h-[2px] w-full rounded-full bg-outline-variant/50">
        <div
          className={`h-full rounded-full ${accentClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
