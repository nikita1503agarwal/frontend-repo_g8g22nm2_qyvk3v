import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/60 bg-gray-950/70 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-slate-100 font-semibold tracking-tight">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-slate-100 text-gray-900 font-bold">S</span>
            <span className="sr-only">SaaS Social</span>
            <span aria-hidden>SocialFlow</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-slate-300">
            <a href="#features" className="hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1 py-1 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1 py-1 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#signin"
              className="text-slate-300 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-3 py-1.5 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#trial"
              className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
