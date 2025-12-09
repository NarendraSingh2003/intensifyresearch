import { Helmet } from "react-helmet-async";
import StockTicker from "@/components/StockTicker";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Intensify Research - Stock Market Education & Trading Guidance | India</title>
        <meta
          name="description"
          content="Learn stock market trading from India's top experts. Get free guidance on NIFTY, SENSEX, technical analysis & proven investment strategies. Join 10,000+ successful traders."
        />
        <meta
          name="keywords"
          content="stock market, trading, NIFTY 50, SENSEX, NSE, BSE, investment, technical analysis, share market, India, Intensify Research"
        />
        <meta property="og:title" content="Intensify Research - Stock Market Education & Trading Guidance" />
        <meta
          property="og:description"
          content="Learn stock market trading from India's top experts. Get free guidance on NIFTY, SENSEX, technical analysis & proven investment strategies."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intensifyresearch.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Stock Ticker */}
        <StockTicker />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Lead Form Section */}
          <LeadForm />


          {/* Features Section */}
          <FeaturesSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
