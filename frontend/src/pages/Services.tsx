import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Building,
  Plug,
  Battery,
  Sun,
  Wrench,
  ArrowRight,
  CheckCircle,
  Phone,
  Zap,
  Gauge,
  Shield,
  Clock
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTAStrip from "@/components/CTAStrip";

import sppImage from "@/assets/spp.jpeg";
import sgsImage from "@/assets/sgs.webp";
import shsImage from "@/assets/shs.webp";
import sogsImage from "@/assets/sogs.webp";
import epcImage from "@/assets/epc.jpg";

const services = [
  {
    icon: Building,
    title: "Solar Power Plants",
    description: "Large-scale solar solutions for commercial, industrial & utility needs with maximum efficiency and optimal ROI.",
    features: [
      "Utility-scale power generation",
      "Commercial rooftop installations",
      "Ground-mounted systems",
      "Performance monitoring included",
    ],
    color: "from-amber-400 to-orange-500",
    image: sppImage,
  },
  {
    icon: Plug,
    title: "Solar Ongrid Systems",
    description: "Grid-connected systems to reduce electricity bills and export surplus power back to the grid.",
    features: [
      "Net metering compatible",
      "Reduce electricity bills by up to 90%",
      "Zero maintenance hassle",
      "Government subsidy eligible",
    ],
    color: "from-yellow-400 to-amber-500",
    image: sgsImage,
  },
  {
    icon: Battery,
    title: "Solar Hybrid Systems",
    description: "Smart systems combining solar + battery backup for uninterrupted power supply during outages.",
    features: [
      "Battery backup during outages",
      "Intelligent power management",
      "Grid + solar + battery integration",
      "Ideal for areas with frequent cuts",
    ],
    color: "from-orange-400 to-red-500",
    image: shsImage,
  },
  {
    icon: Sun,
    title: "Solar Offgrid Systems",
    description: "Independent systems with batteries and inverters perfect for remote locations without grid access.",
    features: [
      "Complete energy independence",
      "No grid connection required",
      "Ideal for remote locations",
      "Custom storage solutions",
    ],
    color: "from-yellow-500 to-amber-600",
    image: sogsImage,
  },
  {
    icon: Wrench,
    title: "Complete Solar EPC Projects",
    description: "End-to-end solar execution from concept design to final commissioning with ongoing support.",
    features: [
      "Site assessment & design",
      "Engineering & procurement",
      "Installation & commissioning",
      "O&M support included",
    ],
    color: "from-amber-500 to-yellow-600",
    image: epcImage,
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Reduced Energy Bills",
    description: "Save up to 90% on your electricity costs with our efficient solar systems.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description: "Industry-leading solar panels and inverters for maximum energy generation.",
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Long-term protection with comprehensive performance warranty.",
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Professional installation completed within the promised timeline.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="text-gradient-solar">Solar Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From residential rooftops to large-scale power plants, we deliver
              end-to-end solar EPC services tailored to your unique energy needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl solar-gradient flex items-center justify-center mb-6 shadow-solar">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      className="solar-gradient text-primary-foreground font-semibold gap-2"
                      asChild
                    >
                      <Link to="/contact">
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2"
                      asChild
                    >
                      <a href="tel:+918489111911">
                        <Phone className="w-4 h-4" />
                        Call Us
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                    {/* Hover Overlay Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Why Choose Solar"
            title="Benefits That Matter"
            description="Investing in solar energy delivers tangible benefits for your wallet and the planet."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-xl solar-gradient flex items-center justify-center mb-6 shadow-md">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAStrip
        title="Ready to Start Your Solar Journey?"
        subtitle="Get a free consultation and customized quote today."
      />
    </div>
  );
};

export default Services;
