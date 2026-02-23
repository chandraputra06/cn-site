import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-[#080A0F] text-white">
        <Hero />
        <ServicesOverview />
        <PricingSection />
        <PortfolioSection />
        <FAQSection />
        <ContactSection />
      </main>

      <FooterSection />
    </>
  );
}