"use client";

import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Portfolio } from "./components/Portfolio";
import { OurClients } from "./components/OurClients";
import { Stats } from "./components/Stats";
import { PopupForm } from "./components/PopupForm";

export default function Page() {
  return (
    <div className="min-h-screen font-body selection:bg-[var(--accent)] selection:text-black">
      <Hero />
      <div className="luxury-divider" />
      <WhyChooseUs />
      <div className="luxury-divider" />
      <Portfolio />
      <div className="luxury-divider" />
      <OurClients />
      <div className="luxury-divider" />
      <Stats />
      <PopupForm />
    </div>
  );
}
