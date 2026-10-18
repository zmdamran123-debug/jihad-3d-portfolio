# Jihad — 3D Personal Portfolio

A bilingual (English/Bangla), responsive portfolio built with React + Vite, Three.js through React Three Fiber, Drei, Framer Motion, and Lucide icons. Uses the two supplied photos in `public/images/`.

## Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm
- Internet connection on first install (npm packages and Google Fonts)

## Run locally
1. Extract the ZIP.
2. Open a terminal in the `jihad-3d-portfolio` folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production
```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy free on Vercel
1. Create a GitHub account if you don't have one.
2. Create a new repository and upload the contents of this folder (not the ZIP itself).
3. Sign in to Vercel with GitHub and choose **Add New → Project**.
4. Import the repository. Vercel should detect Vite automatically.
5. Confirm **Build Command** `npm run build` and **Output Directory** `dist`.
6. Click **Deploy**. A free `vercel.app` URL will be provided.

Alternative: deploy the `dist/` output to another static hosting service that supports Vite builds.

## Personal details to edit
- Main component and translations: `src/App.jsx`
- Visual styles and responsive rules: `src/styles.css`
- 3D orb scene: `src/components/OrbScene.jsx`
- Main portrait: `public/images/portrait.png`
- Formal portrait: `public/images/formal.jpg`

The WhatsApp number is currently set to Bangladesh international format `8801595358912` in `src/App.jsx` (local number: 01595-358912). The Facebook link is the one supplied in the brief. Confirm these details before publishing.

## Notes
- No fake work samples, client logos, testimonials, or experience claims are included.
- The 3D scene is decorative and uses a lightweight procedural orb, not a reconstructed 3D model of the portrait.
- The site has no database, paid API, or server-side service requirement.
- For best performance, the 3D scene uses a capped pixel ratio and respects reduced-motion preferences through CSS and Framer Motion.
