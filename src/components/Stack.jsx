import { Brain, Layers } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import GlassCard from './ui/GlassCard'
import Chip from './ui/Chip'
import ProgressBar from './ui/ProgressBar'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const icons = { layers: Layers, brain: Brain }
const accents = ['primary', 'tertiary']

export default function Stack() {
  const { stackCategories, sections } = useContent()
  return (
    <section id="stack" className="mx-auto max-w-7xl px-[5vw] py-[8rem]">
      <Reveal>
        <SectionHeading {...sections.stack} />
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {stackCategories.map((category, i) => {
          const Icon = icons[category.icon]
          const accent = accents[i % accents.length]
          return (
            <Reveal key={i} delay={i * 120}>
              <GlassCard className="group p-8" glow={accent === 'primary' ? 'secondary' : 'tertiary'}>
                <div className="mb-8 flex items-center gap-3">
                  <div className="glass flex h-11 w-11 items-center justify-center rounded-md text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-on-surface">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, j) => (
                    <ProgressBar key={j} label={skill.label} value={skill.value} accent={accent} />
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
