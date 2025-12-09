import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Shield,
  CheckCircle,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const handleChange = (
    e
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Success! 🎉",
      description:
        "Thank you for your interest! Our experts will contact you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const benefits = [
    "Free personalized stock market consultation",
    "Daily market updates on WhatsApp",
    "Access to exclusive webinars",
    "No spam, only valuable insights",
  ];

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden 
      bg-gradient-to-br from-[#E4D3C2] via-[#E5D8C4] to-[#E4D3C2]"
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Get Started Free
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Get Free <span className="text-primary">Stock Market</span> Guidance
            </h2>

            <p className="text-gray-700 text-lg mb-8">
              Fill in your details below and our market experts will reach out
              to you with personalized advice to kickstart your investment
              journey.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-primary/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-800">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 bg-white/60 border border-gray-300 p-4 rounded-xl shadow-sm">
              <Shield className="w-10 h-10 text-primary" />
              <div>
                <p className="font-semibold text-gray-900">Your Data is Secure</p>
                <p className="text-sm text-gray-600">
                  We never spam or share your information.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-md border border-gray-300 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                Request Free Consultation
              </h3>

              <div className="space-y-5">
                {/* NAME */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                {/* PHONE */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                {/* EXPERIENCE */}
                <div className="relative">
                  <select
                    name="experience"
                    value={formData.experience}
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border border-gray-300 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                  >
                    <option value="" disabled>
                      Select Experience Level
                    </option>
                    <option value="beginner">Beginner - New to Market</option>
                    <option value="intermediate">Intermediate - Some Experience</option>
                    <option value="advanced">Advanced - Experienced Trader</option>
                  </select>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your investment goals..."
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:scale-[1.03] transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get Free Guidance
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-700 flex items-center justify-center gap-2 mt-1">
                  <Shield className="w-4 h-4" />
                  We never spam. Your information is safe with us.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
