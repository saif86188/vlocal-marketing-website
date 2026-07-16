"use client";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Mail, Phone, User, Building, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll contact you within 24 hours.");
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4 z-50"
          >
            {/* Elite Frosted Light Glassmorphism Wrapper */}
            <div className="relative p-6 glass-card !bg-white/65 backdrop-blur-3xl border border-white/85 rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 exec-node-gradient rounded-xl mb-2 shadow-[0_0_20px_rgba(251,193,58,0.2)] border-none">
                  <Sparkles className="w-6 h-6 text-black stroke-[2.2]" />
                </div>
                <h3 className="text-2xl font-extrabold text-black mb-1 tracking-tight">
                  Start Your Growth
                </h3>
                <p className="text-gray-700 font-semibold text-sm">Get a Free Marketing Consultation.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="popup-name" className="block text-sm font-bold text-gray-800 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600 stroke-[2.2]" />
                    <input
                      type="text"
                      id="popup-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-2 bg-white/55 border border-white/80 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-black placeholder-black/45 transition-all duration-300 font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="popup-company" className="block text-sm font-bold text-gray-800 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600 stroke-[2.2]" />
                    <input
                      type="text"
                      id="popup-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-2 bg-white/55 border border-white/80 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-black placeholder-black/45 transition-all duration-300 font-medium"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="popup-email" className="block text-sm font-bold text-gray-800 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600 stroke-[2.2]" />
                    <input
                      type="email"
                      id="popup-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-2 bg-white/55 border border-white/80 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-black placeholder-black/45 transition-all duration-300 font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="popup-phone" className="block text-sm font-bold text-gray-800 mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600 stroke-[2.2]" />
                    <input
                      type="tel"
                      id="popup-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-2 bg-white/55 border border-white/80 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-black placeholder-black/45 transition-all duration-300 font-medium"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="popup-message" className="block text-sm font-bold text-gray-800 mb-2">
                    Requirement
                  </label>
                  <textarea
                    id="popup-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-2 bg-white/55 border border-white/80 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-black placeholder-black/45 transition-all duration-300 font-medium resize-none"
                    placeholder="What are you looking for?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full codevate-btn exec-node-gradient text-black hover:shadow-[0_0_20px_rgba(251,193,58,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
                >
                  Get Free Marketing Consultation
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform text-black" />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
