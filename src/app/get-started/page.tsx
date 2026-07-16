import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Get Started — Codevate",
  description: "Whether you are launching, scaling, or strengthening your brand — Codevate partners with you to create impact where it matters most.",
};

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-32 pb-16 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 opacity-10 noise-overlay pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

        {/* Section 1 — Page Hero */}
        <section className="flex flex-col items-center text-center space-y-6 pt-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 frosted-badge mb-2 border border-[var(--border-default)] shadow-sm">
            <span className="text-amber-600 uppercase tracking-widest text-[10px] font-bold">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
            Let's Build Your <span className="exec-text-gradient">Market Presence</span>
          </h1>
          <p className="text-lg text-gray-800 font-semibold max-w-3xl leading-relaxed mt-6">
            Whether you are launching, scaling, or strengthening your brand — Codevate partners with you to create impact where it matters most.
          </p>
        </section>

        {/* Section 2 — Two Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Left Column — Contact Info */}
          <div className="flex flex-col space-y-16">
            
            <div className="flex flex-col space-y-8">
              <h3 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">Contact Details</h3>
              <div className="flex flex-col space-y-6">
                <a href="mailto:business@codevate.com" className="group text-xl font-bold text-gray-800 hover:text-[var(--accent-hover)] transition-colors flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl exec-node-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span>business@codevate.com</span>
                </a>
                <a href="tel:+919000473322" className="group text-xl font-bold text-gray-800 hover:text-[var(--accent-hover)] transition-colors flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl exec-node-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span>+91-9000473322</span>
                </a>
                <a href="https://www.codevate.com" target="_blank" rel="noopener noreferrer" className="group text-xl font-bold text-gray-800 hover:text-[var(--accent-hover)] transition-colors flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl exec-node-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                  <span>www.codevate.com</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-8 relative">
              <div className="w-32 h-32 bg-[var(--accent)] rounded-full blur-[60px] absolute -left-10 -top-10 opacity-20 pointer-events-none" />
              <h3 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">What happens next</h3>
              <div className="flex flex-col space-y-6 stagger-children">
                <div className="flex items-start space-x-6 glass-card p-4 border border-[var(--border-default)] !bg-white/50">
                  <div className="w-10 h-10 rounded-full exec-node-gradient text-black flex items-center justify-center font-black text-lg shrink-0 shadow-md">1</div>
                  <p className="text-gray-800 font-semibold text-lg pt-1.5">We'll respond within 24 hours</p>
                </div>
                <div className="flex items-start space-x-6 glass-card p-4 border border-[var(--border-default)] !bg-white/50">
                  <div className="w-10 h-10 rounded-full exec-node-gradient text-black flex items-center justify-center font-black text-lg shrink-0 shadow-md">2</div>
                  <p className="text-gray-800 font-semibold text-lg pt-1.5">A discovery call to understand your goals</p>
                </div>
                <div className="flex items-start space-x-6 glass-card p-4 border border-[var(--border-default)] !bg-white/50">
                  <div className="w-10 h-10 rounded-full exec-node-gradient text-black flex items-center justify-center font-black text-lg shrink-0 shadow-md">3</div>
                  <p className="text-gray-800 font-semibold text-lg pt-1.5">A tailored proposal within 5 business days</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column — Contact Form */}
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl -z-10 rounded-[3rem]" />
             <ContactForm />
          </div>

        </section>
      </div>
    </main>
  );
}
