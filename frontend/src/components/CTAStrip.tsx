import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTAStripProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTAStrip = ({ 
  title, 
  subtitle, 
  buttonText = "Get Free Consultation", 
  buttonLink = "/contact" 
}: CTAStripProps) => {
  return (
    <section className="py-16 solar-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
              {title}
            </h2>
            {subtitle && (
              <p className="text-primary-foreground/80">{subtitle}</p>
            )}
          </div>
          
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold gap-2 shadow-lg"
            asChild
          >
            <Link to={buttonLink}>
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAStrip;
