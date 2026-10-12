import { ArrowRight, CircleCheck, Clock, Container, Mail, MapPin, Truck, Users } from 'lucide-react'
import { DispatchPanel } from '@/components/DispatchPanel'
import { Brand } from '@/components/Brand'
import { QuoteForm } from '@/components/QuoteForm'
import { Button } from '@/components/ui/button'
import { contact } from '@/lib/brand'

const services = [
  {
    id: 'ftl',
    name: 'Full truckload',
    short: 'FTL',
    icon: Truck,
    line: 'One trailer, one shipper, straight through.',
    best: 'A full 53-foot dry van of packaged goods, building materials or machinery.',
    notes: ['Dry van and flatbed', 'Dock-level or yard pickup', 'Sealed and run direct'],
  },
  {
    id: 'ltl',
    name: 'Less than truckload',
    short: 'LTL',
    icon: Container,
    line: 'Four to twelve skids, priced for the space you use.',
    best: 'Regular runs of palletised freight that does not need the whole trailer.',
    notes: ['Palletised and shrink-wrapped', 'Consolidated Ontario runs', 'Weekly or on-demand'],
  },
  {
    id: 'expedited',
    name: 'Expedited',
    short: 'Expedited',
    icon: Clock,
    line: 'A truck held for your load, moving now.',
    best: 'A line down, a missed delivery window, a load that cannot sit until Monday.',
    notes: ['Direct, no terminal stops', 'Same-day and overnight Ontario', 'Dispatch answers by email'],
  },
]

const trackRecord = [
  {
    icon: MapPin,
    title: 'GTA local',
    body: 'Same-day runs in and out of Brampton, Mississauga, Toronto, Vaughan and the surrounding 905 — short hauls, tight windows, repeat pickups.',
  },
  {
    icon: Truck,
    title: 'Ontario-wide',
    body: 'Full-province lanes — Ottawa, London, Windsor, Kitchener, Barrie, Sudbury and the corridors between them. Overnight on most of them.',
  },
  {
    icon: CircleCheck,
    title: 'No US runs yet',
    body: 'We are Ontario only, and we say so rather than quoting a cross-border lane we cannot cover. Expansion is planned; this page will say when.',
  },
]

