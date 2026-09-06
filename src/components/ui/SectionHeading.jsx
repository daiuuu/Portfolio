export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-primary" />
          <span className="font-mono text-label-code uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-headline-mobile font-bold text-on-surface sm:text-headline-lg">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-body-md text-on-surface-variant">{description}</p>
      )}
    </div>
  )
}
