const steps = [
  {
    num: "01",
    title: "Talk to both sides",
    desc: "We interview hirers and workers in Dhaka before writing code.",
  },
  {
    num: "02",
    title: "Build the smallest useful flow",
    desc: "One way to post, one way to offer. Then we test with real users.",
  },
  {
    num: "03",
    title: "Measure and refine",
    desc: "We watch what people use and fix what slows them down.",
  },
];

export default function ApproachSection() {
  return (
    <section className="section section--alt" id="approach">
      <div className="container">
        <div className="section__head reveal">
          <p className="mono sec-label">
            <span className="num">03</span>
            <span className="rule" />
            <span>Approach</span>
          </p>
          <h2 className="h2 section__title">
            How we build <span className="accent">KaazDaak</span>.
          </h2>
        </div>

        <div className="steps reveal">
          {steps.map((s) => (
            <article className="step" key={s.num}>
              <span className="step__num">{s.num}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
