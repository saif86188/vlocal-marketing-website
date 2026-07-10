import React from 'react';

export interface TechStackProps {
  label: string;
  items: string[];
}

export function TechStack({ label, items }: TechStackProps) {
  return (
    <div className="py-12 border-t border-[var(--border-default)] max-w-5xl mx-auto px-6 text-center">
      <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mb-8">{label}</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="px-6 py-2.5 bg-white/45 backdrop-blur-md text-gray-800 rounded-full text-sm font-semibold border border-white/70 hover:border-amber-500/50 hover:bg-white/85 hover:text-[#E85020] hover:scale-105 transition-all duration-300 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
