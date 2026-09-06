import { useContent } from '../hooks/useContent'
import Reveal from './ui/Reveal'

const accents = ['text-primary', 'text-tertiary', 'text-secondary', 'text-on-surface']

export default function StatsBar() {
  const { stats } = useContent()
  return (
    <section className="border-y border-outline-variant/60 bg-surface-container-lowest/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-[5vw] py-12 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={i} delay={i * 90} className="text-center sm:text-left">
            <div className={`font-display text-3xl font-extrabold sm:text-4xl ${accents[i % accents.length]}`}>
              {stat.value}
            </div>
            <div className="mt-1 font-mono text-label-code uppercase tracking-wide text-on-surface-variant">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
