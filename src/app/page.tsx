import { FeaturesSection } from "@/components/global/feature";
import { HeroSection } from "@/components/global/hero-section";
import { Nav } from "@/components/global/Navbar";
import { AppPreviewSection } from "@/components/global/Preview";
import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-gradient-to-br from-[#0A0A0A] via-[#1C1C1C] to-[#0F0F0F] min-h-screen">
    <Nav/>
    <HeroSection />
    <FeaturesSection />
    <AppPreviewSection />
  </div>
  );
}
