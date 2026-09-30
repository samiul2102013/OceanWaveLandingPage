"use client";

import React, { useState } from "react";
import { playTick } from "@/lib/sound";
import { Layers } from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: "01",
      title: "Real-world utility",
      subtitle: "Focusing on tangible, practical everyday friction",
      description:
        "Rather than inventing speculative software categories, OceanEdge focuses on grounded, practical needs where everyday interactions can be significantly simplified.",
      tag: "SCOPE: DAILY NEEDS",
    },
    {
      id: "02",
      title: "Local context first",
      subtitle: "Engineered specifically for Bangladesh’s ecosystem",
      description:
        "Building for Bangladesh means accounting for informal work practices, varied connectivity, mobile-centric use, and direct human trust dynamics.",
      tag: "SCOPE: REGIONAL ARCHITECTURE",
    },
    {
      id: "03",
      title: "Craft and restraint",
      subtitle: "Purposeful software with zero artificial bloat",
      description:
        "We believe good engineering is marked by what you leave out. Our tools are designed to be fast, clear, and durable.",
      tag: "SCOPE: SUSTAINABLE DESIGN",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About OceanEdge Technologies"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--background)] scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with index label */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-10 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            <span>ABOUT OCEANEDGE</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider">
            DOC_REF: OE-ABOUT-DRAFT
          </span>
        </div>

        {/* Editorial Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Core Positioning Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-[11px] font-mono uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-subtle)] px-2.5 py-1">
              Positioning Draft
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--foreground)] leading-[1.15]">
              Good technology should make useful things easier.
            </h2>

            <div className="p-5 border-l-2 border-[var(--border-strong)] bg-[var(--surface)] text-base sm:text-lg text-[var(--foreground)] leading-relaxed font-normal">
              We’re building OceanEdge around a simple idea: technology should help
              people get things done. We’re starting with the problems we see around
              work and local services in Bangladesh.
            </div>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              We treat this as draft positioning rather than a finished corporate
              manifesto. As we build and test our initial products with real users,
              our understanding will continue to evolve through direct experience.
            </p>
          </div>

          {/* Right Column: Interactive Domain Matrix / System Pillars */}
          <div className="lg:col-span-6">
            <div className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-[var(--foreground)] uppercase font-semibold">
                  <Layers size={14} className="text-[var(--accent)]" />
                  <span>FOUNDATIONAL INTENT // MATRIX</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-dim)]">
                  SELECT [01 - 03]
                </span>
              </div>

              {/* Tab Selector Buttons */}
              <div className="grid grid-cols-3 gap-1 mb-5">
                {pillars.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      playTick(720 + idx * 80, 0.02);
                      setActiveTab(idx);
                    }}
                    className={`py-2 px-2 text-center font-mono text-[10px] sm:text-xs tracking-wider uppercase border transition-all ${
                      activeTab === idx
                        ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] font-semibold shadow-xs"
                        : "bg-[var(--surface-subtle)] text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--foreground)]"
                    }`}
                  >
                    <span>{item.id} {" // "} {item.title.split(" ")[0]}</span>
                  </button>
                ))}
              </div>

              {/* Active Tab Card Content */}
              <div className="p-4 sm:p-5 bg-[var(--surface-subtle)] border border-[var(--border)] min-h-[170px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[var(--accent)] tracking-widest uppercase font-semibold">
                      {pillars[activeTab].tag}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-dim)]">
                      NODE {pillars[activeTab].id}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] tracking-tight">
                    {pillars[activeTab].title}
                  </h3>
                  <div className="text-xs font-mono text-[var(--text-muted)] mt-0.5 mb-3">
                    {pillars[activeTab].subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {pillars[activeTab].description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[10px] font-mono text-[var(--text-dim)]">
                  <span>FRAMEWORK: EMPIRICAL & GROUNDED</span>
                  <span>STATUS: IN PROGRESS</span>
                </div>
              </div>

              {/* Hardware Spec Ticker / Footnote */}
              <div className="mt-4 pt-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[var(--text-dim)]">
                <span>HEADQUARTERS: DHAKA</span>
                <span>FOCUS: DIGITAL INFRASTRUCTURE</span>
                <span>PILOT: KAAZDAAK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
