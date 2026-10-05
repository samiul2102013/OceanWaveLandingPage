"use client";

import { useRef, useState } from "react";

const spec = [
  ["Market", "Bangladesh"],
  ["Work", "Trade, tech, delivery"],
  ["Platform", "Mobile & web"],
  ["Status", "Early alpha"],
];

const howSteps = [
  { step: "01", title: "Post your task", body: "Describe the job, your area, and your budget." },
  {
    step: "02",
    title: "Compare offers",
    body: "Nearby workers reply with price and experience. Message them before you decide.",
  },
  {
    step: "03",
    title: "Hire and finish",
    body: "Pick the person you trust and get the job done.",
  },
];

const sampleHirerTasks = [
  { title: "Inverter AC Diagnostics & Repair", meta: "Category: Appliance", tag: "Near Dhanmondi" },
  { title: "Bilingual Technical Document Translation", meta: "Category: Language", tag: "Remote BD" },
  { title: "Fiber Optic Line Splicing & Setup", meta: "Category: Network", tag: "Near Gulshan" },
  { title: "Custom CNC Timber Framework", meta: "Category: Carpentry", tag: "Near Mirpur" },
];

const sampleKaazbirMissions = [
  { title: "Commercial Generator Servicing", meta: "Required: Electrical", tag: "Urgent" },
  { title: "Next.js & Supabase Bug Triage", meta: "Required: Software", tag: "Today" },
  { title: "On-site High-Precision Welding", meta: "Required: Fabrication", tag: "Tomorrow" },
  { title: "Product Photography for Textiles", meta: "Required: Media", tag: "This Week" },
];

export default function ProductsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [audience, setAudience] = useState<"hirers" | "kaazbirs">("hirers");

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = 1;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(true));
  };

  const watchVideo = () => {
    frameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(play, 450);
  };

  const tasks = audience === "hirers" ? sampleHirerTasks : sampleKaazbirMissions;

  return (
    <section className="section section--mist" id="products">
      <div className="container">
        <span className="label-pill">Product 01 · Local Work Marketplace</span>

        <div className="product__grid" style={{ marginTop: 24 }}>
          <div>
            <h2 className="product__title">
              KaazDaak<span className="bn">কাজডাক</span>
            </h2>
            <p className="product__tagline">Hire nearby help for everyday jobs.</p>
            <p className="product__desc">
              KaazDaak is a local work marketplace for Bangladesh. Post the job and
              your area. Nearby workers send offers. Pick who you trust.
            </p>

            <div className="product__actions">
              <button type="button" className="btn btn--primary" onClick={watchVideo}>
                Watch the video
              </button>
              <a className="btn btn--outline" href="https://www.kaazdaak.com" target="_blank" rel="noopener">
                Visit kaazdaak.com
              </a>
            </div>

            <div className="chips">
              <span className="chip">Home Services</span>
              <span className="chip">Technical Services</span>
              <span className="chip">Freelance &amp; More</span>
            </div>
          </div>

          <div className="product__media">
            <div className="product__frame" ref={frameRef}>
              <video
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              >
                <source src="/kaazdaak-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!playing && (
                <button type="button" className="video-overlay" onClick={play} aria-label="Play the KaazDaak video with sound">
                  <span className="video-play-circle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5.5v13l11-6.5-11-6.5z" />
                    </svg>
                  </span>
                  <span className="video-play-label">Play with sound</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Spec table */}
        <div className="spec subsection">
          {spec.map(([k, v]) => (
            <div className="spec__row" key={k}>
              <span className="spec__k">{k}</span>
              <span className="spec__v">{v}</span>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="subsection">
          <h3 className="subsection-title">How it works</h3>
          <div className="steps3">
            {howSteps.map((s) => (
              <article className="card" key={s.step}>
                <span className="step-num">Step {s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Two roles */}
        <div className="subsection">
          <h3 className="subsection-title">Two ways to use KaazDaak</h3>
          <div className="roles">
            <article className="card">
              <span className="role-label">For hirers</span>
              <h3>Need a repair, install, or delivery?</h3>
              <p>Post the job with your location and budget. Nearby workers send offers. You choose.</p>
            </article>
            <article className="card">
              <span className="role-label">For Kaazbirs (কাজবীর)</span>
              <h3>Have a skill to sell?</h3>
              <p>Find paid jobs near you. Send your offer. Work when you want.</p>
            </article>
          </div>
        </div>

        {/* Simulator */}
        <div className="subsection">
          <div className="sim__head">
            <h3 className="subsection-title" style={{ marginBottom: 0 }}>A look at the app</h3>
            <div className="tabs">
              <button
                type="button"
                className={`tab${audience === "hirers" ? " is-active" : ""}`}
                onClick={() => setAudience("hirers")}
              >
                Hirer view
              </button>
              <button
                type="button"
                className={`tab${audience === "kaazbirs" ? " is-active" : ""}`}
                onClick={() => setAudience("kaazbirs")}
              >
                Kaazbir view
              </button>
            </div>
          </div>

          <div className="tasks">
            {tasks.map((t) => (
              <div className="task" key={t.title}>
                <div>
                  <div className="task__t">{t.title}</div>
                  <div className="task__m">{t.meta}</div>
                </div>
                <span className="task__tag">{t.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
