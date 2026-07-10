import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "Technical SEO Services India | VLocal Group",
};

export default function TechnicalSEOPage() {
  const cards = [
    {
      icon: "settings",
      title: "Site Speed & Core Web Vitals",
      description: "Optimise LCP, FID, and CLS scores to meet Google's performance thresholds."
    },
    {
      icon: "search",
      title: "Crawl & Indexation Fixes",
      description: "Resolve crawl errors, duplicate content, canonicals, and orphaned pages."
    },
    {
      icon: "file-text",
      title: "Schema Markup",
      description: "Implement structured data (FAQ, Product, Review, Local Business) for rich snippets."
    },
    {
      icon: "smartphone",
      title: "Mobile Optimisation",
      description: "Ensure flawless mobile UX and pass Google's mobile-first indexing requirements."
    },
    {
      icon: "git-branch",
      title: "XML Sitemaps & Robots.txt",
      description: "Correctly configured sitemaps and crawl directives for maximum index efficiency."
    },
    {
      icon: "shield",
      title: "HTTPS & Security",
      description: "Audit and fix SSL, redirect chains, mixed content, and security headers."
    }
  ];

  const steps = [
    { number: 1, title: "Technical Audit", description: "100+ point crawl using Screaming Frog + manual review" },
    { number: 2, title: "Priority Matrix", description: "Rank issues by impact and effort for fastest wins" },
    { number: 3, title: "Fix Implementation", description: "Dev-ready tickets for every identified issue" },
    { number: 4, title: "Validation", description: "Re-crawl and verify every fix is correctly deployed" },
    { number: 5, title: "Ongoing Monitoring", description: "Monthly crawl health checks and alert setup" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="TECHNICAL SEO"
        title="Make Your Website Search Engine's Favourite."
        highlight="Search Engine's Favourite"
        description="If search engines can't properly crawl, index, and understand your website, no amount of content or links will help. VLocal's technical SEO team fixes the foundation."
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
      
      <TechStack label="Tools We Use" items={["Screaming Frog", "Google Search Console", "Ahrefs", "PageSpeed Insights", "GTmetrix", "Schema.org", "Cloudflare"]} />
      
      <ServiceCTA 
        heading="Fix Your Foundation"
        sub="Book a technical SEO audit and remove roadblocks to higher rankings."
        buttonText="Book a Technical SEO Audit"
        buttonHref="/contact"
      />
    </main>
  );
}
