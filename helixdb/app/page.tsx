"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Steps } from '../components/Steps';
import { StudioSection } from '../components/StudioSection';
import { TeamsSection } from '../components/TeamsSection';
import { ProductMockup } from '../components/ProductMockup';
import { CTA } from '../components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30">
      <Navbar />
      <main>
        <Hero />
        <ProductMockup />
        <Features />
        <Steps />
        <StudioSection />
        <TeamsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
