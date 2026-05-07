"use client";
import React from 'react';
import { Code2, BarChart3, Zap } from 'lucide-react';

export const TeamsSection = () => (
  <section className="py-24 px-4 bg-gray-50/50 dark:bg-zinc-950/50 transition-colors">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">Built for every team. Every Database.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Code2, title: "For Developers", desc: "Fast-track query writing and database management. Sync with your Git workflow and local environment." },
          { icon: BarChart3, title: "For Analysts", desc: "No more bottlenecking. Build self-service reporting layers that non-technical users can actually use." },
          { icon: Zap, title: "For Startups", desc: "Scale your data infrastructure without hiring a dedicated data engineer early on. Scale as you grow." }
        ].map((item) => (
          <div key={item.title} className="p-8 rounded-2xl bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-white/5 transition-colors shadow-sm dark:shadow-none">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
              <item.icon className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">{item.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
