import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "Website & App Maintenance Services India | VLocal Group",
};

export default function MaintenanceSupportPage() {
  const cards = [
    {
      icon: "tool",
      title: "Bug Fixes & Issue Resolution",
      description: "Fast, reliable resolution of technical issues with clear SLA commitments."
    },
    {
      icon: "search",
      title: "Performance Monitoring",
      description: "24/7 uptime monitoring with alerts and automated incident response."
    },
    {
      icon: "shield",
      title: "Security Updates",
      description: "Regular dependency updates, patch management, and vulnerability scanning."
    },
    {
      icon: "layout",
      title: "Feature Enhancements",
      description: "Small feature additions and UX improvements on a rolling basis."
    },
    {
      icon: "file-text",
      title: "Content Updates",
      description: "Regular content, image, and copy updates managed by our team."
    },
    {
      icon: "database",
      title: "Monthly Reporting",
      description: "Monthly performance, uptime, security, and work summary reports."
    }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="MAINTENANCE & SUPPORT"
        title="Your Digital Products. Always Running. Always Improving."
        highlight="Always Improving"
        description="VLocal's maintenance and support plans keep your websites, apps, and digital systems performing at their best — with proactive monitoring, fast response times, and continuous improvements."
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

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B5E] text-center mb-16">Support Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#1B2B5E] mb-2">Starter</h3>
              <p className="text-gray-500 mb-8">Up to 5 hours/month</p>
              <ul className="space-y-4 mb-8">
                {["Bug fixes", "Security updates", "Monthly report"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#E85020] shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Growth Plan */}
            <div className="bg-[#1B2B5E] text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden scale-105 border-t-4 border-[#E85020]">
              <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full bg-white/5 blur-[50px]"></div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Growth</h3>
              <p className="text-blue-200 mb-8 relative z-10">Up to 15 hours/month</p>
              <ul className="space-y-4 mb-8 relative z-10">
                {["All Starter features", "Feature enhancements", "Priority response"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#E85020] shrink-0 w-5 h-5" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#1B2B5E] mb-2">Enterprise</h3>
              <p className="text-gray-500 mb-8">Dedicated team</p>
              <ul className="space-y-4 mb-8">
                {["Custom SLA", "Dedicated developer", "Weekly calls"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#E85020] shrink-0 w-5 h-5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <ServiceCTA 
        heading="Need Reliable Tech Support?"
        sub="Keep your digital products running flawlessly with our dedicated maintenance plans."
        buttonText="Get a Maintenance Quote"
        buttonHref="/contact"
      />
    </main>
  );
}
