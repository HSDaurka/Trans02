import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import { Meta } from '@/components/Meta'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

// Routes are code-split so the first paint carries only the landing page.
const NotFound = lazy(() => import('@/pages/NotFound'))

/* One page, one shell: the bar and the footer are the site's, and each route
   owns its own `main`. The brief asked for sections, not extra routes, so the
   only pages here are the page and the 404. */
export default function App() {
  return (
    <Suspense fallback={<div className="px-gutter py-24 text-sm text-muted-foreground">Loading…</div>}>
      <Routes>
        <Route
          index
          element={
            <>
              <Meta
                title="Trans02 Logistics Inc. — FTL, LTL and expedited freight in Ontario"
                description="Trans02 Logistics runs full truckload, LTL and expedited freight across the GTA and Ontario-wide from Mississauga. Send dispatch your load and get a rate the same day."
              />
              <SiteHeader />
              <main id="content">
                <Home />
              </main>
              <SiteFooter />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Meta
                title="Page not found — Trans02 Logistics Inc."
                description="This address does not exist. Request a freight quote or send your resume to the Trans02 Logistics team instead."
                ogImage="/images/trailer-detail.webp"
              />
              <NotFound />
            </>
          }
        />
      </Routes>
    </Suspense>
  )
}
