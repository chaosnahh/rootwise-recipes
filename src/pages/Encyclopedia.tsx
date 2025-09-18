import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Leaf, Heart, Brain, Shield, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import gingerImage from "@/assets/ginger.jpg";
import turmericImage from "@/assets/turmeric.jpg";

const Encyclopedia = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedHerb, setSelectedHerb] = useState<number | null>(null);

  useEffect(() => {
    if (initialSearch) {
      const herb = herbs.find(h => h.name.toLowerCase() === initialSearch.toLowerCase());
      if (herb) {
        setSelectedHerb(herb.id);
      }
    }
  }, [initialSearch]);

  const herbs = [
    {
      id: 1,
      name: "Ginger",
      scientificName: "Zingiber officinale",
      image: gingerImage,
      description: "A flowering plant whose rhizome is widely used as a spice and folk medicine. Known for its warming properties and digestive benefits.",
      benefits: [
        "Anti-inflammatory properties",
        "Reduces nausea and morning sickness",
        "Supports digestive health",
        "May reduce muscle pain",
        "Boosts immune system"
      ],
      nutrients: [
        "Gingerol (active compound)",
        "Vitamin C",
        "Magnesium",
        "Potassium",
        "Manganese"
      ],
      uses: [
        "Fresh in teas and cooking",
        "Dried powder for spice blends",
        "Candied for snacks",
        "Essential oil for aromatherapy"
      ],
      precautions: "May interact with blood-thinning medications. Consult healthcare provider if pregnant.",
      category: "Root",
      recipes: ["Golden Turmeric Immunity Tea", "Ginger Mint Digestive Tonic"]
    },
    {
      id: 2,
      name: "Turmeric",
      scientificName: "Curcuma longa",
      image: turmericImage,
      description: "A golden-yellow spice from the ginger family, revered for its powerful anti-inflammatory and antioxidant properties.",
      benefits: [
        "Powerful anti-inflammatory effects",
        "Rich in antioxidants",
        "May support brain health",
        "Supports joint health",
        "May boost heart health"
      ],
      nutrients: [
        "Curcumin (active compound)",
        "Iron",
        "Manganese",
        "Vitamin B6",
        "Potassium"
      ],
      uses: [
        "Golden milk and teas",
        "Curry powders and cooking",
        "Supplement form",
        "Topical applications"
      ],
      precautions: "May increase bleeding risk. Can interfere with certain medications. Use with black pepper for better absorption.",
      category: "Root",
      recipes: ["Golden Turmeric Immunity Tea", "Healing Bone Broth with Herbs"]
    },
    {
      id: 3,
      name: "Chamomile",
      scientificName: "Matricaria chamomilla",
      image: gingerImage, // Using placeholder
      description: "A gentle, daisy-like flower traditionally used for relaxation and sleep support. Known for its calming and soothing properties.",
      benefits: [
        "Promotes relaxation and sleep",
        "May reduce anxiety",
        "Supports digestive health",
        "Anti-inflammatory properties",
        "May help with skin conditions"
      ],
      nutrients: [
        "Apigenin (flavonoid)",
        "Bisabolol",
        "Chamazulene",
        "Quercetin",
        "Luteolin"
      ],
      uses: [
        "Herbal teas for relaxation",
        "Essential oil for aromatherapy",
        "Topical creams for skin",
        "Bath soaks for stress relief"
      ],
      precautions: "May cause allergic reactions in people sensitive to ragweed, chrysanthemums, or daisies.",
      category: "Flower",
      recipes: ["Chamomile Lavender Sleep Blend"]
    },
    {
      id: 4,
      name: "Tulsi (Holy Basil)",
      scientificName: "Ocimum tenuiflorum",
      image: gingerImage, // Using placeholder
      description: "Sacred in Hindu tradition, this adaptogenic herb helps the body cope with stress and promotes overall wellness.",
      benefits: [
        "Adaptogenic stress relief",
        "Supports respiratory health",
        "May balance blood sugar",
        "Antioxidant rich",
        "Supports mental clarity"
      ],
      nutrients: [
        "Eugenol",
        "Ursolic acid",
        "Rosmarinic acid",
        "Vitamin A",
        "Vitamin C"
      ],
      uses: [
        "Daily wellness teas",
        "Stress relief blends",
        "Respiratory support",
        "Meditation practices"
      ],
      precautions: "May lower blood sugar. Consult healthcare provider if diabetic or pregnant.",
      category: "Leaf",
      recipes: ["Tulsi Stress Relief Tea"]
    },
    {
      id: 5,
      name: "Mint",
      scientificName: "Mentha",
      image: gingerImage, // Using placeholder
      description: "Refreshing herb from the Lamiaceae family, known for its cooling properties and digestive benefits.",
      benefits: [
        "Supports digestive health",
        "Cooling and refreshing",
        "May relieve respiratory symptoms",
        "Antimicrobial properties",
        "Mental clarity and focus"
      ],
      nutrients: [
        "Menthol",
        "Vitamin A",
        "Vitamin C",
        "Iron",
        "Manganese"
      ],
      uses: [
        "Fresh in teas and beverages",
        "Essential oil for aromatherapy",
        "Culinary garnish",
        "Digestive aid after meals"
      ],
      precautions: "Generally safe. May cause heartburn in sensitive individuals.",
      category: "Leaf",
      recipes: ["Ginger Mint Digestive Tonic"]
    }
  ];

  const filteredHerbs = herbs.filter(herb =>
    herb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    herb.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    herb.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Root": return <Zap className="h-4 w-4" />;
      case "Flower": return <Heart className="h-4 w-4" />;
      case "Leaf": return <Leaf className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  if (selectedHerb) {
    const herb = herbs.find(h => h.id === selectedHerb);
    if (!herb) return null;

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button 
            onClick={() => setSelectedHerb(null)}
            variant="outline"
            className="mb-6 border-herb-green text-herb-green hover:bg-herb-green hover:text-white"
          >
            ← Back to Encyclopedia
          </Button>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-start gap-6">
                <img
                  src={herb.image}
                  alt={herb.name}
                  className="w-32 h-32 object-cover rounded-lg shadow-herb"
                />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {getIconForCategory(herb.category)}
                    <Badge variant="outline" className="border-herb-green text-herb-green">
                      {herb.category}
                    </Badge>
                  </div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{herb.name}</h1>
                  <p className="text-lg text-muted-foreground italic mb-4">{herb.scientificName}</p>
                  <p className="text-foreground">{herb.description}</p>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-herb-green" />
                    Health Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {herb.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-herb-green rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-herb-green" />
                    How to Use
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {herb.uses.map((use, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-herb-green rounded-full mt-2 flex-shrink-0"></div>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {herb.precautions && (
                <Card className="border-orange-200 bg-orange-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700">
                      <Shield className="h-5 w-5" />
                      Precautions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-700">{herb.precautions}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Nutrients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {herb.nutrients.map((nutrient, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-2 border-herb-green/30 text-herb-green">
                        {nutrient}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Featured Recipes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {herb.recipes.map((recipe, index) => (
                      <div key={index} className="p-2 border border-border rounded-md hover:border-herb-green transition-colors">
                        <span className="text-sm">{recipe}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Herbal Encyclopedia
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the healing properties, uses, and benefits of nature's most powerful herbs
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search herbs by name, benefits, or properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-lg border-herb-green/30 focus:border-herb-green"
            />
          </div>
        </div>

        {/* Herb Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHerbs.map((herb) => (
            <Card 
              key={herb.id} 
              className="group hover:shadow-herb transition-all duration-300 cursor-pointer border-border/50 hover:border-herb-green/30"
              onClick={() => setSelectedHerb(herb.id)}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-herb-green/90 text-white flex items-center gap-1">
                      {getIconForCategory(herb.category)}
                      {herb.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <CardTitle className="text-xl group-hover:text-herb-green transition-colors">
                    {herb.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground italic">{herb.scientificName}</p>
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {herb.description}
                </p>

                {/* Top Benefits */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Key Benefits:</div>
                  <div className="flex flex-wrap gap-1">
                    {herb.benefits.slice(0, 3).map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-herb-green/30 text-herb-green">
                        {benefit.split(' ').slice(0, 2).join(' ')}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredHerbs.length === 0 && (
          <div className="text-center py-12">
            <Leaf className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground mb-4">No herbs found matching your search.</p>
            <Button 
              variant="outline" 
              onClick={() => setSearchTerm("")}
              className="border-herb-green text-herb-green hover:bg-herb-green hover:text-white"
            >
              Clear Search
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Encyclopedia;