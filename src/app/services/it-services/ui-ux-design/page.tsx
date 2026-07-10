import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "UI/UX Design Services India | VLocal Group",
};

export default function UIUXDesignPage() {
  const cards = [
    {
      icon: "search",
      title: "UX Research & Discovery",
      description: "User interviews, surveys, persona development, and journey mapping."
    },
    {
      icon: "layout",
      title: "Information Architecture",
      description: "Sitemaps, user flows, and navigation structures that feel intuitive."
    },
    {
      icon: "smartphone",
      title: "Wireframing & Prototyping",
      description: "Low and high-fidelity wireframes with clickable Figma prototypes."
    },
    {
      icon: "globe",
      title: "UI Design & Design Systems",
      description: "Production-ready screens with a scalable, documented design system."
    },
    {
      icon: "file-text",
      title: "Usability Testing",
      description: "Moderated and unmoderated testing sessions to validate design decisions."
    },
    {
      icon: "settings",
      title: "Design Audit & Redesign",
      description: "Evaluate existing products and redesign for improved UX and conversions."
    }
  ];

  const steps = [
    { number: 1, title: "Research", description: "User interviews, competitor analysis, heuristic evaluation" },
    { number: 2, title: "Define", description: "Personas, journey maps, and design principles" },
    { number: 3, title: "Ideate", description: "Sketches, IA, and low-fi wireframes" },
    { number: 4, title: "Design", description: "High-fidelity UI screens and design system" },
    { number: 5, title: "Prototype", description: "Clickable Figma prototype for stakeholder review" },
    { number: 6, title: "Test", description: "Usability sessions, iterate based on findings" },
    { number: 7, title: "Handoff", description: "Developer-ready Figma with specs and assets" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="UI / UX DESIGN"
        title="Design That Users Love. Results That Matter."
        highlight="Results That Matter"
        description="VLocal's design team creates user experiences that reduce friction, build trust, and convert — backed by research, not guesswork. From discovery to production-ready Figma files."
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
      
      <TechStack label="Tools We Use" items={["Figma", "FigJam", "Maze", "Hotjar", "Lottie", "Zeplin", "Storybook", "Adobe Illustrator"]} />
      
      <ServiceCTA 
        heading="Ready to Redesign Your User Experience?"
        sub="Let's create a digital product that your users will love."
        buttonText="Start Your Design Project"
        buttonHref="/contact"
      />
    </main>
  );
}
