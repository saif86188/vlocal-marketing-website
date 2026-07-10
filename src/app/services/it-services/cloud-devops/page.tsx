import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "Cloud & DevOps Services India | VLocal Group",
};

export default function CloudDevOpsPage() {
  const cards = [
    {
      icon: "cloud",
      title: "Cloud Architecture & Migration",
      description: "Design cloud-native infrastructure or migrate from on-premise to AWS, GCP, or Azure."
    },
    {
      icon: "git-branch",
      title: "CI/CD Pipeline Setup",
      description: "Automated build, test, and deployment pipelines that ship code safely and quickly."
    },
    {
      icon: "layout",
      title: "Containerisation (Docker & Kubernetes)",
      description: "Package and orchestrate applications for consistent, scalable deployments."
    },
    {
      icon: "file-text",
      title: "Infrastructure as Code (IaC)",
      description: "Terraform and CloudFormation for reproducible, version-controlled infrastructure."
    },
    {
      icon: "search",
      title: "Monitoring & Observability",
      description: "Set up logging, alerting, and dashboards with Datadog, Grafana, or CloudWatch."
    },
    {
      icon: "database",
      title: "Cloud Cost Optimisation",
      description: "Audit and right-size your cloud spend without compromising performance."
    }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="CLOUD & DEVOPS"
        title="Infrastructure That Scales With You."
        highlight="Scales With You"
        description="VLocal's cloud and DevOps team designs, builds, and manages infrastructure that's fast, reliable, secure, and ready to scale — so your team focuses on product, not servers."
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
      
      <TechStack label="Tools We Use" items={["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Datadog", "Grafana", "Nginx", "Cloudflare"]} />
      
      <ServiceCTA 
        heading="Tired of Server Headaches?"
        sub="Let's build a modern, resilient cloud infrastructure for your applications."
        buttonText="Modernise Your Infrastructure"
        buttonHref="/contact"
      />
    </main>
  );
}
