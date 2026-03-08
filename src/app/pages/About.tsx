import { motion } from "motion/react";
import { Target, Users, Award, Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower individuals to achieve optimal health through personalized fitness and wellness solutions.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "Certified professionals dedicated to your success with years of experience in fitness and wellness.",
    },
    {
      icon: Award,
      title: "Our Approach",
      description:
        "Evidence-based methods combined with holistic practices for sustainable, long-term results.",
    },
    {
      icon: Heart,
      title: "Our Commitment",
      description:
        "Providing compassionate support and guidance throughout your entire wellness journey.",
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "Founded",
      description: "Started with a vision to transform lives through fitness",
    },
    {
      year: "2017",
      title: "Expanded Services",
      description: "Added yoga, mindfulness, and physiotherapy programs",
    },
    {
      year: "2020",
      title: "Online Platform",
      description: "Launched comprehensive online training and virtual sessions",
    },
    {
      year: "2024",
      title: "Corporate Wellness",
      description: "Introduced enterprise solutions for workplace wellness",
    },
  ];

  const teamMembers = [
    {
      name: "Priyanshu Sharma",
      role: "Founder & Head Trainer",
      bio: "Certified personal trainer with 10+ years of experience in transformative fitness programs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      expertise: ["Strength Training", "Nutrition", "Fat Loss"]
    },
    {
      name: "Kuldeep Singh",
      role: "Senior Physiotherapist",
      bio: "Expert in injury rehabilitation and preventive care with sports medicine background.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      expertise: ["Injury Recovery", "Sports Medicine", "Manual Therapy"]
    },
    {
      name: "Phalguni Mehta",
      role: "Yoga & Mindfulness Coach",
      bio: "Certified yoga instructor specializing in mindfulness and stress management techniques.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      expertise: ["Hatha Yoga", "Meditation", "Stress Management"]
    },
    {
      name: "KD Fitness",
      role: "Corporate Wellness Lead",
      bio: "Specialist in designing and implementing workplace wellness programs for organizations.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=200&h=200&fit=crop&crop=face",
      expertise: ["Corporate Programs", "Team Building", "Health Assessments"]
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
          <h1 className="text-4xl md:text-6xl tracking-tight">About Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Transforming lives through personalized fitness and wellness solutions
            since 2014. Our journey is built on dedication, expertise, and a
            passion for helping people achieve their health goals.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A decade of growth, innovation, and helping people transform their
            lives
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-8 items-start"
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-semibold">{item.year}</span>
              </div>
              <div className="flex-1 pb-12 border-l-2 border-border pl-8 relative">
                <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to your wellness journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="aspect-square overflow-hidden rounded-full mx-auto w-24 h-24">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                    <p className="text-sm text-primary text-center font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link to="/our-teams">
                View Full Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl tracking-tight">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We started with a simple belief: everyone deserves access to
              high-quality, personalized wellness services. What began as a small
              personal training studio has grown into a comprehensive wellness
              center offering everything from online personal training to corporate
              wellness programs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we're proud to serve hundreds of clients, helping them
              achieve their fitness goals, reduce stress through mindfulness
              practices, recover from injuries with physiotherapy, and create
              healthier workplace environments through our corporate programs.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
