import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Linkedin,
  Send,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/intensify.research", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@intensifyresearch", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/intensify-research/", label: "LinkedIn" },
    { icon: Send, href: "https://t.me/intensifyresearch", label: "Telegram" },
  ];

  const quickLinks = ["Home", "About Us", "Services", "Contact", "Blog", "FAQ"];

  const services = [
    "Stock Market Training",
    "Technical Analysis",
    "Fundamental Analysis",
    "Portfolio Management",
    "Trading Strategies",
    "Investment Advisory",
  ];

  return (
    <footer className="bg-secondary border-t border-secondary/50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="Intensify Research" className="h-12 mb-6" />

            <p className="text-white/80 mb-6 leading-relaxed">
              India's leading stock market education platform. We empower investors 
              with knowledge, tools, and strategies to achieve financial success.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Call Us</p>
                  <a href="tel:+919876543210" className="font-semibold text-white hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email Us</p>
                  <a href="mailto:info@intensifyresearch.com" className="font-semibold text-white hover:text-primary transition-colors">
                    info@intensifyresearch.com
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Visit Us</p>
                  <p className="font-semibold text-white">
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="bg-secondary/80 py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <TrendingUp className="w-6 h-6 text-primary" />
            <p className="text-lg md:text-xl font-semibold text-white">
              "Right Knowledge Turns Small Steps Into{" "}
              <span className="text-primary text-glow-orange">Big Profits</span> — 
              Start Today."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary/90 py-6 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <p>© 2024 Intensify Research Services Pvt. Ltd. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Disclaimer</a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-white/60 text-center leading-relaxed max-w-4xl mx-auto">
              <strong className="text-white/80">Disclaimer:</strong> Investment in securities market is subject to market risks. 
              Read all related documents carefully before investing. Registration granted by SEBI and certification from NISM 
              in no way guarantee performance or returns. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
