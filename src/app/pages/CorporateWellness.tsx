import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router";
import { Building2, Users, TrendingUp, Heart, Shield, Trophy, ArrowRight } from "lucide-react";

export default function CorporateWellness() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Healthier employees are more focused and efficient",
    },
    {
      icon: Heart,
      title: "Reduced Absenteeism",
      description: "Lower sick days through preventive wellness programs",
    },
    {
      icon: Shield,
      title: "Lower Healthcare Costs",
      description: "Decrease insurance premiums with healthier workforce",
    },
    {
      icon: Trophy,
      title: "Better Retention",
      description: "Attract and retain top talent with wellness benefits",
    },
  ];

  const services = [
    {
      title: "On-Site Fitness Classes",
      items: [
        "Yoga and stretching sessions",
        "Group fitness classes",
        "Lunch-time workout sessions",
        "Wellness workshops",
      ],
    },
    {
      title: "Virtual Wellness Programs",
      items: [
        "Online fitness classes",
        "Webinars on health topics",
        "Mental health support",
        "Nutrition education",
      ],
    },
    {
      title: "Health Assessments",
      items: [
        "Biometric screenings",
        "Fitness assessments",
        "Ergonomic evaluations",
        "Health risk assessments",
      ],
    },
    {
      title: "Team Challenges",
      items: [
        "Step challenges",
        "Weight loss competitions",
        "Fitness goals tracking",
        "Team building activities",
      ],
    },
  ];

  const stats = [
    { value: "50+", label: "Corporate Clients" },
    { value: "10,000+", label: "Employees Served" },
    { value: "85%", label: "Participation Rate" },
    { value: "4.8/5", label: "Client Satisfaction" },
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
            <Building2 className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl tracking-tight">
            Corporate Wellness Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Invest in your team's health and well-being. Our comprehensive corporate
            wellness programs boost employee satisfaction, productivity, and overall
            workplace culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact">
                Request Proposal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-semibold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
            Why Invest in Wellness
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The measurable impact on your organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
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
              Customizable programs tailored to your organization's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
            Implementation Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How we partner with your organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              step: "1",
              title: "Consultation",
              description: "Understand your goals and assess employee needs",
            },
            {
              step: "2",
              title: "Customize",
              description: "Design a tailored wellness program",
            },
            {
              step: "3",
              title: "Launch",
              description: "Roll out program with employee engagement",
            },
            {
              step: "4",
              title: "Measure",
              description: "Track participation and outcomes",
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="text-center h-full">
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
      </section>

      {/* Testimonial Section */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card>
              <CardContent className="p-8 md:p-12 space-y-6">
                <Users className="h-12 w-12 text-primary" />
                <blockquote className="text-xl italic">
                  "Implementing this wellness program has been transformative for our
                  company. Employee engagement is up, absenteeism is down, and the
                  overall workplace culture has significantly improved."
                </blockquote>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">
                    HR Director, Tech Solutions Inc.
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
            Ready to Transform Your Workplace?
          </h2>
          <p className="text-lg text-muted-foreground">
            Schedule a free consultation to discuss how our corporate wellness
            program can benefit your organization.
          </p>
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link to="/contact">
              Request Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
