"use client";

import { useEffect } from "react";

const SECTION_IDS = [
  "hero",
  "products",
  "building-now",
  "about",
  "approach",
  "contact",
];

export default function ScrollSpy() {
  useEffect(() => {
    let currentHash = window.location.hash.replace("#", "");

    // Handle initial hash scroll if present
    if (currentHash) {
      const initialEl = document.getElementById(currentHash);
      if (initialEl) {
        setTimeout(() => {
          initialEl.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight * 0.38;

      let activeSectionId = "";

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          activeSectionId = id;
          break;
        }
      }

      // If at the very top, hero or empty
      if (window.scrollY < 200) {
        activeSectionId = "hero";
      }

      // If scrolled to the bottom of the page, contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        activeSectionId = "contact";
      }

      if (activeSectionId && activeSectionId !== currentHash) {
        currentHash = activeSectionId;
        const newUrl =
          activeSectionId === "hero"
            ? window.location.pathname + window.location.search
            : `#${activeSectionId}`;
        window.history.replaceState(null, "", newUrl);
      }
    };

    const throttledScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          handleScroll();
          isScrolling = false;
        });
        isScrolling = true;
      }
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
}
