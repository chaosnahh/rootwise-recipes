import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedRecipes from "@/components/FeaturedRecipes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedRecipes />
    </div>
  );
};

export default Index;
