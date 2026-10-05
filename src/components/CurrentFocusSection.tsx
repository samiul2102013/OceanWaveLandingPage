"use client";

import React from "react";

const streams = [
  {
    title: "Matching",
    detail: "Each request goes to workers who can take it.",
  },
  {
    title: "Mobile-first interface",
    detail: "Clear forms and bilingual labels for small screens.",
  },
  {
    title: "Low-bandwidth behavior",
    detail: "Pages that stay usable when the connection drops.",
  },
];

export default function CurrentFocusSection() {
  return (
    <section
      id="building-now"
      aria-label="Current Focus"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)]/80 backdrop-blur-md relative z-10 scroll-mt-12"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section label */}
        <div className="pb-4 mb-12 border-b border-[var(--border)]">
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            Current focus
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[var(--foreground)]">
              Where KaazDaak stands.
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-xl sm:text-2xl font-normal text-[var(--foreground)] leading-relaxed">
              We are testing the core experience before launch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)]">
          {streams.map((item) => (
            <div
              key={item.title}
              className="bg-[var(--surface)]/90 backdrop-blur-sm p-8 hover:bg-[var(--surface)] transition-all group"
            >
              <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
