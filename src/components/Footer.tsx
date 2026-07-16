import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-[var(--border-subtle)] mt-auto">
      <div className="container-responsive grid-responsive gap-12 mb-16">
        
        {/* Col 1 - Brand */}
        <div className="flex flex-col space-y-4">
          <span className="font-display font-bold text-4xl tracking-tight text-white">
            CODEVATE
          </span>
          <span className="text-[var(--accent)] font-medium text-xl">
            Your Integrated Growth Partner
          </span>
          <p className="text-gray-400 text-base max-w-sm">
            Integrated marketing, media, and activation solutions across India.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Col 2 - Quick Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-display font-semibold text-xl text-white">Quick Links</h4>
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="text-gray-400 text-lg hover:text-[var(--accent)] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 text-lg hover:text-[var(--accent)] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-400 text-lg hover:text-[var(--accent)] transition-colors">
              Services
            </Link>
            <Link href="/get-started" className="text-gray-400 text-lg hover:text-[var(--accent)] transition-colors">
              Get Started
            </Link>
          </nav>
        </div>

        {/* Col 3 - Contact */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-display font-semibold text-xl text-white">Get In Touch</h4>
          <div className="flex flex-col space-y-3">
            <a 
              href="mailto:business@codevate.com" 
              className="text-gray-400 text-lg hover:text-[var(--accent)] transition-colors"
            >
              business@codevate.com
            </a>
            <a 
              href="tel:+919000473322" 
              className="text-gray-400 text-lg hover:text-[var(--accent)] transition-colors"
            >
              +91-9000473322
            </a>
            <a 
              href="https://www.codevate.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 text-lg hover:text-[var(--accent)] transition-colors"
            >
              www.codevate.com
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="container-responsive pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-base text-gray-500">
        <div>© 2025 Codevate Group. All Rights Reserved.</div>
        <div>business@codevate.com</div>
      </div>
    </footer>
  );
}
