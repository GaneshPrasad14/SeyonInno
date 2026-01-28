import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Phone,
  ArrowRight,
  Award,
  Zap,
  Settings,
  TrendingUp,
  Sun,
  Battery,
  Plug,
  Building,
  Wrench,
  CheckCircle,
  Users,
  Shield,
  Target
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import HighlightCard from "@/components/HighlightCard";
import CTAStrip from "@/components/CTAStrip";
import heroImage from "@/assets/hero-solar.jpg";
import sppImage from "@/assets/spp.jpeg";
import sgsImage from "@/assets/sgs.webp";
import shsImage from "@/assets/shs.webp";
import sogsImage from "@/assets/sogs.webp";
import epcImage from "@/assets/epc.jpg";

const services = [
  {
    icon: Building,
    title: "Solar Power Plants",
    description: "Large-scale solar solutions for commercial, industrial & utility needs with maximum efficiency.",
    image: sppImage,
  },
  {
    icon: Plug,
    title: "Solar Ongrid Systems",
    description: "Grid-connected systems to reduce electricity bills and export surplus power back to the grid.",
    image: sgsImage,
  },
  {
    icon: Battery,
    title: "Solar Hybrid Systems",
    description: "Smart systems combining solar + battery backup for uninterrupted power supply.",
    image: shsImage,
  },
  {
    icon: Sun,
    title: "Solar Offgrid Systems",
    description: "Independent systems with batteries and inverters perfect for remote locations.",
    image: sogsImage,
  },
  {
    icon: Wrench,
    title: "Complete Solar EPC",
    description: "End-to-end solar execution from concept design to final commissioning.",
    image: epcImage,
  },
];

const highlights = [
  {
    icon: Award,
    title: "6+ Years Experience",
    description: "Industry expertise you can trust",
  },
  {
    icon: Settings,
    title: "End-to-End EPC",
    description: "Complete project management",
  },
  {
    icon: Zap,
    title: "All System Types",
    description: "On-grid, Hybrid & Off-grid",
  },
  {
    icon: TrendingUp,
    title: "High ROI",
    description: "Reliable performance guaranteed",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Engineers & Innovators",
    description: "Our team of certified professionals brings years of expertise to every project.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "We use cutting-edge solar technology and trusted industry partners.",
  },
  {
    icon: TrendingUp,
    title: "High-Efficiency Systems",
    description: "Maximize your energy output with our optimized solar solutions.",
  },
  {
    icon: Shield,
    title: "Transparent Execution",
    description: "Clear communication and honest pricing throughout your project.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-solar-dark/90 via-solar-dark/70 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
                <Sun className="w-4 h-4" />
                Next-Generation Solar EPC Solutions
              </span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Powering the Future with{" "}
                <span className="text-gradient-solar">Smart Solar Solutions</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                Next-generation Solar EPC solutions for homes, businesses, and industries.
                Transform your energy consumption with reliable, high-efficiency solar systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="solar-gradient text-primary-foreground font-semibold gap-2 shadow-solar hover:opacity-90 text-base px-8"
                  asChild
                >
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold gap-2 text-base px-8"
                  asChild
                >
                  <a href="tel:+918489111911">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>


      </section>

      {/* Key Highlights */}
      <section className="py-6 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((highlight, index) => (
                <HighlightCard
                  key={highlight.title}
                  icon={highlight.icon}
                  title={highlight.title}
                  description={highlight.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Services"
            title="Complete Solar Solutions"
            description="From residential rooftops to large-scale power plants, we deliver end-to-end solar EPC services tailored to your needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
                image={service.image}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="solar-gradient text-primary-foreground font-semibold gap-2"
              asChild
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Why Seyon Innovations"
                title="Your Trusted Solar Partner"
                description="We combine industry experience with cutting-edge technology to deliver solar solutions that exceed expectations."
                center={false}
              />

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg solar-gradient flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={heroImage}
                  alt="Solar installation by Seyon Innovations"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg border border-border p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full solar-gradient flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-foreground">6+</p>
                    <p className="text-muted-foreground text-sm">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-solar-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-solar-gray max-w-2xl mx-auto">
              Our proven EPC approach ensures seamless project execution from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {["Design", "Engineering", "Procurement", "Installation", "Commissioning"].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full solar-gradient flex items-center justify-center mb-4 relative z-10">
                    <span className="text-primary-foreground font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="font-display font-semibold text-white mb-2">{step}</h4>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-solar-gold/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip
        title="Switch to Solar. Save More. Power Smarter."
        subtitle="Join thousands of satisfied customers who've made the switch to clean energy."
      />

      {/* Trust Indicators */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              "Quality Assured",
              "Expert Team",
              "On-Time Delivery",
              "Best Warranties",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
