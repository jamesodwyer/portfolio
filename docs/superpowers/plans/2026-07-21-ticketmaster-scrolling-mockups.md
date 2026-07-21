# Ticketmaster Scrolling Device Mockups Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add auto-scrolling MacBook and iPhone device mockups to the `ticketmaster-gds` case study, replacing its existing generic mockup slideshows.

**Architecture:** A new client component `ScrollingFrame` composites a tall page image inside a device frame and auto-pans it top→bottom on a CSS-keyframe loop. Two variants: `macbook` (reuses the existing `mockup.png` frame + `.mockup` CSS) and `iphone` (frame drawn in CSS). Data-driven via a new optional `scrollingFrames` field on the `CaseStudy` type; rendered from `CaseStudyClient` in position slots that already exist for slideshows.

**Tech Stack:** Next.js (App Router), React 18 client components, TypeScript, Tailwind v4 + plain CSS in `globals.css`, framer-motion for section fade-ins, Playwright for e2e.

## Global Constraints

- **Verification model:** No unit-test harness exists. Verify with `npm run build` (typecheck + build), dev-server visual checks, and the existing Playwright suites in `tests/`. Do NOT introduce a new test framework.
- **Decorative images:** all mockup images use `alt=""` and `aria-hidden="true"`.
- **Reduced motion:** under `prefers-reduced-motion: reduce`, disable the pan animation and make the screen window `overflow-y: auto` (manual scroll). Add overrides inside the existing block at `src/app/globals.css:277`.
- **Scope:** only the `ticketmaster-gds` entry changes. `MockupSlideshow` and the `heroSlideshow`/`additionalSlideshows` fields must keep working for other studies.
- **Do not delete** source files in `public/scrolling content/`.
- **Naming:** verbose descriptive names; TypeScript types/annotations on all props and exported functions.
- **Frame geometry (MacBook), copy verbatim:** frame aspect `1008 / 635`; screen inset `left: 11.8%; top: 4.9%; width: 76.4%; height: 75.6%`.

---

### Task 1: Copy and rename image assets

**Files:**
- Create: `public/images/ticketmaster-gds/nfl-overview.png` (from `public/scrolling content/Black NFL 2024 Overview - Optimisation + Reskin.png`)
- Create: `public/images/ticketmaster-gds/ios-homepage.png` (from `public/scrolling content/ios_Homepage.png`)

**Interfaces:**
- Produces: two stable public URLs — `/images/ticketmaster-gds/nfl-overview.png` and `/images/ticketmaster-gds/ios-homepage.png` — consumed by Task 3 (data).

- [ ] **Step 1: Copy the two source images to clean paths**

```bash
cp "public/scrolling content/Black NFL 2024 Overview - Optimisation + Reskin.png" public/images/ticketmaster-gds/nfl-overview.png
cp "public/scrolling content/ios_Homepage.png" public/images/ticketmaster-gds/ios-homepage.png
```

- [ ] **Step 2: Verify both files exist and are non-empty**

Run: `ls -la public/images/ticketmaster-gds/nfl-overview.png public/images/ticketmaster-gds/ios-homepage.png`
Expected: both listed with sizes ~6.9MB and ~3.7MB respectively.

- [ ] **Step 3: Commit**

```bash
git add public/images/ticketmaster-gds/nfl-overview.png public/images/ticketmaster-gds/ios-homepage.png
git commit -m "Add Ticketmaster scrolling mockup image assets"
```

---

### Task 2: Add ScrollingFrame CSS (MacBook reuse + iPhone frame + pan keyframes)

**Files:**
- Modify: `src/app/globals.css` (append new block after the existing `.mockup*` rules near line 462; add reduced-motion overrides inside the block at line 277)

**Interfaces:**
- Produces CSS classes consumed by Task 4's component:
  - `.scroll-frame` — wrapper marker
  - `.scroll-window` — clipping viewport (`overflow: hidden`, `position: relative`)
  - `.scroll-track` — the moving image element (`position: absolute; top: 0; left: 0; width: 100%; height: auto`)
  - `.scroll-track.is-animated` — applies `animation: scroll-pan var(--pan-duration) ease-in-out infinite`
  - MacBook: reuses existing `.mockup`, `.mockup__frame`, `.mockup__screen`
  - iPhone: `.iphone`, `.iphone__frame`, `.iphone__screen`, `.iphone__notch`
