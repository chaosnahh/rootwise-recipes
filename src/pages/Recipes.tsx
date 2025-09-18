import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Flame, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import herbalTeaImage from "@/assets/herbal-tea.jpg";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIngredient, setSelectedIngredient] = useState("all");

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
      ingredients: ["turmeric", "ginger", "honey"],
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
      ingredients: ["chamomile", "lavender", "honey"],
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
      ingredients: ["ginger", "mint", "lemon"],
      benefits: ["Digestive Health", "Nausea Relief", "Energy Boost"]
    },
    {
      id: 4,
      title: "Healing Bone Broth with Herbs",
      description: "Nourishing bone broth infused with healing herbs for ultimate wellness.",
      image: herbalTeaImage,
      time: "4 hours",
      servings: 6,
      difficulty: "Advanced",
      category: "Food",
      ingredients: ["turmeric", "ginger", "thyme"],
      benefits: ["Joint Health", "Immunity", "Nutrient Dense"]
    },
    {
      id: 5,
      title: "Elderberry Immune Syrup",
      description: "Natural immune support syrup perfect for cold and flu season.",
      image: herbalTeaImage,
      time: "45 mins",
      servings: 8,
      difficulty: "Medium",
      category: "Remedy",
      ingredients: ["elderberry", "ginger", "honey"],
      benefits: ["Immune Support", "Antioxidants", "Cold Prevention"]
    },
    {
      id: 6,
      title: "Tulsi Stress Relief Tea",
      description: "Sacred basil blend to reduce stress and promote mental clarity.",
      image: herbalTeaImage,
      time: "8 mins",
      servings: 2,
      difficulty: "Easy",
      category: "Tea",
      ingredients: ["tulsi", "chamomile", "lemon"],
      benefits: ["Stress Relief", "Mental Clarity", "Adaptogenic"]
    }
  ];

  // Filter recipes based on search and filters
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || recipe.category.toLowerCase() === selectedCategory;
    const matchesIngredient = selectedIngredient === "all" || 
                             recipe.ingredients.some(ing => ing.toLowerCase() === selectedIngredient);
    
    return matchesSearch && matchesCategory && matchesIngredient;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Herbal Recipes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover healing recipes using nature's most powerful ingredients
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg border border-border p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-herb-green" />
            <h3 className="font-semibold text-foreground">Filter Recipes</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="tea">Tea</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="tonic">Tonic</SelectItem>
                <SelectItem value="remedy">Remedy</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedIngredient} onValueChange={setSelectedIngredient}>
              <SelectTrigger>
                <SelectValue placeholder="Select ingredient" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ingredients</SelectItem>
                <SelectItem value="ginger">Ginger</SelectItem>
                <SelectItem value="turmeric">Turmeric</SelectItem>
                <SelectItem value="tulsi">Tulsi</SelectItem>
                <SelectItem value="chamomile">Chamomile</SelectItem>
                <SelectItem value="mint">Mint</SelectItem>
                <SelectItem value="honey">Honey</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
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

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No recipes found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedIngredient("all");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Recipes;