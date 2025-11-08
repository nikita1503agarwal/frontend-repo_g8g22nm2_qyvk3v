import React from 'react';

const FinalCTA = () => {
  return (
    <section aria-labelledby="cta-heading" className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl font-semibold text-slate-100">Ready to streamline your social?</h2>
          <p className="mt-3 text-slate-400">Start your free trial today. No credit card required.</p>
          <form className="mt-8 flex flex-col sm:flex-row items-center gap-3" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-indigo-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
