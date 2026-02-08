import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Placements Made" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Years of Experience" },
  { value: "30", label: "Days Avg. Time to Fill" },
];

const Stats = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl lg:text-5xl text-secondary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-secondary-foreground/70 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
