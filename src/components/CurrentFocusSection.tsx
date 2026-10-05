import { Route, Smartphone, WifiOff } from "lucide-react";

const streams = [
  {
    icon: Route,
    title: "Matching",
    desc: "Each request goes to workers who can take it.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first interface",
    desc: "Clear forms and bilingual labels for small screens.",
  },
  {
    icon: WifiOff,
    title: "Low-bandwidth behavior",
    desc: "Pages that stay usable when the connection drops.",
  },
];

export default function CurrentFocusSection() {
  return (
    <section className="section section--white" id="building-now">
      <div className="container">
        <header className="section-head">
          <span className="label-pill">Current focus</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Where KaazDaak <span className="accent">stands</span>.
          </h2>
          <p className="section-sub">We are testing the core experience before launch.</p>
        </header>

        <div className="steps3">
          {streams.map((s) => {
            const Icon = s.icon;
            return (
              <article className="card" key={s.title}>
                <span className="icon-circle" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3 style={{ marginTop: 14 }}>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
