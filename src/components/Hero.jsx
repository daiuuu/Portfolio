import { ArrowRight, RefreshCw } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import Button from './ui/Button'

export default function Hero() {
  const { hero } = useContent()
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="glow-orb -left-20 top-24 h-72 w-72 bg-[var(--glow-secondary)]" />
      <div className="glow-orb -right-10 bottom-10 h-96 w-96 bg-[var(--glow-tertiary)]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-[5vw] lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div
            className="glass animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ animationDelay: '0ms' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-glow" />
            <span className="font-mono text-label-code uppercase text-on-surface-variant">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="font-display text-headline-mobile font-extrabold leading-[1.05] tracking-tight text-on-surface sm:text-display">
            {hero.headline.map((word, i) =>
              word === hero.highlightWord ? (
                <span
                  key={i}
                  className="animate-fade-up block bg-gradient-to-r from-secondary via-tertiary to-primary bg-clip-text italic text-transparent"
                  style={{ animationDelay: `${150 + i * 90}ms` }}
                >
                  {word}
                </span>
              ) : (
                <span
                  key={i}
                  className="animate-fade-up block"
                  style={{ animationDelay: `${150 + i * 90}ms` }}
                >
                  {word}
                </span>
              ),
            )}
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-lg text-body-md text-on-surface-variant"
            style={{ animationDelay: '620ms' }}
          >
            {hero.description}
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: '740ms' }}>
            <Button href={hero.ctaPrimary.href} variant="primary">
              {hero.ctaPrimary.label}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={hero.ctaSecondary.href} variant="ghost">
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-up relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96"
          style={{ animationDelay: '400ms' }}
        >
          <div className="absolute inset-0 rounded-full border border-outline-variant/60" />
          <div className="absolute inset-8 rounded-full border border-outline-variant/40" />
          <div className="glass flex h-40 w-40 flex-col items-center justify-center gap-3 rounded-full text-center sm:h-48 sm:w-48">
            <RefreshCw size={28} className="text-tertiary" />
            <span className="font-mono text-label-code uppercase tracking-widest text-on-surface-variant">
              {hero.panel.title}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
