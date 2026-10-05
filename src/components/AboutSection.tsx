"use client";

import React from "react";

export default function AboutSection() {
  const pillars = [
    {
      title: "Start with real problems",
      description: "For tasks people already pay for and struggle to arrange.",
    },
    {
      title: "Designed for local use",
      description: "Mobile-first, bilingual, usable on slow connections.",
    },
    {
      title: "Launch and improve",
      description: "We ship early, watch usage, fix what breaks.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About OceanEdge Technologies"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md scroll-mt-12 relative z-10"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section label */}
        <div className="pb-4 mb-12 border-b border-[var(--border)]">
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: headline */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--foreground)] leading-[1.12]">
              Built for how work happens in Bangladesh.
            </h2>
            <p className="mt-6 text-base text-[var(--text-muted)] leading-relaxed">
              OceanEdge Technologies is a small product team in Dhaka. KaazDaak is
              our first product.
            </p>
          </div>

          {/* Right: pillars as plain list */}
          <div className="lg:col-span-7 space-y-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="border-t border-[var(--border)] pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                <div className="sm:col-span-1">
                  <span className="text-sm font-semibold text-[var(--foreground)] tracking-tight">
                    {p.title}
                  </span>
                </div>
                <p className="sm:col-span-2 text-sm text-[var(--text-muted)] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
