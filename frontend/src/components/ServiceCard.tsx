import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  image?: string;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0, image }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-500"
    >
      {/* Image Background for Hover */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80 group-hover:from-background/90 group-hover:via-background/80 group-hover:to-background/70 transition-colors duration-500" />
        </div>
      )}

      <div className="relative z-10 p-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-solar-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="w-14 h-14 rounded-xl solar-gradient flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-solar">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>

        <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>

        <Button
          variant="ghost"
          size="sm"
          className="text-primary hover:text-primary-hover p-0 h-auto font-medium group/btn"
          asChild
        >
          <Link to="/services" className="flex items-center gap-2">
            Explore Solution
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};


export default ServiceCard;
