# Meet Tej

A cinematic, photo-led personal introduction built as a modern wedding-album experience. The site uses 12 curated photographs, restrained copy, responsive editorial layouts, scroll reveals, hover details, and a keyboard-friendly lightbox.

This repository is a standalone copy of the finished website. It does not depend on the original site builder or hosting platform.

## Features

- Full-screen cinematic opening portrait
- Exactly 12 curated, uniquely named production photographs
- Wedding-album inspired mobile composition
- Editorial desktop gallery with minimal spacing
- Location and short story for every photograph
- Personal story interludes for travel, photography, movies, and everyday life
- Golden cursor and touch glow
- Expandable link to `@tejdavuluri` on Instagram
- Animated scroll reveals that respect reduced-motion preferences
- Full-screen lightbox with click, keyboard, and touch-friendly controls
- Responsive image cropping tuned per photograph
- Social preview image and site metadata
- Automated GitHub Pages deployment
- Ready-to-use Vercel and Netlify configuration

## Project structure

```text
tejdavuluri.knowme/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── docs/
│   ├── DEPLOYMENT.md
│   └── IMAGE_CATALOG.md
├── public/
│   ├── images/
│   │   └── 12 production WebP photographs
│   ├── favicon.svg
│   └── social-preview.png
├── src/
│   ├── components/
│   │   └── Portfolio.tsx
│   ├── content/
│   │   └── text/
│   │       └── siteContent.ts
│   ├── styles/
│   │   └── global.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── ASSET_LICENSE.md
├── LICENSE
├── index.html
├── netlify.toml
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

## Technology

- React 19
- TypeScript 5
- Vite 8
- Plain CSS, no UI framework
- WebP production images

## Run locally

Node.js 20.19 or newer is required.

```bash
npm install
npm run dev
```

Open the local address shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The optimized static site is generated in `dist`.

## Edit text, locations, and stories

All user-facing content is separated from the component code in:

```text
src/content/text/siteContent.ts
```

Each photo entry contains:

- `file`, the filename inside `public/images`
- `alt`, accessible image description
- `location`, the visible location label
- `story`, the short caption shown in the lightbox and on hover
- `position`, optional crop focus
- `scene`, the album layout treatment

The album order is controlled by `albumSpreads` in the same file.

## Edit or replace photographs

Photographs are stored separately in:

```text
public/images/
```

Use [docs/IMAGE_CATALOG.md](docs/IMAGE_CATALOG.md) for the exact filename, location, resolution, and display role of every image. Keeping the same filename is the safest way to replace an image without changing code.

## Hosting

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for GitHub Pages, Vercel, Netlify, Cloudflare Pages, and custom-domain instructions.

## Accessibility and interaction

- Every image has descriptive alt text.
- Gallery items are real buttons and work with keyboard focus.
- The lightbox supports Escape, Left Arrow, and Right Arrow.
- Page scrolling is locked while the lightbox is open.
- Scroll animations are disabled when the visitor requests reduced motion.

## Rights

The source code is available under the MIT License. Personal photographs and media are excluded from that license. See [ASSET_LICENSE.md](ASSET_LICENSE.md) before sharing or reusing assets.
