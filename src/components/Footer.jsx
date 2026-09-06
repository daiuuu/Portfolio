import { useContent } from '../hooks/useContent'

export default function Footer() {
  const { footer, contact } = useContent()
  return (
    <footer className="border-t border-outline-variant/60 px-[5vw] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-label-code uppercase tracking-widest text-on-surface">
            {footer.brand}
          </p>
          <p className="mt-1 font-mono text-label-code text-on-surface-variant">{footer.tagline}</p>
        </div>
        <div className="flex gap-6">
          {contact.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-label-code uppercase text-on-surface-variant transition-colors hover:text-primary"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
