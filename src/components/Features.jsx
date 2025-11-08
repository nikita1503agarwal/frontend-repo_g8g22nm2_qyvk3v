import React from 'react';
import { Rocket, BarChart3, Calendar } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch Faster',
    desc: 'Automated scheduling and AI-assisted captions to move from draft to done in minutes.'
  },
  {
    icon: Calendar,
    title: 'Unified Calendar',
    desc: 'A single, collaborative calendar for all networks with drag-and-drop simplicity.'
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    desc: 'Real-time insights and benchmarks to optimize performance across channels.'
  }
];

const Features = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="features-heading" className="text-2xl sm:text-3xl font-semibold text-slate-100">Built for speed and clarity</h2>
          <p className="mt-3 text-slate-400">Everything you need to plan, publish, and perform—without the clutter.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-gray-800 bg-gray-900/40 p-6 hover:border-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-400">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
