import { ArrowUpRight } from "lucide-react";
import { KAADAAK_URL } from "@/lib/links";

const index = [
  { num: "01", label: "KaazDaak", href: "#product", tag: "First product" },
  { num: "02", label: "About the team", href: "#about" },
  { num: "03", label: "How we build", href: "#approach" },
  { num: "04", label: "Contact", href: "#contact" },
];

export default function OceanEdgeHero() {
  return (
    <section className="hero" id="hero" aria-label="OceanEdge Technologies">
      <div className="hero__lines" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__main">
          <p className="mono hero__eyebrow">
            OceanEdge Technologies · Dhaka, BD
          </p>

          <h1 className="display hero__title">
            Digital products for <span className="accent">Bangladesh</span>.
          </h1>

          <p className="lede hero__lede">
            We are a small product team in Dhaka. We start from real problems
            people already have, ship early, then improve based on what people
            actually use.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={KAADAAK_URL}>
              <span>Explore KaazDaak</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#contact">
              Talk to us
            </a>
          </div>
        </div>

        <aside className="hero__index" aria-label="On this page">
          <p className="mono hero__index-title">Index</p>
          <ol className="hero__index-list">
            {index.map((item) => (
              <li key={item.num}>
                <a href={item.href}>
                  <span className="mono">{item.num}</span>
                  <span>{item.label}</span>
                  {item.tag ? <span className="mono idx-tag">{item.tag}</span> : null}
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <div className="container hero__foot">
        <span className="mono">Dhaka, Bangladesh · GMT+6</span>
        <span className="mono">KaazDaak — our first product</span>
      </div>
    </section>
  );
}
