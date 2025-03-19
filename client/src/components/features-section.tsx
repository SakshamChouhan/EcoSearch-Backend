import { Leaf, Trees as Tree, X, CircleDot } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-muted/50">
      <h2 className="text-6xl font-bold text-center mb-24 tracking-tight leading-tight">
        Build sustainable systems
        <br />
        with your search
      </h2>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-40 max-w-7xl mx-auto px-16">
        <Feature
          icon={<Tree className="w-10 h-10 text-[#8AB891]" />}
          title="Climate Driven"
          description="We put the revenue earned to work with climate investments in renewables and plantation drives."
        />
        <Feature
          icon={<Leaf className="w-10 h-10 text-[#8AB891]" />}
          title="Optimized Search"
          description="We provide quality search results, reducing energy consumption by 300%."
        />
        <Feature
          icon={<X className="w-10 h-10 text-[#8AB891]" />}
          title="Privacy First"
          description="We don't collect or store any data. We are a privacy-focused AI search engine."
        />
        <Feature
          icon={<CircleDot className="w-10 h-10 text-[#8AB891]" />}
          title="Minimal Design"
          description="Our Design System is minimal to reduce the carbon footprint with user interaction."
        />
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 relative inline-block tracking-tight">
        {title}
        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black"></div>
      </h3>
      <p className="text-gray-500 text-lg font-medium text-center tracking-tight leading-relaxed max-w-md mx-auto">
        {description}
      </p>
    </div>
  );
}
