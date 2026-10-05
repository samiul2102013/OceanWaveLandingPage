"use client";

import React, { useState } from "react";
import { playTick } from "@/lib/sound";

export default function ProductsSection() {
  const [activeAudience, setActiveAudience] = useState<"hirers" | "kaazbirs">("hirers");

  const sampleHirerTasks = [
    { title: "Inverter AC Diagnostics & Repair", category: "Appliance", tag: "Near Dhanmondi" },
    { title: "Bilingual Technical Document Translation", category: "Language", tag: "Remote BD" },
    { title: "Fiber Optic Line Splicing & Setup", category: "Network", tag: "Near Gulshan" },
    { title: "Custom CNC Timber Framework", category: "Carpentry", tag: "Near Mirpur" },
  ];

  const sampleKaazbirMissions = [
    { mission: "Commercial Generator Servicing", skill: "Electrical", urgency: "Urgent" },
    { mission: "Next.js & Supabase Bug Triage", skill: "Software", urgency: "Today" },
    { mission: "On-site High-Precision Welding", skill: "Fabrication", urgency: "Tomorrow" },
    { mission: "Product Photography for Textiles", skill: "Media", urgency: "This Week" },
  ];

  return (
    <section
      id="products"
      aria-label="OceanEdge Products"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md relative z-10 scroll-mt-12"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section label */}
        <div className="pb-4 mb-12 border-b border-[var(--border)]">
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            Products
          </span>
        </div>

        {/* KaazDaak card */}
        <div className="border border-[var(--border-strong)] bg-[var(--surface)]/90 backdrop-blur-md overflow-hidden shadow-sm">
          {/* Status strip */}
          <div className="px-6 sm:px-8 py-3.5 border-b border-[var(--border)] bg-[var(--surface-subtle)] flex items-center justify-between text-[11px] font-mono">
            <span className="text-[var(--text-dim)] uppercase tracking-wider">
              Product 01 · Local Work Marketplace
            </span>
            <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              In development
            </span>
          </div>

          {/* Hero */}
          <div className="p-8 sm:p-12 lg:p-16 border-b border-[var(--border)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-5xl sm:text-6xl font-bold tracking-tight text-[var(--foreground)]">
                    KaazDaak
                  </h3>
                  <span className="font-bangla text-2xl text-[var(--text-dim)]">
                    কাজডাক
                  </span>
                </div>
                <p className="text-xl text-[var(--accent)] font-normal">
                  Hire nearby help for everyday jobs.
                </p>
                <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-lg">
                  Post the job and your area. Nearby workers send offers. Pick who
                  you trust.
                </p>
              </div>

              {/* Spec table */}
              <div className="lg:col-span-5">
                <div className="border border-[var(--border)] bg-[var(--surface-subtle)]/70 p-5 text-xs font-mono space-y-3">
                  {[
                    ["Market", "Bangladesh"],
                    ["Work", "Trade, tech, delivery"],
                    ["Platform", "Mobile & web"],
                    ["Status", "Early alpha"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-[var(--border)] pb-2 last:border-0 last:pb-0">
                      <span className="text-[var(--text-muted)] uppercase tracking-wider text-[10px]">{k}</span>
                      <span className="text-[var(--foreground)] font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="p-8 sm:p-12 border-b border-[var(--border)]">
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-6">
              How it works
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)]">
              {[
                {
                  step: "01",
                  title: "Post your task",
                  body: "Describe the job, your area, and your budget.",
                },
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
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-[var(--surface)]/90 backdrop-blur-sm p-6 space-y-2"
                >
                  <div className="text-[10px] font-mono tracking-widest text-[var(--accent)]">
                    STEP {item.step}
                  </div>
                  <div className="text-base font-semibold text-[var(--foreground)]">
                    {item.title}
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Two roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
            <div className="p-8 sm:p-10 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-dim)]">
                For hirers
              </span>
              <h4 className="text-xl font-semibold text-[var(--foreground)]">
                Need a repair, install, or delivery?
              </h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Post the job with your location and budget. Nearby workers send
                offers. You choose.
              </p>
            </div>

            <div className="p-8 sm:p-10 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-dim)]">
                For Kaazbirs <span className="font-bangla normal-case">(কাজবীর)</span>
              </span>
              <h4 className="text-xl font-semibold text-[var(--foreground)]">
                Have a skill to sell?
              </h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Find paid jobs near you. Send your offer. Work when you want.
              </p>
            </div>
          </div>

          {/* Interactive Interface Simulator */}
          <div className="border-t border-[var(--border)] p-6 sm:p-8 bg-[var(--surface-subtle)]/60">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[var(--border)]">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[var(--foreground)]">
                  A LOOK AT THE APP
                </div>
                <div className="text-[11px] font-mono text-[var(--text-dim)]">
                  Switch views. See both sides.
                </div>
              </div>

              {/* View Switcher Toggle */}
              <div className="flex gap-1 border border-[var(--border-strong)] p-0.5 bg-[var(--surface)]">
                <button
                  onClick={() => {
                    playTick(720, 0.015);
                    setActiveAudience("hirers");
                  }}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                    activeAudience === "hirers"
                      ? "bg-[var(--foreground)] text-[var(--background)] font-medium"
                      : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  Hirer View
                </button>
                <button
                  onClick={() => {
                    playTick(840, 0.015);
                    setActiveAudience("kaazbirs");
                  }}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                    activeAudience === "kaazbirs"
                      ? "bg-[var(--foreground)] text-[var(--background)] font-medium"
                      : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  Kaazbir View
                </button>
              </div>
            </div>

            {/* Dynamic View Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeAudience === "hirers" ? (
                <>
                  {sampleHirerTasks.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between text-xs hover:border-[var(--accent)] transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[10px] font-mono text-[var(--text-dim)] mt-0.5">
                          Category: {item.category}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[var(--accent)] border border-[var(--accent)]/30 px-2 py-0.5 shrink-0 ml-2">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {sampleKaazbirMissions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between text-xs hover:border-emerald-500 transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-[var(--foreground)] group-hover:text-emerald-500 transition-colors">
                          {item.mission}
                        </div>
                        <div className="text-[10px] font-mono text-[var(--text-dim)] mt-0.5">
                          Required: {item.skill}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-2 py-0.5 shrink-0 ml-2">
                        {item.urgency}
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
