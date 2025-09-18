import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Leaf, Heart, Share2, Calendar, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const Community = () => {
  const localSellers = [
    {
      name: "Green Valley Herbs",
      location: "Downtown Market",
      specialty: "Organic dried herbs",
      rating: 4.8,
      distance: "0.5 miles"
    },
    {
      name: "Healing Garden Co-op",
      location: "Riverside District", 
      specialty: "Fresh medicinal plants",
      rating: 4.9,
      distance: "1.2 miles"
    },
    {
      name: "Mountain Herb Farm",
      location: "Hillside Farmers Market",
      specialty: "Wild-crafted herbs",
      rating: 4.7,
      distance: "2.1 miles"
    }
  ];

  const communityStories = [
    {
      author: "Sarah M.",
      title: "How Turmeric Tea Changed My Life",
      excerpt: "After struggling with inflammation for years, I discovered the golden turmeric tea recipe...",
      likes: 127,
      comments: 23,
      timeAgo: "2 days ago"
    },
    {
      author: "James W.",
      title: "Growing a Healing Garden in Small Spaces",
      excerpt: "Living in an apartment doesn't mean you can't have your own herb garden. Here's how I...",
      likes: 89,
      comments: 18,
      timeAgo: "1 week ago"
    },
    {
      author: "Maria L.",
      title: "Traditional Remedies from My Grandmother",
      excerpt: "My abuela taught me these ancient recipes that have been passed down for generations...",
      likes: 156,
      comments: 31,
      timeAgo: "3 days ago"
    }
  ];

  const upcomingEvents = [
    {
      title: "Herb Walk & Identification Workshop",
      date: "March 15, 2024",
      time: "10:00 AM",
      location: "City Botanical Garden",
      attendees: 24
    },
    {
      title: "Making Herbal Tinctures",
      date: "March 22, 2024", 
      time: "2:00 PM",
      location: "Community Center",
      attendees: 18
    },
    {
      title: "Spring Herb Planting Day",
      date: "April 5, 2024",
      time: "9:00 AM",
      location: "Community Garden",
      attendees: 42
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Herbal Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with local herb growers, share knowledge, and build a healthier community together
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Community Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-herb-green" />
                  Community Stories
                </CardTitle>
                <p className="text-muted-foreground">
                  Real experiences from our herbal wellness community
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {communityStories.map((story, index) => (
                    <div key={index} className="border-b border-border pb-6 last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground hover:text-herb-green cursor-pointer">
                            {story.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">by {story.author} • {story.timeAgo}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">{story.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{story.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{story.comments}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-herb-green hover:text-herb-leaf">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full border-herb-green text-herb-green hover:bg-herb-green hover:text-white">
                    Share Your Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contribute Knowledge Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-herb-green" />
                  Share Your Herbal Knowledge
                </CardTitle>
                <p className="text-muted-foreground">
                  Help our community grow by sharing recipes, tips, or traditional remedies
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Email Address" />
                  </div>
                  <Input placeholder="Recipe/Remedy Title" />
                  <Textarea 
                    placeholder="Share your herbal knowledge, family recipes, or traditional remedies..."
                    className="min-h-32"
                  />
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-herb-green hover:text-white">
                      Recipe
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-herb-green hover:text-white">
                      Remedy
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-herb-green hover:text-white">
                      Growing Tips
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-herb-green hover:text-white">
                      Traditional Medicine
                    </Badge>
                  </div>
                  <Button className="w-full bg-herb-green hover:bg-herb-leaf text-white">
                    Contribute to Community
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Local Herb Sellers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-herb-green" />
                  Local Herb Sellers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {localSellers.map((seller, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg hover:border-herb-green transition-colors">
                      <h4 className="font-semibold text-foreground">{seller.name}</h4>
                      <p className="text-sm text-muted-foreground">{seller.location}</p>
                      <p className="text-sm text-herb-green">{seller.specialty}</p>
                      <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                        <span>⭐ {seller.rating}</span>
                        <span>{seller.distance}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-herb-green text-herb-green hover:bg-herb-green hover:text-white">
                  View Herb Map
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-herb-green" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg hover:border-herb-green transition-colors">
                      <h4 className="font-semibold text-foreground text-sm">{event.title}</h4>
                      <p className="text-xs text-muted-foreground">{event.date} at {event.time}</p>
                      <p className="text-xs text-herb-green">{event.location}</p>
                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-herb-green text-herb-green hover:bg-herb-green hover:text-white">
                  View All Events
                </Button>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-herb-green" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-herb-green">2,847</div>
                    <div className="text-sm text-muted-foreground">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-herb-green">1,234</div>
                    <div className="text-sm text-muted-foreground">Recipes Shared</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-herb-green">89</div>
                    <div className="text-sm text-muted-foreground">Local Growers</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;