import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <div className="h-24" />
    </main>
  );
}