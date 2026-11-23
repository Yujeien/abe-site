"use client";

import { useEffect, useRef } from "react";

// Each piece flies out along (x, y, rotate) as scroll progress p goes 0 -> 1.
const PIECES: Record<string, [number, number, number]> = {
  crown: [0, -380, -8],
  ball: [140, -300, 40],
  stick: [-180, -90, -24],
  arcA: [320, -250, 30],
  arcB: [380, 180, -35],
  crescent: [-390, 60, 18],
  bowl: [-120, 330, 50],
  blade: [140, -150, 35],
  tail: [240, 450, -70],
};

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export default function HeroLogo() {
  const svg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = svg.current;
    const track = el?.closest(".hero-track");
    if (!el || !track) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      const e = ease(p);
      const word = el.closest<HTMLElement>(".hero")?.querySelector<HTMLElement>(".monument");
      if (word) word.style.opacity = String(0.1 + 0.9 * e);
      for (const [id, [x, y, rot]] of Object.entries(PIECES)) {
        const g = el.querySelector<SVGGElement>(`[data-p="${id}"]`);
        if (g) {
          g.style.transform = `translate(${x * e}px, ${y * e}px) rotate(${rot * e}deg)`;
          g.style.opacity = String(1 - Math.max(0, (p - 0.45) / 0.55));
        }
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const piece = "[transform-box:fill-box] [transform-origin:center]";
  return (
    <svg ref={svg} className="hero-logo" viewBox="0 0 287 620" role="img" aria-label="ABE crown emblem" fill="#fff">
      <g data-p="crown" className={piece}>
        <path d="M62 80 L48 45 L75 62 L90 32 L113 62 L145 18 L172 62 L197 32 L212 62 L222 45 L210 80 Z" />
        <path d="M68 87 Q140 100 212 87 L210 102 Q140 114 70 102 Z" />
      </g>
      <g data-p="ball" className={piece}><circle cx="137" cy="138" r="19" /></g>
      <g data-p="stick" className={piece}><path d="M124 154 L148 154 L153 362 L135 362 Z" /></g>
      <g data-p="crescent" className={piece}>
        <path d="M105 383 A117 117 0 0 0 105 603 A140 140 0 0 1 105 383 Z" />
      </g>
      <g data-p="arcA" className={piece}>
        <path d="M165 378 A117 117 0 0 1 262 503" fill="none" stroke="#fff" strokeWidth="7" />
      </g>
      <g data-p="arcB" className={piece}>
        <path d="M255 533 A117 117 0 0 1 105 603" fill="none" stroke="#fff" strokeWidth="7" />
      </g>
      <g data-p="bowl" className={piece}>
        <path fillRule="evenodd" d="M74 478 A46 62 0 1 0 166 478 A46 62 0 1 0 74 478 Z M94 478 A36 50 0 1 0 166 478 A36 50 0 1 0 94 478 Z" />
      </g>
      <g data-p="blade" className={piece}>
        <path d="M150 410 C128 450 130 500 153 524 L172 522 C150 495 152 455 160 432 C163 424 158 416 150 410 Z M156 436 C162 480 180 508 206 522 L172 522 C160 500 156 470 156 436 Z" />
      </g>
      <g data-p="tail" className={piece}>
        <path d="M150 522 L206 524 L160 548 Z" />
      </g>
    </svg>
  );
}
