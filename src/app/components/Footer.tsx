import { Link } from "react-router";
import { useTheme } from "next-themes";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const footerLinks = {
    services: [
      { name: "Personal Training", path: "/online-personal-training" },
      { name: "Yoga & Mindfulness", path: "/yoga-mindfulness" },
      { name: "Physiotherapy", path: "/physiotherapy" },
      { name: "Fat Loss Program", path: "/fat-loss-program" },
      { name: "Corporate Wellness", path: "/corporate-wellness" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Teams", path: "/our-teams" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Results", path: "/results-testimonials" },
      { name: "Blogs", path: "/blogs" },
    ],
    support: [
      { name: "Contact", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              {mounted && (
                <img
                  src={theme === "dark" ? "/src/assets/FMFwhitelogo.svg" : "/src/assets/FMFBlacklogo.svg"}
                  alt="Fitness & Wellness"
                  className="h-12 w-auto"
                />
              )}
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your life through personalized fitness and wellness solutions.
              Expert guidance, proven results, and comprehensive support for your health journey.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">fitmindflows@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 8696610310</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm"> 261, Shree Shiv Nagar, Nayla Road, Jaisinghpura Khor, Jaipur</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Social */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Fitness & Wellness. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
