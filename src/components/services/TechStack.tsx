import React from 'react';

interface TechStackProps {
  label: string;
  items: string[];
}

export function TechStack({ label, items }: TechStackProps) {
  return (
    <div className="py-12 border-t border-gray-100 max-w-5xl mx-auto px-6 text-center">
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">{label}</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="px-6 py-2.5 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-[#E85020]/30 hover:bg-amber-50 hover:text-[#1B2B5E] transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
