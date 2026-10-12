# Trans02 Logistics Inc. — design brief

One page that does two jobs: a shipper in the GTA or anywhere in Ontario
requests a freight quote, and a driver, dispatcher, office applicant or owner
operator sends a resume. Everything below serves one of those two actions.

## Palette and type

The palette is taken from the mark. A white ground (`--background`) with asphalt
ink (`--foreground`) for text; **signal red** (`--primary`, `#d81a1f`) is the
mark's own red and does the work of the accent — the primary buttons, key rules,
the quote panel's header and one full-bleed band. It is deliberately scarce:
where everything is red, nothing is. An asphalt key (`--asphalt`, `--asphalt-soft`,
`--asphalt-ink`, `--asphalt-muted`, `--asphalt-line`) carries the hero, the
coverage band and the footer, so the page alternates white, grey and dark rather
than sitting on one pale surface.

Type is a condensed industrial display face over a neutral grotesque: **Saira
Condensed** for headlines and uppercase labels — tall and narrow, the shape of
trailer lettering — and **Inter** for body copy and every form field, where
legibility on a phone matters more than character.

Every value lives in `src/theme.css`: colour, the faces, the type scale, the
spacing rhythm, radii, shadow and motion. `src/index.css` only imports it and
sets the base layer. Nothing hardcodes a colour, a font stack, a radius or a
shadow — change the token and every component follows.

One colour scheme, deliberately. A design is light or it is dark; there is no
`prefers-color-scheme` override unless the owner asks for one.

## Faces

`--font-heading` and `--font-label` are Saira Condensed; `--font-body` is Inter —
the `font-display`, `font-label` and `font-sans` classes. `font-mono` is a real
monospace stack, used only for the sample figures inside the quote panel mockup.
All three faces load together in `src/fonts.css`; changing one means changing
the import and the token together, or the page renders the fallback stack.

## Components

`src/components/ui` holds unstyled shadcn primitives — button, input, label,
textarea, select, card, sheet, accordion and the rest. They are raw material,
not a layout. There is no section library: every section is composed for the
page it is on. The one heavy composition is the quote panel in the hero — a
stylised dispatch board built from divs and type, shown as an illustration of the
form below it, never as a claim of figures.

## Shell

The page carries its own sticky top bar (`SiteHeader`): the Trans02 mark at the
left, the section links in the middle, one red *Get a freight quote* button at the
right, and at 360 a single menu control that opens a sheet with a visible close.
The footer (`SiteFooter`) repeats the mark on the asphalt key, with dispatch and
careers emails, the Mississauga ON base, the hiring roles, the service area, the
photo credit and the year. There is no About or Contact route: the brief asked
for sections, not pages, so `About` and `Identity` are sections of `/`.

## Shell

The scaffold ships no header, navigation or footer, and no page beyond a
placeholder home and a 404. Whether this site has a top bar, a side rail, a
footer at all — and which routes exist — is decided for this business. A route
nobody asked for is not built.

## Brand mark

The attached logo is the mark: `/images/trans02-logo.webp`, the black TRANS with
the red 02 under a red lightning bolt and `LOGISTICS` beneath it. It is never
redrawn, traced, recoloured or simplified, and because the lockup already spells
the name, the name is never set beside it. `src/components/Brand.tsx` renders
that file with the caller's size, and it is the only way the business appears —
header, footer and 404. Because it is a dark mark on a white ground, the footer
sits it on a small white plate rather than tinting it.
`public/favicon.svg` is the logo's own bolt in its own red on a white plate — a
plain shape, not a tracing of the lockup.

Icons are Lucide at **stroke-width 2** (the library default, inherited — no
per-icon override anywhere). They carry meaning, not decoration: the service
panel markers, the mail actions, the coverage band's location pin.

## Imagery

Photographs of the work, lit plainly, never styled for mood: dark asphalt, real
vehicles, real docks. Four images, each on a ground the section already had.

- `/images/gta-highway-dawn.webp` — the hero. A tractor-trailer on a multi-lane
  highway, framed so the left half stays quiet for the headline.
- `/images/loading-dock-trailer.webp` — the About section: a dock apron, so the
  section is about moving freight rather than about a person at a desk.
- `/images/trailer-detail.webp` — the Services section: a plain white dry van,
  no lettering, the equipment itself.
- `/images/driver-at-the-wheel.webp` — Join us, portrait: hands on the wheel.

No invented liveries, no text on vehicles. A future mp4 drops into the
`data-hero-video` slot behind the hero content without the layout changing.

## Voice

Direct, operational, unadorned — the register of a dispatch desk, not a brochure.
Real copy specific to this carrier: FTL, LTL and expedited; GTA local and
Ontario-wide only, with expansion said to be coming rather than claimed; dispatch
and careers inboxes given as real addresses because there is no backend and a
form cannot deliver a message. No lorem, no invented testimonials, prices, awards,
statistics or coverage. There is no phone number published, so no section asks
anyone to call.

## Motion

Two deliberate animations, both small: a slow scale-and-settle on the hero
photograph, and hover/active lifts on buttons and cards.
`prefers-reduced-motion` is handled once in `src/index.css`.
