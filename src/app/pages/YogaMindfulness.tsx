import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router";
import { Heart, Brain, Wind, Sunrise, ArrowRight } from "lucide-react";

export default function YogaMindfulness() {
  const styles = [
    {
      icon: Sunrise,
      name: "Hatha Yoga",
      description: "Traditional practice focusing on physical postures and breathing",
    },
    {
      icon: Wind,
      name: "Vinyasa Flow",
      description: "Dynamic sequences linking breath with movement",
    },
    {
      icon: Heart,
      name: "Restorative Yoga",
      description: "Gentle practice for deep relaxation and healing",
    },
    {
      icon: Brain,
      name: "Meditation",
      description: "Mindfulness techniques for mental clarity and peace",
    },
  ];

  const benefits = [
    {
      title: "Stress Reduction",
      description: "Learn techniques to manage stress and anxiety effectively",
    },
    {
      title: "Improved Flexibility",
      description: "Increase range of motion and reduce muscle tension",
    },
    {
      title: "Better Sleep",
      description: "Enhance sleep quality through relaxation practices",
    },
    {
      title: "Mental Clarity",
      description: "Develop focus, concentration, and emotional balance",
    },
    {
      title: "Physical Strength",
      description: "Build core strength and overall body awareness",
    },
    {
      title: "Inner Peace",
      description: "Cultivate mindfulness and spiritual well-being",
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
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl tracking-tight">
            Yoga & Mindfulness
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Find balance, reduce stress, and enhance your well-being through
            guided yoga practices and mindfulness meditation. Suitable for all
            levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">
                Book a Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link to="/results-testimonials">Read Testimonials</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Yoga Styles Section */}
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
              Our Yoga Styles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore different practices to find what resonates with you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style, index) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <style.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{style.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {style.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
            Benefits of Practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your mind and body through regular practice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Class Format Section */}
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
              Class Formats
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the format that works best for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Private Sessions",
                description: "One-on-one personalized instruction tailored to your needs",
                price: "$75/session",
              },
              {
                name: "Small Group Classes",
                description: "Intimate groups of 4-6 people for personalized attention",
                price: "$30/class",
              },
              {
                name: "Online Classes",
                description: "Join from anywhere with live-streamed sessions",
                price: "$20/class",
              },
            ].map((format, index) => (
              <motion.div
                key={format.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 space-y-4 text-center">
                    <h3 className="text-xl font-semibold">{format.name}</h3>
                    <p className="text-muted-foreground">{format.description}</p>
                    <div className="text-2xl font-semibold text-primary pt-2">
                      {format.price}
                    </div>
                    <Button className="w-full rounded-full" asChild>
                      <Link to="/contact">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl tracking-tight">
            Begin Your Journey to Inner Peace
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the transformative power of yoga and mindfulness. Book your
            first session today and receive 20% off.
          </p>
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link to="/contact">
              Start Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
