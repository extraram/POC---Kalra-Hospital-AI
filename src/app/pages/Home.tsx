import { Hero } from "../components/home/Hero";
import { Stats } from "../components/home/Stats";
import { Specialties } from "../components/home/Specialties";
import { FindYourDoctor } from "../components/home/FindYourDoctor";
import { SymptomChecker } from "../components/home/SymptomChecker";
import { PackagesAndStories } from "../components/home/PackagesAndStories";
import { EmergencyAndInternational } from "../components/home/EmergencyAndInternational";
import { ArticlesAndPartners } from "../components/home/ArticlesAndPartners";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <Specialties />
      <FindYourDoctor />
      <SymptomChecker />
      <PackagesAndStories />
      <EmergencyAndInternational />
      <ArticlesAndPartners />
    </div>
  );
}
