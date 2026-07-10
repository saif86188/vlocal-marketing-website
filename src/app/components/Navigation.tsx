"use client";
import { motion } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#", isDropdown: true },
    { name: "Why VLocal", href: "/#why-us" },
  ];

  const existingServices = [
    { name: "Strategy", href: "/services/strategy" },
    { name: "Activation", href: "/services/activation" },
    { name: "Digital", href: "/services/digital" },
  ];

  const seoServices = [
    { name: "Local SEO", href: "/services/seo/local-seo" },
    { name: "Technical SEO", href: "/services/seo/technical-seo" },
    { name: "E-commerce SEO", href: "/services/seo/ecommerce-seo" },
    { name: "Content SEO", href: "/services/seo/content-seo" },
    { name: "Link Building", href: "/services/seo/link-building" },
    { name: "SEO Audit", href: "/services/seo/seo-audit" },
  ];

  const itServices = [
    { name: "Web Development", href: "/services/it-services/web-development" },
    { name: "App Development", href: "/services/it-services/app-development" },
    { name: "AI / ML Development", href: "/services/it-services/ai-ml-development" },
    { name: "E-commerce Development", href: "/services/it-services/ecommerce-development" },
    { name: "UI/UX Design", href: "/services/it-services/ui-ux-design" },
    { name: "Cloud & DevOps", href: "/services/it-services/cloud-devops" },
    { name: "Cybersecurity", href: "/services/it-services/cybersecurity" },
    { name: "View All IT Services", href: "/services/it-services" },
  ];

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full max-w-5xl glass-card border border-white/60 shadow-2xl py-1 px-6 lg:px-10 pointer-events-auto transition-all duration-500 ease-in-out ${isOpen ? 'rounded-3xl !bg-white/80 backdrop-blur-3xl' : 'rounded-full'}`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center py-2 min-h-[4.5rem]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <img src="/logo3.png" alt="VLocal Group Logo" className="h-14 w-auto object-contain" />
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => {
                if (item.isDropdown) {
                  return (
                    <div key={item.name} className="relative group">
                      <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="text-gray-900 hover:text-amber-600 transition-colors duration-300 font-bold text-sm flex items-center gap-1 cursor-pointer"
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                      </motion.button>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="glass-card border border-white/60 shadow-2xl rounded-2xl bg-white/90 backdrop-blur-2xl overflow-hidden w-[800px] cursor-default">
                          <div className="p-8">
                            <div className="grid grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-200/60">
                              {existingServices.map((service) => (
                                <Link 
                                  key={service.name} 
                                  href={service.href}
                                  className="block p-4 rounded-xl bg-white hover:bg-amber-50 border border-gray-100 hover:border-amber-200 transition-all shadow-sm hover:shadow-md group/card"
                                >
                                  <div className="font-bold text-[#1B2B5E] group-hover/card:text-[#E85020] text-lg mb-1">{service.name}</div>
                                  <div className="text-xs text-gray-500 font-medium">Explore {service.name.toLowerCase()} solutions</div>
                                </Link>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-5 gap-8">
                              <div className="col-span-2">
                                <h3 className="font-bold text-[#1B2B5E] text-sm mb-4 uppercase tracking-widest border-l-2 border-[#E85020] pl-3">SEO Services</h3>
                                <div className="grid grid-cols-1 gap-2 pl-3">
                                  {seoServices.map((service) => (
                                    <Link 
                                      key={service.name} 
                                      href={service.href}
                                      className="text-sm font-bold text-gray-600 hover:text-[#E85020] transition-colors py-1"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              <div className="col-span-3">
                                <h3 className="font-bold text-[#1B2B5E] text-sm mb-4 uppercase tracking-widest border-l-2 border-[#E85020] pl-3">IT Services</h3>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 pl-3">
                                  {itServices.map((service) => (
                                    <Link 
                                      key={service.name} 
                                      href={service.href}
                                      className="text-sm font-bold text-gray-600 hover:text-[#E85020] transition-colors py-1"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <Link href="/contact" className="block bg-[#1B2B5E] p-4 text-center group/footer hover:bg-[#15224a] transition-colors">
                            <span className="text-white font-bold text-sm flex items-center justify-center gap-2">
                              Not sure what you need? Talk to us 
                              <ArrowRight size={16} className="text-[#E85020] group-hover/footer:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-gray-900 hover:text-amber-600 transition-colors duration-300 font-bold text-sm"
                  >
                    {item.name}
                  </motion.a>
                );
              })}
              <motion.a
                href="/get-started"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="vlocal-btn vlocal-btn-sm exec-node-gradient text-black shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </motion.a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[var(--text-primary)]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6 pt-4 space-y-4 border-t border-black/5 mt-2"
            >
              {navItems.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div key={item.name} className="flex flex-col space-y-2">
                      <span className="block text-gray-900 font-bold text-sm px-2 py-1 opacity-50 uppercase tracking-widest text-[10px]">
                        {item.name}
                      </span>
                      <div className="flex flex-col pl-4 border-l-2 border-gray-200 ml-2 space-y-4 pt-2">
                        <div className="space-y-2">
                          {existingServices.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-900 hover:text-amber-600 transition-colors duration-300 font-bold text-sm px-2 py-1"
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                        
                        <div className="space-y-2 pt-2 border-t border-gray-100">
                          <span className="block text-[#E85020] font-bold text-xs px-2 py-1 uppercase tracking-widest">SEO Services</span>
                          {seoServices.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-600 hover:text-amber-600 transition-colors duration-300 font-medium text-sm px-2 py-1 pl-4"
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>

                        <div className="space-y-2 pt-2 border-t border-gray-100">
                          <span className="block text-[#E85020] font-bold text-xs px-2 py-1 uppercase tracking-widest">IT Services</span>
                          {itServices.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-600 hover:text-amber-600 transition-colors duration-300 font-medium text-sm px-2 py-1 pl-4"
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-900 hover:text-amber-600 transition-colors duration-300 font-bold text-sm px-2 py-1"
                  >
                    {item.name}
                  </a>
                );
              })}
              <a
                href="/get-started"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 exec-node-gradient text-black rounded-full text-center font-bold text-sm shadow-sm"
              >
                Get Started
              </a>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  );
}
