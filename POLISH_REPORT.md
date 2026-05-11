# Portfolio Polish Report
**Date:** 14 January 2026
**Status:** Ready for review

---

## Executive Summary

The portfolio has a solid foundation with Swiss poster-style design, but needs consistency fixes and missing functionality before it's production-ready.

**Overall Score: 6/10** → Target: 9/10

---

## Critical Issues (Must Fix)

### 1. Design System Inconsistency
**Priority: HIGH**

The codebase uses two conflicting design systems:
- **Homepage/Footer/Header:** Uses `swiss-*` classes (correct)
- **About/NotFound/CaseStudy pages:** Uses `bauhaus-*` classes (undefined)

| File | Issue | Fix Required |
|------|-------|--------------|
| `about/page.tsx` | Uses `text-bauhaus-gray`, `bg-bauhaus-red`, `border-bauhaus-black` | Replace with `text-swiss-muted`, `bg-swiss-yellow`, `border-swiss-gray` |
| `not-found.tsx` | Uses `border-bauhaus-black`, `text-bauhaus-gray` | Replace with Swiss equivalents |
| `CaseStudyClient.tsx` | Uses `bauhaus-*` color maps | Update to Swiss color system |

**Affected classes to replace:**
```
text-bauhaus-gray → text-swiss-muted
text-bauhaus-black → text-swiss-white
bg-bauhaus-red → bg-swiss-yellow (accent)
bg-bauhaus-blue → bg-swiss-white
bg-bauhaus-yellow → bg-swiss-yellow
border-bauhaus-black → border-swiss-gray
bauhaus-line-red → swiss-line-yellow
```

### 2. Missing Pages
**Priority: HIGH**

Header links to pages that don't exist:
- [ ] `/projects` - Returns 404
- [ ] `/contact` - Returns 404

**Action:** Create these pages or update header navigation.

### 3. Color Map in CaseStudyClient.tsx
**Priority: HIGH**

```typescript
// Current (broken)
const colorMap = {
  red: "bg-bauhaus-red",
  blue: "bg-bauhaus-blue",
  yellow: "bg-bauhaus-yellow",
  black: "bg-bauhaus-black",
};

// Should be
const colorMap = {
  red: "bg-red-600",
  blue: "bg-blue-600",
  yellow: "bg-swiss-yellow",
  black: "bg-swiss-black",
};
```

---

## Medium Issues (Should Fix)

### 4. Spacing Inconsistencies
**Priority: MEDIUM**

| Page | Current Spacing | Target Spacing |
|------|-----------------|----------------|
| Homepage | `py-grid-8` (360px) | ✓ Correct |
| About | `py-grid-3` (96px) | Update to `py-grid-6` |
| Case Study | `py-grid-3` (96px) | Update to `py-grid-6` |

### 5. Typography Consistency
**Priority: MEDIUM**

- Some pages use `text-heading` inconsistently
- Line heights vary between pages
- Add `leading-relaxed` to body text throughout

### 6. Dark Theme Consistency
**Priority: MEDIUM**

- About page designed for light theme (uses black text on assumed white background)
- Should match dark theme with white text on black background

---

## Low Priority (Nice to Have)

### 7. Image Placeholders
- Case study hero images show colored rectangles
- Need actual images in `/public/images/`

### 8. Accessibility
- [ ] Add `aria-label` to icon-only buttons
- [ ] Ensure color contrast meets WCAG AA
- [ ] Add skip navigation link
- [ ] Test keyboard navigation

### 9. Performance
- [ ] Add image optimization with `next/image`
- [ ] Implement lazy loading for below-fold content
- [ ] Add loading states

### 10. SEO
- [ ] Add meta descriptions to each page
- [ ] Add OpenGraph images
- [ ] Add structured data (JSON-LD)

---

## Testing Checklist

### Run on Your Machine

```bash
# Install Playwright
npm install -D @playwright/test
npx playwright install

# Run visual regression tests
npx playwright test

# Run accessibility audit
npm install -D @axe-core/playwright
```

### Manual Testing Checklist
- [ ] Homepage loads without console errors
- [ ] All 4 case studies accessible
- [ ] Navigation works on all pages
- [ ] Mobile responsive (320px, 768px, 1024px, 1440px)
- [ ] Animations smooth (60fps)
- [ ] Dark theme consistent throughout

---

## Action Plan for Tomorrow

### Phase 1: Critical Fixes (2 hours)
1. Update all `bauhaus-*` classes to `swiss-*` equivalents
2. Create `/projects` page (or update nav)
3. Create `/contact` page (or update nav)
4. Fix color maps in CaseStudyClient.tsx

### Phase 2: Consistency (1 hour)
1. Update spacing on About and Case Study pages
2. Ensure dark theme throughout
3. Standardize typography

### Phase 3: Polish (1 hour)
1. Add placeholder images
2. Test all routes
3. Run build verification
4. Commit and push

### Phase 4: Testing (30 mins)
1. Run Playwright tests locally
2. Test on mobile device
3. Cross-browser check (Chrome, Safari, Firefox)

---

## Files to Modify

| File | Changes Needed |
|------|----------------|
| `src/app/about/page.tsx` | Replace bauhaus classes, update spacing, dark theme |
| `src/app/not-found.tsx` | Replace bauhaus classes, dark theme |
| `src/app/work/[slug]/CaseStudyClient.tsx` | Fix color maps, replace bauhaus classes |
| `src/components/Header.tsx` | Update nav links if removing pages |
| `src/app/projects/page.tsx` | CREATE - New page |
| `src/app/contact/page.tsx` | CREATE - New page |
| `src/app/globals.css` | Verify all utilities exist |

---

## Success Criteria

- [ ] Zero console errors
- [ ] All pages render correctly in dark theme
- [ ] Build passes without warnings
- [ ] Lighthouse score > 90 (Performance, Accessibility)
- [ ] All links work (no 404s)
- [ ] Consistent spacing and typography

---

## Commands to Run

```bash
# Type check
npx tsc --noEmit

# Build check
npm run build

# Dev server
npm run dev

# Lint (after fixing config)
npm run lint
```

---

*Report generated by automated audit. Review and prioritize based on timeline.*
