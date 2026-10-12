import { Link } from 'react-router'
import { Brand } from '@/components/Brand'
import { SiteFooter } from '@/components/SiteFooter'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-[70vh] place-items-center bg-asphalt px-gutter text-center text-asphalt-ink">
        <div>
          <Brand className="h-9 w-auto" plate />
          <p className="mt-8 font-label text-sm font-600 tracking-[0.18em] text-asphalt-ink uppercase">
            404 — no such page
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.5rem)] font-700 uppercase">
            This lane does not exist
          </h1>
          <p className="mx-auto mt-4 max-w-md text-asphalt-soft-ink">
            The address may be mistyped, or the page has moved. Both of the things this site does are
            one tap away.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 font-label tracking-[0.06em] uppercase">
              <Link to="/#quote">Get a freight quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-asphalt-line bg-transparent font-label tracking-[0.06em] text-asphalt-ink uppercase hover:bg-asphalt-soft hover:text-asphalt-ink"
            >
              <Link to="/#join">Join us</Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
