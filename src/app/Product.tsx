"use client";

import Image from "next/image";
import { useState } from "react";
import { PRICE, addItem, peso, setBagOpen } from "./bag";

const SIZES = ["S", "M", "L", "XL"];

const COLORWAYS = {
  Black: {
    hex: "#161616",
    views: [
      { label: "Front", src: "/abe/gen-black-front.png" },
      { label: "Back", src: "/abe/gen-black-back.png" },
      { label: "Worn", src: "/abe/gen-black-worn.png" },
    ],
  },
  Maroon: {
    hex: "#7a1530",
    views: [
      { label: "Front", src: "/abe/gen-maroon-front.png" },
      { label: "Back", src: "/abe/gen-maroon-back.png" },
      { label: "Worn", src: "/abe/gen-maroon-worn.png" },
    ],
  },
} as const;
type Colorway = keyof typeof COLORWAYS;

export default function Product() {
  const [color, setColor] = useState<Colorway>("Black");
  const [view, setView] = useState(0);
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);
  const cw = COLORWAYS[color];
  const current = cw.views[view];

  const add = () => {
    setAdded(true);
    addItem(color, size);
    setBagOpen(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="product" id="shop">
      <div className="viewer">
        <div className="stage">
          <Image
            key={current.src}
            src={current.src}
            alt={`ABE ${color} sleeveless quarterzip, ${current.label.toLowerCase()} view`}
            fill
            sizes="(max-width: 900px) 100vw, 620px"
            className="stage-img"
          />
        </div>
        <div className="thumbs">
          {cw.views.map((v, i) => (
            <button key={v.src} onClick={() => setView(i)} className={`thumb ${i === view ? "on" : ""}`} aria-label={`${v.label} view`}>
              <Image src={v.src} alt="" fill sizes="120px" />
              <span className="mono">{v.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="buy">
        <p className="mono"><i className="dot" /> Archive piece · Project 01</p>
        <h2>ABE<br />Sleeveless<br />Quarterzip</h2>
        <p className="price">{peso(PRICE)}</p>

        <div className="row">
          <span className="mono">Colorway — {color}</span>
          <div className="swatches">
            {(Object.keys(COLORWAYS) as Colorway[]).map((c) => (
              <button key={c} onClick={() => { setColor(c); setView(0); }} className={`swatch ${c === color ? "on" : ""}`} style={{ background: COLORWAYS[c].hex }} aria-label={c} aria-pressed={c === color} />
            ))}
          </div>
        </div>

        <div className="row">
          <span className="mono">Size — {size}</span>
          <div className="sizes">
            {SIZES.map((s) => (
              <button key={s} onClick={() => setSize(s)} className={`pill ${s === size ? "solid" : ""}`} aria-pressed={s === size}>{s}</button>
            ))}
          </div>
        </div>

        <button className="cta" onClick={add}>{added ? "Added to bag ✓" : `Add to bag — ${color}, ${size}`}</button>
        <p className="note">Mock checkout: nothing is charged or shipped yet.</p>
      </div>
    </div>
  );
}
