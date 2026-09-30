"use client";

import React from "react";

export default function CurrentFocusSection() {
  const currentWorkStreams = [
    {
      stream: "01 // DISPATCH ARCHITECTURE",
      title: "Core Request & Match Model",
      detail:
        "Building lightweight backend schemas to connect local requests with relevant service providers without latency overhead.",
    },
    {
      stream: "02 // INTERFACE ERGONOMICS",
      title: "Mobile-First Usability",
      detail:
        "Refining form layouts, bilingual typography (English and Bangla), and touch targets for clear operation on smaller handsets.",
    },
    {
      stream: "03 // NETWORK EFFICIENCY",
      title: "Resilient Offline Fallbacks",
      detail:
        "Optimizing bundle payloads and state caching to preserve functionality across fluctuating network bandwidths.",
    },
  ];

  return (
    <section
      aria-label="Current Focus and Active Development"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-10 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            <span className="text-[var(--accent)] font-bold">SEC.05 //</span>
            <span>CURRENT FOCUS</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider">
            DISPATCH // LAB_LOG
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[var(--foreground)]">
            What we’re building now.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)]">
            A transparent overview of our active engineering focus.
          </p>
        </div>

        {/* Restrained Primary Update Card */}
        <div className="border border-[var(--border-strong)] bg-[var(--surface)] p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
              <span className="text-xs font-mono tracking-widest uppercase font-semibold text-[var(--foreground)]">
                PRIMARY DISPATCH
              </span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase">
              STATUS: PRE-LAUNCH
            </span>
          </div>

          {/* Exact required copy */}
          <div className="text-xl sm:text-2xl font-normal text-[var(--foreground)] leading-relaxed">
            KaazDaak is in development. We’re preparing our first product launch.
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[var(--text-dim)]">
            <span>MILESTONE: FOUNDATION</span>
            <span>TARGET: BANGLADESH</span>
            <span>TEAM: ENGINEERING & DESIGN</span>
          </div>
        </div>

        {/* Active Work Streams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {currentWorkStreams.map((item, idx) => (
            <div
              key={idx}
              className="border border-[var(--border)] bg-[var(--surface)] p-5 flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] mb-2">
                  {item.stream}
                </div>
                <h3 className="text-base font-semibold text-[var(--foreground)] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[10px] font-mono text-[var(--text-dim)]">
                <span>IN PROGRESS</span>
                <span>VER: 0.1</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
