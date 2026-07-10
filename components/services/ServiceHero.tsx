import React from 'react';
import { LottiePlayer } from './LottiePlayer';

export interface ServiceHeroProps {
  label: string;
  title: string;
  highlight: string;
  description: string;
  badge?: string;
}

export function ServiceHero({ label, title, highlight, description, badge }: ServiceHeroProps) {
  const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
  
  // Determine if there is a default Lottie animation based on the label/title
  let lottieUrl = "";
  const upperLabel = label ? label.toUpperCase() : "";
  const upperTitle = title ? title.toUpperCase() : "";
  
  if (upperLabel.includes("SEO") || upperTitle.includes("SEO")) {
    lottieUrl = "/animations/seo.json";
  } else if (
    upperLabel.includes("IT") || 
    upperLabel.includes("DEVELOPMENT") || 
    upperLabel.includes("CLOUD") || 
    upperLabel.includes("CYBERSECURITY") || 
    upperLabel.includes("MAINTENANCE") ||
    upperTitle.includes("DEVELOPMENT") ||
    upperTitle.includes("APP") ||
    upperTitle.includes("WEB") ||
    upperTitle.includes("AI")
  ) {
    lottieUrl = "/animations/it-services.json";
  }

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-transparent">
      {/* Soft theme background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`grid grid-cols-1 ${lottieUrl ? 'lg:grid-cols-12 gap-12 lg:gap-16 items-center' : 'text-center max-w-4xl mx-auto'}`}>
          
          <div className={lottieUrl ? 'lg:col-span-7 text-left' : ''}>
            {badge && (
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#E85020] font-medium text-sm mb-6 ${!lottieUrl ? 'mx-auto' : ''}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                {badge}
              </div>
            )}
            
            <div className="text-[#E85020] font-bold text-sm tracking-widest uppercase mb-4">
              {label}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight mb-6 leading-tight">
              {parts.map((part, i) => 
                part.toLowerCase() === highlight.toLowerCase() ? (
                  <span key={i} className="text-[#E85020]">{part}</span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 font-semibold leading-relaxed">
              {description}
            </p>
          </div>

          {lottieUrl && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] aspect-square rounded-3xl overflow-hidden glass-card p-6 border border-white/60 shadow-2xl flex items-center justify-center bg-white/10 backdrop-blur-md">
                <LottiePlayer src={lottieUrl} className="w-full h-full" />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
