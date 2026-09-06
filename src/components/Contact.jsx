import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import GlassCard from './ui/GlassCard'
import { GithubIcon, LinkedinIcon, XIcon } from './ui/BrandIcons'

const socialIcons = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Twitter: XIcon }

export default function Contact() {
  const { contact } = useContent()
  return (
    <section id="contacto" className="relative mx-auto max-w-7xl px-[5vw] py-[8rem]">
      <div className="glow-orb -bottom-20 left-1/4 h-80 w-80 bg-[var(--glow-secondary)]" />

      <h2 className="relative font-display text-headline-mobile font-extrabold text-on-surface sm:text-headline-lg">
        {contact.headline.map((word, i) => (
          <span key={i}>
            {i > 0 && ' '}
            {word === contact.highlightWord ? (
              <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text italic text-transparent">
                {word}
              </span>
            ) : (
              word
            )}
          </span>
        ))}
      </h2>
      <p className="relative mt-4 max-w-xl text-body-md text-on-surface-variant">{contact.description}</p>

      <div className="relative mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
        <GlassCard className="p-8">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <Field label={contact.form.nameLabel} placeholder={contact.form.namePlaceholder} />
            <Field label={contact.form.emailLabel} placeholder={contact.form.emailPlaceholder} type="email" />
            <Field
              label={contact.form.messageLabel}
              placeholder={contact.form.messagePlaceholder}
              as="textarea"
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-mono text-label-code uppercase text-on-secondary transition-colors hover:bg-primary hover:text-on-primary"
            >
              {contact.form.submit}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </GlassCard>

        <div className="flex flex-col gap-6">
          {contact.socials.map((social) => {
            const Icon = socialIcons[social.label]
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="glass flex items-center justify-between rounded-md px-5 py-4 text-on-surface transition-colors hover:border-primary/50"
              >
                <span className="flex items-center gap-3">
                  {Icon && <Icon size={17} />}
                  {social.label}
                </span>
                <ArrowUpRight size={15} className="text-on-surface-variant" />
              </a>
            )
          })}

          <GlassCard className="p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary pulse-glow" />
              <span className="font-mono text-label-code uppercase text-on-surface">
                {contact.status.label}
              </span>
            </div>
            <div className="space-y-1 font-mono text-label-code text-on-surface-variant">
              {contact.status.lines.map((line) => (
                <p key={line}>// {line}</p>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

function Field({ label, placeholder, type = 'text', as = 'input' }) {
  const Tag = as
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-label-code uppercase tracking-wide text-on-surface-variant">
        {label}
      </span>
      <Tag
        type={as === 'input' ? type : undefined}
        placeholder={placeholder}
        rows={as === 'textarea' ? 3 : undefined}
        className="w-full resize-none border-b border-outline-variant bg-transparent pb-3 text-on-surface placeholder:text-on-surface-variant/60 focus:border-transparent focus:bg-gradient-to-r focus:from-secondary focus:to-tertiary focus:bg-[length:100%_1px] focus:bg-bottom focus:bg-no-repeat focus:outline-none"
      />
    </label>
  )
}
