import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Scissors, 
  Palette, 
  Sparkles, 
  Crown, 
  Zap, 
  Heart,
  Clock,
  Star
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: Scissors,
      title: "Hair Services",
      description: "Professional cuts, styling, and treatments",
      services: [
        { name: "Women's Cut & Style", price: "$85", duration: "90 min" },
        { name: "Men's Cut", price: "$45", duration: "45 min" },
        { name: "Wash & Blowout", price: "$55", duration: "60 min" },
        { name: "Updo Styling", price: "$95", duration: "75 min" },
        { name: "Deep Conditioning Treatment", price: "$45", duration: "30 min" },
      ]
    },
    {
      icon: Palette,
      title: "Color Services",
      description: "Expert coloring and color correction",
      services: [
        { name: "Full Color", price: "$120", duration: "2.5 hrs" },
        { name: "Highlights (Full)", price: "$140", duration: "3 hrs" },
        { name: "Balayage", price: "$160", duration: "3.5 hrs" },
        { name: "Color Correction", price: "$200+", duration: "4+ hrs" },
        { name: "Root Touch-up", price: "$80", duration: "90 min" },
      ]
    },
    {
      icon: Sparkles,
      title: "Facial Treatments",
      description: "Relaxing and rejuvenating skincare",
      services: [
        { name: "Classic European Facial", price: "$90", duration: "75 min" },
        { name: "Anti-Aging Facial", price: "$120", duration: "90 min" },
        { name: "Hydrating Facial", price: "$100", duration: "75 min" },
        { name: "Acne Treatment Facial", price: "$95", duration: "75 min" },
        { name: "Microdermabrasion", price: "$110", duration: "60 min" },
      ]
    },
    {
      icon: Crown,
      title: "Specialty Services",
      description: "Premium treatments and packages",
      services: [
        { name: "Bridal Package", price: "$300", duration: "4 hrs" },
        { name: "Mother of Bride Package", price: "$250", duration: "3 hrs" },
        { name: "Prom Package", price: "$150", duration: "2 hrs" },
        { name: "Makeup Application", price: "$75", duration: "45 min" },
        { name: "Lash Extensions", price: "$120", duration: "2 hrs" },
      ]
    }
  ];

  const addOns = [
    { name: "Scalp Massage", price: "$20", icon: Heart },
    { name: "Hair Gloss", price: "$35", icon: Sparkles },
    { name: "Express Blowout", price: "$25", icon: Zap },
    { name: "Eyebrow Shaping", price: "$30", icon: Crown },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-warm/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Luxury Beauty Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of premium beauty treatments designed to enhance your natural radiance
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-warm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-accent to-luxury p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-6 w-6 text-luxury-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{category.title}</CardTitle>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{service.name}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {service.duration}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-accent text-lg">{service.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      Book {category.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-warm/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Enhance Your Experience
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Add-On Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete your beauty experience with our luxurious add-on treatments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-warm">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-accent to-luxury p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <addon.icon className="h-6 w-6 text-luxury-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{addon.name}</h3>
                  <p className="text-accent font-bold text-lg">{addon.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 bg-gradient-to-r from-accent/10 to-luxury/10">
            <CardContent className="p-8">
              <Star className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Pricing Information
              </h3>
              <p className="text-muted-foreground mb-6">
                All prices are starting rates and may vary based on hair length, thickness, and specific requirements. 
                We offer complimentary consultations to provide accurate pricing for your individual needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg">
                  View Packages
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-elegant to-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today to schedule your appointment and experience luxury beauty services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="luxury" className="text-lg px-8 py-6">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-elegant">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;