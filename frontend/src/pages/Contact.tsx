import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
  contactMethod: z.enum(["phone", "email"]),
  contactTime: z.enum(["morning", "afternoon", "evening"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactMethod: "phone",
    contactTime: "morning",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);

      // Construct WhatsApp message
      const message = `*New Inquiry from Website*

*Name:* ${validatedData.name}
*Email:* ${validatedData.email}
*Phone:* ${validatedData.phone}
*Message:* ${validatedData.message}
*Preferred Method:* ${validatedData.contactMethod}
*Preferred Time:* ${validatedData.contactTime}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/918489111911?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Redirecting to WhatsApp",
        description: "Please complete the message sending in WhatsApp.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        contactMethod: "phone",
        contactTime: "morning",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Power Your{" "}
              <span className="text-gradient-solar">Future Together</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to switch to solar? Get in touch with our experts for a
              free consultation and customized quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us an Enquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your solar requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm">{errors.message}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup
                    value={formData.contactMethod}
                    onValueChange={(value) => handleChange("contactMethod", value)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone" className="font-normal cursor-pointer">Phone</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email" className="font-normal cursor-pointer">Email</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Preferred Contact Time</Label>
                  <RadioGroup
                    value={formData.contactTime}
                    onValueChange={(value) => handleChange("contactTime", value)}
                    className="flex flex-wrap gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="morning" id="time-morning" />
                      <Label htmlFor="time-morning" className="font-normal cursor-pointer">Morning (9AM-12PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="afternoon" id="time-afternoon" />
                      <Label htmlFor="time-afternoon" className="font-normal cursor-pointer">Afternoon (12PM-5PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="evening" id="time-evening" />
                      <Label htmlFor="time-evening" className="font-normal cursor-pointer">Evening (5PM-8PM)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full solar-gradient text-primary-foreground font-semibold gap-2"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Enquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <a
                    href="tel:+918489111911"
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-accent transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg solar-gradient flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        Phone / WhatsApp
                      </p>
                      <p className="text-muted-foreground">+91 8489111911</p>
                    </div>
                  </a>

                  <a
                    href="mailto:sivakumar@seyoninnovations.com"
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-accent transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg solar-gradient flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        Email
                      </p>
                      <p className="text-muted-foreground">sivakumar@seyoninnovations.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
                    <div className="w-12 h-12 rounded-lg solar-gradient flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Office Address</p>
                      <p className="text-muted-foreground">
                        No:33, Mill Road, Varathampalayam,<br />
                        Sathyamangalam, Erode,<br />
                        Tamil Nadu – 638401
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
                    <div className="w-12 h-12 rounded-lg solar-gradient flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold text-foreground">Quick Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    className="solar-gradient text-primary-foreground gap-2"
                    asChild
                  >
                    <a href="https://wa.me/918489111911" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="w-5 h-5" />
                      WhatsApp Chat
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2"
                    asChild
                  >
                    <a href="https://www.instagram.com/seyon_innovations_solar" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4" />
                      Follow Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3716.1677045172896!2d77.23264947505274!3d11.507883788688815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMwJzI4LjQiTiA3N8KwMTQnMDYuOCJF!5e1!3m2!1sen!2sin!4v1769489962733!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Seyon Innovations Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