const roles = [
  {
    title: 'AZ drivers',
    icon: Truck,
    body: 'GTA local work and Ontario-wide lanes. Send your abstract, CVOR experience and the region you want to run.',
  },
  {
    title: 'Dispatchers',
    icon: Clock,
    body: 'Build the boards, quote the lanes and keep the trucks full. Freight knowledge and clear email habits matter more than software.',
  },
  {
    title: 'Office staff',
    icon: Mail,
    body: 'Quoting, invoicing, paperwork and customer updates. The people shippers actually talk to.',
  },
  {
    title: 'Owner operators',
    icon: Users,
    body: 'Bring your tractor and your own authority or run under ours. Steady GTA and Ontario freight, settled weekly.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero — the road, the headline, and the two actions this site exists for. */}
      <section id="top" className="relative isolate overflow-hidden bg-asphalt text-asphalt-ink">
        <div data-hero-video="" className="pointer-events-none absolute inset-0 -z-10">
          {/* HERO VIDEO SLOT.
              To use an mp4 instead of the still: put the file in public/ (e.g.
              public/hero.mp4), then uncomment the <video> below and delete the
              <img> after it. The still stays in the repo, so this is reversible
              by pasting the <img> back. */}
          {
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/gta-highway-dawn.webp"
            className="size-full object-cover opacity-75"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          }
          {/*
            <img
              src="/images/gta-highway-dawn.webp"
              alt="A tractor-trailer running a multi-lane highway at dawn."
              width={1600}
              height={900}
              className="size-full object-cover opacity-75 motion-safe:animate-[hero-settle_1400ms_ease-out_both]"
            />
          */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--asphalt)_82%,transparent)_0%,color-mix(in_oklch,var(--asphalt)_52%,transparent)_52%,transparent_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                'radial-gradient(closest-side, color-mix(in oklch, var(--primary) 32%, transparent), transparent)',
              backgroundSize: '70% 120%',
              backgroundPosition: '110% 10%',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                'radial-gradient(color-mix(in oklch, var(--asphalt-ink) 45%, transparent) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />
        </div>

        <div className="mx-auto grid max-w-content gap-12 px-gutter pt-16 pb-section-plus md:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <p className="font-label text-xs font-600 tracking-[0.1em] text-primary uppercase sm:text-sm sm:tracking-[0.18em]">
              Mississauga · GTA · Ontario-wide
            </p>
            <h1 className="mt-5 font-display text-[length:var(--hero-size)] font-700 uppercase">
              Freight that leaves when we say it will
            </h1>
            <p className="mt-6 max-w-xl text-lg text-asphalt-soft-ink">
              Trans02 Logistics is an Ontario carrier running full truckload, LTL and expedited
              freight out of the GTA. Send the load details and dispatch comes back the same day.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 font-label text-base tracking-[0.06em] uppercase">
                <a href="#quote">
                  Get a freight quote
                  <ArrowRight />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-asphalt-line bg-transparent font-label text-base tracking-[0.06em] text-asphalt-ink uppercase hover:bg-asphalt-soft hover:text-asphalt-ink"
              >
                <a href="#join">Drive with us</a>
              </Button>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 border-t border-asphalt-line pt-8 sm:grid-cols-4">
              {[
                ['FTL', 'Truckload'],
                ['LTL', 'Part loads'],
                ['Expedited', 'Direct runs'],
                ['Same day', 'Quotes back'],
              ].map(([term, detail]) => (
                <div key={term}>
                  <dt className="font-display text-xl font-600 uppercase">{term}</dt>
                  <dd className="mt-1 font-label text-xs tracking-[0.08em] text-asphalt-soft-ink uppercase">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <DispatchPanel />
        </div>
      </section>

      {/* About — the carrier, its base and its patch. */}
      <section id="about" className="scroll-mt-24 bg-card">
        <div className="mx-auto grid max-w-content gap-12 px-gutter py-section lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-xl border border-border shadow-raised">
            <img
              src="/images/loading-dock-trailer.webp"
              alt="A trailer on the apron at a distribution dock, doors open ready to load."
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-700 uppercase">
              A Mississauga carrier that stays in Ontario
            </h2>
            <p className="mt-6 text-muted-foreground">
              Trans02 Logistics runs freight out of the west GTA: Brampton, Mississauga, Toronto and
              the surrounding 905, then the whole province from Windsor up to Sudbury. We are
              deliberately a single-region carrier. Covering one province properly means a shipper's
              load does not wait behind a truck that is halfway to Michigan.
            </p>
            <p className="mt-5 text-muted-foreground">
              Every load is quoted and dispatched by email, from {contact.address}, by people who
              know the lanes. No call centre, no automated queue, no forwarding your freight to a
              broker you have never heard of.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Quotes answered the same working day.',
                'Ontario only — GTA local and the whole province.',
                'Same-day and overnight expedited when a line is down.',
                'Expanding shortly; this page will name the new regions.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CircleCheck className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Identity — the claim, on the brand's own ground. */}
      <section className="bg-asphalt text-asphalt-ink">
        <div className="mx-auto max-w-content px-gutter py-section">
          <h2 className="max-w-5xl font-display text-[clamp(2rem,5.2vw,4rem)] font-700 uppercase">
            We would rather run fewer lanes and keep every promise on them
          </h2>
          <div className="mt-10 grid gap-8 border-t border-asphalt-line pt-10 md:grid-cols-3">
            {[
              ['On time, not optimistic', 'A window we quote is a window we plan around. If a load cannot make it, dispatch says so before pickup, not after.'],
              ['Plain answers', 'Rates, capacity, delays — you hear them in the same email, without a chase.'],
              ['One region, done properly', 'Ontario is the whole service area, so the trucks, the drivers and the dispatch decisions all live where the freight is.'],
            ].map(([title, body]) => (
              <div key={title} className="border-t-2 border-primary pt-5">
                <h3 className="font-display text-xl font-600 uppercase">{title}</h3>
                <p className="mt-3 text-sm text-asphalt-soft-ink">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — what we move, and it appears again almost nowhere else:
          three panels of unequal measure, then the equipment shot. */}
      <section id="services" className="scroll-mt-24 bg-background">
        <div className="mx-auto max-w-content px-gutter py-section">
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-700 uppercase">
            Three ways we move your freight
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            <ul className="grid gap-6 sm:grid-cols-3">
              {services.map(({ id, name, short, line, best, notes, icon: Icon }) => (
                <li key={id} className="flex flex-col border-t-2 border-primary pt-6">
                  <span className="inline-flex items-center gap-2 font-label text-xs font-600 tracking-[0.16em] text-muted-foreground uppercase">
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                    {short}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-600 uppercase">{name}</h3>
                  <p className="mt-2 font-medium">{line}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{best}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                    {notes.map((n) => (
                      <li key={n} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <figure className="overflow-hidden rounded-xl border border-border shadow-raised lg:sticky lg:top-28">
              <img
                src="/images/trailer-detail.webp"
                alt="A clean white dry van trailer standing in a yard."
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="border-t border-border bg-card px-5 py-4 text-sm text-muted-foreground">
                Dry van and flatbed equipment, sealed and run direct — no terminal handling on the
                way.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Coverage band — the one full-bleed red section on the page. */}
      <section id="coverage" className="scroll-mt-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-content px-gutter py-section">
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-700 uppercase">
            Where we run
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {trackRecord.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <Icon className="size-6" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl font-600 uppercase">{title}</h3>
                <p className="mt-3 text-sm text-primary-foreground">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 border-t border-primary-foreground/40 pt-6 font-label text-sm tracking-[0.08em] text-primary-foreground uppercase">
            Every lane on this page is inside Ontario. Ask before you assume a cross-border load.
          </p>
        </div>
      </section>

      {/* Quote — the form is the product here. */}
      <section id="quote" className="scroll-mt-24 bg-card">
        <div className="mx-auto max-w-content px-gutter py-section">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-700 uppercase">
                Get a freight quote
              </h2>
              <p className="mt-6 text-muted-foreground">
                Give dispatch the load and they price it, usually the same working day. The more you
                tell us about the freight and the timing, the fewer emails it takes.
              </p>
              <dl className="mt-8 space-y-5 border-t border-border pt-8 text-sm">
                <div>
                  <dt className="font-label text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Dispatch email
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${contact.dispatch}`}
                      className="inline-flex min-h-11 items-center gap-2.5 underline decoration-primary decoration-2 underline-offset-4"
                    >
                      <Mail className="size-4 text-primary" aria-hidden="true" />
                      {contact.dispatch}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-label text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Base
                  </dt>
                  <dd className="mt-2 flex min-h-11 items-center gap-2.5">
                    <MapPin className="size-4 text-primary" aria-hidden="true" />
                    {contact.address}
                  </dd>
                </div>
                <div>
                  <dt className="font-label text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Hours
                  </dt>
                  <dd className="mt-2 flex min-h-11 items-center gap-2.5">
                    <Clock className="size-4 text-primary" aria-hidden="true" />
                    Monday to Saturday, 6am – 8pm ET
                  </dd>
                </div>
              </dl>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Join us — the second action, on asphalt with the driver's view. */}
      <section id="join" className="scroll-mt-24 bg-asphalt text-asphalt-ink">
        <div className="mx-auto grid max-w-content gap-12 px-gutter py-section lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-700 uppercase">
              Join us
            </h2>
            <p className="mt-5 max-w-xl text-asphalt-soft-ink">
              We are hiring across the operation — on the road and in the office. One email reaches
              hiring for every role below, and resumes go to{' '}
              <a
                href={`mailto:${contact.careers}`}
                className="text-asphalt-ink underline decoration-primary decoration-2 underline-offset-4"
              >
                {contact.careers}
              </a>
              .
            </p>

            <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {roles.map(({ title, body, icon: Icon }) => (
                <li key={title} className="border-t border-asphalt-line pt-5">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-xl font-600 uppercase">{title}</h3>
                  <p className="mt-2 text-sm text-asphalt-soft-ink">{body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-12 font-label text-base tracking-[0.06em] uppercase">
                <a href={`mailto:${contact.careers}?subject=${encodeURIComponent('Application — Trans02 Logistics')}`}>
                  <Mail />
                  Email your resume
                </a>
              </Button>
              <p className="text-sm text-asphalt-soft-ink">
                Resume, licence and abstract, plus the role and region you want. A short note is
                enough to start.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-asphalt-line">
            <img
              src="/images/company_truck.webp"
              alt="Company truck image."
              width={900}
              height={1200}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover lg:aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* The one thing a visitor who scrolled this far still needs: the name, in mark form. */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-gutter py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="rounded-md bg-background px-4 py-3">
            <Brand className="h-9 w-auto sm:h-11" />
          </div>
          <p className="font-display text-xl font-600 uppercase sm:text-2xl">
            Ontario freight, quoted the same day.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 shrink-0 border-primary-foreground bg-transparent font-label text-base tracking-[0.06em] text-primary-foreground uppercase hover:bg-primary-foreground hover:text-primary"
          >
            <a href="#quote">Get a freight quote</a>
          </Button>
        </div>
      </section>
    </>
  )
}
