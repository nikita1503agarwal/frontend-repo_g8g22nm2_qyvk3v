import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/60 to-gray-950"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="hero-heading" className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-orange-300 via-rose-300 to-amber-200">
            Social media, orchestrated. Ship content faster.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300">
            Plan, publish, and analyze across every network from a single, developer-grade dashboard inspired by Vercel’s precision and speed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-indigo-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
