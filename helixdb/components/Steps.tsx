"use client";
import React from 'react';

export const Steps = () => (
  <section className="py-24 px-4 bg-zinc-950/50 border-y border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">From connection to insight in 3 steps.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        {[
          { step: 1, title: "Connect", desc: "Paste your connection string or use our secure OAuth flow." },
          { step: 2, title: "Ask", desc: "Type any question. 'What was last week's retention by cohort?'" },
          { step: 3, title: "Get Insights", desc: "Instantly view tables, charts, or export the SQL code." }
        ].map((item) => (
          <div key={item.step} className="text-center relative">
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto mb-6 text-red-500 font-bold text-lg">
              {item.step}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-zinc-400 text-sm max-w-[250px] mx-auto">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
