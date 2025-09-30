import React, { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    id: 'free',
    name: 'Free',
    monthly: 0,
    yearly: 0,
    description: 'Perfect for getting started and trying out basic features.',
    perks: ['20 generations per day', 'Basic style library', 'Standard quality', 'Watermarked images'],
    cta: 'START FOR FREE',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: 15,
    yearly: 150,
    description: 'For creators who need more power and creative freedom.',
    perks: ['1000 generations per month', 'Full style library', 'High-quality upscaling', 'No watermarks', 'Priority queue'],
    cta: 'UPGRADE TO PRO',
    highlighted: true,
    badge: 'MOST POPULAR',
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    monthly: 49,
    yearly: 490,
    description: 'The ultimate plan for professionals and power users.',
    perks: ['Unlimited generations', 'Everything in Pro', 'Private generation mode', 'Early access to new features', 'Dedicated support'],
    cta: 'GO UNLIMITED',
  },
];

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#090909] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.16),_rgba(9,9,9,0))]" aria-hidden />
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Pricing</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Simple pricing for AI image generation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
            Choose between free and pro plans. Start with free credits to test the platform, then upgrade for premium features and higher quality outputs.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
          <span className={billingCycle === 'monthly' ? 'text-white' : ''}>Monthly</span>
          <button
            type="button"
            onClick={() => setBillingCycle((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'))}
            className="relative h-8 w-16 rounded-full border border-white/20 bg-black/40 transition"
            aria-label="Toggle billing cycle"
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-gradient-to-r from-[#FF00A8] to-[#00F0FF] transition-transform left-1 ${
                billingCycle === 'yearly' ? 'translate-x-8' : ''
              }`}
            />
          </button>
          <span className={billingCycle === 'yearly' ? 'text-white' : ''}>Yearly</span>
          <span className="rounded-full bg-[#FF00A8]/20 px-3 py-1 text-[10px] text-[#FF00A8]">Save 20%</span>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex h-full flex-col gap-6 rounded-3xl border p-8 backdrop-blur-lg ${
                plan.highlighted
                  ? 'border-[#FF00A8] bg-gradient-to-br from-[#FF00A8]/12 via-[#7F2BFF]/10 to-[#00F0FF]/10 shadow-[0_25px_80px_-35px_rgba(255,0,168,0.6)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-[#FF00A8] to-[#7F2BFF] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {plan.badge}
                  </span>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">{plan.name}</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  {plan.monthly === 0 ? (
                    '$0 forever'
                  ) : (
                    <>
                      <span className="text-white">${billingCycle === 'monthly' ? plan.monthly : plan.yearly}</span>
                      <span className="text-sm text-white/50">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </>
                  )}
                </h3>
                <p className="mt-3 text-sm text-white/60">{plan.description}</p>
              </div>

              <ul className="space-y-3 text-sm text-white/70">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-[#FF00A8] to-[#00F0FF]" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#prompt"
                className={`mt-auto inline-flex items-center justify-center rounded-lg px-6 py-3 text-xs font-semibold uppercase tracking-wide transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg'
                    : plan.id === 'unlimited'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
