import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Seyon Innovations Logo" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              asChild
            >
              <a href="https://wa.me/918489111911" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="sm"
              className="gap-2 solar-gradient text-primary-foreground hover:opacity-90"
              asChild
            >
              <a href="tel:+918489111911">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.path
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:bg-secondary"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  asChild
                >
                  <a href="https://wa.me/918489111911" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  className="flex-1 gap-2 solar-gradient text-primary-foreground"
                  asChild
                >
                  <a href="tel:+918489111911">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
