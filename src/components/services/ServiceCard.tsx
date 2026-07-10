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

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  points?: string[];
}

export function ServiceCard({ icon, title, description, points }: ServiceCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <div className="bg-white rounded-2xl p-8 border-t-4 border-[#E85020] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group border-l border-r border-b border-gray-100">
      <div className="h-14 w-14 rounded-xl bg-amber-50 text-[#E85020] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {IconComponent ? <IconComponent size={28} /> : <span className="text-2xl font-bold">{icon}</span>}
      </div>
      <h3 className="text-xl font-bold text-[#1B2B5E] mb-4 group-hover:text-[#E85020] transition-colors">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
      
      {points && points.length > 0 && (
        <ul className="space-y-3 mt-auto pt-6 border-t border-gray-100">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85020] mt-2 shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
