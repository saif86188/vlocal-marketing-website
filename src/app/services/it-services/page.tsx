import React from 'react';
import { ServiceCTA } from '../../../components/services/ServiceCTA';
import { ProcessSteps } from '../../../components/services/ProcessSteps';
import { ServiceHero } from '../../../components/services/ServiceHero';
import Link from 'next/link';
import { Globe, Smartphone, Cpu, ShoppingBag, Layout, Database, GitBranch, Cloud, Wrench, Shield } from 'lucide-react';

export const metadata = {
  title: "IT Services India | VLocal Group — Web, App, AI/ML & Digital Solutions",
  description: "VLocal's IT division delivers end-to-end digital solutions — web development, mobile apps, AI/ML, UI/UX, cloud, and cybersecurity — built for Indian businesses."
};

export default function ITServicesPage() {
  const itServices = [
    {
      title: "Web Development",
      href: "/services/it-services/web-development",
      icon: <Globe size={28} />,
      description: "High-performance websites and web applications built for scale.",
      points: [
        "Next.js / React / Vue",
        "Custom CMS integration",
        "SEO-ready architecture"
      ]
    },
    {
      title: "Mobile App Development",
      href: "/services/it-services/app-development",
      icon: <Smartphone size={28} />,
      description: "Native and cross-platform mobile apps for iOS and Android.",
      points: [
        "React Native / Flutter",
        "Offline-first architecture",
        "App Store optimisation"
      ]
    },
    {
      title: "AI / ML Development",
      href: "/services/it-services/ai-ml-development",
      icon: <Cpu size={28} />,
      description: "Intelligent systems that automate, predict, and personalise at scale.",
      points: [
        "Custom ML models",
        "NLP & chatbots",
        "Computer vision solutions"
      ]
    },
    {
      title: "E-commerce Development",
      href: "/services/it-services/ecommerce-development",
      icon: <ShoppingBag size={28} />,
      description: "Scalable online stores built to convert and grow.",
      points: [
        "Shopify / WooCommerce / Custom",
        "Payment gateway integration",
        "Multi-vendor marketplaces"
      ]
    },
    {
      title: "UI/UX Design",
      href: "/services/it-services/ui-ux-design",
      icon: <Layout size={28} />,
      description: "Design systems and user experiences that convert visitors into customers.",
      points: [
        "User research & wireframing",
        "Figma design systems",
        "Usability testing"
      ]
    },
    {
      title: "CMS Development",
      href: "/services/it-services/cms-development",
      icon: <Database size={28} />,
      description: "Content management systems your team can actually use without dev support.",
      points: [
        "Sanity / Contentful / WordPress",
        "Headless CMS architecture",
        "Custom admin panels"
      ]
    },
    {
      title: "API Integration & Development",
      href: "/services/it-services/api-integration",
      icon: <GitBranch size={28} />,
      description: "Connect your systems, automate workflows, and unlock data across platforms.",
      points: [
        "REST & GraphQL APIs",
        "Third-party integrations",
        "Webhook & automation systems"
      ]
    },
    {
      title: "Cloud & DevOps",
      href: "/services/it-services/cloud-devops",
      icon: <Cloud size={28} />,
      description: "Infrastructure that's fast, secure, and scales with your business.",
      points: [
        "AWS / GCP / Azure",
        "CI/CD pipelines",
        "Docker & Kubernetes"
      ]
    },
    {
      title: "Maintenance & Support",
      href: "/services/it-services/maintenance-support",
      icon: <Wrench size={28} />,
      description: "Ongoing technical support to keep your digital products running flawlessly.",
      points: [
        "Bug fixes & updates",
        "Performance monitoring",
        "SLA-backed response times"
      ]
    },
    {
      title: "Cybersecurity",
      href: "/services/it-services/cybersecurity",
      icon: <Shield size={28} />,
      description: "Protect your digital assets, data, and customer trust.",
      points: [
        "Security audits & penetration testing",
        "SSL & data encryption",
        "Compliance (GDPR, IT Act)"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-transparent">
      <ServiceHero 
        label="IT SERVICES"
        title="Technology That Builds. Digital That Grows."
        highlight="Digital That Grows"
        description="VLocal's technology arm delivers production-grade digital products — from websites and mobile apps to AI/ML systems and cloud infrastructure — designed for Indian businesses that mean business."
      />

      {/* Why Choose VLocal for IT */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl md:text-5xl font-extrabold text-[#E85020] mb-4">500Cr+</div>
              <p className="text-gray-600 font-medium">digital revenue influenced by our client products</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl md:text-5xl font-extrabold text-[#E85020] mb-4">50+</div>
              <p className="text-gray-600 font-medium">digital products shipped across industries</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl md:text-5xl font-extrabold text-[#E85020] mb-4">Full-Stack</div>
              <p className="text-gray-600 font-medium">from UI/UX design to cloud deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our IT Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B5E] text-center mb-16">Our IT Services</h2>
          {/* Custom grid based on instructions: 3+3+2+2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {itServices.slice(0, 6).map((service, index) => (
              <Link key={index} href={service.href} className="block group h-full">
                <div className="bg-white rounded-2xl p-8 border-t-4 border-[#E85020] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border-l border-r border-b border-gray-100">
                  <div className="h-14 w-14 rounded-xl bg-amber-50 text-[#E85020] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2B5E] mb-4 group-hover:text-[#E85020] transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mt-auto pt-6 border-t border-gray-100">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85020] mt-2 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.slice(6, 10).map((service, index) => (
              <Link key={index} href={service.href} className="block group h-full">
                <div className="bg-white rounded-2xl p-8 border-t-4 border-[#E85020] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border-l border-r border-b border-gray-100">
                  <div className="h-14 w-14 rounded-xl bg-amber-50 text-[#E85020] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2B5E] mb-4 group-hover:text-[#E85020] transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mt-auto pt-6 border-t border-gray-100">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85020] mt-2 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={[
        { number: 1, title: "Discovery", description: "Understand requirements, users, and technical constraints" },
        { number: 2, title: "Planning", description: "Architecture, tech stack, timeline, and milestones" },
        { number: 3, title: "Design", description: "Wireframes, prototypes, and final UI/UX designs" },
        { number: 4, title: "Development", description: "Agile sprints with weekly demos and check-ins" },
        { number: 5, title: "Testing", description: "QA, performance testing, security review" },
        { number: 6, title: "Launch", description: "Deployment, go-live support, and handover" },
        { number: 7, title: "Support", description: "Ongoing maintenance, updates, and scaling" }
      ]} />

      <ServiceCTA 
        heading="Have a Digital Product Idea?"
        sub="From concept to launch — VLocal's IT team builds it."
        buttonText="Start Your Project"
        buttonHref="/contact"
      />
    </main>
  );
}
