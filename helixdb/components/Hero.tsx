"use client";
import React from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => (
  <section className="pt-32 pb-20 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
      >
        Talk to Your Database. <br />
        <span className="text-gradient">Instantly.</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        HelixDB turns natural language into complex SQL. Query, visualize, and optimize your data infrastructure without writing a single line of code.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-red-600/20">
          Get Started for Free
        </button>
        <button className="w-full sm:w-auto bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
          <Zap className="w-5 h-5 text-orange-500" />
          Try Demo
        </button>
      </motion.div>
    </div>
  </section>
);
