"use client";
import React from "react";

const clients = [
  "https://www.codevate.com/wp-content/uploads/2024/11/download-1.png.webp",
  "https://www.codevate.com/wp-content/uploads/2024/11/cropped-sit-icon-300x300.png.webp",
  "https://www.codevate.com/wp-content/uploads/2024/11/meyer.png.webp",
  "https://www.codevate.com/wp-content/uploads/2024/11/fb6d2faa5e6b89ada6da0d728643bd94090276adf29cf8a0da98ded9f58e5a7c-300x169.webp",
  "https://www.codevate.com/wp-content/uploads/2024/11/download-3.png.webp",
  "https://www.codevate.com/wp-content/uploads/2024/11/Suzuki_logo_2.svg-300x202.png.webp",
  "https://www.codevate.com/wp-content/uploads/2024/11/sunfeast-vector-logo-300x167.png.webp",
  "https://www.codevate.com/wp-content/uploads/2024/11/download-2.png.webp"
];

export function OurClients() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 opacity-10 noise-overlay pointer-events-none" />
      
      <div className="flex flex-col items-center text-center space-y-6 mb-16 relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 frosted-badge border border-[var(--border-default)] shadow-md rounded-full">
          <span className="text-amber-600 uppercase tracking-widest text-sm font-black">OUR CLIENTS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
          Trusted by the <span className="exec-text-gradient">Best</span>
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group py-4">
        {/* Gradients for smooth fade effect at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8f9fa] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f8f9fa] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-6 px-3 items-center" style={{ animation: 'marquee 35s linear infinite' }}>
          {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 h-36 px-4 py-4 flex items-center justify-center transition-opacity"
            >
              <img src={client} alt="Client Logo" className="max-w-full max-h-full object-contain pointer-events-none select-none" />
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .group:hover .animate-marquee {
          animation-play-state: paused !important;
        }
      `}} />
    </section>
  );
}
