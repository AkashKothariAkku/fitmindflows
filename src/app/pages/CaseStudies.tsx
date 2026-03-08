import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { TrendingDown, Users, Heart, Stethoscope } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: TrendingDown,
      category: "Fat Loss Program",
      title: "Corporate Executive Transformation",
      client: "Mark Thompson, 42",
      challenge:
        "High-stress executive lifestyle led to 40 lbs weight gain over 5 years. Limited time for exercise and poor eating habits.",
      solution:
        "Customized 16-week program with early morning training sessions, meal prep strategies for busy schedules, and stress management techniques.",
      results: [
        "Lost 38 lbs and reduced body fat by 12%",
        "Improved energy levels and work productivity",
        "Established sustainable healthy habits",
        "Reduced cholesterol and blood pressure",
      ],
      duration: "16 weeks",
      tags: ["Weight Loss", "Nutrition", "Lifestyle Change"],
    },
    {
      icon: Stethoscope,
      category: "Physiotherapy",
      title: "Athletic Recovery from ACL Surgery",
      client: "Jessica Martinez, 28",
      challenge:
        "Professional athlete recovering from ACL reconstruction surgery. Goal was to return to competitive sports safely and stronger than before.",
      solution:
        "Comprehensive 6-month rehabilitation program including manual therapy, progressive strength training, and sport-specific conditioning.",
      results: [
        "Full recovery with 100% knee stability",
        "Returned to competition ahead of schedule",
        "Improved overall athletic performance",
        "No re-injury after 2 years",
      ],
      duration: "24 weeks",
      tags: ["Sports Medicine", "Recovery", "Performance"],
    },
    {
      icon: Heart,
      category: "Yoga & Mindfulness",
      title: "Chronic Stress and Anxiety Relief",
      client: "Sarah Chen, 35",
      challenge:
        "Software engineer experiencing burnout, chronic stress, anxiety, and sleep issues. Seeking non-pharmaceutical solutions.",
      solution:
        "8-week mindfulness-based stress reduction program combining yoga, meditation, breathwork, and lifestyle coaching.",
      results: [
        "90% reduction in reported stress levels",
        "Improved sleep quality and duration",
        "Better work-life balance",
        "Discontinued anxiety medication (under doctor supervision)",
      ],
      duration: "8 weeks",
      tags: ["Mental Health", "Stress Management", "Wellness"],
    },
    {
      icon: Users,
      category: "Corporate Wellness",
      title: "Tech Company Employee Wellness Initiative",
      client: "TechVision Inc. (150 employees)",
      challenge:
        "High employee turnover, increasing healthcare costs, and low engagement scores. Sedentary work environment contributing to health issues.",
      solution:
        "Comprehensive 12-month wellness program including on-site fitness classes, health screenings, wellness challenges, and ergonomic assessments.",
      results: [
        "35% reduction in absenteeism",
        "25% increase in employee engagement scores",
        "Estimated $200K savings in healthcare costs",
        "92% employee participation rate",
      ],
      duration: "12 months",
      tags: ["Corporate", "Team Wellness", "ROI"],
    },
    {
      icon: TrendingDown,
      category: "Fat Loss Program",
      title: "Post-Pregnancy Weight Loss Journey",
      client: "Amanda Rodriguez, 31",
      challenge:
        "Struggled to lose 50 lbs gained during pregnancy. Dealing with hormonal changes, sleep deprivation, and lack of time as a new mother.",
      solution:
        "Customized postpartum program with at-home workouts, flexible nutrition plan, and support for new mothers. Emphasis on sustainable progress.",
      results: [
        "Lost 52 lbs over 10 months",
        "Regained strength and energy",
        "Built sustainable healthy habits for family",
        "Improved postnatal recovery and mood",
      ],
      duration: "40 weeks",
      tags: ["Postpartum", "Nutrition", "Lifestyle"],
    },
    {
      icon: Stethoscope,
      category: "Physiotherapy",
      title: "Chronic Back Pain Resolution",
      client: "Robert Davis, 55",
      challenge:
        "15 years of chronic lower back pain from desk job and poor posture. Previous treatments provided only temporary relief.",
      solution:
        "Holistic approach combining manual therapy, core strengthening, postural correction, and ergonomic workplace modifications.",
      results: [
        "85% reduction in daily pain levels",
        "Improved mobility and flexibility",
        "Discontinued pain medication",
        "Pain-free for 18+ months",
      ],
      duration: "12 weeks",
      tags: ["Pain Management", "Posture", "Long-term Relief"],
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
          <h1 className="text-4xl md:text-6xl tracking-tight">Case Studies</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Real transformations, real results. Explore detailed case studies
            showcasing how our programs have helped clients overcome challenges
            and achieve their wellness goals.
          </p>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Header */}
                    <div className="space-y-6">
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <study.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-semibold mb-2">
                          {study.category}
                        </div>
                        <h2 className="text-2xl font-semibold mb-2">
                          {study.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {study.client}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Duration: </span>
                        <span className="font-semibold">{study.duration}</span>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Challenge */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          The Challenge
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Our Solution
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">
                          Results Achieved
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {study.results.map((result, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {result}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of clients who have transformed their lives with our
              programs. Your journey starts with a free consultation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
