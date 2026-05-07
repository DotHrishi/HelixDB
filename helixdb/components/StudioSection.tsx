"use client";
import React from 'react';
import { CheckCircle2, Terminal } from 'lucide-react';

export const StudioSection = () => (
  <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white transition-colors">
        The ultimate studio <br /> for your data.
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 transition-colors">
        Stop jumping between a terminal, a spreadsheet, and a BI tool. HelixDB centralizes your entire data workflow into one beautiful interface.
      </p>
      <ul className="space-y-4">
        {[
          "AI-assisted SQL autocomplete",
          "Dynamic chart generation",
          "Collaborative shared workspaces"
        ].map((item) => (
          <li key={item} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 transition-colors">
            <CheckCircle2 className="w-5 h-5 text-red-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="relative">
      <div className="aspect-video rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 overflow-hidden shadow-2xl relative transition-colors">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-50 dark:bg-zinc-800/50 border-b border-gray-100 dark:border-white/5 flex items-center px-4 gap-2 transition-colors">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-orange-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <div className="p-8 pt-12">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 mb-6 transition-colors">
            <Terminal className="w-4 h-4 text-zinc-500" />
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">helix --query &quot;top 10 users by spend&quot;</span>
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-red-500/20 rounded w-3/4" />
            <div className="grid grid-cols-3 gap-4">
              <div className="h-20 bg-gray-100 dark:bg-white/5 rounded" />
              <div className="h-20 bg-gray-100 dark:bg-white/5 rounded" />
              <div className="h-20 bg-gray-100 dark:bg-white/5 rounded" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500/20 blur-3xl rounded-full" />
    </div>
  </section>
);
