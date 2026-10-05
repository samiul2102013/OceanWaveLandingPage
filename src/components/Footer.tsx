"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { playTick } from "@/lib/sound";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const scrollToTop = () => {
    playTick(800, 0.02);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[var(--background)]/85 backdrop-blur-md border-t border-[var(--border)] pt-12 pb-16 relative z-10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--border)]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 shrink-0 flex items-center justify-center border border-[var(--border-strong)] bg-white overflow-hidden">
                <Image
                  src="/oceanedge-mark.png"
                  alt=""
                  width={30}
                  height={18}
                  className="w-7 h-auto object-contain"
                />
              </span>
              <span className="font-mono text-base font-bold tracking-tight text-[var(--foreground)] uppercase">
                OceanEdge Technologies
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
              Building KaazDaak, a local work marketplace for Bangladesh. Post a
              task. Hire nearby.
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
                  href="/kaazdaak"
                  onClick={() => playTick(640, 0.015)}
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors uppercase"
                >
                  KaazDaak
                </a>
              </li>
              <li>
                <a
                  href={onHome ? "#about" : "/#about"}
                  onClick={() => playTick(640, 0.015)}
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors uppercase"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href={onHome ? "#approach" : "/#approach"}
                  onClick={() => playTick(640, 0.015)}
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors uppercase"
                >
                  Approach
                </a>
              </li>
              <li>
                <a
                  href={onHome ? "#contact" : "/#contact"}
                  onClick={() => playTick(640, 0.015)}
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors uppercase"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* System Spec & Action */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <div className="text-left md:text-right space-y-1 text-[11px] font-mono text-[var(--text-dim)]">
              <div>DHAKA, BANGLADESH</div>
              <div>LOCAL TIME: GMT+6</div>
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
            KaazDaak is an OceanEdge Technologies product in development.
          </div>
        </div>
      </div>
    </footer>
  );
}
