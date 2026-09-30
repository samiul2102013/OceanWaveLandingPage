"use client";

import React from "react";
import { playTick } from "@/lib/sound";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    playTick(800, 0.02);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[var(--background)] border-t border-[var(--border)] pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--border)]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[var(--accent)]" />
              <span className="font-mono text-base font-bold tracking-tight text-[var(--foreground)] uppercase">
                OceanEdge Technologies
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
              Developing digital products for everyday work and services in Bangladesh.
              Grounded, practical, and useful by design.
            </p>
            <div className="text-[11px] font-mono text-[var(--text-dim)]">
              LOC: DHAKA, BANGLADESH · EST. 2026
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-dim)] mb-3">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="#about"
                  onClick={() => playTick(640, 0.015)}
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors uppercase"
                >
                  01 // About
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  onClick={() => playTick(640, 0.015)}
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors uppercase"
                >
                  02 // Approach
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={() => playTick(640, 0.015)}
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors uppercase"
                >
                  03 // Products (KaazDaak)
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => playTick(640, 0.015)}
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors uppercase"
                >
                  04 // Contact
                </a>
              </li>
            </ul>
          </div>

          {/* System Spec & Action */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <div className="text-left md:text-right space-y-1 text-[11px] font-mono text-[var(--text-dim)]">
              <div>BUILD SPEC: 2026.10</div>
              <div>NEXT.JS APP ROUTER</div>
              <div>BANGLADESH LOCAL TIME: GMT+6</div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 border border-[var(--border)] hover:border-[var(--foreground)] bg-[var(--surface)] text-[11px] font-mono uppercase tracking-wider text-[var(--foreground)] transition-colors active:translate-y-px"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-[var(--text-dim)]">
          <div>
            © {new Date().getFullYear()} OceanEdge Technologies. All rights reserved.
          </div>
          <div>
            KaazDaak is an OceanEdge product under active development.
          </div>
        </div>
      </div>
    </footer>
  );
}
