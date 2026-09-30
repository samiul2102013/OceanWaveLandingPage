"use client";

import React, { useState } from "react";
import { playTick } from "@/lib/sound";
import { ChevronRight, AlertCircle } from "lucide-react";

export default function ProductsSection() {
  const [activeAudience, setActiveAudience] = useState<"hirers" | "kaazbirs">("hirers");

  const sampleTasksHirer = [
    { title: "Split AC Servicing & Cleaning", category: "Appliance", tag: "DHAKA // MIRPUR" },
    { title: "Electrical Circuit Wiring Check", category: "Electrical", tag: "DHAKA // UTTARA" },
    { title: "Bangla to English Document Translation", category: "Language", tag: "REMOTE // BD" },
    { title: "Wooden Door Frame Repair", category: "Carpentry", tag: "DHAKA // DHANMONDI" },
  ];

  const sampleMissionsKaazbir = [
    { mission: "Inverter AC Gas Refill & Valve Repair", skill: "HVAC Tech", urgency: "TODAY" },
    { mission: "Office Network Cable Crimping (8 Drops)", skill: "IT Hardware", urgency: "THIS WEEK" },
    { mission: "Custom Cotton Curtains Tailoring (4 Sets)", skill: "Tailoring", urgency: "FLEXIBLE" },
    { mission: "Product Photography Lighting Assistant", skill: "Media", urgency: "TOMORROW" },
  ];

  return (
    <section
      id="products"
      aria-label="OceanEdge Products Catalog"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--background)] scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-10 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            <span>PRODUCTS</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider">
            CATALOGUE: 01 ACTIVE INGESTION
          </span>
        </div>

        {/* Product Card: KaazDaak */}
        <div className="border border-[var(--border-strong)] bg-[var(--surface)] shadow-md overflow-hidden">
          {/* Hardware Header Strip */}
          <div className="px-6 py-3 border-b border-[var(--border)] bg-[var(--surface-subtle)] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-none bg-[var(--accent)]" />
              <span className="font-bold tracking-widest text-[var(--foreground)] uppercase">
                OCEANEDGE PRODUCT NO. 01
              </span>
            </div>

            <div className="flex items-center gap-2 px-2.5 py-0.5 border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold tracking-wider text-[10px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>IN DEVELOPMENT · COMING SOON</span>
            </div>
          </div>

          {/* Product Editorial Hero */}
          <div className="p-6 sm:p-10 lg:p-12 border-b border-[var(--border)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)]">
                    KaazDaak
                  </h3>
                  <span className="font-bangla text-2xl sm:text-3xl text-[var(--text-dim)] font-medium">
                    (কাজডাক)
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-normal text-[var(--accent)] tracking-tight">
                  Local work, within reach.
                </div>

                <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl font-normal pt-2">
                  Need a service? Find people offering it. Have a skill? Find
                  opportunities to put it to work. KaazDaak is a local work
                  marketplace being built for hirers and Kaazbirs across Bangladesh.
                </p>
              </div>

              {/* Product Hardware Badge / Schematic Silhouette */}
              <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
                <div className="w-full max-w-sm border border-[var(--border)] bg-[var(--surface-subtle)] p-5 text-[11px] font-mono space-y-2.5">
                  <div className="flex justify-between border-b border-[var(--border)] pb-1.5 text-[var(--text-dim)] uppercase">
                    <span>SPECIFICATION</span>
                    <span>VALUES</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">SYSTEM ROLE:</span>
                    <span className="text-[var(--foreground)] font-semibold">Local Work Hub</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">ROLES:</span>
                    <span className="text-[var(--foreground)]">Hirer / Kaazbir</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">TERRITORY:</span>
                    <span className="text-[var(--foreground)]">Bangladesh (BD)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">PLATFORM:</span>
                    <span className="text-[var(--foreground)]">Mobile & Responsive Web</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-[var(--border)]">
                    <span className="text-[var(--text-dim)]">BUILD:</span>
                    <span className="text-[var(--accent)] font-semibold">V0.1-ALPHA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Audience Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
            {/* For Hirers Panel */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[var(--text-dim)] uppercase mb-2">
                  <span className="w-1.5 h-1.5 bg-[var(--foreground)]" />
                  <span>ROLE 01 // EMPLOYER / HIRER</span>
                </div>
                <h4 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  For hirers
                </h4>
                <div className="text-base text-[var(--accent)] font-mono mt-1 font-medium">
                  Have a task? Find someone to take it on.
                </div>
                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  Post local tasks quickly and discover skilled individuals in your
                  area ready to help with maintenance, installations, translation, or
                  daily projects.
                </p>
              </div>

              <div className="p-4 bg-[var(--surface-subtle)] border border-[var(--border)] text-xs font-mono space-y-2">
                <div className="text-[10px] text-[var(--text-dim)] uppercase">HIRER WORKFLOW CONCEPT</div>
                <div className="text-[var(--foreground)] flex items-center gap-2">
                  <ChevronRight size={14} className="text-[var(--accent)]" />
                  <span>Define task scope and requirements</span>
                </div>
                <div className="text-[var(--foreground)] flex items-center gap-2">
                  <ChevronRight size={14} className="text-[var(--accent)]" />
                  <span>Connect with skilled Kaazbirs nearby</span>
                </div>
              </div>
            </div>

            {/* For Kaazbirs Panel */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[var(--text-dim)] uppercase mb-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
                  <span>ROLE 02 // WORKER / KAAZBIR (কাজবীর)</span>
                </div>
                <h4 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  For Kaazbirs
                </h4>
                <div className="text-base text-[var(--accent)] font-mono mt-1 font-medium">
                  Have a skill? Put it to work.
                </div>
                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  Offer services on your own schedule. Browse real nearby opportunities
                  matched to your craft, build local trust, and take control of your work.
                </p>
              </div>

              <div className="p-4 bg-[var(--surface-subtle)] border border-[var(--border)] text-xs font-mono space-y-2">
                <div className="text-[10px] text-[var(--text-dim)] uppercase">KAAZBIR WORKFLOW CONCEPT</div>
                <div className="text-[var(--foreground)] flex items-center gap-2">
                  <ChevronRight size={14} className="text-[var(--accent)]" />
                  <span>List your practical skills and craft</span>
                </div>
                <div className="text-[var(--foreground)] flex items-center gap-2">
                  <ChevronRight size={14} className="text-[var(--accent)]" />
                  <span>Discover matching missions in your radius</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Interface Simulator */}
          <div className="border-t border-[var(--border)] p-6 sm:p-8 bg-[var(--surface-subtle)]">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[var(--border)]">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[var(--foreground)]">
                  SIMULATED INTERFACE PREVIEW
                </div>
                <div className="text-[11px] font-mono text-[var(--text-dim)]">
                  Explore how the two sides of KaazDaak connect
                </div>
              </div>

              {/* View Switcher Toggle */}
              <div className="flex gap-1 border border-[var(--border-strong)] p-0.5 bg-[var(--surface)]">
                <button
                  onClick={() => {
                    playTick(700, 0.015);
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
                    playTick(820, 0.015);
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
                  {sampleTasksHirer.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-medium text-[var(--foreground)]">
                          {item.title}
                        </div>
                        <div className="text-[10px] font-mono text-[var(--text-dim)] mt-0.5">
                          {item.category}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[var(--accent)] border border-[var(--accent)]/30 px-1.5 py-0.5">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {sampleMissionsKaazbir.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-medium text-[var(--foreground)]">
                          {item.mission}
                        </div>
                        <div className="text-[10px] font-mono text-[var(--text-dim)] mt-0.5">
                          Skill: {item.skill}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5">
                        {item.urgency}
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Strict Integrity Disclaimer */}
            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-start gap-2.5 text-[11px] font-mono text-[var(--text-dim)]">
              <AlertCircle size={14} className="mt-0.5 text-[var(--text-dim)] shrink-0" />
              <span>
                Demonstration of interface concept currently in development. OceanEdge
                Technologies does not guarantee immediate work availability, payment
                processing, or specific launch dates prior to official release.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
