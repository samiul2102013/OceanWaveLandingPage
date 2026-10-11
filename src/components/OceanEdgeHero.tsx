import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { KAADAAK_URL } from "@/lib/links";

export default function OceanEdgeHero() {
  return (
    <section className="hero-oe" id="hero" aria-label="OceanEdge Technologies">
      <div className="container hero-oe__grid">
        <div>
          <span className="label-pill">OceanEdge Technologies</span>
          <h1 className="hero-oe__title">
            Digital products for <span className="accent">Bangladesh</span>.
          </h1>
          <p className="hero-oe__sub">
            We are a small product team in Dhaka. We start from real problems
            people already have, ship early, then improve based on what people
            actually use.
          </p>

          <div className="hero-oe__actions">
            <a className="btn btn--primary" href={KAADAAK_URL}>
              <span>Explore KaazDaak</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn--outline" href="#contact">
              Talk to us
            </a>
          </div>
        </div>

        <aside className="hero-oe__card" aria-label="Our first product">
          <span className="hero-oe__mark">
            <Image
              src="/oceanedge-mark.png"
              alt="OceanEdge Technologies mark"
              width={72}
              height={42}
              priority
            />
          </span>
          <div className="hero-oe__card-body">
            <span className="hero-oe__card-k">Our first product</span>
            <p className="hero-oe__card-t">
              KaazDaak — a local work marketplace. Post a task, hire someone
              nearby.
            </p>
            <span className="hero-oe__card-link">
              Visit the KaazDaak site
              <ArrowRight size={15} aria-hidden="true" />
            </span>
          </div>
          <a className="hero-oe__card-hit" href={KAADAAK_URL} aria-label="Visit the KaazDaak site" />
        </aside>
      </div>
    </section>
  );
}
