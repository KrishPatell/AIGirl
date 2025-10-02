import React, { useState } from 'react';
import { subscribeToNewsletter } from '../../lib/newsletterService';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setMessage('Enter an email to subscribe.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const result = await subscribeToNewsletter(email);
      setStatus('success');
      setMessage(result.message ?? 'Thanks for subscribing.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Try again soon.');
    }
  };

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-[#FF00A8]/20 via-[#110f26] to-[#00F0FF]/20 px-6 py-10 sm:px-10">
      <div className="max-w-xl">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">Get the Vogue-ready prompt pack every Friday</h3>
        <p className="mt-3 text-sm text-white/70">
          Join the VIXLOR signal list for fresh sexy AI image recipes, release notes, and convert-ready funnel ideas.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label className="w-full sm:flex-1">
            <span className="sr-only">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-white/25 bg-black/40 px-6 py-4 text-sm text-white placeholder:text-white/45 focus:border-[#FF00A8] focus:outline-none"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#F1F5F9] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === 'loading' ? 'Joining…' : 'Get Weekly Drops'}
          </button>
        </form>
        {message && (
          <p
            className={`mt-3 text-sm ${
              status === 'error' ? 'text-[#FF9AA2]' : 'text-white/80'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
