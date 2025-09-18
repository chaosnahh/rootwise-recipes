import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, Flame, ArrowLeft, Heart, Share2, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import herbalTeaImage from "@/assets/herbal-tea.jpg";

const RecipeDetail = () => {
  const { id } = useParams();
  
  // Mock recipe data - in real app this would come from API
  const recipe = {
    id: 1,
    title: "Golden Turmeric Immunity Tea",
    description: "A warming blend of turmeric, ginger, and honey to boost your immune system naturally. This ancient Ayurvedic recipe has been used for centuries to support health and vitality.",
    image: herbalTeaImage,
    time: "10 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Tea",
    benefits: ["Anti-inflammatory", "Immunity Boost", "Digestive Aid", "Antioxidant Rich"],
    ingredients: [
      { name: "Fresh turmeric root", amount: "1 inch piece", notes: "or 1 tsp powder" },
      { name: "Fresh ginger root", amount: "1 inch piece", notes: "peeled and sliced" },
      { name: "Raw honey", amount: "1-2 tbsp", notes: "to taste" },
      { name: "Coconut milk", amount: "1/2 cup", notes: "full-fat preferred" },
      { name: "Water", amount: "1.5 cups", notes: "filtered" },
      { name: "Black pepper", amount: "1 pinch", notes: "enhances turmeric absorption" },
      { name: "Cinnamon stick", amount: "1 small", notes: "optional" }
    ],
    instructions: [
      "Bring water to a gentle boil in a small saucepan.",
      "Add sliced ginger and turmeric root (or powder) to the boiling water.",
      "Reduce heat and simmer for 8-10 minutes until fragrant.",
      "Add cinnamon stick if using and simmer for 2 more minutes.",
      "Remove from heat and strain the tea into cups.",
      "Stir in coconut milk while the tea is still hot.",
      "Add honey to taste and a pinch of black pepper.",
      "Serve immediately while warm for best benefits."
    ],
    nutrition: {
      calories: 85,
      protein: "2g",
      carbs: "12g",
      fat: "4g",
      fiber: "1g",
      vitamins: ["Vitamin C", "Vitamin E", "B6"],
      minerals: ["Manganese", "Iron", "Potassium"]
    },
    tips: [
      "Fresh turmeric and ginger provide more potent benefits than dried versions",
      "The black pepper helps your body absorb curcumin from turmeric",
      "Drink this tea on an empty stomach for maximum absorption",
      "Store leftover concentrate in the fridge for up to 3 days"
    ],
    relatedHerbs: ["Ginger", "Cinnamon", "Black Pepper", "Honey"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/recipes" className="inline-flex items-center text-herb-green hover:text-herb-leaf mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Recipes
        </Link>

        {/* Recipe Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="bg-herb-green text-white mb-3">
                {recipe.category}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {recipe.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {recipe.description}
              </p>
            </div>

            {/* Recipe Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <Clock className="h-6 w-6 text-herb-green mx-auto mb-2" />
                <div className="font-semibold">{recipe.time}</div>
                <div className="text-sm text-muted-foreground">Prep Time</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <Users className="h-6 w-6 text-herb-green mx-auto mb-2" />
                <div className="font-semibold">{recipe.servings}</div>
                <div className="text-sm text-muted-foreground">Servings</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <Flame className="h-6 w-6 text-herb-green mx-auto mb-2" />
                <div className="font-semibold">{recipe.difficulty}</div>
                <div className="text-sm text-muted-foreground">Difficulty</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1 bg-herb-green hover:bg-herb-leaf text-white">
                <Heart className="h-4 w-4 mr-2" />
                Save Recipe
              </Button>
              <Button variant="outline" className="border-herb-green text-herb-green hover:bg-herb-green hover:text-white">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-96 object-cover rounded-lg shadow-herb"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-herb-green" />
                  Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-start border-b border-border/50 pb-2 last:border-0">
                      <div>
                        <span className="font-medium">{ingredient.name}</span>
                        {ingredient.notes && (
                          <div className="text-sm text-muted-foreground">{ingredient.notes}</div>
                        )}
                      </div>
                      <span className="text-herb-green font-semibold ml-4">{ingredient.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recipe.instructions.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-herb-green text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-foreground pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Pro Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-herb-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Health Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {recipe.benefits.map((benefit) => (
                    <Badge key={benefit} variant="outline" className="border-herb-green/30 text-herb-green">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nutrition */}
            <Card>
              <CardHeader>
                <CardTitle>Nutrition (per serving)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Calories</span>
                    <span className="font-semibold">{recipe.nutrition.calories}</span>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span>Protein</span>
                      <span>{recipe.nutrition.protein}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carbs</span>
                      <span>{recipe.nutrition.carbs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fat</span>
                      <span>{recipe.nutrition.fat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fiber</span>
                      <span>{recipe.nutrition.fiber}</span>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="text-sm font-medium mb-2">Key Vitamins</div>
                    <div className="text-sm text-muted-foreground">
                      {recipe.nutrition.vitamins.join(", ")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Herbs */}
            <Card>
              <CardHeader>
                <CardTitle>Related Herbs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recipe.relatedHerbs.map((herb) => (
                    <Link 
                      key={herb} 
                      to={`/encyclopedia?search=${herb.toLowerCase()}`}
                      className="block p-2 text-sm border border-border rounded-md hover:border-herb-green hover:text-herb-green transition-colors"
                    >
                      {herb}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;