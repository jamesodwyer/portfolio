# Auto-scrolling device mockups — Ticketmaster GDS case study

**Date:** 2026-07-21
**Status:** Approved design, pending implementation plan

## Goal

Showcase long-form product pages in the `ticketmaster-gds` case study using
device mockups whose tall page images **auto-scroll (pan) top→bottom on a
loop**. One MacBook frame for a tall desktop page, one iPhone frame for a tall
mobile page. Replaces the existing generic mockup slideshows on this study only.

## Assets

Source images currently live in `public/scrolling content/` (spaces in the path
are fragile for URLs). Copy the two used images into
`public/images/ticketmaster-gds/` with clean kebab-case names:

| Source file                                          | Destination                                     | Dims        | Frame   |
|------------------------------------------------------|-------------------------------------------------|-------------|---------|
| `Black NFL 2024 Overview - Optimisation + Reskin.png`| `nfl-overview.png`                              | 2880×15878  | MacBook |
| `ios_Homepage.png`                                   | `ios-homepage.png`                              | 780×7506    | iPhone  |

The three `Hero_concept_*` images are **out of scope** for this change (they are
not tall scrolling pages). Left in `public/scrolling content/` for possible
later use. Do not delete source files.

## Component: `ScrollingFrame`

New client component `src/components/ScrollingFrame.tsx`.

```ts
interface ScrollingFrameProps {
  src: string;                       // tall page image
  variant: "macbook" | "iphone";
  className?: string;
  durationMs?: number;               // full pan cycle; default scales sensibly
}
```

### Behaviour

- Composites `src` inside a device frame and **auto-pans it top→bottom then
  back**, on an infinite loop, with a hold/pause at each end.
- Pan is a CSS keyframe animation translating the image within a
  fixed-aspect-ratio clipping window (`overflow: hidden`). The image is set to
  `width: 100%; height: auto`, so its rendered height depends on its natural
  aspect ratio; the animation translates by `calc(100% - <window height>)` using
  `transform: translateY(...)` on the inner image relative to the window. Using
  percentage translate on the image itself keeps any-length image working
  without hardcoding pixel heights.
- Easing: `ease-in-out`; hold at top and bottom achieved with keyframe stops
  (e.g. 0%/10% at top, 45%/55% at bottom, 90%/100% back at top).

### Frames

- **`macbook`** — reuse the existing frame asset
  `public/mockup-slides/images/mockup.png` and the existing `.mockup` /
  `.mockup__screen` CSS geometry (screen inset: left 11.8%, top 4.9%, width
  76.4%, height 75.6%; frame aspect 1008/635). The scrolling image replaces the
  crossfading slides inside `.mockup__screen`.
- **`iphone`** — drawn in CSS (no new binary asset): rounded-rectangle body,
  dark bezel, a notch/pill at the top, subtle side buttons. Screen is an inner
  `overflow: hidden` window with the scrolling image. Styling matches the
  Swiss/minimal aesthetic (neutral dark frame, thin borders).

### Accessibility

- Images are decorative: `alt=""` + `aria-hidden="true"`.
- Under `prefers-reduced-motion: reduce`: disable the pan animation and make the
  screen window `overflow-y: auto` so the full page is reachable by manual
  scroll. Consistent with the existing reduced-motion handling in `globals.css`.

### Responsive

- Renders at all breakpoints (scales fluidly).
- MacBook frame: full width of its container.
- iPhone frame: constrained max-width (~360px) and **offset within the grid**
  (not centered) for an editorial feel — e.g. placed in a grid column with
  surrounding whitespace.

## Data model (`src/lib/data.ts`)

Add an optional field to the `CaseStudy` interface:

```ts
scrollingFrames?: Array<{
  src: string;
  variant: "macbook" | "iphone";
  position: "hero" | "after-challenge" | "after-solution";
}>;
```

On the `ticketmaster-gds` entry:

- **Remove** `heroSlideshow` and `additionalSlideshows` (the slide8–13
  references).
- **Add**:
  ```ts
  scrollingFrames: [
    { src: "/images/ticketmaster-gds/nfl-overview.png", variant: "macbook", position: "after-challenge" },
    { src: "/images/ticketmaster-gds/ios-homepage.png", variant: "iphone", position: "after-solution" },
  ],
  ```

`MockupSlideshow` and the `heroSlideshow`/`additionalSlideshows` fields remain in
place for other case studies — only the `ticketmaster-gds` data changes.

## Rendering (`src/app/work/[slug]/CaseStudyClient.tsx`)

- Add a `renderScrollingFrame(frame, key)` helper mirroring the existing
  `renderSlideshow` wrapper (same `motion.div` fade-in, `py-grid` section).
  - MacBook: full-width within `grid-container`.
  - iPhone: constrained/offset column layout.
- Filter `study.scrollingFrames` by `position` and render in the matching slots:
  - `after-challenge` — where `slideshowsAfterChallenge` renders today.
  - `after-solution` — where `slideshowsAfterSolution` renders today.
  - `hero` — hero image slot (unused for this study, but supported).
- The existing `heroSlideshow` / `additionalSlideshows` render paths stay for
  studies that still use them. `ticketmaster-gds` no longer has those fields, so
  it naturally falls through to the new `scrollingFrames` rendering.
- The hero image section: with `heroSlideshow` removed and no `hero`-position
  scrolling frame, `ticketmaster-gds` falls back to its static `hero`
  (`hero.png`) — acceptable and unchanged.

## CSS (`src/app/globals.css`)

- Add `.scroll-frame`, iPhone frame styles (`.iphone`, `.iphone__screen`,
  notch, buttons), and the pan keyframes.
- Reuse `.mockup*` classes for the MacBook variant.
- Add reduced-motion overrides in the existing `@media (prefers-reduced-motion:
  reduce)` block.

## Out of scope

- Hero-concept images.
- Replacing the static `hero.png`.
- Changes to other case studies.

## Testing / verification

- `npm run build` (or lint/typecheck) passes.
- Visual check via the dev server: both frames render, auto-pan loops smoothly,
  iPhone is narrower/offset, MacBook full-width.
- Reduced-motion check: animation stops, content manually scrollable.
- Existing Playwright suites (`responsive`, `accessibility`, `functional`) still
  pass.
