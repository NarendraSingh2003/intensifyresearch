import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3, Target } from "lucide-react";
import StockChart from "./StockChart";

const heroTexts = [
  "Learn Stock Market From Experts",
  "Start Your Trading Journey Today",
  "Grow Your Wealth With Confidence",
  "Master Technical Analysis",
  "Build Your Investment Portfolio",
];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start overflow-hidden bg-hero-gradient"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--secondary)/0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary)/0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left mt-12 lg:mt-20"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full mb-4"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium text-sm">
                Trusted by 10,000+ Investors
              </span>
            </motion.div>

            {/* Animated Heading */}
            <div className="min-h-[130px] md:min-h-[150px] mb-4 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentText}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight"
                >
                  {(() => {
                    const words = heroTexts[currentText].split(" ");
                    const first = words.slice(0, -1).join(" ");
                    const last = words[words.length - 1];
                    return (
                      <>
                        <span className="text-secondary">{first}</span>{" "}
                        <span className="text-primary text-glow-orange">{last}</span>
                      </>
                    );
                  })()}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0"
            >
              Join India's most trusted stock market education platform. Get expert
              guidance, real-time insights, and proven strategies to build lasting wealth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToForm}
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg
                glow-orange hover:glow-orange-intense transition-all duration-300 flex items-center justify-center gap-2
                hover:scale-105"
              >
                Get Free Guidance
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#features"
                className="border-2 border-secondary/30 hover:border-primary/50 px-8 py-4 rounded-xl font-semibold
                text-lg text-secondary transition-all duration-300 flex items-center justify-center gap-2 hover:bg-primary/5"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-4 pt-3 border-t border-border/50"
            >
              {[ 
                { icon: TrendingUp, value: "10K+", label: "Active Learners" },
                { icon: BarChart3, value: "95%", label: "Success Rate" },
                { icon: Target, value: "500+", label: "Daily Tips" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <stat.icon className="w-5 h-5 text-secondary mb-1 mx-auto lg:mx-0" />
                  <div className="font-orbitron text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT CHART */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-12 lg:mt-20"
          >
            <div className="relative bg-navy-gradient border border-secondary/20 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-orbitron text-lg font-semibold text-white">NIFTY 50</h3>
                  <p className="text-white/70 text-sm">NSE Index</p>
                </div>
                <div className="text-right">
                  <div className="font-orbitron text-2xl font-bold text-stock-green">
                    24,677.80
                  </div>
                  <div className="text-stock-green text-sm flex items-center gap-1 justify-end">
                    <TrendingUp className="w-4 h-4" />
                    +176.45 (+0.72%)
                  </div>
                </div>
              </div>

              <StockChart />
            </div>

            {/* FLOATING CARDS */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-card border border-primary/20 p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-stock-green/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-stock-green" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Today's Profit</p>
                  <p className="font-orbitron font-bold text-stock-green">+₹24,580</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-card border border-primary/20 p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Target Hit</p>
                  <p className="font-semibold text-primary">98.5%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL ICON */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
