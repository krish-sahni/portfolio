import { chromium } from "playwright";
import fs from "fs";

const viewports = [
  { name: "iphone-375x812", width: 375, height: 812 },
  { name: "iphone14-390x844", width: 390, height: 844 },
  { name: "ipad-768x1024", width: 768, height: 1024 },
  { name: "desktop-1440x900", width: 1440, height: 900 },
];

const outDir = "audit/shots";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const results = [];

for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle", timeout: 60000 }).catch(e => console.log("nav warn:", e.message));
  await page.waitForTimeout(6000); // let 3D models load

  // hero (above the fold)
  await page.screenshot({ path: `${outDir}/${vp.name}-hero.png` });

  // overflow check
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    const out = {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      hasHorizontalScroll: doc.scrollWidth > doc.clientWidth,
      offenders: [],
    };
    const vw = doc.clientWidth;
    document.querySelectorAll("*").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > vw + 1 || r.left < -1) && r.width < doc.scrollWidth * 2) {
        const cls = (typeof el.className === "string" ? el.className : "").slice(0, 90);
        out.offenders.push({ tag: el.tagName, cls, left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width) });
      }
    });
    out.offenders = out.offenders.slice(0, 25);
    return out;
  });
  results.push({ viewport: vp.name, ...overflow });

  // full page screenshot
  await page.screenshot({ path: `${outDir}/${vp.name}-full.png`, fullPage: true });

  // scroll through sections for mid-page shots
  for (const [label, sel] of [["about", "#about"], ["work", "#work"], ["contact", "#contact"]]) {
    const found = await page.evaluate((s) => {
      const el = document.querySelector(s);
      if (el) { el.scrollIntoView(); return true; }
      return false;
    }, sel);
    if (found) {
      await page.waitForTimeout(1500);
      await page.screenshot({ path: `${outDir}/${vp.name}-${label}.png` });
    }
  }
  await page.close();
}

await browser.close();
fs.writeFileSync("audit/overflow.json", JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