- The pan animation reads a CSS variable `--pan-shift` (set inline by the component to `calc(-1 * (100% - <window aspect>))`... — implemented as translateY between `0` and `--pan-shift`).

- [ ] **Step 1: Append the ScrollingFrame CSS block**

Add after line 462 (end of `.mockup-slide.is-active`) in `src/app/globals.css`:

```css
/* ---------- Auto-scrolling device frames ---------- */
.scroll-window {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #000;
}
.scroll-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  will-change: transform;
}
.scroll-track.is-animated {
  animation: scroll-pan var(--pan-duration, 24s) ease-in-out infinite;
}
@keyframes scroll-pan {
  0%, 8%     { transform: translateY(0); }
  46%, 54%   { transform: translateY(var(--pan-shift, 0)); }
  92%, 100%  { transform: translateY(0); }
}

/* iPhone frame (drawn in CSS, no binary asset) */
.iphone {
  position: relative;
  width: 100%;
  max-width: 360px;
  aspect-ratio: 390 / 844;
  background: #0a0a0a;
  border-radius: 44px;
  padding: 12px;
  box-shadow: 0 0 0 2px #2a2a2a, 0 24px 60px rgba(0, 0, 0, 0.5);
}
.iphone__screen {
  position: absolute;
  inset: 12px;
  border-radius: 32px;
  overflow: hidden;
  background: #000;
}
.iphone__notch {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 34%;
  height: 22px;
  background: #0a0a0a;
  border-radius: 0 0 16px 16px;
  z-index: 3;
}
```

For the MacBook variant the component reuses `.mockup`/`.mockup__frame`/`.mockup__screen`; the scrolling image lives inside `.mockup__screen` via a nested `.scroll-window`.

- [ ] **Step 2: Add reduced-motion overrides**

Inside the existing `@media (prefers-reduced-motion: reduce)` block (`src/app/globals.css:277`), before the closing brace, add:

```css
  /* Auto-scroll frames: stop panning, allow manual scroll instead. */
  .scroll-track.is-animated {
    animation: none !important;
    transform: none !important;
  }
  .scroll-window {
    overflow-y: auto !important;
  }
```

- [ ] **Step 3: Verify the build still compiles CSS**

Run: `npm run build`
Expected: build succeeds (Compiled successfully / no CSS errors).

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "Add CSS for auto-scrolling device frames and iPhone mockup"
```

---

### Task 3: Extend CaseStudy data model and swap Ticketmaster data

**Files:**
- Modify: `src/lib/data.ts` (interface near lines 15-23; `ticketmaster-gds` entry lines 53-74)

**Interfaces:**
- Consumes: image URLs from Task 1.
- Produces: `CaseStudy.scrollingFrames?: Array<{ src: string; variant: "macbook" | "iphone"; position: "hero" | "after-challenge" | "after-solution" }>` — consumed by Task 5's rendering.

- [ ] **Step 1: Add the `scrollingFrames` field to the interface**

In `src/lib/data.ts`, after the `additionalSlideshows` field (line 23, before `overview`), add:

```ts
  scrollingFrames?: Array<{
    src: string;
    variant: "macbook" | "iphone";
    position: "hero" | "after-challenge" | "after-solution";
  }>;
```

- [ ] **Step 2: Replace the Ticketmaster slideshow data**

In the `ticketmaster-gds` entry, remove the `heroSlideshow` block (lines 53-58) and the `additionalSlideshows` block (lines 59-74), and replace them with:

```ts
    scrollingFrames: [
      {
        src: "/images/ticketmaster-gds/nfl-overview.png",
        variant: "macbook",
        position: "after-challenge",
      },
      {
        src: "/images/ticketmaster-gds/ios-homepage.png",
        variant: "iphone",
        position: "after-solution",
      },
    ],
