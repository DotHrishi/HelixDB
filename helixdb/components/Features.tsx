"use client";
import React from 'react';
import { Search, Layers, BarChart3, Zap, Layout, Shield } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FeatureCard = ({ icon: Icon, title, description, tags }: any) => (
  <div className="p-8 rounded-2xl card-gradient hover:border-white/10 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-red-500" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{description}</p>
    {tags && (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="px-2 py-1 rounded bg-white/5 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

export const Features = () => (
  <section className="py-24 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful from day one.</h2>
      <p className="text-zinc-400">The architecture built for the modern data stack.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard 
        icon={Search}
        title="AI Natural Language Querying"
        description="Query your database using plain English. Our engine understands context, relationships, and edge cases better than raw SQL."
        tags={["PostgreSQL", "MySQL", "Snowflake"]}
      />
      <FeatureCard 
        icon={Layers}
        title="Schema Explorer"
        description="Visualize your entire database graph. Understand ERDs and joins at a glance."
      />
      <FeatureCard 
        icon={BarChart3}
        title="Auto Visualizations"
        description="One click to turn raw tables into executive-ready dashboards and PDF reports."
      />
      <FeatureCard 
        icon={Zap}
        title="Real-Time Insights"
        description="Stream data directly. Monitor your business KPIs with millisecond latency and custom alerts."
      />
      <FeatureCard 
        icon={Layout}
        title="Developer Friendly"
        description="Full-featured API, CLI tools, and VS Code extension for the power users."
      />
      <FeatureCard 
        icon={Shield}
        title="Enterprise Security"
        description="Bank-grade encryption, SOC2 compliance, and granular RBAC to keep your data infrastructure secure and compliant."
      />
    </div>
  </section>
);
