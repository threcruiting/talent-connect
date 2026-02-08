import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Professional office environment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-semibold tracking-widest text-sm uppercase mb-6"
          >
            Executive Recruiting & Search
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6"
          >
            We Find the Leaders Who{" "}
            <span className="text-secondary italic">Transform</span>{" "}
            Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-primary-foreground/70 max-w-xl mb-10 font-light leading-relaxed"
          >
            Connecting exceptional organizations with visionary talent through
            our proven retained search methodology and deep industry expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8"
            >
              Start a Search
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium text-base px-8"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
