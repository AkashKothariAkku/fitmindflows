import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router";
import { Video, CheckCircle2, Calendar, TrendingUp, ArrowRight } from "lucide-react";

export default function OnlinePersonalTraining() {
  const benefits = [
    "Personalized workout plans tailored to your goals",
    "1-on-1 video coaching sessions",
    "Custom nutrition and meal planning",
    "Progress tracking and analytics",
    "Flexible scheduling around your life",
    "24/7 support via chat and email",
    "Regular form checks and adjustments",
    "Access to exclusive workout library",
  ];

  const packages = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      features: [
        "2 video sessions per month",
        "Custom workout plan",
        "Email support",
        "Progress tracking",
      ],
    },
    {
      name: "Professional",
      price: "$179",
      period: "per month",
      features: [
        "4 video sessions per month",
        "Custom workout & meal plan",
        "Priority support",
        "Weekly check-ins",
        "Form analysis",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$299",
      period: "per month",
      features: [
        "8 video sessions per month",
        "Comprehensive coaching",
        "Daily support",
        "Nutrition consulting",
        "Recovery protocols",
        "Supplement guidance",
      ],
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
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Video className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl tracking-tight">
            Online Personal Training
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Get expert coaching from anywhere in the world. Achieve your fitness
            goals with personalized training plans and one-on-one video sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">
                Start Training
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link to="/results-testimonials">View Success Stories</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
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
              What You'll Get
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your fitness journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-background transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to start your fitness transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Calendar,
              title: "Book Consultation",
              description: "Schedule a free consultation to discuss your goals and needs",
            },
            {
              icon: Video,
              title: "Start Training",
              description: "Receive your custom plan and begin video coaching sessions",
            },
            {
              icon: TrendingUp,
              title: "Track Progress",
              description: "Monitor your results and adjust your plan for optimal results",
            },
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-semibold text-muted-foreground/30">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
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
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible options to match your commitment and goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`h-full relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">{pkg.price}</span>
                        <span className="text-muted-foreground">{pkg.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full rounded-full" variant={pkg.popular ? "default" : "outline"} asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
