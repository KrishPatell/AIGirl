import React, { FormEvent, useEffect, useState } from 'react';

const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (hasInteracted || isOpen) {
        return;
      }
      if (event.clientY <= 15) {
        setIsOpen(true);
      }
    };

    window.addEventListener('mouseout', handleMouseLeave);
    return () => window.removeEventListener('mouseout', handleMouseLeave);
  }, [hasInteracted, isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasInteracted(true);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-[min(90vw,420px)] rounded-3xl border border-white/10 bg-[#080808] p-8 text-white shadow-[0_25px_80px_-30px_rgba(0,240,255,0.6)]">
        <button
          type="button"
          onClick={() => {
            setIsOpen(false);
            setHasInteracted(true);
          }}
          aria-label="Close exit intent"
          className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-white/40 hover:text-white"
        >
          ×
        </button>
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">Wait!</p>
        <h3 className="mt-3 text-2xl font-semibold">Grab 5 free credits before you go</h3>
        <p className="mt-3 text-sm text-white/60">
          Drop your email to unlock instant access, plus insider prompt packs each week.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <label className="sr-only" htmlFor="exit-email">
            Email address
          </label>
          <input
            id="exit-email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#FF00A8] focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-all hover:shadow-lg"
          >
            Claim Credits
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExitIntentModal;
