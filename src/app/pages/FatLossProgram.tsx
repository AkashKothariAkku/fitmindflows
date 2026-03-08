import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router";
import { TrendingDown, CheckCircle2, Calendar, LineChart, ArrowRight } from "lucide-react";

export default function FatLossProgram() {
  const features = [
    "12-week structured program",
    "Custom nutrition plan with calorie tracking",
    "Progressive workout routines",
    "Weekly check-ins and accountability",
    "Body composition analysis",
    "Supplement recommendations",
    "Recipe library and meal prep guides",
    "Private community support group",
    "Lifetime access to program materials",
  ];

  const phases = [
    {
      phase: "Weeks 1-4",
      title: "Foundation",
      description: "Establish healthy habits, learn proper form, and kickstart metabolism",
      focus: ["Habit formation", "Nutritional education", "Baseline fitness"],
    },
    {
      phase: "Weeks 5-8",
      title: "Acceleration",
      description: "Increase intensity, optimize nutrition, and maximize fat burning",
      focus: ["Increased intensity", "Metabolic conditioning", "Progress tracking"],
    },
    {
      phase: "Weeks 9-12",
      title: "Transformation",
      description: "Final push with advanced techniques and goal achievement",
      focus: ["Peak performance", "Fine-tuning", "Maintenance strategies"],
    },
  ];

  const results = [
    { metric: "Average Weight Loss", value: "15-25 lbs" },
    { metric: "Body Fat Reduction", value: "5-8%" },
    { metric: "Success Rate", value: "92%" },
    { metric: "Muscle Retention", value: "95%+" },
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
            <TrendingDown className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl tracking-tight">
            Fat Loss Program
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Transform your body in 12 weeks with our comprehensive fat loss program.
            Sustainable results through proven methods, personalized nutrition, and
            expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link to="/results-testimonials">See Results</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Results Stats */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-semibold mb-2 text-primary">
                  {result.value}
                </div>
                <div className="text-sm text-muted-foreground">{result.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
            What's Included
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for successful fat loss
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{feature}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Phases Section */}
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
              Program Phases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A progressive approach to sustainable fat loss
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {phases.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-sm font-semibold text-primary">
                      {item.phase}
                    </div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="pt-4 space-y-2">
                      <div className="text-sm font-semibold">Focus Areas:</div>
                      <ul className="space-y-1">
                        {item.focus.map((focus) => (
                          <li key={focus} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            {focus}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
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
            Your journey to transformation in simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Calendar,
              title: "Initial Consultation",
              description: "Discuss goals and create your personalized plan",
            },
            {
              icon: TrendingDown,
              title: "Start Your Program",
              description: "Begin with workouts, meal plan, and tracking",
            },
            {
              icon: LineChart,
              title: "Weekly Check-ins",
              description: "Monitor progress and adjust as needed",
            },
            {
              icon: CheckCircle2,
              title: "Achieve Results",
              description: "Transform your body and maintain results",
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
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-5xl tracking-tight">
              Investment in Your Health
            </h2>
            <div className="text-5xl font-bold">$997</div>
            <p className="text-lg text-primary-foreground/80">
              Complete 12-week program with lifetime access to materials
            </p>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Payment plans available</p>
              <p>30-day money-back guarantee</p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8"
              asChild
            >
              <Link to="/contact">
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
