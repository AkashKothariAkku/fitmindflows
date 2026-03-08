import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Video, Heart, Stethoscope, TrendingDown, Building2, ArrowRight } from "lucide-react";

export default function ServicesPrograms() {
  const services = [
    {
      icon: Video,
      title: "Online Personal Training",
      description: "Customized workout plans with virtual coaching and real-time feedback",
      features: ["1-on-1 video sessions", "Custom meal plans", "Progress tracking", "24/7 support"],
      link: "/online-personal-training",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Yoga & Mindfulness",
      description: "Find balance and inner peace through guided yoga and meditation practices",
      features: ["Multiple yoga styles", "Meditation sessions", "Stress management", "Flexibility training"],
      link: "/yoga-mindfulness",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=300&fit=crop"
    },
    {
      icon: Stethoscope,
      title: "Physiotherapy",
      description: "Expert rehabilitation and injury prevention for optimal physical health",
      features: ["Injury recovery", "Pain management", "Movement assessment", "Personalized treatment"],
      link: "/physiotherapy",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"
    },
  ];

  const programs = [
    {
      icon: TrendingDown,
      title: "Fat Loss Program",
      description: "Comprehensive weight loss program with nutrition and exercise guidance",
      features: ["12-week structured plan", "Nutrition coaching", "Weekly check-ins", "Body composition analysis"],
      link: "/fat-loss-program",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop"
    },
    {
      icon: Building2,
      title: "Corporate Wellness",
      description: "Enhance employee health, productivity, and workplace satisfaction",
      features: ["On-site programs", "Virtual sessions", "Health screenings", "Team challenges"],
      link: "/corporate-wellness",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl tracking-tight">
            Services & Programs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Discover our comprehensive range of fitness and wellness solutions
            designed to meet your unique needs and goals.
          </p>
        </motion.div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="services" className="text-base">Services</TabsTrigger>
            <TabsTrigger value="programs" className="text-base">Programs</TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-between">
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature) => (
                            <li key={feature} className="text-sm text-muted-foreground flex items-start">
                              <span className="mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full rounded-full">
                          <Link to={service.link}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Programs Tab */}
          <TabsContent value="programs" className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                          <program.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{program.title}</CardTitle>
                        <CardDescription>{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-between">
                        <ul className="space-y-2 mb-6">
                          {program.features.map((feature) => (
                            <li key={feature} className="text-sm text-muted-foreground flex items-start">
                              <span className="mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full rounded-full">
                          <Link to={program.link}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground">
              Book a free consultation with our expert team. We'll help you find
              the perfect program to achieve your wellness goals.
            </p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
