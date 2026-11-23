# ABE — Sleeveless Quarterzip

A product site for **ABE**, a sleeveless quarter-zip designed and built as a class project. Built with Next.js, React and Tailwind CSS.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

- Product and model images in `public/abe/` are **AI-generated** from reference mock photos. The people shown are not real.
- The crown emblem in the hero is a hand-drawn SVG that breaks apart on scroll (`src/app/HeroLogo.tsx`).
- The bag and "Payout" are a **mock**: nothing is charged or shipped, and the bag resets on refresh.
- The price (₱1,290) is a placeholder. Change `PRICE` in `src/app/bag.ts`.
