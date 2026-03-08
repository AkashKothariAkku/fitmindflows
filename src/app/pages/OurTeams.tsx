import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function OurTeams() {
  const team = [
    {
      name: "Dr. Michael Chen",
      role: "Lead Physiotherapist",
      credentials: "DPT, OCS, CSCS",
      bio: "15+ years of experience in sports rehabilitation and injury prevention. Specializes in biomechanical analysis and performance optimization.",
      expertise: ["Sports Injuries", "Post-Surgery Recovery", "Movement Analysis"],
    },
    {
      name: "Sarah Martinez",
      role: "Head Personal Trainer",
      credentials: "NASM-CPT, CES, PES",
      bio: "Certified personal trainer with expertise in strength training and body composition. Passionate about helping clients achieve sustainable results.",
      expertise: ["Strength Training", "Fat Loss", "Athletic Performance"],
    },
    {
      name: "Emma Williams",
      role: "Yoga & Mindfulness Instructor",
      credentials: "RYT-500, YACEP",
      bio: "200+ hour certified yoga instructor specializing in Vinyasa, Hatha, and restorative practices. Trained in mindfulness-based stress reduction.",
      expertise: ["Vinyasa Flow", "Meditation", "Stress Management"],
    },
    {
      name: "David Kumar",
      role: "Nutrition Specialist",
      credentials: "RD, CSSD, LD",
      bio: "Registered dietitian with sports nutrition certification. Helps clients optimize performance and body composition through evidence-based nutrition.",
      expertise: ["Sports Nutrition", "Meal Planning", "Body Composition"],
    },
    {
      name: "Jessica Thompson",
      role: "Senior Personal Trainer",
      credentials: "ACE-CPT, NASM-CES",
      bio: "Specializes in corrective exercise and functional training. Dedicated to improving movement quality and preventing injuries.",
      expertise: ["Corrective Exercise", "Functional Training", "Mobility"],
    },
    {
      name: "Dr. Rachel Foster",
      role: "Physiotherapist",
      credentials: "DPT, Cert. MDT",
      bio: "Expert in manual therapy and spine rehabilitation. Focuses on chronic pain management and restoring optimal function.",
      expertise: ["Manual Therapy", "Spine Rehabilitation", "Chronic Pain"],
    },
    {
      name: "Marcus Johnson",
      role: "Corporate Wellness Director",
      credentials: "MS Exercise Science",
      bio: "Designs and implements corporate wellness programs for organizations of all sizes. Passionate about creating healthy workplace cultures.",
      expertise: ["Program Design", "Health Coaching", "Team Building"],
    },
    {
      name: "Priya Patel",
      role: "Yoga Instructor",
      credentials: "RYT-200, Prenatal Certified",
      bio: "Specializes in prenatal and postnatal yoga, as well as therapeutic practices for stress relief and flexibility.",
      expertise: ["Prenatal Yoga", "Therapeutic Yoga", "Flexibility"],
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
          <h1 className="text-4xl md:text-6xl tracking-tight">Meet Our Team</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Our team of certified professionals is dedicated to helping you achieve
            your health and wellness goals. With diverse specializations and years
            of experience, we provide expert guidance every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                    <span className="text-3xl font-semibold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>

                  {/* Name and Role */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {member.credentials}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Team Section */}
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
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for passionate, certified professionals to join
              our team. If you're dedicated to helping others achieve their wellness
              goals, we'd love to hear from you.
            </p>
            <div className="pt-4">
              <a
                href="mailto:careers@fitnesswellness.com"
                className="text-primary hover:underline font-medium"
              >
                careers@fitnesswellness.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