```

- [ ] **Step 3: Typecheck**

Run: `npm run build`
Expected: build succeeds; no TypeScript errors about `scrollingFrames` or removed fields.

- [ ] **Step 4: Commit**

```bash
git add src/lib/data.ts
git commit -m "Add scrollingFrames data model and swap Ticketmaster mockups"
```

---

### Task 4: Create the ScrollingFrame component

**Files:**
- Create: `src/components/ScrollingFrame.tsx`
- Modify: `src/components/index.ts` (add export)

**Interfaces:**
- Consumes: CSS classes from Task 2; image URLs from Task 3.
- Produces: `export function ScrollingFrame(props: ScrollingFrameProps)` where

```ts
interface ScrollingFrameProps {
  src: string;
  variant: "macbook" | "iphone";
  className?: string;
  durationMs?: number;
}
```

**Implementation notes on the pan math:** The image is `width: 100%`, natural
height taller than the window. We need `--pan-shift` = how far up to translate
so the bottom of the image reaches the bottom of the window. On mount we read
the rendered image height and the window height and set
`--pan-shift: <windowHeight - imageHeight>px`. Recompute on resize.

- [ ] **Step 1: Write the component**

Create `src/components/ScrollingFrame.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollingFrameProps {
  /** Tall page image to pan through the device screen. */
  src: string;
  variant: "macbook" | "iphone";
  className?: string;
  /** Full pan cycle duration in ms. Defaults scale with content length. */
  durationMs?: number;
}

const MACBOOK_FRAME = "/mockup-slides/images/mockup.png";

export function ScrollingFrame({
  src,
  variant,
  className = "",
  durationMs,
}: ScrollingFrameProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [panShiftPx, setPanShiftPx] = useState(0);

  useEffect(() => {
    const recomputePanShift = () => {
      const windowElement = windowRef.current;
      const imageElement = imageRef.current;
      if (!windowElement || !imageElement) return;
      const overflow = imageElement.offsetHeight - windowElement.offsetHeight;
      setPanShiftPx(overflow > 0 ? -overflow : 0);
    };

    const imageElement = imageRef.current;
    if (imageElement && imageElement.complete) {
      recomputePanShift();
    }
    imageElement?.addEventListener("load", recomputePanShift);
    window.addEventListener("resize", recomputePanShift);
    return () => {
      imageElement?.removeEventListener("load", recomputePanShift);
      window.removeEventListener("resize", recomputePanShift);
    };
  }, [src]);

  // Longer pages pan for longer so the speed feels consistent.
  const resolvedDurationMs =
    durationMs ?? Math.min(60000, Math.max(16000, Math.abs(panShiftPx) * 24));

  const screenContent = (
    <div className="scroll-window" ref={windowRef}>
      <img
        ref={imageRef}
        className={panShiftPx < 0 ? "scroll-track is-animated" : "scroll-track"}
        src={src}
        alt=""
        aria-hidden="true"
        style={
          {
            "--pan-shift": `${panShiftPx}px`,
            "--pan-duration": `${resolvedDurationMs}ms`,
          } as React.CSSProperties
        }
      />
    </div>
  );

  if (variant === "macbook") {
    return (
      <div className={`mockup ${className}`}>
        <div className="mockup__screen">{screenContent}</div>
        <img className="mockup__frame" src={MACBOOK_FRAME} alt="" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`iphone ${className}`}>
      <div className="iphone__notch" />
      <div className="iphone__screen">{screenContent}</div>
    </div>
  );
}
```

- [ ] **Step 2: Export from the components barrel**

In `src/components/index.ts`, after the `MockupSlideshow` export line, add:

```ts
export { ScrollingFrame } from "./ScrollingFrame";
```

- [ ] **Step 3: Typecheck / build**

Run: `npm run build`
Expected: build succeeds; `ScrollingFrame` compiles with no type errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/ScrollingFrame.tsx src/components/index.ts
git commit -m "Add ScrollingFrame component for auto-panning device mockups"
```

---

### Task 5: Render scrolling frames in CaseStudyClient

**Files:**
- Modify: `src/app/work/[slug]/CaseStudyClient.tsx` (import line 6; add helper + derived arrays near lines 28-54; render in slots at lines 262-265 and 435-438)

**Interfaces:**
- Consumes: `ScrollingFrame` (Task 4), `study.scrollingFrames` (Task 3).

- [ ] **Step 1: Import ScrollingFrame**

Change line 6 from:

```tsx
import { Footer, MockupSlideshow } from "@/components";
```
to:
```tsx
import { Footer, MockupSlideshow, ScrollingFrame } from "@/components";
```

- [ ] **Step 2: Derive frame arrays and add a render helper**

After the `renderSlideshow` helper (after line 54), add:

