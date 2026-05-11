import { test, expect } from "@playwright/test";

async function bypassPasswordGate(page: any) {
  await page.addInitScript(() => {
    localStorage.setItem("portfolio-access", "true");
  });
}

const viewports = [
  { width: 375, height: 812, name: "375px" },
  { width: 768, height: 1024, name: "768px" },
];

const pages = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/work/ticketmaster-gds", name: "Ticketmaster GDS" },
];

test.describe("Responsive - No Horizontal Overflow", () => {
  for (const vp of viewports) {
    for (const p of pages) {
      test(`no overflow on ${p.name} at ${vp.name}`, async ({ browser }) => {
        const context = await browser.newContext({
          viewport: { width: vp.width, height: vp.height },
        });
        const page = await context.newPage();
        await bypassPasswordGate(page);

        await page.goto(p.path);
        await page.waitForTimeout(2000);

        const overflow = await page.evaluate(() => ({
          docWidth: document.documentElement.scrollWidth,
          viewportWidth: document.documentElement.clientWidth,
          bodyWidth: document.body.scrollWidth,
        }));

        const hasOverflow =
          overflow.docWidth > overflow.viewportWidth + 1 ||
          overflow.bodyWidth > overflow.viewportWidth + 1;

        if (hasOverflow) {
          const offenders = await page.evaluate((vpW: number) => {
            const els = document.querySelectorAll("*");
            const bad: string[] = [];
            els.forEach((el) => {
              const r = el.getBoundingClientRect();
              if (r.right > vpW + 1) {
                bad.push(
                  `${el.tagName}.${el.className.toString().slice(0, 40)} (right: ${r.right.toFixed(0)}px)`
                );
              }
            });
            return bad.slice(0, 5);
          }, vp.width);
          console.log(
            `Overflow on ${p.name} at ${vp.name}: doc=${overflow.docWidth} > viewport=${overflow.viewportWidth}. Elements: ${offenders.join(", ")}`
          );
        }

        expect(hasOverflow).toBe(false);
        await context.close();
      });
    }
  }
});
