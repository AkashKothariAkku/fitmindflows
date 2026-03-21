import { motion, AnimatePresence } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Video, Heart, Stethoscope, TrendingDown, Building2, ArrowRight, CheckCircle2 } from "lucide-react";

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
    <div className="flex flex-col relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6 inline-block">
              Unlock Your Potential
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight font-bold">
            <span className="block mb-2">Elevate Your</span>
            <span className="bg-gradient-to-r from-primary via-primary/80 to-blue-600 bg-clip-text text-transparent">
              Wellness Journey
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Discover our comprehensive range of premium fitness and holistic wellness solutions
            designed exclusively to meet your unique lifestyle and goals.
          </motion.p>
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
          <TabsContent value="services" className="space-y-8 mt-8 focus-visible:outline-none focus-visible:ring-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="services-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, staggerChildren: 0.1 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                  >
                    <Card className="h-full flex flex-col group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover:border-primary/20 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <CardHeader className="relative z-20 -mt-8">
                        <div className="h-14 w-14 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed pt-2">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-between pt-2">
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, fIndex) => (
                            <motion.li 
                              key={feature} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + (fIndex * 0.1) }}
                              className="text-sm text-muted-foreground flex items-center"
                            >
                              <CheckCircle2 className="mr-3 h-4 w-4 text-primary/70" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        <Button asChild className="w-full rounded-full group/btn relative overflow-hidden" variant="default">
                          <Link to={service.link}>
                            <span className="relative z-10 flex items-center">
                              Explore Service
                              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          {/* Programs Tab */}
          <TabsContent value="programs" className="space-y-8 mt-8 focus-visible:outline-none focus-visible:ring-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="programs-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, staggerChildren: 0.1 }}
                className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              >
                {programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                  >
                    <Card className="h-full flex flex-col group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover:border-primary/20 overflow-hidden bg-card/50 backdrop-blur-sm">
                      <div className="aspect-[16/9] overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <CardHeader className="relative z-20 -mt-8">
                        <div className="h-14 w-14 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                          <program.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{program.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed pt-2">{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col justify-between pt-2">
                        <ul className="space-y-3 mb-8">
                          {program.features.map((feature, fIndex) => (
                            <motion.li 
                              key={feature} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + (fIndex * 0.1) }}
                              className="text-sm text-muted-foreground flex items-center"
                            >
                              <CheckCircle2 className="mr-3 h-4 w-4 text-primary/70" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                        <Button asChild className="w-full rounded-full group/btn relative overflow-hidden" variant="default">
                          <Link to={program.link}>
                            <span className="relative z-10 flex items-center">
                              Discover Program
                              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
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
