"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { playTick, toggleSound } from "@/lib/sound";
import { Volume2, VolumeX, Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) {
      document.documentElement.setAttribute("data-theme", "dark");
      const timer = setTimeout(() => setIsDark(true), 0);
      return () => clearTimeout(timer);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    playTick(880, 0.02);
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const handleSoundToggle = () => {
    const state = toggleSound();
    setSoundOn(state);
  };

  const pathname = usePathname();
  const onHome = pathname === "/";

  const navLinks = [
    { label: "KaazDaak", href: "/kaazdaak" },
    { label: "About", href: onHome ? "#about" : "/#about" },
    { label: "Approach", href: onHome ? "#approach" : "/#approach" },
    { label: "Contact", href: onHome ? "#contact" : "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md transition-colors">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Wordmark & Technical Glyph */}
          <a
            href="#"
            onClick={() => playTick(700, 0.015)}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] p-1 rounded-sm"
            aria-label="OceanEdge Technologies Home"
          >
            {/* Brand Monogram */}
            <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-[var(--border-strong)] bg-white overflow-hidden group-hover:border-[var(--accent)] transition-colors">
              <Image
                src="/oceanedge-mark.png"
                alt=""
                width={32}
                height={19}
                priority
                className="w-8 h-auto object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-[var(--foreground)] uppercase">
                OceanEdge
                <span className="font-light text-[var(--text-muted)] ml-1">
                  Technologies
                </span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[var(--text-dim)] uppercase hidden sm:block">
                DIGITAL PRODUCTS FOR BANGLADESH
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => playTick(640, 0.015)}
                className="group relative px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase text-[var(--foreground)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Utility Controls & Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Status indicator badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 border border-[var(--border)] bg-[var(--surface-subtle)] text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>KAAZDAAK · IN DEVELOPMENT</span>
            </div>

            {/* Tactile Audio Feedback Switch */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? "Disable tactile UI clicks" : "Enable tactile UI clicks"}
              aria-label={soundOn ? "Disable UI audio" : "Enable UI audio"}
              className="p-2 border border-[var(--border)] hover:border-[var(--foreground)] bg-[var(--surface)] text-[var(--foreground)] transition-colors"
            >
              {soundOn ? <Volume2 size={15} /> : <VolumeX size={15} className="opacity-60" />}
            </button>

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              title={isDark ? "Switch to daylight mode" : "Switch to studio dark mode"}
              aria-label={isDark ? "Light mode" : "Dark mode"}
              className="p-2 border border-[var(--border)] hover:border-[var(--foreground)] bg-[var(--surface)] text-[var(--foreground)] transition-colors"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => {
                playTick(720, 0.02);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                playTick(600, 0.02);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2.5 border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--surface-subtle)] transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-[10px] text-[var(--text-dim)]">→</span>
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[var(--text-dim)] px-2">
            <span>LOC: BANGLADESH</span>
            <span className="text-emerald-500">● PROD_01: KAAZDAAK</span>
          </div>
        </div>
      )}
    </header>
  );
}
