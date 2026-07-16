"use client";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 opacity-10 noise-overlay pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2560&auto=format&fit=crop"
                alt="Codevate Group Strategy Meeting"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-multiply" />
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-[var(--accent)] rounded-full blur-[100px] opacity-20 pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-[200px] h-[200px] bg-[var(--exec-gold-500)] rounded-full blur-[80px] opacity-20 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 frosted-badge mb-6 border border-white/60 shadow-sm">
              <span className="text-amber-600 uppercase tracking-widest text-[10px] font-bold">About Our Company</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] tracking-tight leading-tight">
              Empowering Local Brands With <span className="exec-text-gradient">Global Standards</span>
            </h2>
            
            <p className="text-lg text-gray-800 font-semibold mb-8 leading-relaxed">
              Codevate Group represents local business growth, media visibility, and strategic marketing expansion. We are driven by a singular vision: to empower growing businesses with powerful media solutions that create trust and exponential growth.
            </p>
 
            <div className="space-y-4 mb-8">
              {[
                "Senior media industry experience (HT Media, Times Group, BBC).",
                "Delivering creative, impactful, and result-driven marketing.",
                "Transforming startups and SMEs into market leaders.",
                "End-to-end capabilities from PR to offline activations."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5.5 h-5.5 text-[var(--accent-hover)] fill-[var(--accent)]/20 shrink-0 mt-0.5 stroke-[2.2]" />
                  <span className="text-gray-800 font-semibold">{item}</span>
                </div>
              ))}
            </div>
 
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--border-default)]">
              <div>
                <h4 className="text-3xl font-bold text-[var(--text-primary)] mb-1">15+</h4>
                <p className="text-sm text-gray-800 font-bold uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[var(--text-primary)] mb-1">360°</h4>
                <p className="text-sm text-gray-800 font-bold uppercase tracking-wider">Marketing Solutions</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
