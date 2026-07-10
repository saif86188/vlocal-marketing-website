import { ServiceCard } from "../components/ServiceCard";
import { LottiePlayer } from "../../../../components/services/LottiePlayer";

export const metadata = {
  title: "Strategy Services — VLocal",
};

export default function StrategyPage() {
  const strategyServices = [
    {
      name: "Brand & Market Strategy",
      desc: "Defining what your brand stands for and where it should compete.",
      whatWeDo: ["Diagnose brand perception, category dynamics and consumer behaviour", "Define brand positioning, value proposition and messaging hierarchy", "Align brand identity with business and growth objectives"],
      whereItHelps: ["New brand creation", "Brand refresh or repositioning", "Category entry or differentiation"],
      keyOutcomes: ["Clear brand positioning", "Differentiated market identity", "Strategic growth direction"],
    },
    {
      name: "Go-To-Market (GTM) & Launch Strategy",
      desc: "Planning how a brand or product enters the market effectively and efficiently.",
      whatWeDo: ["Identify priority markets, audiences and launch phases", "Design launch roadmaps across media, activation and digital", "Define messaging, timing and investment mix"],
      whereItHelps: ["Product or service launches", "Regional or city-wise expansion", "Seasonal or campaign-based launches"],
      keyOutcomes: ["Faster market traction", "Optimised launch spend", "Strong first impressions"],
    },
    {
      name: "Media & Channel Strategy",
      desc: "Choosing the right channels to reach the right audience at the right time.",
      whatWeDo: ["Evaluate offline, digital and hybrid media options", "Define channel roles (awareness, engagement, conversion)", "Build media mixes aligned to objectives and budgets"],
      whereItHelps: ["Brands unsure of media allocation", "High-spend campaigns needing efficiency", "Multi-market campaigns"],
      keyOutcomes: ["Better ROI on media spend", "Reduced channel fragmentation", "Clear role of each medium"],
    },
    {
      name: "Local Market Expansion Strategy",
      desc: "Scaling brands across cities, regions and local markets.",
      whatWeDo: ["Identify high-potential local and regional markets", "Customise messaging and activation formats per market", "Plan phased expansion across Tier 1, 2 and 3 locations"],
      whereItHelps: ["National brands entering regional markets", "Regional brands going multi-city", "Rural and semi-urban penetration"],
      keyOutcomes: ["Faster local acceptance", "Cultural relevance", "Market-level consistency"],
    },
    {
      name: "Campaign & Activation Strategy",
      desc: "Designing campaigns that integrate idea, channel and execution.",
      whatWeDo: ["Translate business goals into campaign concepts", "Define activation formats, content themes and engagement mechanics", "Integrate on-ground, media and digital touchpoints"],
      whereItHelps: ["Large-scale activations", "Festive or high-impact campaigns", "Multi-channel brand pushes"],
      keyOutcomes: ["Cohesive brand experience", "Higher engagement and recall", "Execution alignment across partners"],
    }
  ];

  return (
    <div className="flex flex-col space-y-10 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-4 relative">
        <div className="lg:col-span-8 flex flex-col space-y-4">
          <div className="w-16 h-16 bg-[var(--accent)] rounded-full blur-[40px] absolute -left-8 -top-8 opacity-30 pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">Strategy</h2>
          <p className="text-[var(--accent-hover)] text-xl font-black uppercase tracking-wider">Clarity before Visibility. Direction before deployment.</p>
          <p className="text-gray-800 font-semibold text-lg leading-relaxed">We help brands define where to play, how to win and how to scale before investing in execution.</p>
        </div>
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="w-full max-w-[240px] aspect-square rounded-2xl glass-card p-4 border border-white/60 shadow-xl flex items-center justify-center bg-white/10 backdrop-blur-md">
            <LottiePlayer src="/animations/strategy.json" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 stagger-children">
        {strategyServices.map((service, i) => <ServiceCard key={i} service={service} />)}
      </div>
    </div>
  );
}
