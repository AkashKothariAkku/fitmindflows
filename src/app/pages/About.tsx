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
      year: "2018",
      title: "Founded",
      description: "Started with a vision to transform lives through personalized fitness",
    },
    {
      year: "2020",
      title: "Expanded Services",
      description: "Added comprehensive yoga, mindfulness, and physiotherapy programs",
    },
    {
      year: "2022",
      title: "International Level",
      description: "Expanded our reach globally, offering elite wellness coaching worldwide",
    },
    {
      year: "2023",
      title: "Online Platform",
      description: "Launched our state-of-the-art digital training and virtual session ecosystem",
    },
    {
      year: "2025",
      title: "Corporate Wellness Programme",
      description: "Introduced premium enterprise solutions for complete workplace wellness",
    },
  ];

  const teamMembers = [
    {
      name: "Kuldeep Singh",
      role: "Founder & Head Trainer",
      bio: "Certified personal trainer with 10+ years of experience in transformative fitness programs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      position: "object-top",
      expertise: ["Strength Training", "Nutrition", "Fat Loss"]
    },
    {
      name: "Priyanshu Sharma",
      role: "Personal Trainer",
      bio: "Certified personal trainer with IFSA-CPT expertise in strength training and high-performance programs.",
      image: "/src/assets/Priyanshu.jpeg",
      expertise: ["IFSA-CPT", "Strength Training", "Fat Loss"]
    },
    {
      name: "Coach Phalguni",
      role: "Yoga & Mindfulness Coach",
      bio: "Certified yoga instructor specializing in mindfulness and stress management techniques.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      expertise: ["Hatha Yoga", "Meditation", "Stress Management"]
    },
    {
      name: "coach Yash",
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

      {/* CEO / Founder Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <div className="relative group mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/30 to-orange-600/30 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-70 transition duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-amber-500/30 bg-background/50 shadow-2xl">
                <div className="absolute inset-0 bg-amber-500/10 transition-opacity duration-500 group-hover:opacity-0 z-10" />

                {/* 
                  CEO PHOTO INSTRUCTIONS:
                  1. Save the photo you shared as "akash-ceo.jpg" in your "src/assets" folder.
                  2. Once saved, it will automatically appear here.
                */}
                <img
                  src="/src/assets/akash-ceo.jpg"
                  alt="CEO - Akash Kothari"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Fallback for CEO
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop";
                  }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent z-10" />

                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-md border border-amber-500/30 shadow-[0_8px_30px_rgb(245,158,11,0.2)]"
                  >
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold tracking-wide text-foreground">Visionary Leader</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-8 relative">
              <div className="absolute -top-12 -left-12 text-9xl text-amber-500/10 font-serif leading-none select-none pointer-events-none group-hover:text-amber-500/20 transition-colors duration-500">
                "
              </div>

              <div className="space-y-4 relative z-10">
                <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">
                  The Leadership
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                  Guiding the Vision of <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">Health & Wellness</span>
                </h2>
              </div>

              <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed relative z-10 font-light border-l-4 border-amber-500/50 pl-6">
                Our mission is to help people break their limits and achieve their absolute best. Real growth comes from pushing boundaries, staying disciplined, and embracing the journey with a dedicated team beside you.
              </blockquote>

              <div className="pt-6 border-t border-border/50 relative z-10">
                <h3 className="text-3xl font-bold">Akash Kothari</h3>
                <p className="text-amber-500/80 font-medium mt-1">Chief Executive Officer</p>


                {/* Social Links */}
                <div className="flex gap-4 mt-8">
                  <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 shadow-sm group">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 shadow-sm group">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative overflow-hidden">
        {/* Background glow for premium feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Our Evolution
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            A Journey of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From our founding vision to a global wellness network, see how we've grown to serve you better.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative px-4 md:px-0">
          {/* Central Vertical Line (hidden on very small screens, aligns left on mobile, centers on md+) */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 md:-translate-x-1/2 z-0" />

          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.year} className="relative flex flex-col md:flex-row items-center group cursor-default">

                  {/* Timeline dot */}
                  <div className="absolute left-[30px] md:left-1/2 w-4 h-4 rounded-full bg-background border-[3px] border-primary md:-translate-x-1/2 z-10 group-hover:bg-primary group-hover:scale-150 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]" />

                  {/* Content Container (Left or Right) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 pt-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                      }`}
                  >
                    <div className="bg-card/40 backdrop-blur-md border border-border/40 p-6 md:p-8 rounded-[2rem] shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 inline-block w-full">
                      <span className="text-4xl md:text-5xl font-black bg-gradient-to-br from-primary via-blue-500 to-primary/80 bg-clip-text text-transparent opacity-90 mb-4 block">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
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
                    <div className="aspect-square overflow-hidden rounded-full mx-auto w-24 h-24 bg-primary/10 flex items-center justify-center relative">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`w-full h-full object-cover ${member.position || 'object-center'}`}
                          onError={(e) => {
                            // If image fails, hide it and show initials
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : null}
                      <span className="text-2xl font-bold text-primary absolute -z-10">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
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
