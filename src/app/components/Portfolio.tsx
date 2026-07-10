"use client";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const portfolios = [
  {
    title: "National Tech Summit Launch",
    category: "Event Activation & PR",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2560&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2"
  },
  {
    title: "FinTech App Rebranding",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2560&auto=format&fit=crop",
    colSpan: "col-span-1"
  },
  {
    title: "Urban Real Estate Campaign",
    category: "Outdoor & Digital Ads",
    image: "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?q=80&w=2560&auto=format&fit=crop",
    colSpan: "col-span-1"
  },
  {
    title: "Healthcare Awareness Drive",
    category: "Social Media & TV",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2560&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 opacity-10 noise-overlay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 frosted-badge mb-6 border border-white/60 shadow-sm">
              <span className="text-amber-600 uppercase tracking-widest text-[10px] font-bold">Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">
              Featured Campaigns
            </h2>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a href="#contact" className="inline-flex items-center gap-2 hover:text-[var(--text-primary)] font-semibold transition-colors group" style={{ color: "var(--accent-hover)" }}>
              View All Projects 
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolios.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden h-[400px] border border-white/10 ${item.colSpan}`}
            >
              <div className="absolute inset-0 z-0">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>
 
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <p className="text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.category}
                </p>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <div className="w-12 h-12 rounded-full exec-node-gradient flex items-center justify-center shadow-lg shadow-amber-500/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <ArrowUpRight className="w-6 h-6 text-black stroke-[2.2]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
