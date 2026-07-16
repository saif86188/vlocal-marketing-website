import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "Link Building Services India | Codevate Group",
};

export default function LinkBuildingPage() {
  const cards = [
    {
      icon: "link",
      title: "Editorial Outreach",
      description: "Pitch and earn links from relevant Indian and international publications."
    },
    {
      icon: "file-text",
      title: "Guest Posting",
      description: "Place authoritative articles on high-DA blogs and news sites in your niche."
    },
    {
      icon: "globe",
      title: "Digital PR Link Acquisition",
      description: "Create newsworthy content assets that earn natural links at scale."
    },
    {
      icon: "git-branch",
      title: "Broken Link Building",
      description: "Find and replace broken links on authority sites with your content."
    },
    {
      icon: "layout",
      title: "Resource Page Link Building",
      description: "Get listed on curated resource and tool pages in your industry."
    },
    {
      icon: "search",
      title: "Competitor Backlink Analysis",
      description: "Replicate your competitors' best links with a targeted outreach strategy."
    }
  ];

  const steps = [
    { number: 1, title: "Backlink Audit", description: "Analyse your current link profile and identify gaps" },
    { number: 2, title: "Competitor Research", description: "Map competitors' best links and find replicable opportunities" },
    { number: 3, title: "Prospect List", description: "Build a vetted list of high-DA, relevant link targets" },
    { number: 4, title: "Content Creation", description: "Create linkable assets, guest posts, and PR pieces" },
    { number: 5, title: "Outreach", description: "Personalised email outreach campaigns at scale" },
    { number: 6, title: "Report", description: "Monthly link acquisition report with DA, traffic, and anchor data" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="LINK BUILDING"
        title="Build Authority. Earn Trust. Climb Rankings."
        highlight="Earn Trust"
        description="Backlinks are still the single strongest ranking signal. Codevate's link building service earns high-quality, relevant links through editorial outreach, digital PR, and strategic content — not spammy shortcuts."
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
      
      <TechStack label="Tools We Use" items={["Ahrefs", "Moz", "BuzzSumo", "Hunter.io", "Pitchbox", "Google Search Console"]} />
      
      <ServiceCTA 
        heading="Ready to Increase Your Domain Authority?"
        sub="Earn high-quality links that move the needle for your business."
        buttonText="Start Building Your Authority"
        buttonHref="/contact"
      />
    </main>
  );
}
