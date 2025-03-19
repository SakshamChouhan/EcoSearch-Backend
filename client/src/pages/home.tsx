import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import WaitlistForm from "@/components/waitlist-form";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-start" style={{ backgroundColor: "#fdf7f4" }}>
      {/* Header */}
      <header className="py-6 px-16 w-full flex justify-between items-center">
        <div className="text-3xl font-bold tracking-tight">
          <span className="text-[#8AB891]">Eco</span>
          <span>Search</span>
        </div>
      </header>

      {/* Spacer */}
      <div className="min-h-[250px]"></div> {/* Ensures spacing */}

      <main className="w-full flex-grow">
        <HeroSection />
        <WaitlistForm />

        {/* Spacer */}
        <div className="min-h-[500px]"></div> {/* Ensures spacing */}
        
        <FeaturesSection />

        <div className="min-h-[210px]"></div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#8eb486] text-white py-12 px-6">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold">EcoSearch</h2>
          <div className="min-h-[100px]"></div>
          <p className="text-bold mt-4">© 2025 EcoSearch</p>
        </div>
      </footer>
    </div>
  );
}
