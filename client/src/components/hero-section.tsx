import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
          The World's First
          <span className="text-primary block mt-2">Green AI Search Engine</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-4">
          Join us in revolutionizing search with sustainable AI technology. 
          Better for you, better for the planet.
        </p>
        <Button 
          size="lg" 
          className="text-base md:text-lg px-6 md:px-8"
          onClick={scrollToWaitlist}
        >
          Join the Waitlist
        </Button>
      </div>
    </section>
  );
}