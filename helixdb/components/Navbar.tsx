"use client";
import React from 'react';
import { Database } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-black/50 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-black dark:text-white">HelixDB</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Product</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" onClick={() => router.push("/login")}>Log In</button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}