import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const errors = [];
page.on("console", m => { if (m.type() === "error") errors.push(m.text().slice(0, 200)); });
page.on("pageerror", e => errors.push("PAGEERROR: " + String(e).slice(0, 300)));

await page.goto("http://localhost:5173/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(5000);

const probe = await page.evaluate(() => {
  const span = document.querySelector("#projects");
  if (!span) return { found: false };
  const section = span.closest("section") || span.parentElement;
  const r = section.getBoundingClientRect();
  const style = getComputedStyle(section);
  // find project card-ish elements
  const cards = section.querySelectorAll("div[class*='bg-tertiary']");
  const imgs = [...section.querySelectorAll("img")].map(i => ({
    src: i.src.split("/").pop().slice(0, 40),
    complete: i.complete,
    nw: i.naturalWidth,
    w: Math.round(i.getBoundingClientRect().width),
    h: Math.round(i.getBoundingClientRect().height),
  }));
  return {
    found: true,
    sectionHeight: Math.round(r.height),
    sectionTop: Math.round(r.top + window.scrollY),
    opacity: style.opacity,
    transform: style.transform.slice(0, 60),
    cardCount: cards.length,
    cardSample: cards.length ? {
      h: Math.round(cards[0].getBoundingClientRect().height),
      opacity: getComputedStyle(cards[0]).opacity,
      parentOpacity: getComputedStyle(cards[0].parentElement).opacity,
      parentTransform: getComputedStyle(cards[0].parentElement).transform.slice(0, 60),
    } : null,
    imgs: imgs.slice(0, 12),
    textPreview: section.innerText.slice(0, 200),
  };
});
console.log(JSON.stringify(probe, null, 2));

// count canvases / webgl contexts
const canvasInfo = await page.evaluate(() => {
  const canvases = [...document.querySelectorAll("canvas")];
  return { count: canvases.length };
});
console.log("canvases:", JSON.stringify(canvasInfo));
console.log("console errors:", JSON.stringify(errors.slice(0, 15), null, 2));

// network: how many bytes do GIFs weigh?
await browser.close();
