import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "SEO Audit Services India | VLocal Group",
};

export default function SEOAuditPage() {
  const cards = [
    {
      icon: "settings",
      title: "Technical SEO Audit",
      description: "Crawlability, indexation, speed, mobile, schema, security."
    },
    {
      icon: "layout",
      title: "On-Page Audit",
      description: "Title tags, meta descriptions, heading structure, keyword usage, content quality."
    },
    {
      icon: "link",
      title: "Backlink Profile Audit",
      description: "Link quality, toxic links, anchor text distribution, competitor comparison."
    },
    {
      icon: "search",
      title: "Keyword Gap Analysis",
      description: "What terms your competitors rank for that you're missing entirely."
    },
    {
      icon: "file-text",
      title: "Content Audit",
      description: "Which pages drive traffic, which to update, which to consolidate or remove."
    },
    {
      icon: "map-pin",
      title: "Local SEO Audit",
      description: "GBP health, citations, local rankings, review signals (if applicable)."
    }
  ];

  const steps = [
    { number: 1, title: "Intake", description: "Share access to Search Console, Analytics, and your site" },
    { number: 2, title: "Crawl & Analysis", description: "100+ point automated + manual audit" },
    { number: 3, title: "Competitor Benchmarking", description: "Map your gaps vs top 3 competitors" },
    { number: 4, title: "Report Creation", description: "Full written findings with screenshots" },
    { number: 5, title: "Strategy Call", description: "Walk through the audit and answer questions" },
    { number: 6, title: "Roadmap Delivery", description: "Prioritised 90-day action plan" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="SEO AUDIT"
        title="Find Out Exactly What's Holding You Back."
        highlight="Holding You Back"
        description="A VLocal SEO audit is a complete diagnostic of your website's search performance — technical, on-page, off-page, and competitive. You'll know exactly what to fix and in what order."
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

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1B2B5E] rounded-3xl p-10 md:p-14 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[50%] h-[100%] rounded-full bg-white/5 blur-[80px]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-white">What You Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Full written audit report (PDF + Google Slides)",
                  "Priority action matrix (quick wins vs long-term)",
                  "Competitor benchmark report",
                  "60-minute strategy call to walk through findings",
                  "Dev-ready technical fixes document",
                  "90-day SEO roadmap"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-[#E85020] shrink-0 w-6 h-6" />
                    <span className="text-blue-100 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} />
      
      <ServiceCTA 
        heading="Find Your Growth Opportunities"
        sub="Stop guessing. Get a clear, actionable roadmap to better rankings and more traffic."
        buttonText="Book Your SEO Audit"
        buttonHref="/contact"
      />
    </main>
  );
}
