import Image from "next/image";
import HeroLogo from "./HeroLogo";
import BagDrawer from "./BagDrawer";
import Nav from "./Nav";
import Product from "./Product";
import Reveal from "./Reveal";

const SPECS: [string, string][] = [
  ["Cut", "Sleeveless, relaxed through the body"],
  ["Collar", "Stand collar, topstitched"],
  ["Closure", "Quarter-length metal zip, front"],
  ["Hem", "Wide ribbed hem band"],
  ["Armholes", "Clean-finished, double-stitched"],
  ["Colorways", "Black, Maroon"],
  ["Mark", "Crowned pin-and-ring emblem at the collar"],
];

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <BagDrawer />

      {/* HERO */}
      <div className="hero-track">
      <section className="hero">
        <p className="mono hero-meta"><i className="dot" /> Project 01 — Sleeveless Quarterzip</p>
        <h1 className="monument" aria-label="ABE">ABE</h1>
        <HeroLogo />
        <div className="hero-foot">
          <p>A sleeveless quarter-zip with a stand collar and a heavy hem band. Made for layering, or for wearing alone.</p>
          <a href="#shop" className="pill inv">Shop ABE ↓</a>
        </div>
      </section>
      </div>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden>
        <div className="track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="mono">
              Sleeveless ● Quarterzip ● Stand collar ● Black ● Maroon ● Ribbed hem ● Built for a project ●&nbsp;
              Sleeveless ● Quarterzip ● Stand collar ● Black ● Maroon ● Ribbed hem ● Built for a project ●&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* SHOP */}
      <section className="light wrap">
        <Reveal><Product /></Reveal>
      </section>

      {/* DETAILS */}
      <section className="wash" id="details">
        <div className="wrap">
          <Reveal><h2 className="ghost">Details</h2></Reveal>
          <div className="grid3">
            <Reveal><figure><div className="frame"><Image src="/abe/gen-black-front.png" alt="Front of the black ABE, zip and collar" fill sizes="(max-width: 900px) 100vw, 380px" /></div><figcaption className="mono">01 — Front / zip / collar</figcaption></figure></Reveal>
            <Reveal delay={90}><figure><div className="frame"><Image src="/abe/gen-black-back.png" alt="Back of the black ABE" fill sizes="(max-width: 900px) 100vw, 380px" /></div><figcaption className="mono">02 — Back / hem band</figcaption></figure></Reveal>
            <Reveal delay={180}><figure><div className="frame"><Image src="/abe/gen-maroon-back.png" alt="Back of the maroon ABE" fill sizes="(max-width: 900px) 100vw, 380px" /></div><figcaption className="mono">03 — Maroon / back</figcaption></figure></Reveal>
          </div>
          <Reveal>
            <dl className="specs">
              {SPECS.map(([k, v]) => (
                <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* WORN */}
      <section className="dark worn" id="worn">
        <div className="wrap">
          <Reveal><h2 className="monument sm">Worn</h2></Reveal>
          <div className="worn-grid">
            <Reveal><div className="frame tall"><Image src="/abe/gen-maroon-worn.png" alt="ABE in maroon, worn on the street, filmed from behind" fill sizes="(max-width: 900px) 100vw, 460px" /></div></Reveal>
            <Reveal delay={120}><div className="frame tall mirror"><Image src="/abe/gen-black-worn.png" alt="ABE in black, worn in a mirror photo" fill sizes="(max-width: 900px) 100vw, 460px" /></div></Reveal>
          </div>
          <p className="mono ghosttag">Fit shown over a plain tee, relaxed through the body.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="light wrap story" id="story">
        <Reveal>
          <div className="emblem"><Image src="/abe/gen-black-front.png" alt="Close-up of the ABE crown emblem at the collar" fill sizes="600px" className="zoom" /></div>
        </Reveal>
        <Reveal delay={100}>
          <p className="mono">Story</p>
          <h2>Last year this was a class project. We designed it, built it, and wore it.</h2>
          <p className="lede">ABE started as a brief: make a garment from scratch. We drew it, cut it, and sewed the first run: a sleeveless quarter-zip, a collar that stands up, and a hem band with some weight to it. This page is the archive.</p>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="dark foot">
        <div className="wrap foot-row">
          <span className="mono">© ABE — Project 01</span>
          <a href="#top" className="pill ghost-pill">Back to top ↑</a>
        </div>
        <p className="monument foot-word" aria-hidden>ABE</p>
      </footer>
    </main>
  );
}
