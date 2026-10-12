const principles = [
  {
    num: "01",
    title: "Start with real problems",
    desc: "For tasks people already pay for and struggle to arrange.",
  },
  {
    num: "02",
    title: "Designed for local use",
    desc: "Mobile-first, bilingual, usable on slow connections.",
  },
  {
    num: "03",
    title: "Launch and improve",
    desc: "We ship early, watch usage, fix what breaks.",
  },
];

export default function AboutSection() {
  return (
    <section className="section section--paper" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="section__head reveal">
            <p className="mono sec-label">
              <span className="num">02</span>
              <span className="rule" />
              <span>About</span>
            </p>
            <h2 className="h2 section__title">
              Built for how work <span className="accent">happens in Bangladesh</span>.
            </h2>
            <p className="lede section__lede">
              OceanEdge Technologies is a small product team in Dhaka. KaazDaak is
              our first product.
            </p>
            <p className="lede">
              We start from real problems and ship early, then improve based on
              what people actually use.
            </p>
          </div>

          <div className="about__principles reveal">
            {principles.map((p) => (
              <article className="principle" key={p.num}>
                <span className="mono principle__num">{p.num}</span>
                <div>
                  <h3 className="principle__title">{p.title}</h3>
                  <p className="principle__desc">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
