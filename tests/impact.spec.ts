import { test, expect } from "@playwright/test";

const withImpact = ["ticketmaster-gds", "gds-mcp", "ai-design-workflows", "icon-review-ai"];

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("portfolio-access", "true");
  });
});

for (const slug of withImpact) {
  test(`impact metrics render in hero on ${slug}`, async ({ page }) => {
    await page.goto(`/work/${slug}`);
    const tiles = page.locator("dl dt");
    await expect(tiles).toHaveCount(4);
    // Metrics sit in the hero, above the hero image — visible without scrolling.
    await expect(tiles.first()).toBeInViewport();
  });
}

test("studies without impact data render no metrics", async ({ page }) => {
  await page.goto("/work/atg");
  await expect(page.getByText("CHALLENGE", { exact: true })).toBeVisible();
  await expect(page.locator("dl dt")).toHaveCount(0);
});

// Pie and flip-card tiles have different internal structures, and labels can
// wrap to two lines — both previously knocked rows out of alignment.
for (const slug of withImpact) {
  for (const width of [1440, 1024, 900]) {
    test(`impact rows stay aligned on ${slug} @${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`/work/${slug}`);
      await page.waitForTimeout(2600); // let counters settle

      const tiles = await page.evaluate(() =>
        [...document.querySelectorAll("dl > div")].map((g) => ({
          value: Math.round((g.querySelector("dd:last-of-type") as HTMLElement).getBoundingClientRect().top),
          label: Math.round((g.querySelector("dt") as HTMLElement).getBoundingClientRect().top),
          detail: Math.round((g.querySelector("dd") as HTMLElement).getBoundingClientRect().top),
        }))
      );

      const perRow = width >= 1024 ? 4 : 2;
      for (let start = 0; start < tiles.length; start += perRow) {
        const row = tiles.slice(start, start + perRow);
        for (const key of ["value", "label", "detail"] as const) {
          const tops = row.map((t) => t[key]);
          expect(Math.max(...tops) - Math.min(...tops)).toBe(0);
        }
      }
    });
  }
}

test("metric values share a baseline across each row", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 820 });
  await page.goto("/work/icon-review-ai");
  const groups = page.locator("dl > div");
  await expect(groups).toHaveCount(4);

  const tops: number[] = [];
  for (let i = 0; i < 4; i++) {
    const box = await groups.nth(i).locator("dd").last().boundingBox();
    tops.push(Math.round(box!.y));
  }
  // Tiles have detail lines of differing length; the numerals must still line up.
  expect(Math.max(...tops) - Math.min(...tops)).toBe(0);
});

test("hero embed loads instead of 404ing", async ({ page }) => {
  // Vercel serves the demo at /interactive/ and 404s on /interactive/index.html;
  // `next dev` does the opposite, since it won't serve a public/ directory
  // index. The export is what ships, so assert against a built export when one
  // is being served (npm run build && npx serve out -p 3311).
  const EXPORT_BASE = "http://localhost:3311";
  const reachable = await fetch(`${EXPORT_BASE}/interactive/`)
    .then((r) => r.ok)
    .catch(() => false);
  test.skip(!reachable, "no built export served on :3311 — run `npx serve out -p 3311`");

  const failed: string[] = [];
  page.on("response", (r) => {
    if (r.status() >= 400 && !r.url().includes("_vercel/insights")) {
      failed.push(`${r.status()} ${r.url()}`);
    }
  });
  await page.goto(`${EXPORT_BASE}/work/ai-design-workflows/`);
  await page.waitForTimeout(2500);

  expect(failed).toEqual([]);
  await expect(page.locator("text=This page doesn't exist.")).toHaveCount(0);
  expect(page.frames().length).toBeGreaterThan(1);
});
