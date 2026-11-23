"use client";

import { setBagOpen, useItems } from "./bag";

export default function Nav() {
  const count = useItems().reduce((n, i) => n + i.qty, 0);
  return (
    <nav className="nav">
      <a href="#top" className="pill logo">● ABE</a>
      <div className="navlinks">
        <a href="#shop" className="pill">+ Shop</a>
        <a href="#details" className="pill">+ Details</a>
        <a href="#worn" className="pill">+ Worn</a>
        <a href="#story" className="pill">+ Story</a>
        <button className="pill" onClick={() => setBagOpen(true)}>Bag ({count})</button>
      </div>
    </nav>
  );
}
