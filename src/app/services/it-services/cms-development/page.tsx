import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "CMS Development Services India | VLocal Group",
};

export default function CMSDevelopmentPage() {
  const cards = [
    {
      icon: "database",
      title: "Headless CMS (Sanity / Contentful)",
      description: "Decouple your content from your presentation layer for maximum flexibility."
    },
    {
      icon: "layout",
      title: "WordPress Development",
      description: "Custom themes, plugins, and Gutenberg block libraries for the world's most popular CMS."
    },
    {
      icon: "settings",
      title: "Custom Admin Panels",
      description: "Bespoke backend interfaces for managing complex content types and workflows."
    },
    {
      icon: "git-branch",
      title: "CMS Migration",
      description: "Migrate your content from legacy systems without losing SEO equity or data."
    },
    {
      icon: "globe",
      title: "Multi-language & Multi-region CMS",
      description: "Manage content across multiple languages and regional websites from one place."
    },
    {
      icon: "link",
      title: "CMS Integration",
      description: "Connect your CMS to your CRM, CDP, analytics, and marketing automation stack."
    }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="CMS DEVELOPMENT"
        title="Content Management That Your Team Can Actually Use."
        highlight="Actually Use"
        description="VLocal builds headless and traditional CMS solutions that give your marketing and content teams full control — without needing a developer for every update."
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
      
      <TechStack label="Tools We Use" items={["Sanity", "Contentful", "Strapi", "WordPress", "Next.js", "GraphQL", "REST APIs", "AWS S3", "Cloudinary"]} />
      
      <ServiceCTA 
        heading="Take Control of Your Content"
        sub="Let's build a CMS that empowers your team to move faster."
        buttonText="Build Your CMS Solution"
        buttonHref="/contact"
      />
    </main>
  );
}
