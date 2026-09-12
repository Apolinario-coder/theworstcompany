import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import TimelineSection from "@/components/TimelineSection";
import MapSection from "@/components/MapSection";
import DossierSection from "@/components/DossierSection";
import InteractiveExtras from "@/components/InteractiveExtras";
import ActionSection from "@/components/ActionSection";

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen text-white">
      <HeroSection />
      <DashboardSection />
      <TimelineSection />
      <MapSection />
      <DossierSection />
      <InteractiveExtras />
      <ActionSection />
    </main>
  );
}
