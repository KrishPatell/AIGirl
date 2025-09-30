import React, { useEffect, useState } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setIsVisible(false);
        return;
      }
      setIsVisible(scrollPosition / docHeight > 0.4);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-6 z-50 rounded-full border border-white/15 bg-[#080808]/95 px-5 py-4 backdrop-blur-xl shadow-[0_20px_60px_-25px_rgba(0,240,255,0.45)] sm:mx-auto sm:w-[min(520px,90vw)]">
      <div className="flex flex-col items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 sm:flex-row">
        <span className="text-center sm:text-left">Ready to Create Your AI Muse?</span>
        <button
          type="button"
          onClick={() => {
            const anchor = document.querySelector('#prompt');
            if (anchor) {
              anchor.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 text-white transition-all hover:shadow-lg sm:w-auto"
        >
          Generate Now
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
