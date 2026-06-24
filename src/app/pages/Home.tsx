import { Hero } from "../components/home/Hero";
import { Stats } from "../components/home/Stats";
import { Specialties } from "../components/home/Specialties";
import { FindYourDoctor } from "../components/home/FindYourDoctor";
import { SymptomChecker } from "../components/home/SymptomChecker";
import { PackagesAndStories } from "../components/home/PackagesAndStories";
import { EmergencyAndInternational } from "../components/home/EmergencyAndInternational";
import { ArticlesAndPartners } from "../components/home/ArticlesAndPartners";
import { Reveal } from "../components/Reveal";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero, Stats, Specialties & ArticlesAndPartners animate internally. */}
      <Hero />
      <Stats />
      <Specialties />
      <Reveal>
        <FindYourDoctor />
      </Reveal>
      <Reveal>
        <SymptomChecker />
      </Reveal>
      <Reveal>
        <PackagesAndStories />
      </Reveal>
      <Reveal>
        <EmergencyAndInternational />
      </Reveal>
      <ArticlesAndPartners />
    </div>
  );
}
