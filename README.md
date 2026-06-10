# Lanes — Creative Agency (Clone)

A pixel-faithful recreation of [lanes.framer.website](https://lanes.framer.website/),
rebuilt from scratch with a modern, component-based frontend stack.

## Stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS** (custom dark design tokens)
- **Framer Motion** (scroll reveals, staggers, count-ups, marquees, accordion, page chrome)
- **Inter** + **Chivo Mono** via `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero marquee, projects, services, stats, testimonials, FAQ, blog |
| `/projects` | Works index (6 case studies) |
| `/projects/[slug]` | Project case study (lunar, clonify, grotesks, zypher, blob, things) |
| `/about` | Studio, stats, team grid, awards |
| `/blog` | Article index (6 posts) |
| `/blog/[slug]` | Full article |
| `/contact` | Hero, contact form, FAQ |

## Structure

```
src/
  app/                 # routes (App Router)
  components/
    Navbar.tsx          # sticky pill nav + animated mobile menu
    Footer.tsx          # newsletter + giant wordmark
    sections/           # composable page sections
    ui/                 # Reveal, Marquee, cards, PageHero, Logo, SectionHeader
  data/                 # site copy, projects, blog content
public/assets/          # recreated image & SVG assets
```

## Design system

- Background `#0e0e0f`, surfaces `#18181a → #252729`
- Accent `#0099ff`, supporting mint `#2ee6a6` / pink `#ff5edb`
- Display type set tight (`-0.04em`), mono used for eyebrows/meta
- Global film-grain noise overlay, glass nav, radial ambient glows

## Animations

Scroll-triggered fade/slide reveals, staggered list/grid entrances, seamless
infinite marquees, in-view number count-ups, height-animated FAQ accordion,
layout-animated nav indicator, hover image zoom, and animated mobile menu —
all eased with `cubic-bezier(0.22, 1, 0.36, 1)` for 60fps motion.

> Content and imagery reproduce the original Framer template for fidelity;
> all implementation code is original.
