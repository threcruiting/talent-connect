import { motion } from "framer-motion";
import { Search, Users, Target, Briefcase } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Brand Perception",
    description:
      "Understand how candidates and the market perceive your employer brand to attract top-tier talent.",
  },
  {
    icon: Search,
    title: "Market Intelligence & Insights",
    description:
      "Competitive landscape analysis, compensation benchmarking, and talent mapping for informed decisions.",
  },
  {
    icon: Briefcase,
    title: "Headcount Advisory",
    description:
      "Strategic guidance on team structure, role prioritization, and hiring timelines aligned with your goals.",
  },
  {
    icon: Target,
    title: "Reduced Hiring Risk",
    description:
      "Rigorous vetting and alignment processes that ensure every hire is the right fit from day one.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold tracking-widest text-sm uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-lg p-8 border border-border hover:border-secondary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <service.icon className="h-6 w-6 text-primary-foreground group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
