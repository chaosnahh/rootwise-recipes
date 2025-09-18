import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import herbalTeaImage from "@/assets/herbal-tea.jpg";

const FeaturedRecipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Golden Turmeric Immunity Tea",
      description: "A warming blend of turmeric, ginger, and honey to boost your immune system naturally.",
      image: herbalTeaImage,
      time: "10 mins",
      servings: 2,
      difficulty: "Easy",
      category: "Tea",
      benefits: ["Anti-inflammatory", "Immunity Boost", "Digestive Aid"]
    },
    {
      id: 2,
      title: "Chamomile Lavender Sleep Blend",
      description: "Soothing herbal tea perfect for evening relaxation and better sleep quality.",
      image: herbalTeaImage,
      time: "5 mins",
      servings: 1,
      difficulty: "Easy",
      category: "Tea",
      benefits: ["Sleep Aid", "Stress Relief", "Calming"]
    },
    {
      id: 3,
      title: "Ginger Mint Digestive Tonic",
      description: "Refreshing herbal remedy to support healthy digestion and reduce bloating.",
      image: herbalTeaImage,
      time: "15 mins",
      servings: 4,
      difficulty: "Medium",
      category: "Tonic",
      benefits: ["Digestive Health", "Nausea Relief", "Energy Boost"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Herbal Recipes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular healing recipes, carefully crafted to support your wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="group hover:shadow-herb transition-all duration-300 border-border/50 hover:border-herb-green/30">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-herb-green/90 text-white">
                      {recipe.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 group-hover:text-herb-green transition-colors">
                  {recipe.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {recipe.description}
                </p>

                {/* Recipe Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{recipe.servings}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="h-4 w-4" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.benefits.slice(0, 2).map((benefit) => (
                    <Badge key={benefit} variant="outline" className="text-xs border-herb-green/30 text-herb-green">
                      {benefit}
                    </Badge>
                  ))}
                </div>

                <Link to={`/recipes/${recipe.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-herb-green text-herb-green hover:bg-herb-green hover:text-white"
                  >
                    View Recipe
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/recipes">
            <Button 
              size="lg" 
              className="bg-herb-green hover:bg-herb-leaf text-white shadow-herb"
            >
              View All Recipes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;