import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#080A0F] text-white">
        <Hero />
        <ServicesOverview />
        <PricingSection />
        <PortfolioSection />
      </main>
    </>
  );
}