```tsx
  const scrollingFrames = study.scrollingFrames ?? [];
  const framesAfterChallenge = scrollingFrames.filter(
    (f) => f.position === "after-challenge"
  );
  const framesAfterSolution = scrollingFrames.filter(
    (f) => f.position === "after-solution"
  );

  const renderScrollingFrame = (
    frame: { src: string; variant: "macbook" | "iphone" },
    key: number
  ) => (
    <section key={`frame-${key}`} className="py-grid">
      <div className="grid-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={
            frame.variant === "iphone"
              ? "grid grid-cols-12 gap-6"
              : undefined
          }
        >
          {frame.variant === "iphone" ? (
            <div className="col-span-12 md:col-start-3 md:col-span-4">
              <ScrollingFrame src={frame.src} variant="iphone" />
            </div>
          ) : (
            <ScrollingFrame src={frame.src} variant="macbook" />
          )}
        </motion.div>
      </div>
    </section>
  );
```

- [ ] **Step 3: Render frames after the Challenge**

After the existing `slideshowsAfterChallenge.map(...)` block (lines 262-265), add:

```tsx
      {/* Auto-scrolling device frames after the Challenge section */}
      {framesAfterChallenge.map((frame, index) =>
        renderScrollingFrame(frame, index)
      )}
```

- [ ] **Step 4: Render frames after the Solution**

After the existing `slideshowsAfterSolution.map(...)` block (lines 435-438), add:

```tsx
      {/* Auto-scrolling device frames after the Solution section */}
      {framesAfterSolution.map((frame, index) =>
        renderScrollingFrame(frame, index + 100)
      )}
```

- [ ] **Step 5: Build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 6: Commit**

```bash
git add src/app/work/[slug]/CaseStudyClient.tsx
git commit -m "Render auto-scrolling device frames in Ticketmaster case study"
```

---

### Task 6: Visual and accessibility verification

**Files:** none (verification only)

- [ ] **Step 1: Start the dev server**

Run: `npm run dev` (background) and open `http://localhost:3000/work/ticketmaster-gds`.

- [ ] **Step 2: Verify visually**

Confirm:
- MacBook frame appears after the Challenge, full-width, panning the NFL page top→bottom→top on a loop.
- iPhone frame appears after the Solution, narrower (~360px) and offset (not centered), panning the iOS homepage.
- No horizontal overflow; frames scale down without breaking on a narrow window.

- [ ] **Step 3: Verify reduced motion**

In the browser dev tools, emulate `prefers-reduced-motion: reduce` (Rendering tab). Reload and confirm: frames stop auto-panning and the screen windows are manually scrollable.

- [ ] **Step 4: Run the existing Playwright suites**

Run: `npx playwright test`
Expected: `responsive`, `accessibility`, and `functional` suites pass (no new failures vs. baseline). If Playwright browsers are missing, run `npx playwright install` first.

- [ ] **Step 5: Final confirmation**

No commit needed — verification task. Report results.

---

## Self-Review

**Spec coverage:**
- Assets copied/renamed → Task 1 ✅
- `ScrollingFrame` component (both variants, pan math, a11y, responsive) → Task 4 ✅
- MacBook reuses existing frame/CSS → Tasks 2 & 4 ✅
- iPhone drawn in CSS → Task 2 ✅
- Reduced-motion (stop pan + manual scroll) → Task 2 ✅
- Data model `scrollingFrames` + Ticketmaster swap (remove heroSlideshow/additionalSlideshows) → Task 3 ✅
- Rendering in after-challenge / after-solution slots, iPhone offset → Task 5 ✅
- MockupSlideshow untouched for other studies → confirmed (Task 3 only edits ticketmaster entry) ✅
- Hero-concept images out of scope → not referenced ✅
- Verification (build, visual, reduced-motion, Playwright) → Task 6 ✅

**Placeholder scan:** No TBD/TODO; all code steps include full code. ✅

**Type consistency:** `ScrollingFrameProps` (`src`, `variant`, `className?`, `durationMs?`) consistent across Tasks 4 & 5. `scrollingFrames` shape consistent across Tasks 3 & 5. CSS class names (`.scroll-window`, `.scroll-track`, `.is-animated`, `--pan-shift`, `--pan-duration`, `.iphone*`) consistent across Tasks 2 & 4. ✅

**Note on `hero` position:** the data model supports a `hero` position for completeness but Ticketmaster uses only `after-challenge`/`after-solution`; no hero-slot rendering is required, and the study falls back to its static `hero.png` (unchanged), matching the spec.
