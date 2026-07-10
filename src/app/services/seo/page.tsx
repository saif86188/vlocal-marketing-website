import React from 'react';
import { ServiceCTA } from '../../../components/services/ServiceCTA';
import { ProcessSteps } from '../../../components/services/ProcessSteps';
import { TechStack } from '../../../components/services/TechStack';
import { ServiceHero } from '../../../components/services/ServiceHero';
import Link from 'next/link';
import { MapPin, Settings, ShoppingCart, FileText, Link as LinkIcon, Search } from 'lucide-react';

export const metadata = {
  title: "SEO Services India | VLocal Group — Rank Higher, Grow Faster",
  description: "VLocal offers end-to-end SEO services — local SEO, technical SEO, content strategy, link building and ecommerce SEO — for brands across India."
};

export default function SEOServicesPage() {
  const seoServices = [
    {
      title: "Local SEO",
      href: "/services/seo/local-seo",
      icon: <MapPin size={28} />,
      description: "Dominate local search results and Google Maps in your city and region.",
      points: [
        "Google Business Profile optimisation",
        "Local citation building",
        "Geo-targeted keyword strategy"
      ]
    },
    {
      title: "Technical SEO",
      href: "/services/seo/technical-seo",
      icon: <Settings size={28} />,
      description: "Fix what search engines can't crawl, index, or understand about your site.",
      points: [
        "Site speed & Core Web Vitals",
        "Crawl error resolution",
        "Schema markup implementation"
      ]
    },
    {
      title: "E-commerce SEO",
      href: "/services/seo/ecommerce-seo",
      icon: <ShoppingCart size={28} />,
      description: "Drive organic traffic to product pages and increase sales without ad spend.",
      points: [
        "Product & category page optimisation",
        "Review schema",
        "Faceted navigation fixes"
      ]
    },
    {
      title: "Content SEO & Strategy",
      href: "/services/seo/content-seo",
      icon: <FileText size={28} />,
      description: "Build topical authority with content that ranks and converts.",
      points: [
        "Keyword clustering & content mapping",
        "Blog & pillar page strategy",
        "Multilingual content for Indian markets"
      ]
    },
    {
      title: "Link Building",
      href: "/services/seo/link-building",
      icon: <LinkIcon size={28} />,
      description: "Earn high-authority backlinks that move your domain rating and rankings.",
      points: [
        "Editorial outreach",
        "Guest posting on Indian publications",
        "Digital PR-led link acquisition"
      ]
    },
    {
      title: "SEO Audit",
      href: "/services/seo/seo-audit",
      icon: <Search size={28} />,
      description: "A full diagnostic of what's holding your website back in search.",
      points: [
        "100+ point technical checklist",
        "Competitor gap analysis",
        "Actionable priority roadmap"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-transparent">
      <ServiceHero 
        label="SEO SERVICES"
        title="Rank Higher. Get Found. Grow Faster."
        highlight="Grow Faster"
        description="VLocal's SEO team combines deep technical expertise with content strategy and local market intelligence to help Indian brands dominate search results — from metros to Tier 2 cities."
      />

      {/* Why SEO Matters */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl md:text-5xl font-extrabold text-[#E85020] mb-4">68%</div>
              <p className="text-gray-600 font-medium">of online experiences begin with a search engine</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl md:text-5xl font-extrabold text-[#E85020] mb-4">75%</div>
              <p className="text-gray-600 font-medium">of users never scroll past the first page</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl md:text-5xl font-extrabold text-[#E85020] mb-4">10x</div>
              <p className="text-gray-600 font-medium">more clicks go to organic results vs paid ads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B5E] text-center mb-16">Our SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
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
        { number: 1, title: "Discovery & Audit", description: "We audit your site, competitors, and keyword landscape" },
        { number: 2, title: "Strategy", description: "We build a custom SEO roadmap with priority actions" },
        { number: 3, title: "On-Page Optimisation", description: "We fix and optimise all technical and content elements" },
        { number: 4, title: "Off-Page & Links", description: "We build authority through outreach and digital PR" },
        { number: 5, title: "Track & Report", description: "Monthly reporting on rankings, traffic, and conversions" }
      ]} />

      <TechStack 
        label="Industries We Serve"
        items={["Finance & Banking", "Healthcare & Pharma", "Real Estate", "FMCG", "D2C & E-commerce", "Education", "Hospitality", "Legal & Professional Services"]}
      />

      <ServiceCTA 
        heading="Ready to Rank #1 in Your Market?"
        sub="Get a free SEO audit and custom growth roadmap for your brand."
        buttonText="Get Free SEO Audit"
        buttonHref="/contact"
      />
    </main>
  );
}
