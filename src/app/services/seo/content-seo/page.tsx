import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "Content SEO & Strategy Services India | Codevate Group",
};

export default function ContentSEOPage() {
  const cards = [
    {
      icon: "search",
      title: "Keyword Research & Clustering",
      description: "Group thousands of keywords into topic clusters that build authority systematically."
    },
    {
      icon: "file-text",
      title: "Content Strategy & Roadmap",
      description: "A 6–12 month editorial plan mapped to your funnel and business goals."
    },
    {
      icon: "layout",
      title: "Pillar Pages & Topic Clusters",
      description: "Build comprehensive resource hubs that dominate entire topic areas."
    },
    {
      icon: "globe",
      title: "Blog & Article Production",
      description: "SEO-optimised content written for Indian audiences in English, Hindi, and regional languages."
    },
    {
      icon: "settings",
      title: "Content Refresh & Pruning",
      description: "Update underperforming pages and remove or consolidate low-value content."
    },
    {
      icon: "map-pin",
      title: "Search Intent Mapping",
      description: "Match every content piece to the right stage of the buyer journey."
    }
  ];

  const steps = [
    { number: 1, title: "Keyword Universe", description: "Build a complete keyword map for your niche" },
    { number: 2, title: "Intent Analysis", description: "Classify keywords by informational, commercial, transactional intent" },
    { number: 3, title: "Content Calendar", description: "Prioritised 90-day publishing plan" },
    { number: 4, title: "Production", description: "Write, edit, and publish SEO-optimised content" },
    { number: 5, title: "Interlinking", description: "Build a strong internal link architecture" },
    { number: 6, title: "Measure & Iterate", description: "Track rankings, engagement, and conversions per piece" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="CONTENT SEO"
        title="Build Authority. Earn Rankings. Drive Trust."
        highlight="Earn Rankings"
        description="Content without strategy is just noise. Codevate's content SEO service builds topical authority through data-driven content that ranks, engages, and converts across Indian markets."
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
      
      <TechStack label="Tools We Use" items={["Ahrefs", "SEMrush", "Surfer SEO", "Google Trends", "Answer The Public", "Google Search Console", "Notion"]} />
      
      <ServiceCTA 
        heading="Ready to Build Your Content Engine?"
        sub="Let's build a content strategy that drives organic traffic and converts."
        buttonText="Build Your Content SEO Strategy"
        buttonHref="/contact"
      />
    </main>
  );
}
