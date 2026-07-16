import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "Cybersecurity Services India | Codevate Group",
};

export default function CybersecurityPage() {
  const cards = [
    {
      icon: "shield",
      title: "Penetration Testing",
      description: "Simulated attacks to find vulnerabilities in your web apps, APIs, and network before real attackers do."
    },
    {
      icon: "search",
      title: "Security Audit & Assessment",
      description: "Comprehensive review of your security posture, policies, and infrastructure."
    },
    {
      icon: "layout",
      title: "SSL & Data Encryption",
      description: "Implement and verify encryption across all data in transit and at rest."
    },
    {
      icon: "file-text",
      title: "VAPT (Vulnerability Assessment)",
      description: "Systematic identification and classification of security vulnerabilities."
    },
    {
      icon: "database",
      title: "Compliance Consulting",
      description: "GDPR, India IT Act, ISO 27001 guidance and documentation support."
    },
    {
      icon: "tool",
      title: "Security Hardening",
      description: "Harden servers, databases, APIs, and application code against common attack vectors."
    }
  ];

  const steps = [
    { number: 1, title: "Scoping", description: "Define assets, systems, and testing boundaries" },
    { number: 2, title: "Reconnaissance", description: "Passive and active information gathering" },
    { number: 3, title: "Vulnerability Scanning", description: "Automated and manual vulnerability identification" },
    { number: 4, title: "Exploitation", description: "Controlled attack simulation to validate findings" },
    { number: 5, title: "Reporting", description: "Executive summary + detailed technical findings" },
    { number: 6, title: "Remediation Support", description: "Fix guidance and post-fix verification" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="CYBERSECURITY"
        title="Protect What You've Built."
        highlight="What You've Built"
        description="Codevate's cybersecurity practice helps Indian businesses identify vulnerabilities, secure their digital infrastructure, and maintain compliance — before attackers find the gaps."
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
      
      <TechStack label="Tools We Use" items={["OWASP ZAP", "Burp Suite", "Nessus", "Metasploit", "Nmap", "Wireshark", "AWS Security Hub", "Cloudflare WAF"]} />
      
      <ServiceCTA 
        heading="Is Your Digital Infrastructure Secure?"
        sub="Find the vulnerabilities before attackers do."
        buttonText="Book a Security Audit"
        buttonHref="/contact"
      />
    </main>
  );
}
