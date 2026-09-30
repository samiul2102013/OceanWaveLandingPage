"use client";

import React, { useState } from "react";
import { playTick } from "@/lib/sound";
import { ArrowRight, Ear, DraftingCompass, Wrench, Sparkles } from "lucide-react";

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      index: "01",
      name: "Listen",
      verb: "Observe & Understand",
      description:
        "We spend time understanding everyday friction in how local tasks, informal services, and community work happen on the ground in Bangladesh.",
      inputs: "Direct conversations, field observation, pain points",
      output: "Documented real-world friction",
      icon: Ear,
    },
    {
      index: "02",
      name: "Shape",
      verb: "Distill & Structure",
      description:
        "We strip away needless complexity, designing clear flows that respect local habits, bilingual clarity, and straightforward ergonomics.",
      inputs: "Core user workflows, screen ergonomics, constraint mapping",
      output: "Clear product specification & interfaces",
      icon: DraftingCompass,
    },
    {
      index: "03",
      name: "Build",
      verb: "Engineer & Optimize",
      description:
        "We engineer robust, responsive web and mobile software built for performance, low memory footprint, and resilient connectivity.",
      inputs: "Modern App Router, TypeScript, performant APIs, responsive UI",
      output: "Production software builds",
      icon: Wrench,
    },
    {
      index: "04",
      name: "Improve",
      verb: "Iterate & Refine",
      description:
        "We monitor how early users interact with the tools in real scenarios, refining navigation, matching speed, and system clarity.",
      inputs: "Real field interactions, usability signals, bug reports",
      output: "Continuous, thoughtful refinement",
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="approach"
      aria-label="Our Approach and Methodology"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--background)] scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-10 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            <span className="text-[var(--accent)] font-bold">SEC.03 //</span>
            <span>OUR APPROACH</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider">
            FRAMEWORK: DRAFT SEQUENCE
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--foreground)] leading-[1.12]">
            From everyday problems to useful products.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            A simple, pragmatic sequence to guide design and engineering. We don’t
            claim a rigid or formal corporate process beyond this draft working framework.
          </p>
        </div>

        {/* Sequential Stepper Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.index}
                onClick={() => {
                  playTick(680 + idx * 80, 0.02);
                  setActiveStep(idx);
                }}
                className={`flex flex-col text-left p-4 border transition-all ${
                  isSelected
                    ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] shadow-sm"
                    : "bg-[var(--surface)] text-[var(--foreground)] border-[var(--border)] hover:border-[var(--foreground)]"
                }`}
                aria-selected={isSelected}
                role="tab"
              >
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-widest uppercase">
                  <span className={isSelected ? "text-[var(--accent)] font-bold" : "text-[var(--text-dim)]"}>
                    STEP {step.index}
                  </span>
                  <Icon size={14} className={isSelected ? "text-[var(--accent)]" : "text-[var(--text-muted)]"} />
                </div>
                <div className="text-lg sm:text-xl font-semibold tracking-tight">
                  {step.name}
                </div>
                <div className={`text-[11px] font-mono mt-1 ${isSelected ? "text-neutral-300" : "text-[var(--text-muted)]"}`}>
                  {step.verb}
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Inspector Card */}
        <div className="border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl font-bold text-[var(--accent)]">
                {steps[activeStep].index}
              </span>
              <div>
                <div className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">
                  {steps[activeStep].name}
                </div>
                <div className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-wider">
                  STAGE ACTION: {steps[activeStep].verb}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-dim)] uppercase">
              <span>SEQUENCE: 4-STAGE FLOW</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--text-dim)] mb-2">
                OVERVIEW
              </h3>
              <p className="text-base sm:text-lg text-[var(--foreground)] leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>

            <div className="md:col-span-5 space-y-4 border-l-0 md:border-l border-[var(--border)] md:pl-8">
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-dim)] mb-1">
                  KEY INPUTS
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] bg-[var(--surface-subtle)] p-2.5 border border-[var(--border)]">
                  {steps[activeStep].inputs}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] mb-1 font-semibold">
                  PRIMARY OUTPUT
                </div>
                <div className="text-xs sm:text-sm font-medium text-[var(--foreground)] bg-[var(--surface-subtle)] p-2.5 border border-[var(--border)]">
                  {steps[activeStep].output}
                </div>
              </div>
            </div>
          </div>

          {/* Linear Sequence Visualizer */}
          <div className="mt-8 pt-5 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
            <div className="flex items-center gap-2 text-[var(--text-muted)]">
              <span>FLOW:</span>
              {steps.map((s, idx) => (
                <React.Fragment key={s.name}>
                  <span
                    className={
                      activeStep === idx
                        ? "text-[var(--accent)] font-bold underline"
                        : "text-[var(--text-dim)]"
                    }
                  >
                    {s.name}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight size={12} className="text-[var(--text-dim)]" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="text-[10px] text-[var(--text-dim)]">
              ITERATIVE CYCLE // ZERO CEREMONY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
