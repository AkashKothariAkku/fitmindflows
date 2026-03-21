import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Linkedin, Mail, Twitter } from "lucide-react";

// Image imports removed for cleaner runtime path usage

export default function OurTeams() {
  const team = [
    {
      name: "Kuldeep Singh",
      role: "Director of Fitness",
      credentials: "DBT, CFTS (ACE), Strength & Conditioning Specialist, Yoga & Prenatal Yoga Instructor, Mixed Martial Arts Coach",
      bio: "10+ years of experience in fitness coaching, performance training, and holistic wellness. Specializes in functional training, strength & conditioning, yoga-based mobility, and combat sports conditioning to improve performance and long-term health.",
      expertise: ["Functional Training", "Strength & Conditioning", "Yoga", "MMA Conditioning", "Mobility", "Fat Loss"],
      image: "/src/assets/kuldeep-new.jpeg",
      position: "object-top",
    },
    {
      name: "Priyanshu Sharma",
      role: "Personal Trainer",
      credentials: "IFSA-CPT",
      bio: "Certified personal trainer with expertise in strength training and body composition. Dedicated to providing personalized training programs that yield real results.",
      expertise: ["Strength Training", "Fat Loss", "Body Composition"],
      image: "/src/assets/Priyanshu.jpeg",
      position: "object-center",
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
      <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-32 relative">
        {/* Decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <Card className="h-full group relative overflow-hidden bg-card/60 backdrop-blur-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/30 flex flex-col">

                {/* Gradient Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-blue-500/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-0 flex-1 flex flex-col">
                  {/* Image/Avatar Section */}
                  <div className="relative pt-8 pb-4 flex justify-center bg-gradient-to-b from-muted/50 to-transparent">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-b from-border to-border/20 group-hover:from-primary/50 group-hover:to-blue-500/30 transition-all duration-500 shadow-xl group-hover:shadow-primary/20">
                      <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className={`w-full h-full object-cover ${member.position || 'object-center'} transform group-hover:scale-105 transition-transform duration-700 ease-out`}
                            onError={(e) => {
                              // If image fails, hide it and let the initials show
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <span className="text-4xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-500">
                            {member.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Social/Contact Quick Actions (Visible on hover) */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                      <a href="#" className="w-8 h-8 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex-1 flex flex-col">
                    {/* Name and Role */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary/80 mt-1">
                        {member.role}
                      </p>
                      <p className="text-xs text-muted-foreground/80 mt-1.5 border-b border-border/50 pb-3">
                        {member.credentials}
                      </p>
                    </div>

                    {/* Bio */}
                    <div className="flex-1 mb-6">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                        {member.bio}
                      </p>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1.5 justify-center mt-auto pt-4 border-t border-border/50">
                      {member.expertise.slice(0, 3).map((skill, sIdx) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-[10px] px-2 py-0.5 bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {member.expertise.length > 3 && (
                        <Badge variant="outline" className="text-[10px] px-2 py-0.5 text-muted-foreground">
                          +{member.expertise.length - 3} more
                        </Badge>
                      )}
                    </div>
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
