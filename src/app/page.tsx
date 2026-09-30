import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import AboutSection from "@/components/AboutSection";
import FocusSection from "@/components/FocusSection";
import ApproachSection from "@/components/ApproachSection";
import ProductsSection from "@/components/ProductsSection";
import CurrentFocusSection from "@/components/CurrentFocusSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white font-mono text-xs uppercase"
      >
        Skip to main content
      </a>

      {/* Global Header & Brand Navigation */}
      <Header />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-1">
        {/* Hero Section — OceanEdge First */}
        <Hero />

        {/* Persistent High-Contrast Announcement Strip */}
        <AnnouncementTicker />

        {/* Section 01: About OceanEdge */}
        <AboutSection />

        {/* Section 02: Our Focus (Proposed Principles) */}
        <FocusSection />

        {/* Section 03: Our Approach (4-Step Sequence) */}
        <ApproachSection />

        {/* Section 04: Products (Dedicated KaazDaak Spotlight) */}
        <ProductsSection />

        {/* Section 05: What We're Building Now */}
        <CurrentFocusSection />

        {/* Section 06: Contact & Business Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
