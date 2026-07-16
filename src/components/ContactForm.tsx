"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    engagement: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) return;
    
    // {/* Connect to backend: create app/api/contact/route.ts and POST form data there */}
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card p-10 md:p-14 flex flex-col items-center text-center space-y-6 h-full justify-center min-h-[500px] border border-white/60 shadow-2xl rounded-3xl !bg-white/60 backdrop-blur-xl">
        <div className="w-20 h-20 rounded-full exec-node-gradient text-black flex items-center justify-center mb-6 shadow-xl animate-scale-in">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight">Thank you!</h3>
        <p className="text-gray-800 font-semibold text-xl leading-relaxed">We've received your request and our strategy team will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-10 flex flex-col space-y-6 border border-white/60 shadow-2xl rounded-3xl !bg-white/60 backdrop-blur-xl">
      <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">Send us a message</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-700">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
            className="codevate-input shadow-sm focus:shadow-md" 
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-gray-700">Company / Brand Name *</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            required 
            value={formData.company} 
            onChange={handleChange} 
            className="codevate-input shadow-sm focus:shadow-md" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-700">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
            className="codevate-input shadow-sm focus:shadow-md" 
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-gray-700">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className="codevate-input shadow-sm focus:shadow-md" 
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-gray-700">Service Interest</label>
        <select 
          id="service" 
          name="service" 
          value={formData.service} 
          onChange={handleChange} 
          className="codevate-input appearance-none bg-white shadow-sm focus:shadow-md"
        >
          <option value="" disabled>Select a service</option>
          <option value="Strategy">Strategy</option>
          <option value="Activation">Activation</option>
          <option value="Digital">Digital</option>
          <option value="Full Integrated Package">Full Integrated Package</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="engagement" className="text-xs font-bold uppercase tracking-widest text-gray-700">Engagement Type</label>
        <select 
          id="engagement" 
          name="engagement" 
          value={formData.engagement} 
          onChange={handleChange} 
          className="codevate-input appearance-none bg-white shadow-sm focus:shadow-md"
        >
          <option value="" disabled>Select engagement type</option>
          <option value="Agency-on-Record (AOR)">Agency-on-Record (AOR)</option>
          <option value="Project-Based">Project-Based</option>
          <option value="Retainer">Retainer</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-700">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={5} 
          placeholder="Tell us about your brand challenge"
          value={formData.message} 
          onChange={handleChange} 
          className="codevate-input h-auto py-4 resize-none shadow-sm focus:shadow-md"
        ></textarea>
      </div>

      <button type="submit" className="codevate-btn exec-node-gradient text-black w-full mt-4 shadow-lg hover:shadow-xl py-6 text-lg tracking-wide">
        Submit Request
      </button>
    </form>
  );
}
