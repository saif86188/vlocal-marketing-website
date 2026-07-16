import Link from "next/link";
import { ServicesLayoutWrapper } from "./components/ServicesLayoutWrapper";

export const metadata = {
  title: "Services — Codevate",
  description: "An integrated growth framework — designed to take your brand from strategy to real-market impact.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  // Define hero and cta elements to pass to the client component wrapper
  const heroElement = (
    <section className="flex flex-col items-center text-center space-y-6 pt-16 animate-fade-in-up pb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 frosted-badge mb-2 border border-[var(--border-default)] shadow-sm">
        <span className="text-amber-600 uppercase tracking-widest text-[10px] font-bold">OUR SERVICES</span>
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
        Strategy. Activation. <span className="exec-text-gradient">Digital.</span>
      </h1>
      <p className="text-lg text-gray-800 font-semibold max-w-3xl leading-relaxed mt-6">
        An integrated growth framework — designed to take your brand from strategy to real-market impact.
      </p>
    </section>
  );

  const ctaElement = (
    <section className="animate-fade-in-up pt-24 pb-8">
      <div className="dark-card p-16 md:p-20 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight relative z-10">
          Not sure which service you need?
        </h2>
        <p className="text-gray-300 text-xl max-w-xl font-medium relative z-10">
          Let's figure it out together.
        </p>
        <Link href="/get-started" className="codevate-btn exec-node-gradient text-black shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 scale-110 mt-4">
          Talk to Us
        </Link>
      </div>
    </section>
  );

  return (
    <main className="w-full flex flex-col min-h-screen pt-32 pb-16 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 opacity-10 noise-overlay pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <ServicesLayoutWrapper hero={heroElement} cta={ctaElement}>
          <div className="min-h-[400px]">
            {children}
          </div>
        </ServicesLayoutWrapper>

      </div>
    </main>
  );
}
