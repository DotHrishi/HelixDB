"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Search, BarChart3 } from 'lucide-react';

export const ProductMockup = () => (
  <section className="px-4 max-w-6xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-white/10 p-4 shadow-xl dark:shadow-2xl dark:shadow-red-500/5 transition-colors"
    >
      <div className="aspect-[16/10] rounded-xl bg-white dark:bg-black overflow-hidden relative border border-gray-100 dark:border-white/5 transition-colors">
        <div className="absolute top-0 left-0 right-0 h-10 bg-gray-50/80 dark:bg-zinc-900/80 border-b border-gray-200 dark:border-white/5 flex items-center px-4 justify-between transition-colors">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-zinc-800" />
            <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-zinc-800" />
            <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-zinc-800" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-200/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 transition-colors">
            <Search className="w-3 h-3 text-zinc-500" />
            <span className="text-[10px] text-zinc-600 dark:text-zinc-400">Show me monthly revenue trends grouped by product category...</span>
          </div>
          <div className="w-10" />
        </div>
        <div className="p-8 pt-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-red-500" />
              <h3 className="font-bold text-gray-900 dark:text-white transition-colors">Revenue Analysis</h3>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">SQL GENERATED</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-end gap-2 h-32">
                <div className="w-8 bg-red-900/40 rounded-t h-1/2" />
                <div className="w-8 bg-red-700/60 rounded-t h-3/4" />
                <div className="w-8 bg-red-500 rounded-t h-full" />
                <div className="w-8 bg-red-900/40 rounded-t h-2/3" />
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-100 dark:bg-white/5 rounded w-full transition-colors" />
                <div className="h-2 bg-gray-100 dark:bg-white/5 rounded w-5/6 transition-colors" />
                <div className="h-2 bg-gray-100 dark:bg-white/5 rounded w-4/6 transition-colors" />
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 p-4 transition-colors">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="text-zinc-500 border-b border-gray-100 dark:border-white/5 transition-colors">
                    <th className="text-left pb-2">Category</th>
                    <th className="text-left pb-2">Volume</th>
                    <th className="text-left pb-2">Growth</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 dark:text-zinc-300 transition-colors">
                  <tr>
                    <td className="py-2">Cloud Compute</td>
                    <td className="py-2 font-semibold">$42.4k</td>
                    <td className="py-2 text-green-600 dark:text-green-500">+12%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Storage</td>
                    <td className="py-2 font-semibold">$18.1k</td>
                    <td className="py-2 text-green-600 dark:text-green-500">+8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
