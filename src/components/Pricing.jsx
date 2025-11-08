import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    popular: false,
    features: [
      '1 brand, 3 social profiles',
      'Basic scheduler',
      'Standard analytics',
      'Community support',
    ],
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/mo',
    popular: true,
    features: [
      '5 brands, 15 profiles',
      'Advanced scheduler + AI captions',
      'A/B post testing',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    price: '$99',
    period: '/mo',
    popular: false,
    features: [
      'Unlimited brands & profiles',
      'Workflows & approvals',
      'Team permissions',
      'Dedicated success manager',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-semibold text-slate-100">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-400">Choose a plan that scales with you.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border ${p.popular ? 'border-indigo-400/40 bg-gray-900/60' : 'border-gray-800 bg-gray-900/40'} p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl`}
              aria-label={`${p.name} plan`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                  Most Popular
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold text-slate-100">{p.name}</h3>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-100">{p.price}</span>
                <span className="text-slate-400">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className={`inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${p.popular ? 'bg-indigo-500 text-white hover:shadow-indigo-500/25' : 'bg-gray-800 text-slate-100 hover:bg-gray-700'}`}
                >
                  Choose {p.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
