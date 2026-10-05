"use client";

import React from "react";

export default function AnnouncementTicker() {
  const tickerItems = [
    "KAAZDAAK · কাজডাক",
    "LOCAL WORK MARKETPLACE FOR BANGLADESH",
    "POST A TASK",
    "HIRE SOMEONE NEARBY",
    "BUILT MOBILE-FIRST",
    "IN DEVELOPMENT",
  ];

  return (
    <div
      role="region"
      aria-label="Current company announcements"
      className="relative w-full border-y border-[var(--border-strong)] bg-[var(--foreground)] text-[var(--background)] py-2 sm:py-2.5 overflow-hidden select-none"
    >
      <div className="animate-ticker flex items-center gap-8 whitespace-nowrap text-xs font-mono tracking-widest uppercase">
        {/* Doubled for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="font-medium">{item}</span>
            <span
              className="text-[var(--accent)] font-bold text-sm"
              aria-hidden="true"
            >
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
