import { useState } from 'react'
import { Cpu, Rocket, Terminal } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import GlassCard from './ui/GlassCard'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const visualIcons = [Cpu, Terminal, Rocket]
const visualTints = [
  'from-primary-container via-surface-container to-surface-container-low',
  'from-secondary-container via-surface-container to-surface-container-low',
  'from-tertiary-container via-surface-container to-surface-container-low',
]
const dotColors = [
  { bg: 'bg-primary', shadow: 'shadow-[0_0_16px_var(--primary)]' },
  { bg: 'bg-tertiary', shadow: 'shadow-[0_0_16px_var(--tertiary)]' },
  { bg: 'bg-secondary', shadow: 'shadow-[0_0_16px_var(--secondary)]' },
]

export default function Experience() {
  const { experience, sections } = useContent()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="experiencia" className="relative mx-auto max-w-7xl px-[5vw] py-[8rem]">
      <Reveal>
        <SectionHeading {...sections.experience} />
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute left-4 top-0 h-full w-px bg-outline-variant/60 sm:left-1/2" />

        <div className="space-y-16">
          {experience.map((job, i) => {
            const reversed = i % 2 === 1
            const Icon = visualIcons[i % visualIcons.length]
            const dot = dotColors[i % dotColors.length]
            const isActive = hoveredIndex === i
            return (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className={`absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 sm:left-1/2 ${
                    isActive ? `h-4 w-4 ${dot.bg} ${dot.shadow}` : 'h-2.5 w-2.5 bg-outline-variant'
                  }`}
                />

                <Reveal
                  delay={i * 120}
                  className={`flex flex-col gap-6 sm:flex-row sm:items-start ${
                    reversed ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <div className="min-w-0 flex-1 pl-10 sm:pl-0">
                    <GlassCard className="p-6" spotlight>
                      <div className="relative z-10">
                        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-display text-lg font-bold text-on-surface">{job.role}</h3>
                          <span className="rounded-full bg-surface-container-high px-3 py-1 font-mono text-label-code text-on-surface-variant">
                            {job.period}
                          </span>
                        </div>
                        <p className="mb-4 font-mono text-label-code uppercase tracking-wide text-primary">
                          {job.company}
                        </p>
                        <ul className="space-y-2">
                          {job.bullets.map((bullet, j) => (
                            <li key={j} className="flex gap-2 text-body-sm text-on-surface-variant">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-tertiary" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </div>

                  <div className={`min-w-0 flex-1 pl-10 sm:pl-0 ${reversed ? 'sm:mb-10' : 'sm:mt-10'}`}>
                    <div
                      className={`relative flex h-40 items-center justify-center overflow-hidden rounded-lg border border-outline-variant/40 bg-gradient-to-br sm:h-full sm:min-h-[10rem] ${visualTints[i % visualTints.length]}`}
                    >
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          backgroundImage:
                            'radial-gradient(circle at 1px 1px, var(--outline-variant) 1px, transparent 0)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <Icon size={32} className="relative text-on-surface-variant/70" />
                    </div>
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
