"use client";

import React from "react";
import EdgeWaveformVisualizer from "./EdgeWaveformVisualizer";
import { playTick } from "@/lib/sound";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    playTick(800, 0.02);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="OceanEdge Technologies Hero"
      className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-[var(--border)] overflow-hidden"
    >
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-[var(--border)] text-[11px] font-mono tracking-widest uppercase text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
            <span className="font-semibold text-[var(--foreground)]">
              OCEANEDGE TECHNOLOGIES
            </span>
            <span className="hidden md:inline font-bangla text-xs text-[var(--text-dim)] tracking-normal">
              (ওশানএজ টেকনোলজিস)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] text-[var(--text-dim)]">
            <span className="hidden sm:inline">INDEX: OE-REF-01</span>
            <span>COORD: 23.8103°N / 90.4125°E</span>
            <span className="text-[var(--accent)] font-medium">PHASE: PROD_DEV</span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Editorial Statement & Primary Messaging */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Small Category Label */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-5 border border-[var(--border-strong)] bg-[var(--surface)] text-[11px] font-mono tracking-wider text-[var(--foreground)] uppercase">
                <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)]" />
                <span>OCEANEDGE TECHNOLOGIES</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--foreground)] leading-[1.08] max-w-2xl">
                Building technology for real-world needs.
              </h1>

              {/* Supporting Copy */}
              <p className="mt-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl font-normal">
                OceanEdge Technologies is a technology company developing digital
                products for everyday work and services. KaazDaak is our first
                product, now in development.
              </p>

              {/* Call to Actions */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  onClick={(e) => handleScrollTo(e, "products")}
                  className="group inline-flex items-center gap-3 px-5 py-3.5 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] transition-colors text-xs font-mono tracking-widest uppercase font-medium focus:outline-none focus:ring-2 focus:ring-[var(--accent)] active:translate-y-px"
                >
                  <span>Explore our products</span>
                  <ArrowDownRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
                  />
                </a>

                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, "about")}
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-[var(--border-strong)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--foreground)] transition-colors text-xs font-mono tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-[var(--foreground)] active:translate-y-px"
                >
                  <span>About OceanEdge</span>
                </a>
              </div>
            </div>

            {/* Bottom Hardware Spec Strip */}
            <div className="mt-12 pt-6 border-t border-[var(--border)] grid grid-cols-3 gap-4 text-[11px] font-mono">
              <div className="space-y-1">
                <div className="text-[var(--text-dim)] uppercase text-[10px]">
                  01 / PURPOSE
                </div>
                <div className="text-[var(--foreground)] font-medium">
                  Everyday Work
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[var(--text-dim)] uppercase text-[10px]">
                  02 / DOMAIN
                </div>
                <div className="text-[var(--foreground)] font-medium">
                  Bangladesh
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[var(--text-dim)] uppercase text-[10px]">
                  03 / PIPELINE
                </div>
                <div className="text-[var(--foreground)] font-medium">
                  KaazDaak (01)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Interactive Waveform Synthesizer */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-2 flex items-center justify-between text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider">
              <span>FIG. 00 // SIGNAL INTERACTION</span>
              <span>LIVE RENDER</span>
            </div>
            <EdgeWaveformVisualizer />
            <div className="mt-2 text-[10px] font-mono text-[var(--text-dim)] leading-normal">
              Interactive signal monitor: representing the friction-free edge
              between software services and real-world trade.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
