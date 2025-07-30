import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, Scissors, Palette, Sparkles } from "lucide-react";
import salonHero from "@/assets/salon-hero.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import spaTreatment from "@/assets/spa-treatment.jpg";

const Home = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "Professional cuts, styling, and treatments for all hair types",
      image: salonInterior,
    },
    {
      icon: Palette,
      title: "Color Services",
      description: "Expert coloring, highlights, and color correction",
      image: salonInterior,
    },
    {
      icon: Sparkles,
      title: "Spa Treatments",
      description: "Relaxing facials, massages, and beauty treatments",
      image: spaTreatment,
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "20+", label: "Services" },
    { number: "5", label: "Star Rating" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${salonHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-elegant/80 to-elegant/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent border-accent/30">
            Luxury Beauty Experience
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-accent to-luxury bg-clip-text text-transparent">
              Beauty Story
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience premium salon services in our luxurious space, where artistry meets expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="luxury" className="text-lg px-8 py-6">
              Book Appointment
            </Button>
            <Button size="lg" variant="elegant" className="text-lg px-8 py-6">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Signature Treatments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our range of premium services designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-500 border-0 bg-gradient-to-br from-card to-warm">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elegant/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="luxury" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-warm/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                About Luxe Salon
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                15 Years of Excellence in Beauty
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Luxe Salon, we believe that beauty is an art form. Our team of expert stylists 
                and beauty professionals are dedicated to bringing out your natural radiance while 
                providing an unparalleled luxury experience.
              </p>
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="ml-2 text-muted-foreground">500+ satisfied clients</span>
              </div>
              <Link to="/about">
                <Button variant="elegant" size="lg">
                  Our Story
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={salonInterior} 
                alt="Salon Interior"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <Clock className="h-8 w-8 mb-2" />
                <div className="font-semibold">Open Daily</div>
                <div className="text-sm opacity-90">9 AM - 8 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-elegant to-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your appointment today and experience the luxury you deserve
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="luxury" className="text-lg px-8 py-6">
              <MapPin className="mr-2 h-5 w-5" />
              Book Now
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-elegant">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;