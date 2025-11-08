import React, { useEffect, useRef, useState } from 'react';
import { Rocket, BarChart3, Shield } from 'lucide-react';

function FadeIn({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}

export default function Sections() {
  return (
    <main className="bg-gray-950 text-slate-100">
      {/* Features Section */}
      <section id="features" aria-labelledby="features-heading" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need to ship content faster
          </h2>
          <p className="mt-4 text-slate-400">
            Plan, collaborate, and publish across all channels with confidence.
          </p>
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn className="rounded-xl border border-slate-800/60 bg-gray-900/40 p-6 hover:shadow-lg hover:shadow-black/20 transition will-change-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-800 text-slate-100 mb-4">
              <Rocket className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold">One-click publishing</h3>
            <p className="mt-2 text-slate-400">Queue and ship posts to every network at once with precise scheduling.</p>
          </FadeIn>
          <FadeIn className="rounded-xl border border-slate-800/60 bg-gray-900/40 p-6 hover:shadow-lg hover:shadow-black/20 transition will-change-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-800 text-slate-100 mb-4">
              <BarChart3 className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold">Analytics that matter</h3>
            <p className="mt-2 text-slate-400">Understand reach, engagement, and ROI with clear, actionable insights.</p>
          </FadeIn>
          <FadeIn className="rounded-xl border border-slate-800/60 bg-gray-900/40 p-6 hover:shadow-lg hover:shadow-black/20 transition will-change-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-800 text-slate-100 mb-4">
              <Shield className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold">Enterprise-grade security</h3>
            <p className="mt-2 text-slate-400">SSO, audit logs, and role-based access keep your brand protected.</p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" aria-labelledby="pricing-heading" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, scalable pricing</h2>
          <p className="mt-4 text-slate-400">Choose a plan that grows with your team.</p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Starter */}
          <FadeIn className="relative rounded-2xl border border-slate-800/60 bg-gray-900/40 p-6 sm:p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="mt-2 text-slate-400">For individuals getting started.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>3 social profiles</li>
              <li>Basic scheduling</li>
              <li>Community support</li>
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
              Get Started
            </a>
          </FadeIn>

          {/* Pro - Most Popular */}
          <FadeIn className="relative rounded-2xl border border-indigo-500/30 bg-gray-900/60 p-6 sm:p-8 ring-1 ring-indigo-500/30 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="absolute -top-3 right-6">
              <span className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-2 text-slate-300">Advanced features for growing teams.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-3xl font-bold">$19</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              <li>10 social profiles</li>
              <li>Bulk scheduling</li>
              <li>Insights & reporting</li>
              <li>Priority support</li>
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition will-change-transform hover:-translate-y-0.5 hover:shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
              Start Free Trial
            </a>
          </FadeIn>

          {/* Business */}
          <FadeIn className="relative rounded-2xl border border-slate-800/60 bg-gray-900/40 p-6 sm:p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
            <h3 className="text-xl font-semibold">Business</h3>
            <p className="mt-2 text-slate-400">For organizations at scale.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-3xl font-bold">$49</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>Unlimited profiles</li>
              <li>Workflow approvals</li>
              <li>SSO & audit logs</li>
              <li>Dedicated support</li>
            </ul>
            <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
              Contact Sales
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="trial" aria-labelledby="cta-heading" className="relative isolate overflow-hidden bg-gray-900/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to orchestrate your social media?
            </h2>
            <p className="mt-3 text-slate-400">Start your 14-day free trial. No credit card required.</p>
            <form className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full sm:w-80 rounded-md border border-slate-700 bg-gray-950 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@company.com"
                aria-describedby="cta-helper"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow transition will-change-transform hover:-translate-y-0.5 hover:shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Get Started
              </button>
            </form>
            <p id="cta-helper" className="mt-2 text-xs text-slate-500">We care about your data. Read our privacy policy.</p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
