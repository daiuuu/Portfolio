import { useReveal } from '../../hooks/useReveal'

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
