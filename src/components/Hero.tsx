"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
      id="hero"
      aria-label="KaazDaak by OceanEdge Technologies"
      className="relative border-b border-[var(--border)] bg-gradient-to-b from-kd-mist via-kd-mist to-white overflow-hidden"
    >
      <div className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Product messaging */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Small Category Label */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-6 border border-kd-navy/15 bg-white/70 text-[11px] font-mono tracking-wider text-kd-navy uppercase self-start">
              <span className="w-1.5 h-1.5 rounded-none bg-kd-teal" />
              <span>KAAZDAAK · LOCAL WORK MARKETPLACE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-kd-navy leading-[1.06] max-w-2xl">
              Hire nearby help for everyday jobs.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-kd-navy/70 leading-relaxed max-w-xl font-normal">
              KaazDaak is a local work marketplace for Bangladesh. Post a task,
              compare offers from workers nearby, hire the one you trust.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/kaazdaak"
                onClick={() => playTick(800, 0.02)}
                className="group inline-flex items-center gap-3 px-5 py-3.5 bg-kd-navy text-white hover:bg-kd-teal transition-colors text-xs font-mono tracking-widest uppercase font-medium focus:outline-none focus:ring-2 focus:ring-kd-teal active:translate-y-px"
              >
                <span>Explore KaazDaak</span>
                <ArrowDownRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
                />
              </Link>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-kd-navy/25 bg-white/60 hover:bg-white text-kd-navy transition-colors text-xs font-mono tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-kd-navy active:translate-y-px"
              >
                <span>Talk to us</span>
              </a>
            </div>

            {/* Product Spec Strip */}
            <div className="mt-10 pt-6 border-t border-kd-navy/10 grid grid-cols-3 gap-4 text-[11px] font-mono">
              <div className="space-y-1">
                <div className="text-kd-navy/50 uppercase text-[10px]">
                  PRODUCT
                </div>
                <div className="text-kd-navy font-medium">KaazDaak</div>
              </div>
              <div className="space-y-1">
                <div className="text-kd-navy/50 uppercase text-[10px]">
                  MARKET
                </div>
                <div className="text-kd-navy font-medium">Bangladesh</div>
              </div>
              <div className="space-y-1">
                <div className="text-kd-navy/50 uppercase text-[10px]">
                  STATUS
                </div>
                <div className="text-kd-navy font-medium">In development</div>
              </div>
            </div>
          </div>

          {/* Right Column: KaazDaak hero banner */}
          <div className="lg:col-span-7">
            <div className="border border-kd-navy/10 bg-white shadow-sm overflow-hidden">
              <Image
                src="/kaazdaak-hero.jpg"
                alt="KaazDaak app screens with verified service providers and service categories"
                width={2200}
                height={1229}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
