import React from 'react';
import {
  MapPin,
  Settings,
  ShoppingCart,
  FileText,
  Link as LinkIcon,
  Search,
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  Layout,
  Database,
  GitBranch,
  Cloud,
  Wrench,
  Shield,
  Star,
  Video,
  Newspaper,
  Share2,
  TrendingUp,
  Rocket,
  Radio,
  Target,
  Users,
  Store,
  PartyPopper,
  MonitorPlay,
  Tractor,
  Film,
  Gift,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'map-pin': MapPin,
  'settings': Settings,
  'shopping-cart': ShoppingCart,
  'file-text': FileText,
  'link': LinkIcon,
  'search': Search,
  'globe': Globe,
  'smartphone': Smartphone,
  'cpu': Cpu,
  'shopping-bag': ShoppingBag,
  'layout': Layout,
  'database': Database,
  'git-branch': GitBranch,
  'cloud': Cloud,
  'tool': Wrench,
  'shield': Shield,
};

export interface ServiceCardProps {
  icon?: string;
  title: string;
  description: string;
  points?: string[];
}

export function ServiceCard({ icon, title, description, points }: ServiceCardProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div className="glass-card p-8 flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full">
      {/* Animated side-border on hover */}
      <div className="absolute top-0 left-0 w-1 h-full exec-node-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {icon && (
        <div className="h-14 w-14 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#E85020] group-hover:text-white transition-all duration-300 shadow-sm border border-amber-500/10">
          {IconComponent ? <IconComponent size={28} /> : <span className="text-2xl font-bold">{icon}</span>}
        </div>
      )}
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[#E85020] transition-colors">{title}</h3>
      <p className="text-gray-700 mb-6 flex-grow leading-relaxed font-semibold text-sm">{description}</p>
      
      {points && points.length > 0 && (
        <ul className="space-y-3 mt-auto pt-6 border-t border-[var(--border-default)]">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-800 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
