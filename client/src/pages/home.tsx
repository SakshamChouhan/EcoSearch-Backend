import NavBar from "@/components/nav-bar";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WaitlistForm />
      </main>
    </div>
  );
}
