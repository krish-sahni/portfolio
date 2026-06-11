# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint (js/jsx, zero warnings allowed: `--max-warnings 0`)
- `npm run deploy` — publish `dist/` to GitHub Pages via gh-pages (run `npm run build` first)

There are no tests.

## Architecture

Single-page React 18 portfolio built with Vite, Tailwind CSS, framer-motion, and react-three-fiber/drei for 3D scenes. Plain JavaScript/JSX — no TypeScript.

### Data-driven content

Nearly all page content lives in `src/constants/index.js`: `navLinks`, `services`, `technologies`, `experiences`, `testimonials`, and `projects`. Components render whatever is in these arrays, so adding/editing a project, job, or skill is usually a constants-only change. Project objects also carry detail-page content (overview, image galleries, `future_work`, etc.) consumed by `ProjectDetail`.

### Routing

`App.jsx` uses `BrowserRouter` with two routes:
- `/` — the full one-page portfolio (About, Works, Experience, Tech, Contact sections)
- `/projects/:id` — `ProjectDetail`, which looks up `projects[id]` **by array index**, not by a slug. Reordering the `projects` array changes detail-page URLs. `Works.jsx` navigates to these pages.

The Hero section and `StarsCanvas` background are conditionally rendered in `App.jsx` based on whether the path starts with `/projects`. `public/_redirects` provides the SPA fallback (`/* /index.html 200`) for client-side routing on the host.

### Section pattern

Each homepage section component is wrapped by the `SectionWrapper` HOC (`src/hoc/SectionWrapper.jsx`), which adds framer-motion scroll-into-view animation and an anchor `id` used by navbar hash links (e.g. `export default SectionWrapper(Contact, "contact")`). Animation variant factories live in `src/utils/motion.js`; shared Tailwind class strings in `src/styles.js`.

### 3D / assets

- 3D canvases are in `src/components/canvas/` (Ball, Computers, Earth, PV, Stars). GLTF models are loaded with `useGLTF` from paths under `public/` (e.g. `/robotic_arm_kuka/scene.gltf`, `./planet/scene.gltf`).
- 2D images/GIFs live in `src/assets/` and are mostly re-exported through `src/assets/index.js`, though many files import assets directly.
- `.gif` files are tracked with Git LFS (see `.gitattributes`).

### Contact form

`Contact.jsx` sends via EmailJS using env vars `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, and `VITE_APP_EMAILJS_PUBLIC_KEY` (expected in a local `.env`, not committed).
