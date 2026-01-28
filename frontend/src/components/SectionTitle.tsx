import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionTitle = ({ subtitle, title, description, center = true }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
