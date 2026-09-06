export default function Chip({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-surface-container-high px-3 py-1 font-mono text-label-code text-on-surface-variant uppercase ${className}`}
    >
      {children}
    </span>
  )
}
