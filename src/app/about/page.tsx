export const metadata = {
  title: "About Codevate",
  description: "Codevate emerged during the COVID-19 pandemic when India turned inward — reaffirming the need to amplify local voices and build self-reliant brands.",
};

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-32 pb-16 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 opacity-10 noise-overlay pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
        
        {/* Section 1 — Page Hero */}
        <section className="flex flex-col items-center text-center space-y-6 pt-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 frosted-badge mb-2 border border-[var(--border-default)] shadow-sm">
            <span className="text-amber-600 uppercase tracking-widest text-[10px] font-bold">OUR STORY</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
            Born in India. <br className="hidden md:block" />Built for <span className="exec-text-gradient">India.</span>
          </h1>
          <p className="text-lg text-gray-800 font-semibold max-w-3xl leading-relaxed mt-6">
            Codevate emerged during the COVID-19 pandemic when India turned inward — reaffirming the need to amplify local voices and build self-reliant brands.
          </p>
        </section>

        {/* Section 2 — Our Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="relative z-10 glass-card p-10 md:p-14 border border-[var(--border-default)] shadow-2xl rounded-3xl !bg-white/40">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--text-primary)] tracking-tight">
                "We bring <span className="text-[var(--accent-hover)]">60+ years</span> of combined leadership experience to every brand we partner with."
              </h3>
            </div>
            <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] bg-[var(--accent)] rounded-full blur-[80px] opacity-20 pointer-events-none" />
          </div>
          <div>
            <p className="text-lg text-gray-800 font-semibold leading-relaxed">
              Codevate Group was born during a defining global shift. As the world slowed during the COVID-19 pandemic, India turned inward — reaffirming the need to amplify local voices and build self-reliant brands. With leadership experience spanning HT Media, Times Group, Inox Cinema, BIG FM, BBC, India Ahead News, Reliance, and INOX — our founders bring strategy, purpose and commitment to what we do.
            </p>
          </div>
        </section>

        {/* Section 3 — Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
          <div className="glass-card p-10 flex flex-col space-y-4 border border-[var(--border-default)] shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 left-0 w-full h-1 exec-node-gradient" />
            <span className="inline-flex items-center gap-2 px-3 py-1.5 frosted-badge self-start border border-[var(--border-default)] shadow-sm">
              <span className="text-amber-600 uppercase tracking-widest text-[10px] font-bold">VISION</span>
            </span>
            <p className="text-xl font-bold text-[var(--text-primary)] leading-relaxed mt-4">
              To become India's most trusted integrated market activation and brand growth partner for consumer-facing businesses.
            </p>
          </div>
          <div className="glass-card p-10 flex flex-col space-y-4 border border-[var(--border-default)] shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 left-0 w-full h-1 exec-node-gradient" />
            <span className="inline-flex items-center gap-2 px-3 py-1.5 frosted-badge self-start border border-[var(--border-default)] shadow-sm">
              <span className="text-amber-600 uppercase tracking-widest text-[10px] font-bold">MISSION</span>
            </span>
            <p className="text-xl font-bold text-[var(--text-primary)] leading-relaxed mt-4">
              To bridge strategy, physical presence and cultural relevance — helping brands win in real markets across India.
            </p>
          </div>
        </section>

        {/* Section 4 — Past Brand Associations */}
        <section className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 frosted-badge border border-[var(--border-default)] shadow-sm">
            <span className="text-amber-600 uppercase tracking-widest text-[10px] font-bold">OUR ROOTS</span>
          </div>
          <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            Built by People Who've Worked With the <span className="exec-text-gradient">Best</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl stagger-children">
            {["HT Media", "Times Group", "Inox Cinema", "BIG FM", "BBC", "India Ahead News", "Reliance", "INOX"].map((brand) => (
              <div key={brand} className="px-6 py-3 glass-card !bg-white/80 border border-[var(--border-default)] rounded-full text-gray-900 font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {brand}
              </div>
            ))}
          </div>
          <p className="text-gray-800 font-semibold text-lg max-w-2xl mt-4">
            Our leadership team brings direct experience from India's most respected media and marketing organisations.
          </p>
        </section>

        {/* Section 5 — Leadership Team (Placeholder) */}
        <section className="flex flex-col space-y-12 animate-fade-in-up">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 frosted-badge border border-[var(--border-default)] shadow-sm">
              <span className="text-amber-600 uppercase tracking-widest text-[10px] font-bold">THE TEAM</span>
            </div>
            <h2 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Decades of Experience. One Purpose.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {[
              { role: "Co-Founder & CEO", exp: "HT Media" },
              { role: "Co-Founder & COO", exp: "BIG FM" },
              { role: "Head of Strategy", exp: "Times Group" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 flex flex-col items-center text-center space-y-6 border border-[var(--border-default)] hover:-translate-y-2 transition-transform duration-500 group">
                <div className="w-28 h-28 rounded-full exec-node-gradient shadow-xl glow-accent p-1">
                  <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-md" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-[var(--text-primary)]">Founder Name</h4>
                  <p className="text-[var(--accent-hover)] font-black uppercase tracking-wider text-sm">{item.role}</p>
                </div>
                <p className="text-gray-800 font-semibold text-sm">
                  Former {item.exp}. 20+ years of experience in media and brand marketing.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — CTA Banner */}
        <section className="animate-fade-in-up pb-8">
          <div className="dark-card p-16 md:p-20 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight relative z-10">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-300 text-xl max-w-xl font-medium relative z-10">
              Let's build something that works in real markets.
            </p>
            <a href="/get-started" className="codevate-btn exec-node-gradient text-black shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 scale-110 mt-4">
              Start a Conversation
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
