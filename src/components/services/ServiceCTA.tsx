import Link from 'next/link';
import React from 'react';

interface ServiceCTAProps {
  heading: string;
  sub: string;
  buttonText: string;
  buttonHref: string;
}

export function ServiceCTA({ heading, sub, buttonText, buttonHref }: ServiceCTAProps) {
  return (
    <section className="bg-[#1B2B5E] py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -right-[10%] w-[70%] h-[150%] rounded-full bg-white/5 blur-[120px]"></div>
        <div className="absolute -bottom-[50%] -left-[10%] w-[70%] h-[150%] rounded-full bg-[#E85020]/10 blur-[120px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{heading}</h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">{sub}</p>
        <Link 
          href={buttonHref}
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#E85020] rounded-full hover:bg-[#c94318] hover:shadow-lg hover:shadow-[#E85020]/20 transition-all duration-300"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
