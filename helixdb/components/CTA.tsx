"use client";
import React from 'react';

export const CTA = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-red-600 to-orange-600 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-red-600/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Start exploring your data today.</h2>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join 2,000+ teams using HelixDB to power their data intelligence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-100 transition-all">
            Get Started Now
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
            Talk to Sales
          </button>
        </div>
      </div>
    </div>
  </section>
);
