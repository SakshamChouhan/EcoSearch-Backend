import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function NavBar() {
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
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          <span className="font-bold text-lg md:text-xl">EcoSearch</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">About</Button>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">Blog</Button>
          <ThemeToggle />
          <Button 
            variant="default" 
            size="sm" 
            className="text-sm md:text-base"
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
}