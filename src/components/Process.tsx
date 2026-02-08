import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn your organization, culture, and the specific leadership qualities you need.",
  },
  {
    number: "02",
    title: "Research",
    description: "Our team maps the market, identifies prospects, and develops a targeted candidate pool.",
  },
  {
    number: "03",
    title: "Evaluation",
    description: "In-depth interviews, reference checks, and assessments ensure the right fit.",
  },
  {
    number: "04",
    title: "Placement",
    description: "We manage offers, negotiations, and onboarding support for a seamless transition.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-semibold tracking-widest text-sm uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Our Proven Process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <p className="font-display text-6xl text-secondary/20 mb-4">
                {step.number}
              </p>
              <h3 className="font-display text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-1/2 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
