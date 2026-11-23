"use client";

import Image from "next/image";
import { useState } from "react";
import { PRICE, changeQty, clearBag, peso, removeItem, setBagOpen, useBagOpen, useItems } from "./bag";

const THUMB: Record<string, string> = { Black: "/abe/gen-black-front.png", Maroon: "/abe/gen-maroon-front.png" };

export default function BagDrawer() {
  const open = useBagOpen();
  const items = useItems();
  const [done, setDone] = useState(false);
  const total = items.reduce((n, i) => n + i.qty * PRICE, 0);

  const close = () => { setBagOpen(false); setDone(false); };
  const pay = () => { clearBag(); setDone(true); };

  return (
    <>
      <div className={`scrim ${open ? "on" : ""}`} onClick={close} />
      <aside className={`drawer ${open ? "on" : ""}`} aria-hidden={!open} aria-label="Bag">
        <header>
          <span className="mono">Bag ({items.reduce((n, i) => n + i.qty, 0)})</span>
          <button className="pill" onClick={close}>Close ✕</button>
        </header>

        {done ? (
          <div className="empty">
            <p className="mono"><i className="dot" /> Payout complete</p>
            <h3>Thanks. Order placed.</h3>
            <p className="note">Just for fun. Nothing was charged or shipped.</p>
          </div>
        ) : items.length === 0 ? (
          <div className="empty"><h3>Your bag is empty.</h3><a href="#shop" onClick={close} className="pill">Shop ABE</a></div>
        ) : (
          <>
            <ul>
              {items.map((i) => (
                <li key={i.id}>
                  <div className="thumb-s"><Image src={THUMB[i.color]} alt="" fill sizes="80px" /></div>
                  <div>
                    <p>ABE Sleeveless Quarterzip</p>
                    <p className="mono sub">{i.color} / {i.size}</p>
                    <div className="qty">
                      <button className="pill" onClick={() => changeQty(i.id, -1)} aria-label="Decrease">−</button>
                      <span className="mono">{i.qty}</span>
                      <button className="pill" onClick={() => changeQty(i.id, 1)} aria-label="Increase">+</button>
                      <button className="rm mono" onClick={() => removeItem(i.id)}>Remove</button>
                    </div>
                  </div>
                  <span>{peso(PRICE * i.qty)}</span>
                </li>
              ))}
            </ul>
            <footer>
              <div className="total"><span className="mono">Total</span><strong>{peso(total)}</strong></div>
              <button className="cta" onClick={pay}>Payout — {peso(total)}</button>
              <p className="note">Mock checkout: nothing is charged.</p>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
