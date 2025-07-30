import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Heart } from "lucide-react";
import salonInterior from "@/assets/salon-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every service we provide",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for beauty drives everything we do",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our clients",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist & Owner",
      experience: "15+ years",
      specialty: "Color & Styling",
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Colorist",
      experience: "12+ years",
      specialty: "Balayage & Highlights",
    },
    {
      name: "Emily Chen",
      role: "Spa Specialist",
      experience: "8+ years",
      specialty: "Facial Treatments",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-warm/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey of passion, excellence, and dedication to beauty
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                15 Years of Beauty Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2009, Luxe Salon began as a dream to create a space where artistry 
                meets luxury. Our founder, Sarah Johnson, envisioned a salon that would not 
                just provide services, but create experiences that leave clients feeling 
                beautiful, confident, and pampered.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Over the years, we've grown from a small neighborhood salon to a premier 
                destination for beauty and wellness. Our commitment to using only the finest 
                products and staying current with the latest trends has earned us a reputation 
                for excellence in our community.
              </p>
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="ml-2 text-muted-foreground">500+ satisfied clients</span>
              </div>
              <Button variant="luxury" size="lg">
                Book Your Experience
              </Button>
            </div>
            <div className="relative">
              <img 
                src={salonInterior} 
                alt="Salon Interior"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-warm/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide everything we do and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-warm">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-accent to-luxury p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-luxury-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet the Artists
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our talented team of professionals brings years of experience and passion to every service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-warm">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-accent to-luxury rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-luxury-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-2">
                    {member.experience}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {member.specialty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-elegant to-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our family of satisfied clients and discover what makes us special
          </p>
          <Button size="lg" variant="luxury" className="text-lg px-8 py-6">
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;