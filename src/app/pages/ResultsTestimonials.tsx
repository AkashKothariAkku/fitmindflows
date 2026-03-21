import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

export default function ResultsTestimonials() {
  const testimonials = [
    {
      name: "Jennifer Clark",
      program: "Fat Loss Program",
      result: "Lost 28 lbs in 12 weeks",
      rating: 5,
      text: "This program completely transformed my life! The personalized approach and constant support made all the difference. I not only lost weight but gained confidence and energy I haven't had in years.",
      before: "185 lbs",
      after: "157 lbs",
    },
    {
      name: "Michael Roberts",
      program: "Online Personal Training",
      result: "Gained 15 lbs of muscle",
      rating: 5,
      text: "Working with the trainers remotely exceeded my expectations. The custom workout plans and nutrition guidance helped me build muscle while staying lean. Highly recommend!",
      before: "165 lbs",
      after: "180 lbs",
    },
    {
      name: "Lisa Anderson",
      program: "Yoga & Mindfulness",
      result: "Reduced stress & improved flexibility",
      rating: 5,
      text: "After dealing with chronic stress and anxiety, the yoga and mindfulness program has been a game-changer. I feel more centered, flexible, and at peace than I have in years.",
      improvement: "90% stress reduction",
    },
    {
      name: "David Martinez",
      program: "Physiotherapy",
      result: "Recovered from sports injury",
      rating: 5,
      text: "After my knee injury, I wasn't sure I'd be able to play sports again. The physiotherapy team got me back to 100% and stronger than before. Their expertise is unmatched.",
      recovery: "Full recovery in 8 weeks",
    },
    {
      name: "Emily Chen",
      program: "Fat Loss Program",
      result: "Lost 22 lbs and kept it off",
      rating: 5,
      text: "What I love most is that this isn't a quick fix - it's a lifestyle change. The habits I learned have helped me maintain my results for over a year now.",
      before: "172 lbs",
      after: "150 lbs",
    },
    {
      name: "James Wilson",
      program: "Corporate Wellness",
      result: "Improved team health metrics",
      rating: 5,
      text: "Implementing this wellness program for our team of 50 employees has been incredible. Engagement is up, sick days are down, and morale has never been better.",
      impact: "35% reduction in absenteeism",
    },
  ];

  const successMetrics = [
    { value: "500+", label: "Lives Transformed" },
    { value: "15,000+", label: "Pounds Lost" },
    { value: "92%", label: "Goal Achievement" },
    { value: "4.9/5", label: "Average Rating" },
  ];

  const beforeAfterGallery = [
    { name: "Sarah T.", lost: "32 lbs", timeline: "14 weeks" },
    { name: "John M.", gained: "18 lbs muscle", timeline: "16 weeks" },
    { name: "Amanda K.", lost: "25 lbs", timeline: "12 weeks" },
    { name: "Chris P.", lost: "40 lbs", timeline: "20 weeks" },
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
            Results & Testimonials
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Real people, real transformations. See how our programs have helped
            hundreds of clients achieve their health and wellness goals.
          </p>
        </motion.div>
      </section>

      {/* Success Metrics */}
      <section className="border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-semibold mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from people who have transformed their lives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  {/* Quote Icon */}
                  <Quote className="h-10 w-10 text-primary/20" />

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Results */}
                  <div className="pt-4 space-y-2">
                    <div className="text-lg font-semibold text-primary">
                      {testimonial.result}
                    </div>
                    {testimonial.before && testimonial.after && (
                      <div className="text-sm text-muted-foreground">
                        Before: {testimonial.before} → After: {testimonial.after}
                      </div>
                    )}
                    {testimonial.improvement && (
                      <div className="text-sm text-muted-foreground">
                        {testimonial.improvement}
                      </div>
                    )}
                    {testimonial.recovery && (
                      <div className="text-sm text-muted-foreground">
                        {testimonial.recovery}
                      </div>
                    )}
                    {testimonial.impact && (
                      <div className="text-sm text-muted-foreground">
                        {testimonial.impact}
                      </div>
                    )}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Avatar>
                      <AvatarFallback>
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.program}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Before/After Gallery */}
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
              Transformation Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Inspiring results from our dedicated clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {beforeAfterGallery.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    {/* Placeholder for before/after images */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-6xl font-bold text-primary/40 mb-4">
                          {item.name.split(" ")[0].charAt(0)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Before & After
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-primary font-medium">{item.lost}</p>
                      <p className="text-xs text-muted-foreground">{item.timeline}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
            Video Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear success stories in their own words
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  {/* Video placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Client Success Story #{item}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
