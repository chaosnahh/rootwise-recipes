import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, MessageCircle, Leaf, Send } from "lucide-react";
import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about herbal remedies? Want to share your knowledge? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-herb-green" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Whether you have questions, suggestions, or want to collaborate, we're here to help.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name *
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What would you like to discuss?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recipe-question">Recipe Question</SelectItem>
                        <SelectItem value="herb-identification">Herb Identification</SelectItem>
                        <SelectItem value="health-consultation">Health Consultation</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="feedback">Website Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your question or how we can help you..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-herb-green hover:text-white">
                      Beginner
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-herb-green hover:text-white">
                      Intermediate
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-herb-green hover:text-white">
                      Advanced
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-herb-green hover:text-white">
                      Practitioner
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" className="rounded" />
                    <span>
                      I agree to receive updates about new recipes and herbal health tips
                    </span>
                  </div>

                  <Button className="w-full bg-herb-green hover:bg-herb-leaf text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-herb-green" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-herb-green mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">hello@herballiving.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-herb-green mt-0.5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-herb-green mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">
                      123 Wellness Way<br />
                      Herbal City, HC 12345
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-herb-green mt-0.5" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">
                      Usually within 24 hours
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border border-border rounded-lg hover:border-herb-green transition-colors cursor-pointer">
                    <div className="font-medium text-sm">Herb Safety Guidelines</div>
                    <div className="text-xs text-muted-foreground">Learn about safe usage</div>
                  </div>
                  <div className="p-3 border border-border rounded-lg hover:border-herb-green transition-colors cursor-pointer">
                    <div className="font-medium text-sm">Recipe Modifications</div>
                    <div className="text-xs text-muted-foreground">Adapt recipes to your needs</div>
                  </div>
                  <div className="p-3 border border-border rounded-lg hover:border-herb-green transition-colors cursor-pointer">
                    <div className="font-medium text-sm">Growing Tips</div>
                    <div className="text-xs text-muted-foreground">Start your herb garden</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="border-herb-green text-herb-green hover:bg-herb-green hover:text-white">
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="border-herb-green text-herb-green hover:bg-herb-green hover:text-white">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="border-herb-green text-herb-green hover:bg-herb-green hover:text-white">
                    YouTube
                  </Button>
                  <Button variant="outline" size="sm" className="border-herb-green text-herb-green hover:bg-herb-green hover:text-white">
                    Pinterest
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Join our community for daily herbal tips and inspiration
                </p>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-herb-green/20 bg-herb-green/5">
              <CardHeader>
                <CardTitle className="text-herb-green">Herbal Wellness Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get weekly recipes, seasonal herb guides, and wellness tips delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <Input placeholder="Enter your email" className="border-herb-green/30" />
                  <Button className="w-full bg-herb-green hover:bg-herb-leaf text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;