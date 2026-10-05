"use client";

import React from "react";
import { Ear, Wrench, Sparkles } from "lucide-react";

const steps = [
  {
    name: "Talk to both sides",
    description:
      "We interview hirers and workers in Dhaka before writing code.",
    icon: Ear,
  },
  {
    name: "Build the smallest useful flow",
    description:
      "One way to post, one way to offer. Then we test with real users.",
    icon: Wrench,
  },
  {
    name: "Measure and refine",
    description:
      "We watch what people use and fix what slows them down.",
    icon: Sparkles,
  },
];

export default function ApproachSection() {
  return (
    <section
      id="approach"
      aria-label="Our Approach"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md relative z-10 scroll-mt-12"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section label */}
        <div className="pb-4 mb-12 border-b border-[var(--border)]">
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            Approach
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[var(--foreground)] mb-12 max-w-xl">
          How we build KaazDaak.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--border)]">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.name}
                className="bg-[var(--background)]/90 backdrop-blur-sm p-8 flex flex-col gap-5 hover:bg-[var(--surface)] transition-all group"
              >
                <Icon size={20} className="text-[var(--accent)] group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">
                    {step.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
