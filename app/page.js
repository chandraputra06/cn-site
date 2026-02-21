import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#080A0F] text-white">
        <Hero />
        <ServicesOverview />
      </main>
    </>
  );
}