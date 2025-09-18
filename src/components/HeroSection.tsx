import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-herbs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh herbs and healing plants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Leaf className="h-8 w-8 text-herb-green" />
            <span className="text-herb-green font-semibold text-lg">Natural Wellness</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Herbal Living</span>
            <br />
            <span className="bg-gradient-to-r from-herb-green to-herb-leaf bg-clip-text text-transparent">
              for a Healthy Life
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Discover the ancient wisdom of herbal medicine with our comprehensive collection 
            of recipes, nutritional guides, and healing remedies. Transform your wellness 
            journey with nature's most powerful ingredients.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Heart className="h-5 w-5 text-herb-green" />
              <span>Natural Healing</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-herb-green" />
              <span>Proven Benefits</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Leaf className="h-5 w-5 text-herb-green" />
              <span>Organic Ingredients</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/recipes">
              <Button 
                size="lg" 
                className="bg-herb-green hover:bg-herb-leaf text-white shadow-herb group"
              >
                Explore Recipes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/encyclopedia">
              <Button 
                variant="outline" 
                size="lg"
                className="border-herb-green text-herb-green hover:bg-herb-green hover:text-white"
              >
                Learn About Herbs
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="bg-card/80 backdrop-blur rounded-2xl p-6 shadow-natural border border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-herb-green">500+</div>
            <div className="text-sm text-muted-foreground">Herbal Recipes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;