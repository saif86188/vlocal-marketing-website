import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "API Integration & Development Services India | VLocal Group",
};

export default function APIIntegrationPage() {
  const cards = [
    {
      icon: "git-branch",
      title: "Custom API Development",
      description: "Design and build REST and GraphQL APIs from scratch."
    },
    {
      icon: "link",
      title: "Third-Party API Integration",
      description: "Connect to 100+ platforms: Razorpay, Salesforce, HubSpot, WhatsApp Business, Shiprocket, Zoho."
    },
    {
      icon: "database",
      title: "Webhook & Event Systems",
      description: "Build real-time event-driven architectures that react to business triggers instantly."
    },
    {
      icon: "file-text",
      title: "API Documentation",
      description: "Developer-grade documentation with Swagger/OpenAPI for every API we build."
    },
    {
      icon: "settings",
      title: "Legacy System Integration",
      description: "Connect modern front-ends to older ERP, SAP, and back-office systems."
    },
    {
      icon: "shield",
      title: "API Security & Rate Limiting",
      description: "Authentication (OAuth 2.0, JWT), rate limiting, and API gateway setup."
    }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="API INTEGRATION"
        title="Connect Your Systems. Automate Everything."
        highlight="Automate Everything"
        description="VLocal builds and integrates APIs that connect your CRM, ERP, payment systems, marketing tools, and custom applications — eliminating manual work and data silos."
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
      
      <TechStack label="Tools We Use" items={["Node.js", "Python", "REST", "GraphQL", "Swagger", "Postman", "AWS API Gateway", "Kong", "Zapier", "Make (Integromat)"]} />
      
      <ServiceCTA 
        heading="Stop Manual Data Entry"
        sub="Connect your systems and automate your workflows today."
        buttonText="Connect Your Systems"
        buttonHref="/contact"
      />
    </main>
  );
}
