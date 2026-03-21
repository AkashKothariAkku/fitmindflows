import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router";
import { Stethoscope, Activity, Shield, Target, ArrowRight } from "lucide-react";

export default function Physiotherapy() {
  const services = [
    {
      icon: Activity,
      name: "Sports Injury Rehabilitation",
      description: "Recover faster from sports-related injuries with specialized treatment",
    },
    {
      icon: Shield,
      name: "Pain Management",
      description: "Chronic pain relief through evidence-based therapeutic techniques",
    },
    {
      icon: Target,
      name: "Post-Surgery Recovery",
      description: "Comprehensive rehabilitation programs for surgical recovery",
    },
    {
      icon: Stethoscope,
      name: "Movement Assessment",
      description: "Identify and correct movement patterns to prevent injury",
    },
  ];

  const conditions = [
    "Back & Neck Pain",
    "Sports Injuries",
    "Joint Problems",
    "Muscle Strains",
    "Post-Surgery Recovery",
    "Arthritis",
    "Posture Issues",
    "Repetitive Strain",
    "Work-Related Injuries",
    "Balance Problems",
    "Mobility Issues",
    "Chronic Pain",
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
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Stethoscope className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl tracking-tight">
            Physiotherapy Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Expert rehabilitation and injury prevention. Get back to doing what you
            love with personalized treatment plans from our licensed physiotherapists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">
                Book Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link to="/our-teams">Meet Our Therapists</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive physiotherapy treatments for various conditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
            Conditions We Treat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert treatment for a wide range of physical conditions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="p-4 bg-muted/50 rounded-lg text-center hover:bg-muted transition-colors"
            >
              <span className="text-sm font-medium">{condition}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
              Our Treatment Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to your recovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "Comprehensive evaluation of your condition and movement patterns",
              },
              {
                step: "2",
                title: "Diagnosis",
                description: "Identify the root cause and develop a treatment plan",
              },
              {
                step: "3",
                title: "Treatment",
                description: "Hands-on therapy and targeted exercises",
              },
              {
                step: "4",
                title: "Recovery",
                description: "Ongoing support and prevention strategies",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-5xl font-bold text-primary/20">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
            Pricing & Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Affordable options for your recovery journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Initial Assessment",
              price: "$120",
              description: "Comprehensive 60-minute evaluation and treatment plan",
            },
            {
              name: "Single Session",
              price: "$95",
              description: "45-minute follow-up treatment session",
            },
            {
              name: "Package of 10",
              price: "$850",
              description: "Save $100 with our 10-session package",
            },
          ].map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 space-y-4 text-center">
                  <h3 className="text-xl font-semibold">{option.name}</h3>
                  <div className="text-3xl font-bold text-primary">
                    {option.price}
                  </div>
                  <p className="text-muted-foreground">{option.description}</p>
                  <Button className="w-full rounded-full" asChild>
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
