import { useSyncExternalStore } from "react";

// Placeholder price (PHP). Change before selling anything.
export const PRICE = 1290;
export const peso = (n: number) => `₱${n.toLocaleString("en-PH")}`;

export type Item = { id: string; color: string; size: string; qty: number };

let items: Item[] = [];
let open = false;
const subs = new Set<() => void>();
const emit = () => subs.forEach((f) => f());
const subscribe = (f: () => void) => (subs.add(f), () => void subs.delete(f));

export const useItems = () => useSyncExternalStore(subscribe, () => items, () => items);
export const useBagOpen = () => useSyncExternalStore(subscribe, () => open, () => false);

export const setBagOpen = (v: boolean) => { open = v; emit(); };

export function addItem(color: string, size: string) {
  const id = `${color}-${size}`;
  items = items.some((i) => i.id === id)
    ? items.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    : [...items, { id, color, size, qty: 1 }];
  emit();
}
export function changeQty(id: string, d: number) {
  items = items.map((i) => (i.id === id ? { ...i, qty: i.qty + d } : i)).filter((i) => i.qty > 0);
  emit();
}
export function removeItem(id: string) { items = items.filter((i) => i.id !== id); emit(); }
export function clearBag() { items = []; emit(); }
