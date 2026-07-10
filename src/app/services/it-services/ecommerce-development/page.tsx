import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "E-commerce Development Services India | VLocal Group",
};

export default function EcommerceDevelopmentPage() {
  const cards = [
    {
      icon: "shopping-bag",
      title: "Shopify Development",
      description: "Custom Shopify themes, apps, and storefronts with full Indian payment integration."
    },
    {
      icon: "shopping-cart",
      title: "WooCommerce Development",
      description: "Scalable WordPress e-commerce stores with custom plugins and checkout flows."
    },
    {
      icon: "layout",
      title: "Custom E-commerce Platform",
      description: "Fully custom-built stores for unique requirements beyond what platforms offer."
    },
    {
      icon: "globe",
      title: "Multi-Vendor Marketplace",
      description: "Build your own marketplace platform with seller onboarding, commissions, and dashboards."
    },
    {
      icon: "git-branch",
      title: "Payment Gateway Integration",
      description: "Razorpay, PayU, PhonePe, Cashfree, Stripe, and COD integration."
    },
    {
      icon: "database",
      title: "Headless Commerce",
      description: "Decouple your storefront from your commerce engine for maximum performance."
    }
  ];

  const steps = [
    { number: 1, title: "Platform Selection", description: "Choose the right platform for your catalogue, scale, and budget" },
    { number: 2, title: "Design", description: "Custom storefront design focused on conversion" },
    { number: 3, title: "Development", description: "Build product, cart, checkout, and account flows" },
    { number: 4, title: "Integrations", description: "Payment, shipping, inventory, and analytics connections" },
    { number: 5, title: "Testing", description: "Checkout flow testing, mobile testing, load testing" },
    { number: 6, title: "Launch", description: "Go-live with monitoring, 30-day hypercare support" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="E-COMMERCE DEVELOPMENT"
        title="Online Stores Built to Sell."
        highlight="Built to Sell"
        description="VLocal builds high-converting e-commerce platforms — from Shopify storefronts to fully custom multi-vendor marketplaces — engineered for the Indian consumer and payment ecosystem."
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
      
      <TechStack label="Tools We Use" items={["Shopify", "WooCommerce", "Next.js Commerce", "Medusa.js", "Razorpay", "Stripe", "PayU", "Elasticsearch", "Redis", "AWS"]} />
      
      <ServiceCTA 
        heading="Ready to Launch Your Online Store?"
        sub="Let's build a platform that scales with your business."
        buttonText="Launch Your Online Store"
        buttonHref="/contact"
      />
    </main>
  );
}
