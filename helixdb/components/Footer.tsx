"use client";
import React from 'react';
import { Database, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">HelixDB</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed mb-6">
            The intelligent data layer for modern engineering teams. Built for speed, scale, and clarity.
          </p>
          <div className="flex items-center gap-4">
            <Twitter className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-zinc-300">Product</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-zinc-300">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-zinc-300">Legal</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between pt-8 border-t border-white/5 text-xs text-zinc-600">
        <p>© 2024 HelixDB Inc. Built for the obsidian age.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          SYSTEMS OPERATIONAL
        </div>
      </div>
    </footer>
  );
}