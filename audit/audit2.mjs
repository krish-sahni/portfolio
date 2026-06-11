import { chromium } from "playwright";
import fs from "fs";

const outDir = "audit/shots2";
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto("http://localhost:5173/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(5000);

// slow-scroll the whole page so every whileInView animation fires and settles
await page.evaluate(async () => {
  const h = document.body.scrollHeight;
  for (let y = 0; y < h; y += 300) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 120));
  }
});
await page.waitForTimeout(2000);

const sections = ["#about", "#projects", "#work", "#contact"];
for (const sel of sections) {
  const ok = await page.evaluate(s => {
    const el = document.querySelector(s);
    if (!el) return false;
    el.scrollIntoView();
    return true;
  }, sel);
  await page.waitForTimeout(2500);
  if (ok) await page.screenshot({ path: `${outDir}/m390-${sel.slice(1)}-settled.png` });
  else console.log("missing section", sel);
}

// scroll a bit further into projects to see a project card fully
const projY = await page.evaluate(() => {
  const el = document.querySelector("#projects");
  return el ? el.getBoundingClientRect().top + window.scrollY : null;
});
if (projY) {
  await page.evaluate(y => window.scrollTo(0, y + 500), projY);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${outDir}/m390-project-card.png` });
}

// tech section (no anchor? find canvas balls area) - scroll between work and contact
await page.evaluate(() => {
  const el = document.querySelector("#contact");
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 900);
});
await page.waitForTimeout(2500);
await page.screenshot({ path: `${outDir}/m390-tech.png` });

// open mobile nav menu
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);
const menuImg = page.locator("img[alt='menu']");
if (await menuImg.count()) {
  await menuImg.click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${outDir}/m390-menu-open.png` });
} else {
  console.log("no menu img found");
}

// project detail page on mobile
await page.goto("http://localhost:5173/projects/0", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(3500);
await page.screenshot({ path: `${outDir}/m390-projectdetail-top.png` });
const pd = await page.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));
console.log("project detail overflow:", JSON.stringify(pd));
await page.evaluate(() => window.scrollTo(0, 1200));
await page.waitForTimeout(1500);
await page.screenshot({ path: `${outDir}/m390-projectdetail-mid.png` });

// also desktop project detail
await page.setViewportSize({ width: 1440, height: 900 });
await page.waitForTimeout(2500);
await page.screenshot({ path: `${outDir}/d1440-projectdetail.png` });

// font-size scan on mobile home
await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://localhost:5173/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(4000);
const tiny = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll("p,span,a,h1,h2,h3,h4,li,button,div").forEach(el => {
    if (!el.innerText || el.children.length > 0) return;
    const fs = parseFloat(getComputedStyle(el).fontSize);
    if (fs < 13 && el.innerText.trim().length > 3) {
      out.push({ fs, tag: el.tagName, text: el.innerText.trim().slice(0, 50), cls: String(el.className).slice(0, 70) });
    }
  });
  return out.slice(0, 20);
});
console.log("small text:", JSON.stringify(tiny, null, 2));

await browser.close();
