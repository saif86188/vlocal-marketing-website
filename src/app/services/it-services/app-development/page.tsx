import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "Mobile App Development Services India | Codevate Group",
};

export default function AppDevelopmentPage() {
  const cards = [
    {
      icon: "smartphone",
      title: "iOS App Development",
      description: "Native Swift apps with full Apple ecosystem integration."
    },
    {
      icon: "smartphone",
      title: "Android App Development",
      description: "Native Kotlin apps built for the diversity of the Android ecosystem."
    },
    {
      icon: "layout",
      title: "Cross-Platform (React Native / Flutter)",
      description: "One codebase, two platforms — without compromising on quality."
    },
    {
      icon: "layout",
      title: "App UI/UX Design",
      description: "Mobile-first design that follows platform conventions while staying on-brand."
    },
    {
      icon: "database",
      title: "App Backend & APIs",
      description: "Scalable backend infrastructure and APIs that power your mobile app."
    },
    {
      icon: "search",
      title: "App Store Optimisation (ASO)",
      description: "Optimise your App Store listing for discovery and conversion."
    }
  ];

  const steps = [
    { number: 1, title: "Concept & Scope", description: "Define features, flows, and MVP scope" },
    { number: 2, title: "UX Design", description: "User flows, wireframes, and interactive prototypes" },
    { number: 3, title: "UI Design", description: "Final screens in Figma with design system" },
    { number: 4, title: "Development", description: "Sprint-based development with TestFlight / internal beta" },
    { number: 5, title: "QA & Testing", description: "Device testing, performance profiling, crash analysis" },
    { number: 6, title: "Launch", description: "App Store / Play Store submission + ASO" },
    { number: 7, title: "Post-Launch", description: "Analytics setup, ratings monitoring, update cycles" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="APP DEVELOPMENT"
        title="Mobile Apps Your Users Will Actually Use."
        highlight="Actually Use"
        description="Codevate builds native and cross-platform mobile applications for iOS and Android — from consumer apps to enterprise tools — with a focus on performance, usability, and retention."
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
      
      <TechStack label="Tools We Use" items={["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "GraphQL", "AWS Amplify", "Expo", "Fastlane"]} />
      
      <ServiceCTA 
        heading="Ready to Build Your Mobile App?"
        sub="Let's build an app that your users will love and your business will benefit from."
        buttonText="Build Your Mobile App"
        buttonHref="/contact"
      />
    </main>
  );
}
