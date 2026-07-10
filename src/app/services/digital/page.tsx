import { ServiceCard } from "../components/ServiceCard";
import { LottiePlayer } from "../../../../components/services/LottiePlayer";

export const metadata = {
  title: "Digital Services — VLocal",
};

export default function DigitalPage() {
  const digitalServices = [
    {
      name: "Content & Creative Production",
      desc: "Creating content that communicates clearly and consistently across platforms.",
      whatWeDo: ["Brand films, short-format videos and testimonials", "Multilingual and region-specific adaptations", "Campaign creatives for digital and on-ground use"],
      whereItHelps: ["Campaign amplification", "Brand storytelling", "Product and service communication"],
      keyOutcomes: ["Consistent brand voice", "Higher engagement", "Reusable content assets"],
    },
    {
      name: "Influencer & Creator Marketing",
      desc: "Leveraging trusted voices to drive credibility and reach.",
      whatWeDo: ["Identify and onboard relevant influencers and creators", "Design influencer-led campaigns aligned to brand goals", "Manage content, compliance and performance tracking"],
      whereItHelps: ["Awareness and consideration campaigns", "Regional and hyperlocal reach", "Category trust-building"],
      keyOutcomes: ["Authentic brand advocacy", "Targeted reach", "Improved credibility"],
    },
    {
      name: "Digital PR & Reputation Management",
      desc: "Shaping brand narratives across digital media and professional platforms.",
      whatWeDo: ["Digital PR strategy and execution", "Online press coverage and story placements", "LinkedIn-focused brand and leadership visibility"],
      whereItHelps: ["Brand credibility", "Leadership positioning", "Crisis and reputation management"],
      keyOutcomes: ["Strong narrative control", "Improved brand trust", "Consistent media presence"],
    },
    {
      name: "Social & Digital Presence Management",
      desc: "Building digital presence and ongoing engagement with relevant audiences.",
      whatWeDo: ["Social media strategy and content calendars", "Digital platform creation and optimisation", "Campaign-led social amplification"],
      whereItHelps: ["Brand engagement", "Audience retention", "Campaign continuity"],
      keyOutcomes: ["Improved digital marketing KPIs", "Better brand engagement", "Audience retention"],
    },
    {
      name: "Integrated Campaign Amplification",
      desc: "Connecting on-ground activation with digital momentum.",
      whatWeDo: ["Extend physical campaigns into digital touchpoints", "Design cross-channel amplification plans", "Track and optimise campaign performance"],
      whereItHelps: ["Large-scale brand campaigns", "Multi-market activations", "ROI-focused initiatives"],
      keyOutcomes: ["Unified brand experience", "Higher campaign ROI", "Measurable impact"],
    }
  ];

  return (
    <div className="flex flex-col space-y-10 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-4 relative">
        <div className="lg:col-span-8 flex flex-col space-y-4">
          <div className="w-16 h-16 bg-[var(--accent)] rounded-full blur-[40px] absolute -left-8 -top-8 opacity-30 pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">Digital</h2>
          <p className="text-[var(--accent-hover)] text-xl font-black uppercase tracking-wider">Amplifying presence. Sustaining influence. Measuring impact.</p>
          <p className="text-gray-800 font-semibold text-lg leading-relaxed">We extend on-ground momentum into digital ecosystems that build trust, reach and continuity.</p>
        </div>
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="w-full max-w-[240px] aspect-square rounded-2xl glass-card p-4 border border-white/60 shadow-xl flex items-center justify-center bg-white/10 backdrop-blur-md">
            <LottiePlayer src="/animations/digital.json" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 stagger-children">
        {digitalServices.map((service, i) => <ServiceCard key={i} service={service} />)}
      </div>
    </div>
  );
}
