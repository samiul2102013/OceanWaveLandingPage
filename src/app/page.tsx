import Header from "@/components/Header";
import OceanEdgeHero from "@/components/OceanEdgeHero";
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
        <OceanEdgeHero />
        <AboutSection />
        <ApproachSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
