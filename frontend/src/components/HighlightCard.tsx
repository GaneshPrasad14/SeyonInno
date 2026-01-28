import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const HighlightCard = ({ icon: Icon, title, description, delay = 0 }: HighlightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-4 p-4"
    >
      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default HighlightCard;
