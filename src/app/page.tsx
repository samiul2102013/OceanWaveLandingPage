import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import ProductsSection from "@/components/ProductsSection";
import CurrentFocusSection from "@/components/CurrentFocusSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import OceanBackgroundCanvas from "@/components/OceanBackgroundCanvas";
import ScrollSpy from "@/components/ScrollSpy";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white">
      {/* Fixed animated video-style ocean canvas background */}
      <OceanBackgroundCanvas />

      {/* Automatic scroll URL spy for seamless history state updates */}
      <ScrollSpy />

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white font-mono text-xs uppercase"
      >
        Skip to main content
      </a>

      {/* Global Header & Brand Navigation */}
      <Header />

      {/* Main Page Flow — scrolling over fixed ocean canvas */}
      <main id="main-content" className="flex-1 relative z-10">
        {/* Hero Section — KaazDaak leads the page */}
        <Hero />

        {/* Persistent High-Contrast Announcement Strip */}
        <AnnouncementTicker />

        {/* Products (Dedicated KaazDaak Spotlight) */}
        <ProductsSection />

        {/* What We're Building Now */}
        <CurrentFocusSection />

        {/* About OceanEdge */}
        <AboutSection />

        {/* How We Build */}
        <ApproachSection />

        {/* Contact & Business Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
