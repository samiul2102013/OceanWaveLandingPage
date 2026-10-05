import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import ProductsSection from "@/components/ProductsSection";
import CurrentFocusSection from "@/components/CurrentFocusSection";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <RevealOnScroll />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <AnnouncementTicker />
        <ProductsSection />
        <CurrentFocusSection />
        <AboutSection />
        <ApproachSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
