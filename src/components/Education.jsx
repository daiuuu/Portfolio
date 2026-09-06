import {
  Award,
  BookOpen,
  Brain,
  Cloud,
  Code2,
  FileText,
  GraduationCap,
  Network,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import { useContent } from '../hooks/useContent'
import GlassCard from './ui/GlassCard'
import Chip from './ui/Chip'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const certIcons = {
  cloud: Cloud,
  brain: Brain,
  network: Network,
  shield: ShieldCheck,
  sparkles: Sparkles,
  code: Code2,
}

export default function Education() {
  const { education, sections } = useContent()

  return (
    <section id="estudios" className="mx-auto max-w-7xl px-[5vw] py-[8rem]">
      <Reveal>
        <SectionHeading {...sections.education} />
      </Reveal>

      {/* Formación universitaria + tesis destacada */}
      <div className="mt-16">
        <Reveal className="mb-6 flex items-center gap-3">
          <GraduationCap size={20} className="text-primary" />
          <h3 className="font-display text-xl font-bold text-on-surface">{sections.education.universityHeading}</h3>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {education.universidad.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <GlassCard className="p-6" glow="secondary">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-label-code text-secondary">{item.period}</span>
                    {item.badge && (
                      <span className="rounded-full bg-surface-container-high px-3 py-1 font-mono text-label-code text-on-surface-variant">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="mb-1 font-display text-xl font-bold text-on-surface">{item.title}</h4>
                  <p className="mb-3 font-mono text-label-code uppercase tracking-wide text-primary">
                    {item.institution}
                  </p>
                  <p className="mb-4 text-body-sm text-on-surface-variant">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <Chip key={j}>{tag}</Chip>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="lg:col-span-1">
            <GlassCard className="relative flex h-full flex-col justify-between overflow-hidden border-l-2 border-l-secondary p-6">
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-2 text-secondary">
                  <FileText size={14} />
                  <span className="font-mono text-label-code uppercase tracking-wide">{education.thesis.label}</span>
                </div>
                <h4 className="mb-4 font-display text-xl font-bold leading-snug text-on-surface">
                  {education.thesis.title}
                </h4>
                <p className="text-body-sm text-on-surface-variant">{education.thesis.description}</p>
              </div>
              <div className="relative z-10 mt-6 border-t border-outline-variant/40 pt-4">
                <p className="font-mono text-label-code uppercase tracking-wide text-on-surface-variant">
                  {education.thesis.advisor}
                </p>
                <p className="mt-1 font-mono text-label-code text-on-surface-variant">{education.thesis.achievement}</p>
              </div>
              <BookOpen size={96} className="pointer-events-none absolute -bottom-5 -right-5 text-outline-variant/15" />
            </GlassCard>
          </Reveal>
        </div>
      </div>

      {/* Certificaciones técnicas */}
      <div className="mt-24">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-outline-variant/40 pb-6">
          <h3 className="font-display text-2xl font-bold text-on-surface">{sections.education.coursesHeading}</h3>
          <span className="font-mono text-label-code uppercase tracking-widest text-on-surface-variant">
            {sections.education.coursesSubheading}
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.cursos.map((course, i) => {
            const Icon = certIcons[course.icon] ?? Award
            return (
              <Reveal key={i} delay={i * 90}>
                <GlassCard className="p-6" glow="tertiary">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="glass flex h-10 w-10 items-center justify-center rounded-md text-primary">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-label-code text-on-surface-variant">{course.year}</span>
                  </div>
                  <h4 className="mb-1 font-display text-base font-bold leading-snug text-on-surface">
                    {course.name}
                  </h4>
                  <p className="text-body-sm text-on-surface-variant">{course.description}</p>
                </GlassCard>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Evolución continua: publicaciones + reconocimientos */}
      <div className="mt-24 text-center">
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-on-surface sm:text-3xl">
            {education.continuousEvolution.title}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-body-sm text-on-surface-variant">
            {education.continuousEvolution.description}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left lg:grid-cols-2">
          <Reveal delay={100}>
            <GlassCard className="h-full p-6">
              <span className="mb-4 block font-mono text-label-code uppercase tracking-widest text-primary">
                {education.continuousEvolution.publicationsLabel}
              </span>
              <div className="divide-y divide-outline-variant/30">
                {education.publications.map((pub, i) => (
                  <div key={i} className="py-4 first:pt-0 last:pb-0">
                    <p className="mb-1 font-mono text-label-code text-on-surface-variant">{pub.source}</p>
                    <p className="font-display text-base font-bold text-on-surface">{pub.title}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={200}>
            <GlassCard className="h-full p-6">
              <span className="mb-4 block font-mono text-label-code uppercase tracking-widest text-tertiary">
                {education.continuousEvolution.honorsLabel}
              </span>
              <ul className="space-y-3">
                {education.honors.map((honor, i) => (
                  <li key={i} className="flex items-center gap-3 text-body-sm text-on-surface">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tertiary-container text-on-tertiary-container">
                      <Star size={10} />
                    </span>
                    {honor}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
