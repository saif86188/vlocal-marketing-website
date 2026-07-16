import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "Web Development Services India | Codevate Group",
};

export default function WebDevelopmentPage() {
  const cards = [
    {
      icon: "globe",
      title: "Corporate & Brand Websites",
      description: "Custom-designed websites that represent your brand with precision and convert visitors."
    },
    {
      icon: "layout",
      title: "Web Application Development",
      description: "Complex, interactive web apps with authentication, dashboards, and business logic."
    },
    {
      icon: "file-text",
      title: "Landing Page Development",
      description: "High-converting campaign landing pages optimised for performance and CRO."
    },
    {
      icon: "smartphone",
      title: "Progressive Web Apps (PWA)",
      description: "App-like experiences on the web with offline support and push notifications."
    },
    {
      icon: "settings",
      title: "Website Redesign",
      description: "Transform outdated websites into modern, fast, and conversion-optimised digital assets."
    },
    {
      icon: "database",
      title: "Headless & Jamstack Development",
      description: "Next.js, Gatsby, and decoupled architectures for blazing-fast performance."
    }
  ];

  const steps = [
    { number: 1, title: "Discovery", description: "Goals, audience, competitor review, technical requirements" },
    { number: 2, title: "Sitemap & IA", description: "Define page structure and user flows" },
    { number: 3, title: "Design", description: "Wireframes → High-fidelity mockups in Figma" },
    { number: 4, title: "Development", description: "Component-based development with weekly reviews" },
    { number: 5, title: "QA & Testing", description: "Cross-browser, mobile, performance, and accessibility" },
    { number: 6, title: "Launch & Handover", description: "Deployment + CMS training + documentation" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="WEB DEVELOPMENT"
        title="Websites Built to Perform. Not Just to Exist."
        highlight="Perform"
        description="Codevate builds fast, scalable, and SEO-ready websites and web applications — from corporate sites to complex web platforms — using modern technology stacks."
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
      
      <TechStack label="Tools We Use" items={["Next.js", "React", "Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "MongoDB", "Vercel", "AWS"]} />
      
      <ServiceCTA 
        heading="Ready to Upgrade Your Web Presence?"
        sub="Let's build a website that drives real business results."
        buttonText="Start Your Web Project"
        buttonHref="/contact"
      />
    </main>
  );
}
