"use client";
import { motion } from "motion/react";
import { Target, MapPin, Layers, Award, Rocket } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

const reasons = [
  {
    icon: Target,
    title: "Strategy-Led Execution",
    description: "We don't execute in isolation. Every activation and campaign is rooted in a clear strategic direction."
  },
  {
    icon: MapPin,
    title: "Pan-India, Local-First Capability",
    description: "From metros to Tier 2/3 and rural markets — we understand local contexts and consumer realities."
  },
  {
    icon: Layers,
    title: "Integrated Offering",
    description: "Strategy, activation and digital — designed and delivered under one unified framework."
  },
  {
    icon: Award,
    title: "Leadership Experience",
    description: "60+ years of combined experience across HT Media, Times Group, BIG FM, BBC, Inox and Reliance."
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden dark-card !rounded-none">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="exec-text-gradient">
              Why Codevate?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Codevate combines strategic clarity with execution depth to help brands build meaningful presence across markets.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 exec-node-gradient rounded-xl flex items-center justify-center mb-4 shadow-md shadow-amber-500/10">
                  <reason.icon className="w-5 h-5 text-black stroke-[2.2]" />
                </div>
                <h3 className="font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXJrZXRpbmclMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3Nzk2OTYyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Marketing team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--accent)] rounded-full blur-[100px] opacity-20 pointer-events-none" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 exec-node-gradient rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/10">
            <Rocket className="w-8 h-8 text-black stroke-[2.2]" />
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-white mb-2">Execution at Scale</h3>
            <p className="text-base text-gray-400 leading-relaxed font-medium">
              Proven ability to manage multi-city, multi-format campaigns with consistency and reliability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
