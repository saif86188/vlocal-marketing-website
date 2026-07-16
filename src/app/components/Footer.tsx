"use client";
import { motion } from "motion/react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const footerLinks = {
    Services: ["Advertising", "Brand Activation", "Media Production", "Digital Marketing", "Branding"],
    Company: ["About Us", "Vision & Mission", "Our Team", "Case Studies", "Blog"],
    Support: ["Contact", "FAQ", "Privacy Policy", "Terms of Service", "Sitemap"]
  };

  return (
    <footer className="dark-card !rounded-none relative overflow-hidden border-t border-[var(--border-default)]">
      <div className="absolute inset-0 opacity-10 noise-overlay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo3.png" alt="Codevate Group Logo" className="h-16 w-auto object-contain bg-white/95 p-2 rounded-xl" />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 font-medium">
                A premium integrated marketing and media agency helping brands scale through creative advertising, strategic media planning, branding, PR, and digital growth.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-amber-400 hover:bg-amber-400 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors stroke-[2.2]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
 
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[var(--accent)] hover:translate-x-1 inline-block transition-all duration-300 font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
 
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-semibold">
              © {currentYear} Codevate Group. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 font-semibold">
              <a href="#" className="hover:text-[var(--accent)] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
