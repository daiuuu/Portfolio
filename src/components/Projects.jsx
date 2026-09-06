import { ArrowUpRight, LineChart, Layers, Network, ShieldCheck, Sparkles } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import GlassCard from './ui/GlassCard'
import Chip from './ui/Chip'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const categoryIcons = {
  network: Network,
  shield: ShieldCheck,
  sparkles: Sparkles,
  chart: LineChart,
}

// Cycle of bento shapes applied to every project after the featured one, so the
// gallery keeps a dynamic rhythm no matter how many projects content.js ends up with.
const shapePattern = [
  { span: 'sm:col-span-2 sm:row-span-1', variant: 'panel' },
  { span: 'sm:col-span-1 sm:row-span-2', variant: 'card' },
  { span: 'sm:col-span-1 sm:row-span-1', variant: 'panel' },
  { span: 'sm:col-span-2 sm:row-span-1', variant: 'card' },
]

const panelTints = [
  { bg: 'bg-primary-container', on: 'text-on-primary-container' },
  { bg: 'bg-secondary-container', on: 'text-on-secondary-container' },
  { bg: 'bg-tertiary-container', on: 'text-on-tertiary-container' },
]

export default function Projects() {
  const { projects, sections } = useContent()
  const featured = projects.find((p) => p.featured) ?? projects[0]
  const rest = projects.filter((p) => p !== featured)

  return (
    <section id="proyectos" className="mx-auto max-w-7xl px-[5vw] py-[8rem]">
      <Reveal>
        <SectionHeading {...sections.projects} />
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-4 sm:[grid-auto-flow:dense] sm:auto-rows-[13rem]">
        <Reveal className="sm:col-span-2 sm:row-span-2">
          <a
            href={featured.link}
            className="glass group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-lg p-8 sm:min-h-0"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br opacity-80 transition-transform duration-700 group-hover:scale-110 ${featured.gradient}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/10 to-transparent" />
            <div className="relative">
              <span className="mb-3 inline-block rounded-full bg-surface-container-lowest/60 px-3 py-1 font-mono text-label-code uppercase text-on-surface backdrop-blur">
                {featured.category}
              </span>
              <h3 className="font-display text-2xl font-bold text-on-surface sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-2 max-w-md text-body-sm text-on-surface-variant">{featured.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tags.map((tag, j) => (
                  <Chip key={j} className="bg-surface-container-lowest/60">
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>
          </a>
        </Reveal>

        {rest.map((project, i) => {
          const shape = shapePattern[i % shapePattern.length]
          return (
            <Reveal key={i} delay={i * 110} className={shape.span}>
              {shape.variant === 'panel' ? (
                <PanelCard project={project} tint={panelTints[i % panelTints.length]} />
              ) : (
                <ProjectCard project={project} />
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const Icon = categoryIcons[project.icon] ?? Layers
  return (
    <GlassCard as="a" href={project.link} className="group flex h-full flex-col justify-between p-6" glow="tertiary">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-mono text-label-code uppercase tracking-wide text-tertiary">
            <Icon size={13} />
            {project.category}
          </span>
          <ArrowUpRight
            size={16}
            className="text-on-surface-variant transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
          />
        </div>
        <h3 className="mb-2 font-display text-lg font-bold text-on-surface">{project.title}</h3>
        <p className="text-body-sm text-on-surface-variant">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <Chip key={i}>{tag}</Chip>
        ))}
      </div>
    </GlassCard>
  )
}

function PanelCard({ project, tint }) {
  const Icon = categoryIcons[project.icon] ?? Layers
  return (
    <a
      href={project.link}
      className={`group relative flex h-full min-h-[10rem] flex-col justify-between overflow-hidden rounded-lg border border-outline-variant/40 p-6 transition-transform duration-300 hover:-translate-y-1 ${tint.bg}`}
    >
      <div className="flex items-center justify-between">
        <Icon size={28} className={`opacity-80 ${tint.on}`} />
        <ArrowUpRight
          size={16}
          className={`opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${tint.on}`}
        />
      </div>
      <div>
        <span className={`font-mono text-label-code uppercase tracking-wide opacity-70 ${tint.on}`}>
          {project.category}
        </span>
        <h3 className={`font-display text-lg font-bold ${tint.on}`}>{project.title}</h3>
      </div>
    </a>
  )
}
