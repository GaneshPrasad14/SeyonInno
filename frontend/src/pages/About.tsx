import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Lightbulb, Handshake, CheckCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTAStrip from "@/components/CTAStrip";
import heroImage from "@/assets/hero-solar.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing cutting-edge technology to deliver next-generation solar solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards of quality in every project we undertake.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "Building lasting relationships through transparency and reliable performance.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together with clients and partners to achieve sustainable goals.",
  },
];

const milestones = [
  { year: "2019", event: "Started solar industry journey with hands-on experience" },
  { year: "2021", event: "Completed 50+ successful solar installations" },
  { year: "2023", event: "Expanded to commercial and industrial projects" },
  { year: "2025", event: "Founded Seyon Innovations as a full-service EPC company" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Pioneering the Future of{" "}
                <span className="text-gradient-solar">Clean Energy</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Seyon Innovations was founded in November 2025, backed by 6 years of industry 
                experience, to redefine clean energy delivery through next-generation solar EPC solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a simple vision: to make solar energy accessible, reliable, 
                and efficient for everyone. Today, we're proud to be a trusted partner for 
                residential, commercial, and industrial solar projects across Tamil Nadu and beyond.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Seyon Innovations solar projects"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-lg border border-border p-6">
                <p className="text-4xl font-display font-bold text-primary mb-1">6+</p>
                <p className="text-muted-foreground text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl solar-gradient flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate the transition to clean energy through smart, scalable, and 
                dependable solar solutions. We envision a future where every home, business, 
                and industry is powered by the sun.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl solar-gradient flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver high-quality solar EPC services using advanced technology, expert 
                engineering, and trusted partnerships—ensuring performance, reliability, and 
                long-term value for every customer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-solar-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              End-to-End EPC Excellence
            </h2>
            <p className="text-solar-gray max-w-2xl mx-auto">
              Our comprehensive approach ensures every project is delivered with precision and care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "Design", desc: "Custom solar system design" },
              { step: "Engineering", desc: "Technical planning & specs" },
              { step: "Procurement", desc: "Quality components sourcing" },
              { step: "Installation", desc: "Professional implementation" },
              { step: "Commissioning", desc: "Testing & handover" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <div className="w-12 h-12 mx-auto rounded-full solar-gradient flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <h4 className="font-display font-semibold text-white mb-2">{item.step}</h4>
                <p className="text-solar-gray text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Values"
            title="What Drives Us"
            description="Our core values guide every decision we make and every project we undertake."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl solar-gradient flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Journey"
            title="Milestones That Define Us"
            description="From humble beginnings to industry leadership, here's our story."
          />
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full solar-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-foreground font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Our Team"
                title="Engineers & Innovators"
                description="Our team combines deep technical expertise with a passion for sustainable energy solutions."
                center={false}
              />
              
              <div className="space-y-4">
                {[
                  "Certified solar engineers with proven expertise",
                  "Experienced project managers for seamless execution",
                  "Dedicated support team for ongoing maintenance",
                  "Continuous training on latest solar technologies",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video rounded-2xl overflow-hidden bg-secondary"
            >
              <img
                src={heroImage}
                alt="Seyon Innovations team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAStrip
        title="Ready to Go Solar?"
        subtitle="Let's discuss how we can power your future with clean energy."
      />
    </div>
  );
};

export default About;
