import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      title: "10 Essential Tips for Sustainable Weight Loss",
      excerpt:
        "Discover proven strategies for losing weight and keeping it off long-term. Learn about the science behind sustainable fat loss and how to avoid common pitfalls.",
      category: "Nutrition",
      author: "David Kumar, RD",
      date: "February 10, 2026",
      readTime: "8 min read",
      featured: true,
    },
    {
      title: "The Benefits of Mindfulness Meditation for Athletes",
      excerpt:
        "Explore how mindfulness practices can enhance athletic performance, reduce injury risk, and improve recovery. Backed by scientific research and real-world results.",
      category: "Mindfulness",
      author: "Emma Williams, RYT-500",
      date: "February 8, 2026",
      readTime: "6 min read",
      featured: true,
    },
    {
      title: "Understanding Sports Injuries: Prevention and Recovery",
      excerpt:
        "A comprehensive guide to common sports injuries, how to prevent them, and evidence-based recovery protocols from our physiotherapy team.",
      category: "Physiotherapy",
      author: "Dr. Michael Chen, DPT",
      date: "February 5, 2026",
      readTime: "10 min read",
      featured: false,
    },
    {
      title: "Building a Home Workout Routine That Actually Works",
      excerpt:
        "No gym? No problem. Learn how to create an effective workout routine with minimal equipment that delivers real results.",
      category: "Fitness",
      author: "Sarah Martinez, NASM-CPT",
      date: "February 1, 2026",
      readTime: "7 min read",
      featured: false,
    },
    {
      title: "The Role of Sleep in Fat Loss and Muscle Gain",
      excerpt:
        "Understanding the crucial connection between quality sleep and your fitness goals. Plus, actionable tips to improve your sleep habits.",
      category: "Wellness",
      author: "David Kumar, RD",
      date: "January 28, 2026",
      readTime: "9 min read",
      featured: false,
    },
    {
      title: "Yoga Poses for Desk Workers: Combat Sitting All Day",
      excerpt:
        "Simple yoga stretches and poses you can do at your desk or home to counteract the negative effects of prolonged sitting.",
      category: "Yoga",
      author: "Priya Patel, RYT-200",
      date: "January 25, 2026",
      readTime: "5 min read",
      featured: false,
    },
    {
      title: "Nutrition Timing: When to Eat for Optimal Performance",
      excerpt:
        "Learn about nutrient timing strategies to maximize workout performance, recovery, and body composition goals.",
      category: "Nutrition",
      author: "David Kumar, RD",
      date: "January 22, 2026",
      readTime: "8 min read",
      featured: false,
    },
    {
      title: "Creating a Wellness Culture in Your Workplace",
      excerpt:
        "Practical strategies for HR professionals and managers to implement effective corporate wellness programs that employees actually use.",
      category: "Corporate Wellness",
      author: "Marcus Johnson, MS",
      date: "January 18, 2026",
      readTime: "11 min read",
      featured: false,
    },
    {
      title: "The Science Behind High-Intensity Interval Training",
      excerpt:
        "Discover why HIIT is so effective for fat loss and cardiovascular health, plus how to incorporate it safely into your routine.",
      category: "Fitness",
      author: "Jessica Thompson, ACE-CPT",
      date: "January 15, 2026",
      readTime: "7 min read",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Fitness",
    "Nutrition",
    "Yoga",
    "Mindfulness",
    "Physiotherapy",
    "Wellness",
    "Corporate Wellness",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
            Wellness Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Expert insights on fitness, nutrition, mindfulness, and wellness.
            Stay informed with evidence-based articles from our team of
            certified professionals.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 md:px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="container mx-auto px-4 md:px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-0">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/20">
                        {post.category[0]}
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge>{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Recent Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-0">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary/20">
                        {post.category[0]}
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="container mx-auto px-4 md:px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              No articles found matching your criteria. Try adjusting your search
              or filter.
            </p>
          </motion.div>
        </section>
      )}

      {/* Newsletter Section */}
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
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground">
              Get the latest wellness tips, workout routines, and nutrition advice
              delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="rounded-full px-8">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
