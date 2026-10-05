"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "KaazDaak", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const ids = ["hero", "products", "about", "approach", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("oe-theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header__inner">
        <a className="brand" href="#hero" aria-label="OceanEdge Technologies home">
          <span className="brand__logo">
            <Image src="/oceanedge-mark.png" alt="OceanEdge Technologies logo" width={44} height={44} priority />
          </span>
          <span className="brand__text">
            <span className="brand__name">
              OceanEdge <span>Technologies</span>
            </span>
            <span className="brand__sub">Digital products for Bangladesh</span>
          </span>
        </a>

        <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Primary">
          <ul className="nav__list">
            {navLinks.map((link) => {
              const isActive = link.href === `#${active}`;
              return (
                <li key={link.href}>
                  <a
                    className={`nav__link${isActive ? " is-active" : ""}`}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header__actions">
          <span className="status-pill">KaazDaak · In development</span>

          <button
            className="icon-btn"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle light or dark theme"
          >
            <Sun className="icon-sun" size={17} aria-hidden="true" />
            <Moon className="icon-moon" size={17} aria-hidden="true" />
          </button>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle__bar" aria-hidden="true" />
            <span className="nav-toggle__bar" aria-hidden="true" />
            <span className="nav-toggle__bar" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
