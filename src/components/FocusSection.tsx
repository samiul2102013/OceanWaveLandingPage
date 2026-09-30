"use client";

import React, { useState } from "react";
import { playTick } from "@/lib/sound";
import { Compass, Users2, RefreshCw } from "lucide-react";

export default function FocusSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const principles = [
    {
      id: "01",
      title: "Useful by design",
      action: "Start with a real need.",
      explanation:
        "Every feature begins from genuine friction in everyday tasks. We avoid decorative technology that does not directly solve a tangible operational problem.",
      icon: Compass,
      tag: "PRINCIPLE // NEED",
    },
    {
      id: "02",
      title: "Built for people",
      action: "Make products clear and practical to use.",
      explanation:
        "Interfaces must be legible, responsive, and respectful of varied digital literacy levels, device capabilities, and network environments across Bangladesh.",
      icon: Users2,
      tag: "PRINCIPLE // USABILITY",
    },
    {
      id: "03",
      title: "Made to improve",
      action: "Learn from use and keep refining.",
      explanation:
        "No software is perfect on day one. We view our releases as instruments to learn from actual field use, continually refining through iterative feedback.",
      icon: RefreshCw,
      tag: "PRINCIPLE // ITERATION",
    },
  ];

  return (
    <section
      aria-label="Our Focus and Guiding Principles"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-10 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            <span className="text-[var(--accent)] font-bold">SEC.02 //</span>
            <span>OUR FOCUS</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider">
            STATUS: PROPOSED PRINCIPLES
          </span>
        </div>

        {/* Section Title & Clarification */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[var(--foreground)]">
            Principles that guide how we build.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)]">
            These are proposed principles guiding our early design and engineering
            decisions, not claims about established corporate practices.
          </p>
        </div>

        {/* 3 Principles Modular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={p.id}
                onMouseEnter={() => {
                  playTick(600 + idx * 70, 0.015);
                  setHoveredIdx(idx);
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative flex flex-col justify-between border bg-[var(--surface)] p-6 transition-all duration-200 ${
                  isHovered
                    ? "border-[var(--foreground)] shadow-md translate-y-[-2px]"
                    : "border-[var(--border)]"
                }`}
              >
                {/* Top Hardware Notches */}
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                  <span className="font-mono text-2xl font-bold tracking-tight text-[var(--foreground)]">
                    {p.id}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-dim)] uppercase">
                    <span>{p.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="py-6 space-y-3">
                  <div className="w-8 h-8 flex items-center justify-center border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--foreground)] mb-3">
                    <Icon size={16} className={isHovered ? "text-[var(--accent)]" : ""} />
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--foreground)] tracking-tight">
                    {p.title}
                  </h3>

                  <div className="text-sm font-mono text-[var(--accent)] font-medium">
                    — {p.action}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed pt-1">
                    {p.explanation}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-[10px] font-mono text-[var(--text-dim)]">
                  <span>DISCIPLINE: PRODUCT DESIGN</span>
                  <span className={isHovered ? "text-[var(--accent)]" : ""}>
                    ● REFINING
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
