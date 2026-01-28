import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-solar-dark text-solar-light">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/logo.png" alt="Seyon Innovations Logo" className="h-10" />
            </div>
            <p className="text-solar-gray text-sm leading-relaxed">
              Next-generation Solar EPC solutions for homes, businesses, and industries.
              Powering the future with smart solar solutions.
            </p>
            <a
              href="https://www.instagram.com/seyon_innovations_solar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-solar-gray hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Follow us on Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-solar-light">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-solar-gray hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-solar-light">Our Services</h4>
            <nav className="flex flex-col gap-2">
              {[
                "Solar Power Plants",
                "Solar Ongrid Systems",
                "Solar Hybrid Systems",
                "Solar Offgrid Systems",
                "Complete Solar EPC",
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="text-solar-gray hover:text-primary transition-colors text-sm"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-solar-light">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+918489111911"
                className="flex items-start gap-3 text-solar-gray hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 8489111911</span>
              </a>
              <a
                href="mailto:sivakumar@seyoninnovations.com"
                className="flex items-start gap-3 text-solar-gray hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>sivakumar@seyoninnovations.com</span>
              </a>
              <div className="flex items-start gap-3 text-solar-gray text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  No:33, Mill Road, Varathampalayam,<br />
                  Sathyamangalam, Erode,<br />
                  Tamil Nadu – 638401
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-solar-charcoal/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-solar-gray text-sm">
              © {new Date().getFullYear()} Seyon Innovations. All rights reserved.
            </p>
            <p className="text-solar-gray text-sm">
              Designed with ☀️ for a sustainable future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
