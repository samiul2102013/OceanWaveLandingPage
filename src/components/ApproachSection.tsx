import { Ear, Wrench, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Ear,
    title: "Talk to both sides",
    desc: "We interview hirers and workers in Dhaka before writing code.",
  },
  {
    icon: Wrench,
    title: "Build the smallest useful flow",
    desc: "One way to post, one way to offer. Then we test with real users.",
  },
  {
    icon: Sparkles,
    title: "Measure and refine",
    desc: "We watch what people use and fix what slows them down.",
  },
];

export default function ApproachSection() {
  return (
    <section className="section section--sky" id="approach">
      <div className="container">
        <header className="section-head">
          <span className="label-pill">Approach</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            How we build <span className="accent">KaazDaak</span>.
          </h2>
        </header>

        <div className="timeline">
          <span className="timeline__line" aria-hidden="true" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <article className="card timeline__item" key={s.title}>
                <span className="timeline__badge" aria-hidden="true">{i + 1}</span>
                <span className="icon-circle timeline__icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3 className="timeline__title">{s.title}</h3>
                <p className="timeline__desc">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
