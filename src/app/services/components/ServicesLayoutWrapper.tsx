"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

export function ServicesLayoutWrapper({ 
  children, 
  hero, 
  cta 
}: { 
  children: React.ReactNode; 
  hero: React.ReactNode; 
  cta: React.ReactNode; 
}) {
  const pathname = usePathname();
  
  // Check if we are on one of the special standalone service pages
  const isSpecialService = pathname.includes('/services/seo') || pathname.includes('/services/it-services');

  if (isSpecialService) {
    return (
      <div className="services-page-content">
        {children}
      </div>
    );
  }

  return (
    <>
      {hero}
      {children}
      {cta}
    </>
  );
}
