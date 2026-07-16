import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "Local SEO Services India | Codevate Group",
};

export default function LocalSEOPage() {
  const cards = [
    {
      icon: "map-pin",
      title: "Google Business Profile Optimisation",
      description: "Complete setup, optimisation and management of your GBP listing for maximum visibility."
    },
    {
      icon: "search",
      title: "Local Keyword Strategy",
      description: "Research and target city-specific, neighbourhood-level, and 'near me' keywords."
    },
    {
      icon: "globe",
      title: "Local Citation Building",
      description: "Build and clean your NAP (name, address, phone) presence across 50+ Indian directories."
    },
    {
      icon: "file-text",
      title: "Review Management",
      description: "Strategy to generate, respond to, and leverage customer reviews for ranking signals."
    },
    {
      icon: "layout",
      title: "Geo-Targeted Landing Pages",
      description: "Create city and locality-specific pages that rank for local searches at scale."
    },
    {
      icon: "link",
      title: "Local Link Building",
      description: "Earn links from local news sites, business directories, and community platforms."
    }
  ];

  const steps = [
    { number: 1, title: "Local Audit", description: "GBP health check, citation audit, competitor local ranking analysis" },
    { number: 2, title: "Keyword Mapping", description: "Map target keywords to cities, localities and service areas" },
    { number: 3, title: "On-Page Localisation", description: "Optimise pages, titles, and content for local intent" },
    { number: 4, title: "Citation Cleanup", description: "Fix inconsistent NAP data across all directories" },
    { number: 5, title: "Review Strategy", description: "Set up systems to generate and respond to reviews" },
    { number: 6, title: "Track & Rank", description: "Monitor Google Maps and local pack rankings weekly" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="LOCAL SEO"
        title="Own Your City. Dominate Local Search."
        highlight="Dominate Local Search"
        description="When someone searches for your service in your city, they should find you first. Codevate's local SEO service puts your brand at the top of Google Maps and local search results across Indian cities."
      />
      
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B5E] text-center mb-16">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <ServiceCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} />
      
      <TechStack label="Tools We Use" items={["Google Business Profile", "BrightLocal", "Ahrefs", "SEMrush", "Google Search Console", "Moz Local"]} />
      
      <ServiceCTA 
        heading="Ready to Rank #1 in Your Market?"
        sub="Get your local SEO audit and start dominating local search."
        buttonText="Get Your Local SEO Audit"
        buttonHref="/contact"
      />
    </main>
  );
}
