import { test, expect } from "@playwright/test";

async function bypassPasswordGate(page: any) {
  await page.addInitScript(() => {
    localStorage.setItem("portfolio-access", "true");
  });
}

// ── Navigation ──────────────────────────────────────────────────────────────

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await bypassPasswordGate(page);
  });

  test("nav links work correctly", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(1500);

    // ABOUT
    await page.click('nav a[href^="/about"]');
    await expect(page).toHaveURL(/\/about\/?$/);
    await expect(page.locator("h1")).toBeVisible();

    // CONTACT
    await page.click('nav a[href^="/contact"]');
    await expect(page).toHaveURL(/\/contact\/?$/);
    await expect(page.locator("h1")).toBeVisible();

    // Home / WORK
    await page.click('nav a[href="/"]');
    await expect(page).toHaveURL("/");
  });
});

// ── Case Study Cards ────────────────────────────────────────────────────────

test.describe("Case Study Cards", () => {
  test.beforeEach(async ({ page }) => {
    await bypassPasswordGate(page);
  });

  test("cards exist on home page", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(1500);

    const cards = page.locator("article");
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(4);
    console.log(`Found ${count} case study cards`);
  });

  test("cards link to correct case study pages", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(1500);

    const expectedSlugs = [
      "icon-review-ai",
      "ticketmaster-gds",
      "gds-mcp",
      "ai-design-workflows",
      "atg",
      "hargreaves-lansdown",
    ];

    // trailingSlash is enabled, so hrefs carry a trailing slash; match either
    // form so this doesn't break if that config changes.
    for (const slug of expectedSlugs) {
      const link = page.locator(`a[href^="/work/${slug}"]`).first();
      await expect(link).toBeAttached();
    }
  });
});

// ── 404 Page ────────────────────────────────────────────────────────────────

test.describe("404 Page", () => {
  test.beforeEach(async ({ page }) => {
    await bypassPasswordGate(page);
  });

  test("displays for invalid routes", async ({ page }) => {
    await page.goto("/nonexistent-page-xyz");
    await page.waitForTimeout(1500);

    await expect(page.locator("text=404")).toBeVisible();
    await expect(page.locator("text=BACK TO HOME")).toBeVisible();
  });

  test("back to home link works", async ({ page }) => {
    await page.goto("/nonexistent-page-xyz");
    await page.waitForTimeout(1500);

    await page.click("text=BACK TO HOME");
    await expect(page).toHaveURL("/");
  });
});

// ── External Links ──────────────────────────────────────────────────────────

test.describe("External Links", () => {
  test.beforeEach(async ({ page }) => {
    await bypassPasswordGate(page);
  });

  test("email link has correct href on contact page", async ({ page }) => {
    await page.goto("/contact");
    await page.waitForTimeout(1500);

    const link = page.locator('a[href^="mailto:"]').first();
    await expect(link).toBeAttached();
    const href = await link.getAttribute("href");
    expect(href).toContain("mailto:");
  });

  test("any external links carry noopener", async ({ page }) => {
    await page.goto("/contact");
    await page.waitForTimeout(1500);

    // The contact page currently exposes a mailto link only; this guards the
    // rel attribute if social or other outbound links are added back.
    const externalLinks = page.locator('a[target="_blank"]');
    for (let i = 0; i < (await externalLinks.count()); i++) {
      expect(await externalLinks.nth(i).getAttribute("rel")).toContain("noopener");
    }
  });
});
