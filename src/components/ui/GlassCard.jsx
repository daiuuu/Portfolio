import { useRef } from 'react'

export default function GlassCard({
  as: Tag = 'div',
  className = '',
  glow,
  spotlight = false,
  children,
  ...props
}) {
  const ref = useRef(null)

  function handleMouseMove(e) {
    if (!spotlight || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`glass relative overflow-hidden rounded-lg transition-all duration-300 hover:border-tertiary/40 ${
        spotlight ? 'spotlight' : ''
      } ${className}`}
      {...props}
    >
      {glow && (
        <div
          className="glow-orb h-40 w-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: glow === 'secondary' ? 'var(--glow-secondary)' : 'var(--glow-tertiary)',
            top: '-2rem',
            right: '-2rem',
          }}
        />
      )}
      {children}
    </Tag>
  )
}
