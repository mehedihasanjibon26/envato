import Navbar from "@/components/navigation/Navbar";
import ConstructionHero from "@/components/sections/ConstructionHero";
import ExperienceJourney from "@/components/sections/ExperienceJourney";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#ebe9e3]">
      <Navbar />

      <ConstructionHero />

      <ExperienceJourney />

      <Footer />
    </main>
  );
}
