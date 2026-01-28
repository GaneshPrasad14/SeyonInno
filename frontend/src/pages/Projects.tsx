import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTAStrip from "@/components/CTAStrip";

const categories = ["All", "Residential", "Commercial", "Industrial"];


interface Project {
  _id: string;
  title: string;
  category: string;
  location: string;
  capacity: string;
  image: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Fetch projects from backend
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
              Our Projects
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powering Success,{" "}
              <span className="text-gradient-solar">One Project at a Time</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful solar installations across
              residential, commercial, and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${activeCategory === category
                  ? "solar-gradient text-primary-foreground shadow-solar"
                  : "bg-secondary text-muted-foreground hover:bg-accent hover:text-primary"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
                    <img
                      src={`http://localhost:5000/uploads/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover overlay content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium w-fit mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-display font-semibold text-white text-lg mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {project.location} • {project.capacity}
                      </p>
                    </div>

                    {/* View icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <ExternalLink className="w-5 h-5 text-solar-dark" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-solar-dark/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
            >
              <div className="relative aspect-video">
                <img
                  src={`http://localhost:5000/uploads/${selectedProject.image}`}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-solar-dark/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-solar-dark/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-medium mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span>📍 {selectedProject.location}</span>
                  <span>⚡ {selectedProject.capacity}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-16 bg-solar-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "5MW+", label: "Total Capacity" },
              { value: "50+", label: "Happy Clients" },
              { value: "6+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-solar-gray">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAStrip
        title="Want to See Your Project Here?"
        subtitle="Let's discuss your solar installation needs."
      />
    </div>
  );
};

export default Projects;
