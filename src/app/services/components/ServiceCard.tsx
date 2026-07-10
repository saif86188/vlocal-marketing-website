export function ServiceCard({ service }: { service: any }) {
  return (
    <div className="glass-card p-10 flex flex-col space-y-6 border border-[var(--border-default)] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full exec-node-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-3 tracking-tight group-hover:text-[var(--accent-hover)] transition-colors">{service.name}</h3>
        <p className="text-gray-800 font-semibold text-lg leading-relaxed">{service.desc}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[var(--border-default)] relative z-10">
        <div>
          <h4 className="font-bold text-black mb-4 text-xs uppercase tracking-widest">What We Do</h4>
          <ul className="space-y-3">
            {service.whatWeDo.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                <span className="text-gray-800 text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black mb-4 text-xs uppercase tracking-widest">Where It Helps</h4>
          <ul className="space-y-3">
            {service.whereItHelps.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                <span className="text-gray-800 text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-black mb-4 text-xs uppercase tracking-widest">Key Outcomes</h4>
          <ul className="space-y-3">
            {service.keyOutcomes.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                <span className="text-gray-800 text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
