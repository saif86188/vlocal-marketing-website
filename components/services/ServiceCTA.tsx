import Link from 'next/link';
import React from 'react';

export interface ServiceCTAProps {
  heading: string;
  sub: string;
  buttonText: string;
  buttonHref: string;
}

export function ServiceCTA({ heading, sub, buttonText, buttonHref }: ServiceCTAProps) {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto dark-card p-12 md:p-20 flex flex-col items-center text-center space-y-8 relative overflow-hidden shadow-2xl rounded-3xl border border-white/5">
        {/* Soft glowing backgrounds inside dark card */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-[60%] -right-[20%] w-[80%] h-[160%] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-[60%] -left-[20%] w-[80%] h-[160%] rounded-full bg-[#E85020]/5 blur-[120px] pointer-events-none"></div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight relative z-10 leading-tight max-w-3xl">{heading}</h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-medium relative z-10 leading-relaxed">{sub}</p>
        <Link 
          href={buttonHref}
          className="codevate-btn exec-node-gradient text-black shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 scale-110 mt-4 px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
