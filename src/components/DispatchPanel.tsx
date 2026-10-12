import { Clock, Gauge, Route, Truck } from 'lucide-react'

const legs = [
  { from: 'Brampton', to: 'North York', km: 42, eta: 'Same day', load: 'LTL' },
  { from: 'Mississauga', to: 'Trenton', km: 210, eta: 'Overnight', load: 'FTL' },
  { from: 'Toronto', to: 'London', km: 190, eta: 'Next morning', load: 'Expedited' },
]

/* The product's own screen, built in code: an illustration of the dispatch desk
   the quote form feeds, with sample legs — never a claim about this carrier's
   volume or performance. */
export function DispatchPanel() {
  return (
    <div
      role="img"
      aria-label="A dispatch board showing three sample Ontario legs with service type and estimated delivery."
      className="w-full rounded-xl border border-asphalt-line bg-asphalt-soft/95 p-5 shadow-raised backdrop-blur sm:p-6"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="font-label text-xs font-600 tracking-[0.16em] text-asphalt-soft-ink uppercase">
          Dispatch board
        </p>
        <span className="inline-flex items-center gap-2 rounded-full border border-asphalt-line px-3 py-1 font-label text-xs tracking-[0.08em] text-asphalt-ink uppercase">
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 rounded-full bg-primary" />
          </span>
          Ontario only
        </span>
      </div>

      <ul className="mt-5 divide-y divide-asphalt-line border-y border-asphalt-line">
        {legs.map((leg) => (
          <li key={`${leg.from}-${leg.to}`} className="grid grid-cols-[1fr_auto] gap-2 py-3.5">
            <div className="min-w-0">
              <p className="flex items-center gap-2 truncate font-body text-sm text-asphalt-ink">
                <Route className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {leg.from} <span className="text-asphalt-soft-ink">→</span> {leg.to}
              </p>
                <p className="mt-1 pl-6 font-label text-xs tracking-[0.06em] text-asphalt-muted uppercase">
                {leg.load} · {leg.km} km
              </p>
            </div>
            <p className="self-center font-mono text-xs text-asphalt-ink">{leg.eta}</p>
          </li>
        ))}
      </ul>

      <dl className="mt-5 grid grid-cols-3 gap-3">
        <div>
          <dt className="flex items-center gap-1.5 font-label text-xs tracking-[0.08em] text-asphalt-soft-ink uppercase">
            <Truck className="size-3.5" aria-hidden="true" />
            Fleet
          </dt>
          <dd className="mt-1 font-display text-2xl font-600 text-asphalt-ink">FTL · LTL</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 font-label text-xs tracking-[0.08em] text-asphalt-soft-ink uppercase">
            <Clock className="size-3.5" aria-hidden="true" />
            Expedited
          </dt>
          <dd className="mt-1 font-display text-2xl font-600 text-asphalt-ink">Direct</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 font-label text-xs tracking-[0.08em] text-asphalt-soft-ink uppercase">
            <Gauge className="size-3.5" aria-hidden="true" />
            Quote back
          </dt>
          <dd className="mt-1 font-display text-2xl font-600 text-asphalt-ink">Same day</dd>
        </div>
      </dl>
    </div>
  )
}
