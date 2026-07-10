"use client";
import { motion } from "motion/react";
import { Megaphone, Palette, Video, Users, BarChart3, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Advertising Campaigns",
    description: "Newspaper, Radio, TV, Outdoor, and Cinema ads designed for maximum local reach and impact.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2560&auto=format&fit=crop"
  },
  {
    icon: Users,
    title: "Digital Marketing",
    description: "SEO, Social Media Marketing, Google Ads, Meta Ads, and Performance Marketing that scales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Brand Identity, Logo Design, Brand Positioning, and Creative Strategy to stand out.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2564&auto=format&fit=crop"
  },
  {
    icon: Video,
    title: "PR & Media",
    description: "Public Relations, Press Releases, Media Coverage, and Influencer Collaborations.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2564&auto=format&fit=crop"
  },
  {
    icon: Lightbulb,
    title: "Brand Activation",
    description: "Mall Activations, Event Promotions, Product Launches, Road Shows, and Experiential Marketing.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2561&auto=format&fit=crop"
  },
  {
    icon: BarChart3,
    title: "Corporate Services",
    description: "Corporate Gifting, Campaign Planning, Marketing Consultation, and Business Promotions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-transparent">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[var(--text-primary)]">
              Core Services
            </span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Comprehensive marketing solutions designed to transform your vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-[420px] rounded-3xl overflow-hidden shadow-xl border border-[var(--border-default)]"
            >
              {/* Background Image - Rich Full Bleed */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/25 opacity-40 z-0" />
              </div>

              {/* Floating Frosted Glass Slab */}
              <div className="!absolute bottom-5 left-5 right-5 p-6 glass-card !bg-white/55 backdrop-blur-2xl border border-white/60 z-10 shadow-lg transition-all duration-300 group-hover:bottom-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 exec-node-gradient rounded-2xl flex items-center justify-center shadow-md shadow-amber-500/10">
                    <service.icon className="w-5 h-5 text-black stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl font-bold text-black tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-900 font-semibold leading-relaxed mb-1">
                  {service.description}
                </p>

                <div className="mt-4 flex items-center text-xs font-extrabold tracking-wider uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ color: "var(--accent-hover)" }}>
                  Explore Service
                  <span className="ml-1.5">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
