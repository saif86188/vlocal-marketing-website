"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Successful Campaigns", duration: 2 },
  { value: 98, suffix: "%", label: "Client Satisfaction", duration: 2 },
  { value: 50, suffix: "M+", label: "People Reached", duration: 2.5 },
  { value: 15, suffix: "+", label: "Years of Excellence", duration: 1.5 }
];

function AnimatedCounter({ value, suffix, duration }: { value: number; suffix: string; duration: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span className="text-5xl md:text-6xl font-bold exec-text-gradient">
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 opacity-10 noise-overlay" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Results That Speak Volumes
          </h2>
          <p className="text-xl text-gray-800 font-semibold max-w-2xl mx-auto">
            Numbers don't lie—here's the impact we've created for businesses like yours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[var(--accent)] rounded-3xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-300" />

              <div className="relative p-8 glass-card border border-white/40 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={stat.duration} />
                <p className="mt-4 text-gray-800 font-semibold group-hover:text-black transition-colors">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="codevate-btn exec-node-gradient text-black shadow-lg glow-accent"
          >
            Join Our Success Stories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
