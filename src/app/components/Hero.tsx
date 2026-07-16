"use client";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, TrendingUp, Target, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden pt-28 pb-8 lg:pt-36 lg:pb-16">
      {/* Premium Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop" 
          alt="Modern corporate media background" 
          className="w-full h-full object-cover opacity-80 object-center mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)]/10 via-[var(--bg-base)]/35 to-[var(--bg-base)]" />
      </div>

      <div className="absolute inset-0 opacity-20 pointer-events-none noise-overlay z-0" />

      {/* Decorative Back-Light Glowing Orbs */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--accent)] rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[var(--exec-gold-500)] rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 my-auto">
        {/* Two-Column Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column - Elite Copywriting and CTA Trigger Zone */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-4 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 frosted-badge mb-6 shadow-sm border border-white/60"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent)] animate-pulse" />
              <span className="text-[var(--text-primary)] font-bold text-[10px] tracking-wider uppercase">YOUR INTEGRATED GROWTH PARTNER</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-5 leading-[1.1] tracking-tight text-[var(--text-primary)]"
            >
              Building <br />
              Brands Where It <br />
              <span className="exec-text-gradient relative">
                Matters
                <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-[var(--accent)]/30 blur-sm rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-gray-900 mb-8 max-w-lg leading-relaxed font-semibold"
            >
              A premium integrated marketing and media agency helping brands scale through brand strategy, physical presence and cultural relevance across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4 w-full justify-start items-center mb-8"
            >
              <a
                href="#contact"
                className="codevate-btn exec-node-gradient text-black shadow-[0_0_30px_rgba(251,193,58,0.25)] hover:shadow-[0_0_45px_rgba(251,193,58,0.45)] group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="codevate-btn glass-card text-black border border-white/60 group backdrop-blur-md hover:bg-white/40 shadow-sm"
              >
                <Play className="w-5 h-5 mr-2 text-[var(--accent)] fill-[var(--accent)]/10" />
                Explore Services
              </a>
            </motion.div>

            {/* Trusted-By Corporate Panel */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-5 border-t border-[var(--border-default)] pt-5 w-full max-w-lg"
            >
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Trusted By</span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-bold text-gray-700">
                <span>Himalaya</span>
                <span className="text-amber-500/60">•</span>
                <span>HDFC Bank</span>
                <span className="text-amber-500/60">•</span>
                <span>Tata Power Solar</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Premium Asymmetrical Interactive Glassmorphic Showcase */}
          <div className="hidden lg:flex lg:col-span-5 relative w-full h-[400px] items-center justify-center lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

            {/* 3D Glass Layer - Floating Years Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 glass-card border border-white/70 shadow-2xl rounded-2xl z-20 flex flex-col items-center gap-2 backdrop-blur-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1"
              >
                <div className="text-4xl font-black text-amber-500">60+</div>
                <div className="text-xs font-bold text-gray-800 uppercase tracking-widest leading-tight text-center">Years Of Combined<br />Experience</div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Feature Showcase Row - Compact Single Screen Fit */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 border-t border-[var(--border-default)] pt-6"
        >
          {[
            { icon: Target, title: "Strategy", desc: "Data-backed brand positioning and blueprints." },
            { icon: TrendingUp, title: "Activation", desc: "On-ground execution and market penetration." },
            { icon: Sparkles, title: "Digital", desc: "High-impact online presence and growth." }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="p-4 glass-card hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3.5"
            >
              <div className="w-10 h-10 exec-node-gradient rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/10">
                <feature.icon className="w-4.5 h-4.5 text-black stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-bold text-black text-sm mb-0.5">{feature.title}</h3>
                <p className="text-[11px] text-gray-800 font-semibold leading-normal">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--bg-base)] to-transparent pointer-events-none z-10" />
    </section>
  );
}
