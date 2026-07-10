"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ServicesMenu() {
  const pathname = usePathname();

  const links = [
    { name: "Strategy", href: "/services/strategy" },
    { name: "Activation", href: "/services/activation" },
    { name: "Digital", href: "/services/digital" },
  ];

  return (
    <section className="sticky top-[75px] z-30 bg-white/60 backdrop-blur-xl border-y border-[var(--border-default)] py-4 shadow-sm -mx-6 px-6 lg:-mx-8 lg:px-8 mb-16">
      <div className="max-w-7xl mx-auto flex justify-center space-x-6 md:space-x-12">
        {links.map((link) => {
          // simple check for active path
          const isActive = pathname?.startsWith(link.href);
          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`font-bold transition-all px-4 py-2 uppercase tracking-widest text-sm relative ${isActive ? 'text-[var(--accent-hover)]' : 'text-gray-900 hover:text-[var(--accent-hover)]'}`}
            >
              {link.name}
              {isActive && (
                <div className="absolute -bottom-4 left-0 w-full h-[3px] exec-node-gradient rounded-t-md shadow-[0_0_10px_rgba(251,193,58,0.5)]" />
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
