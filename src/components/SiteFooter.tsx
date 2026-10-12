import { Mail } from 'lucide-react'
import { Brand } from '@/components/Brand'
import { PhotoCredits } from '@/components/PhotoCredits'
import { contact } from '@/lib/brand'

const sections = [
  { href: '#about', label: 'About Trans02' },
  { href: '#services', label: 'Services' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#quote', label: 'Get a quote' },
  { href: '#join', label: 'Join us' },
]

export function SiteFooter() {
  return (
    <footer className="bg-asphalt text-asphalt-ink">
      <div className="mx-auto max-w-content px-gutter py-section">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Brand className="h-10 w-auto" plate />
            <p className="mt-6 max-w-sm text-sm text-asphalt-soft-ink">
              Ontario-only freight carrier running FTL, LTL and expedited loads across the GTA and
              the province. Based in Mississauga.
            </p>
          </div>

          <div>
            <h2 className="font-label text-xs font-600 tracking-[0.16em] text-asphalt-soft-ink uppercase">
              Dispatch
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${contact.dispatch}`}
                  className="inline-flex min-h-11 items-center gap-2.5 underline-offset-4 hover:underline"
                >
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  {contact.dispatch}
                </a>
              </li>
              <li className="text-asphalt-soft-ink">Freight quotes and booking, Mon to Sat</li>
              <li className="text-asphalt-soft-ink">Base: {contact.address}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-label text-xs font-600 tracking-[0.16em] text-asphalt-soft-ink uppercase">
              Careers
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${contact.careers}`}
                  className="inline-flex min-h-11 items-center gap-2.5 underline-offset-4 hover:underline"
                >
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  {contact.careers}
                </a>
              </li>
              <li className="text-asphalt-soft-ink">
                Resumes: drivers, dispatchers, office, owner operators
              </li>
            </ul>
          </div>
        </div>

        <nav aria-label="Footer" className="mt-14 border-t border-asphalt-line pt-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-1">
            {sections.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="inline-flex min-h-11 items-center font-label text-sm tracking-[0.06em] text-asphalt-soft-ink uppercase transition-colors hover:text-asphalt-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-3 border-t border-asphalt-line pt-8 text-xs text-asphalt-soft-ink sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Trans02 Logistics Inc.</p>
          <PhotoCredits className="sm:text-right" />
        </div>
      </div>
    </footer>
  )
}
