export default function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-label-code uppercase tracking-wide transition-all duration-300'

  const variants = {
    primary: 'bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary',
    ghost: 'glass text-on-surface hover:border-primary/50',
  }

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
