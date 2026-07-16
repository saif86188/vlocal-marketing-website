import { ServiceCard } from "../components/ServiceCard";
import { LottiePlayer } from "../../../../components/services/LottiePlayer";

export const metadata = {
  title: "Activation Services — Codevate",
};

export default function ActivationPage() {
  const activationServices = [
    {
      name: "On-Ground Brand Activations (BTL)",
      desc: "Creating direct brand experiences that engage consumers face-to-face.",
      whatWeDo: ["Design and execute high-impact BTL activations", "Deploy trained promoters and activation teams", "Manage logistics, permissions and on-ground coordination"],
      whereItHelps: ["Brand awareness drives", "Product trials and sampling", "Market entry or relaunch campaigns"],
      keyOutcomes: ["Direct consumer engagement", "High recall and interaction", "Immediate market feedback"],
    },
    {
      name: "Retail & Trade Marketing",
      desc: "Strengthening brand visibility and influence at the point of sale.",
      whatWeDo: ["Retail signage and in-store branding", "Dealer, distributor and partner engagement programs", "Trade schemes, visibility drives and merchandising"],
      whereItHelps: ["FMCG, finance, consumer durables", "Channel-led growth models", "Competitive retail environments"],
      keyOutcomes: ["Improved shelf visibility", "Better trade relationships", "Increased walk-ins and conversions"],
    },
    {
      name: "Events & Experiential Marketing",
      desc: "Designing brand-led experiences that build credibility and connection.",
      whatWeDo: ["Brand launches, conferences, exhibitions and partner meets", "End-to-end planning, production and execution", "Stage design, branding and attendee experience management"],
      whereItHelps: ["Corporate branding", "Stakeholder engagement", "Thought leadership positioning"],
      keyOutcomes: ["Strong brand perception", "Memorable experiences", "Professional brand representation"],
    },
    {
      name: "OOH & Transit Media",
      desc: "Building high-impact visibility across urban and transit environments.",
      whatWeDo: ["Planning and execution of OOH and transit media", "Access to owned and partner inventory", "City-wide and multi-city outdoor campaigns"],
      whereItHelps: ["Mass awareness campaigns", "Brand reinforcement", "Sustained visibility in high-traffic zones"],
      keyOutcomes: ["High reach and frequency", "Strong brand presence", "Market dominance perception"],
    },
    {
      name: "Rural & Hyperlocal Activations",
      desc: "Reaching consumers beyond metros with contextual relevance.",
      whatWeDo: ["Rural and Tier 2–3 activations", "Van campaigns, wall paintings and local engagement formats", "Community-based and culturally aligned executions"],
      whereItHelps: ["Financial services, healthcare, FMCG & more", "Market penetration programs", "Trust-building in new regions"],
      keyOutcomes: ["Deeper market penetration", "Local trust and familiarity", "Cost-effective reach"],
    },
    {
      name: "Movie Marketing & Promotions",
      desc: "Driving buzz, visibility, and audience engagement for film releases.",
      whatWeDo: ["Design integrated movie promotion campaigns", "Execute on-ground activations, events and premieres", "Plan OOH, mall activations and city-wide visibility"],
      whereItHelps: ["Pre-release buzz creation", "Regional and pan-India film promotions", "Targeted city-wise visibility drives"],
      keyOutcomes: ["High public recall", "Strong opening visibility", "Multitouchpoint audience engagement"],
    },
    {
      name: "Corporate & Bulk Gifting",
      desc: "Using thoughtful brand touchpoints to strengthen business relationships and recall.",
      whatWeDo: ["Curate branded gifting solutions for corporate clients", "Manage bulk procurement and delivery", "Design gift experiences aligned to brand identity"],
      whereItHelps: ["Corporate gifting programs", "Client and partner retention", "Brand recall during festive seasons"],
      keyOutcomes: ["Strengthened business relationships", "Enhanced brand recall", "Personalised brand touchpoints"],
    }
  ];

  return (
    <div className="flex flex-col space-y-10 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-4 relative">
        <div className="lg:col-span-8 flex flex-col space-y-4">
          <div className="w-16 h-16 bg-[var(--accent)] rounded-full blur-[40px] absolute -left-8 -top-8 opacity-30 pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">Activation</h2>
          <p className="text-[var(--accent-hover)] text-xl font-black uppercase tracking-wider">Where strategy comes alive in real markets.</p>
          <p className="text-gray-800 font-semibold text-lg leading-relaxed">We translate plans into presence across streets, stores, events and communities.</p>
        </div>
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="w-full max-w-[240px] aspect-square rounded-2xl glass-card p-4 border border-white/60 shadow-xl flex items-center justify-center bg-white/10 backdrop-blur-md">
            <LottiePlayer src="/animations/activation.json" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 stagger-children">
        {activationServices.map((service, i) => <ServiceCard key={i} service={service} />)}
      </div>
    </div>
  );
}
