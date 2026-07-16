import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "E-commerce SEO Services India | Codevate Group",
};

export default function EcommerceSEOPage() {
  const cards = [
    {
      icon: "shopping-bag",
      title: "Product Page Optimisation",
      description: "Titles, descriptions, schema, and images optimised for search and conversion."
    },
    {
      icon: "layout",
      title: "Category Page SEO",
      description: "Turn category pages into high-ranking, high-converting landing pages."
    },
    {
      icon: "git-branch",
      title: "Faceted Navigation Fixes",
      description: "Prevent crawl budget waste and duplicate content from filters and sorting."
    },
    {
      icon: "file-text",
      title: "Review Schema",
      description: "Implement star ratings in search results to improve click-through rates."
    },
    {
      icon: "search",
      title: "Competitor & Keyword Gap Analysis",
      description: "Find the exact terms your competitors rank for that you don't."
    },
    {
      icon: "shopping-cart",
      title: "Seasonal SEO Campaigns",
      description: "Plan content and category pushes for festive seasons (Diwali, EOSS, etc.)"
    }
  ];

  const steps = [
    { number: 1, title: "Store Audit", description: "Full crawl of products, categories, and navigation" },
    { number: 2, title: "Keyword Mapping", description: "Map buying-intent keywords to every product and category" },
    { number: 3, title: "On-Page Fixes", description: "Optimise all product and category pages systematically" },
    { number: 4, title: "Technical Fixes", description: "Faceted nav, sitemaps, canonicals, speed" },
    { number: 5, title: "Content Layer", description: "Supporting blog and buying-guide content" },
    { number: 6, title: "Track & Convert", description: "Monitor rankings, traffic, and revenue attribution" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="E-COMMERCE SEO"
        title="Turn Search Traffic Into Sales."
        highlight="Sales"
        description="E-commerce SEO is about more than rankings — it's about getting the right buyer to the right product at the right moment. Codevate's e-commerce SEO drives qualified organic traffic that converts."
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
      
      <TechStack label="Tools We Use" items={["Shopify", "WooCommerce", "Ahrefs", "SEMrush", "Google Analytics 4", "Google Merchant Centre", "Screaming Frog"]} />
      
      <ServiceCTA 
        heading="Ready to Grow Your E-commerce Sales?"
        sub="Find out how much organic traffic and revenue you're missing out on."
        buttonText="Get Your E-commerce SEO Audit"
        buttonHref="/contact"
      />
    </main>
  );
}
