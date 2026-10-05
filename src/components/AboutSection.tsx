import { Target, Smartphone, RefreshCw } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Start with real problems",
    desc: "For tasks people already pay for and struggle to arrange.",
  },
  {
    icon: Smartphone,
    title: "Designed for local use",
    desc: "Mobile-first, bilingual, usable on slow connections.",
  },
  {
    icon: RefreshCw,
    title: "Launch and improve",
    desc: "We ship early, watch usage, fix what breaks.",
  },
];

export default function AboutSection() {
  return (
    <section className="section section--white" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <span className="label-pill">About</span>
            <h2 className="section-title" style={{ marginTop: 18 }}>
              Built for how work <span className="accent">happens in Bangladesh</span>.
            </h2>
            <p className="section-sub">
              OceanEdge Technologies is a small product team in Dhaka. KaazDaak is
              our first product.
            </p>
            <p className="section-sub">
              We start from real problems and ship early, then improve based on
              what people actually use.
            </p>
          </div>

          <div className="about__cards">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <article className="card value-card" key={v.title}>
                  <span className="icon-circle" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="t">{v.title}</h3>
                    <p className="d">{v.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
