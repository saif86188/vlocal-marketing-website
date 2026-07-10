"use client";
import React, { useEffect, useRef, useState } from 'react';

export function LottiePlayer({ src, className = "w-full h-full" }: { src: string; className?: string }) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Dynamically inject the script if it isn't already loaded
    if (typeof window !== 'undefined' && !window.customElements.get('lottie-player')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (!mounted) {
    return <div className={className} />;
  }

  // Use dangerouslySetInnerHTML to safely render the custom element in Next.js without hydration errors
  return (
    <div 
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{
        __html: `
          <lottie-player
            src="${src}"
            background="transparent"
            speed="1"
            style="width: 100%; height: 100%;"
            loop
            autoplay
          ></lottie-player>
        `
      }}
    />
  );
}
