import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Brand } from '@/components/Brand'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#join', label: 'Join us' },
]

/* A bar for a one-page operator: the mark, the four sections a visitor
   navigates by, one action. At 360 it becomes a single control and a sheet. */
export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center gap-6 px-gutter md:h-20">
        <a href="#top" className="flex items-center" aria-label="Trans02 Logistics Inc., back to the top">
          <Brand className="h-7 w-auto sm:h-8 md:h-9" />
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-label text-sm font-500 tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="lg" className="hidden font-label text-sm tracking-[0.06em] uppercase sm:inline-flex">
            <a href="#quote">Get a freight quote</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                className="md:hidden"
                aria-label="Open the menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="gap-0 p-0">
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <Brand className="h-7 w-auto" />
                <span className="sr-only">
                  <SheetTitle>Menu</SheetTitle>
                </span>
              </div>
              <nav aria-label="Sections" className="px-6 py-6">
                <ul className="flex flex-col">
                  {links.map((l) => (
                    <li key={l.href} className="border-b border-border last:border-b-0">
                      <SheetClose asChild>
                        <a
                          href={l.href}
                          className="block py-4 font-display text-2xl font-600 uppercase"
                        >
                          {l.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <SheetClose asChild>
                  <Button asChild size="lg" className="mt-6 w-full font-label tracking-[0.06em] uppercase">
                    <a href="#quote">Get a freight quote</a>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="outline" size="lg" className="mt-3 w-full font-label tracking-[0.06em] uppercase">
                    <a href="#join">Drive with us</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
