import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Leaf, Globe, Zap } from "lucide-react";

const features = [
  {
    title: "Eco-Friendly AI",
    description: "Our AI models are optimized for minimal environmental impact",
    icon: Leaf
  },
  {
    title: "Global Impact",
    description: "Help reduce carbon emissions with every search",
    icon: Globe
  },
  {
    title: "Lightning Fast",
    description: "Get accurate results without compromising on speed",
    icon: Zap
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none bg-background">
              <CardHeader className="text-center md:text-left">
                <div className="flex justify-center md:justify-start">
                  <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4" />
                </div>
                <CardTitle className="text-xl md:text-2xl">{feature.title}</CardTitle>
                <CardDescription className="text-sm md:text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}