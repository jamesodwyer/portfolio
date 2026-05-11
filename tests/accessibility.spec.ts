import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function bypassPasswordGate(page: any) {
  await page.addInitScript(() => {
    localStorage.setItem("portfolio-access", "true");
  });
}

const pages = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/work/ticketmaster-gds", name: "Ticketmaster GDS Case Study" },
];

test.describe("Accessibility - WCAG 2.1 AA", () => {
  test.beforeEach(async ({ page }) => {
    await bypassPasswordGate(page);
  });

  for (const p of pages) {
    test(`axe scan on ${p.name} (${p.path})`, async ({ page }) => {
      await page.goto(p.path);
      await page.waitForTimeout(2000);

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const violations = results.violations;
      if (violations.length > 0) {
        const summary = violations.map((v) => {
          const nodes = v.nodes
            .map(
              (n) =>
                `  - HTML: ${n.html}\n    Target: ${n.target.join(", ")}`
            )
            .join("\n");
          return `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} instances)\n${nodes}`;
        });
        console.log(
          `\nAccessibility violations on ${p.name}:\n${summary.join("\n\n")}`
        );
      }

      expect(violations.length).toBe(0);
    });
  }
});
