import React from 'react';

interface ServiceHeroProps {
  label: string;
  title: string;
  highlight: string;
  description: string;
  badge?: string;
}

export function ServiceHero({ label, title, highlight, description, badge }: ServiceHeroProps) {
  const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
  
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50/50 via-white to-white"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-600 font-medium text-sm mb-6">
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
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1B2B5E] tracking-tight mb-8 leading-tight">
          {parts.map((part, i) => 
            part.toLowerCase() === highlight.toLowerCase() ? (
              <span key={i} className="text-[#E85020]">{part}</span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
