# Claude working notes

## Reuse over bespoke

**Always reach for existing patterns, components, and well-maintained libraries
before writing something custom.** Don't build a bespoke element when there is
already an established pattern in this codebase or a battle-tested npm package
that solves the problem.

Order of preference:

1. **An existing component or utility in this repo** — extend it, parameterise
   it, or compose with it. Check `src/components/` and `src/lib/` first.
2. **An existing pattern in this repo** — match the shape of similar code so
   the codebase stays consistent (typography classes from `globals.css`, the
   `text-display` / `text-caption` / spacing tokens, the section structure
   used across the homepage and case studies, etc.).
3. **A small, well-maintained npm library** — when the problem is
   well-defined and someone has already solved it (e.g. a marquee, a slider,
   a carousel). Prefer libraries with high weekly downloads and active
   maintenance.
4. **Bespoke code** — only when none of the above fit, or when the bespoke
   version is genuinely simpler than pulling in a dependency.

If a custom implementation creeps up on edge cases (cropping, jumps, layout
collapses), that's a strong signal to stop and reach for a library instead of
adding more workarounds.
