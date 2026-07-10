import React from 'react';

export interface ProcessStepsProps {
  steps: {
    number: string | number;
    title: string;
    description: string;
  }[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-16">Our Process</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-8 lg:gap-12 max-w-7xl mx-auto px-6 relative">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col md:w-[250px] items-center text-center group">
            {/* Connector line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[calc(100%-2rem)] h-[2px] bg-amber-500/10 -z-10 group-hover:bg-amber-500/50 transition-colors"></div>
            )}
            
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border-2 border-amber-500/20 text-[#E85020] flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
              {step.number}
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{step.title}</h3>
            <p className="text-gray-700 font-semibold text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
