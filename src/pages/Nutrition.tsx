import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Heart, Brain, Shield, Zap, Leaf, Star } from "lucide-react";
import Navigation from "@/components/Navigation";

const Nutrition = () => {
  const topHerbs = [
    { name: "Turmeric", vitamin: "Curcumin", score: 95, color: "bg-yellow-500" },
    { name: "Ginger", vitamin: "Gingerol", score: 90, color: "bg-orange-500" },
    { name: "Garlic", vitamin: "Allicin", score: 88, color: "bg-red-500" },
    { name: "Green Tea", vitamin: "EGCG", score: 85, color: "bg-green-500" },
    { name: "Cinnamon", vitamin: "Cinnamaldehyde", score: 82, color: "bg-amber-600" },
    { name: "Elderberry", vitamin: "Anthocyanins", score: 80, color: "bg-purple-500" },
  ];

  const nutritionCategories = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Heart Health",
      herbs: ["Hawthorn", "Garlic", "Turmeric", "Green Tea"],
      nutrients: ["Omega-3", "Antioxidants", "Potassium", "Magnesium"],
      description: "Herbs that support cardiovascular health and circulation"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Brain Function",
      herbs: ["Ginkgo Biloba", "Gotu Kola", "Bacopa", "Rosemary"],
      nutrients: ["Vitamins B6, B12", "Folate", "Omega-3", "Antioxidants"],
      description: "Cognitive support and mental clarity enhancing herbs"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Immunity",
      herbs: ["Echinacea", "Elderberry", "Astragalus", "Ginger"],
      nutrients: ["Vitamin C", "Zinc", "Beta-glucans", "Polyphenols"],
      description: "Natural immune system boosters and protective compounds"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Energy & Vitality",
      herbs: ["Ginseng", "Rhodiola", "Ashwagandha", "Maca"],
      nutrients: ["B-Complex", "Iron", "Adaptogens", "Amino Acids"],
      description: "Adaptogenic herbs for sustained energy and stress resilience"
    }
  ];

  const faqs = [
    {
      question: "Which tea is best for immunity?",
      answer: "Elderberry, echinacea, and ginger teas are excellent for immune support. Green tea with its EGCG content also provides powerful antioxidant benefits."
    },
    {
      question: "How much turmeric should I consume daily?",
      answer: "1-3 grams of turmeric powder daily is generally safe. Always consume with black pepper and healthy fats for better absorption. Consult your healthcare provider for personalized advice."
    },
    {
      question: "What herbs help with digestion?",
      answer: "Ginger, peppermint, fennel, and chamomile are traditional digestive aids. They can help reduce bloating, nausea, and support healthy gut function."
    },
    {
      question: "Are there herbs that help with sleep?",
      answer: "Chamomile, valerian root, passionflower, and lavender are well-known for their calming and sleep-promoting properties."
    },
    {
      question: "How do I know if herbs are safe for me?",
      answer: "Always consult with a healthcare provider before starting any herbal regimen, especially if you take medications or have health conditions. Start with small amounts and monitor your body's response."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nutrition Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the nutritional power of herbs and their impact on your health
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-1/2 mx-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="top-herbs">Top Herbs</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Hero Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6 border-herb-green/20">
                <div className="text-3xl font-bold text-herb-green mb-2">500+</div>
                <div className="text-muted-foreground">Active Compounds</div>
              </Card>
              <Card className="text-center p-6 border-herb-green/20">
                <div className="text-3xl font-bold text-herb-green mb-2">50+</div>
                <div className="text-muted-foreground">Healing Herbs</div>
              </Card>
              <Card className="text-center p-6 border-herb-green/20">
                <div className="text-3xl font-bold text-herb-green mb-2">1000+</div>
                <div className="text-muted-foreground">Years of Use</div>
              </Card>
              <Card className="text-center p-6 border-herb-green/20">
                <div className="text-3xl font-bold text-herb-green mb-2">25+</div>
                <div className="text-muted-foreground">Essential Vitamins</div>
              </Card>
            </div>

            {/* Why Herbs Matter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-herb-green" />
                  Why Herbal Nutrition Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-muted-foreground mb-4">
                  Herbs have been humanity's first medicine for thousands of years. Unlike synthetic compounds, 
                  herbs contain complex arrays of nutrients, antioxidants, and bioactive compounds that work 
                  synergistically to support health.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Bioavailability</h4>
                    <p className="text-muted-foreground text-sm">
                      Natural forms of nutrients in herbs are often more easily absorbed by the body than synthetic versions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Synergy</h4>
                    <p className="text-muted-foreground text-sm">
                      Multiple compounds in herbs work together to enhance each other's effects and reduce side effects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Holistic Benefits</h4>
                    <p className="text-muted-foreground text-sm">
                      Herbs often provide benefits beyond their primary active compounds, supporting overall wellness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Safety Profile</h4>
                    <p className="text-muted-foreground text-sm">
                      Traditional use and modern research confirm the safety of most culinary and medicinal herbs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="top-herbs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top 10 Nutrient-Dense Herbs</CardTitle>
                <p className="text-muted-foreground">
                  Ranked by overall nutritional value and bioactive compound concentration
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topHerbs.map((herb, index) => (
                    <div key={herb.name} className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-herb-green text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold">{herb.name}</span>
                          <span className="text-sm text-muted-foreground">{herb.score}/100</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={herb.score} className="flex-1 h-2" />
                          <Badge variant="outline" className="text-xs border-herb-green/30 text-herb-green">
                            {herb.vitamin}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {nutritionCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-herb transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-herb-green">
                      {category.icon}
                      {category.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium mb-2">Key Herbs:</div>
                        <div className="flex flex-wrap gap-2">
                          {category.herbs.map((herb) => (
                            <Badge key={herb} variant="outline" className="border-herb-green/30 text-herb-green">
                              {herb}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-2">Important Nutrients:</div>
                        <div className="flex flex-wrap gap-2">
                          {category.nutrients.map((nutrient) => (
                            <Badge key={nutrient} variant="secondary" className="text-xs">
                              {nutrient}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-2 text-lg">
                      <Star className="h-5 w-5 text-herb-green mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="border-herb-green/20 bg-herb-green/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-herb-green mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Important Disclaimer</h3>
                  <p className="text-muted-foreground text-sm">
                    The information provided is for educational purposes only and should not replace 
                    professional medical advice. Always consult with a healthcare provider before 
                    starting any herbal regimen, especially if you have medical conditions or take medications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Nutrition;