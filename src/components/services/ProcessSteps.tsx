import React from 'react';

interface ProcessStepsProps {
  steps: {
    number: number | string;
    title: string;
    description: string;
  }[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-[#1B2B5E] text-center mb-16">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-auto-fit min-[1024px]:flex min-[1024px]:flex-wrap min-[1024px]:justify-center gap-8 lg:gap-12 max-w-7xl mx-auto px-6 relative">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col min-[1024px]:w-[250px] items-center text-center group">
            {/* Connector line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden min-[1024px]:block absolute top-8 left-[60%] w-[calc(100%-2rem)] h-[2px] bg-gray-200 -z-10 group-hover:bg-[#E85020]/30 transition-colors"></div>
            )}
            
            <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-[#E85020] text-[#E85020] flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 group-hover:bg-[#E85020] group-hover:text-white transition-all duration-300 shadow-sm">
              {step.number}
            </div>
            <h3 className="text-xl font-bold text-[#1B2B5E] mb-3">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
