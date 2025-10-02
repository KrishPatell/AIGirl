import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { featureAssets } from '../data/galleryAssets';

const heroSlides = featureAssets;

const statBadges = [
  'Loved by 512K+ creators',
  '140 AI art style presets',
  '5.6s average render speed',
];

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = useMemo(() => heroSlides[activeIndex], [activeIndex]);

  useEffect(() => {
    if (isPaused) {
      return;
    }
    const rotation = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4800);

    return () => window.clearInterval(rotation);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#040404] via-[#090909] to-[#111111]">
      <div className="mx-auto grid max-w-[1440px] gap-y-16 gap-x-16 px-5 pb-24 pt-20 sm:px-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-16 lg:pt-28">
        <div className="flex flex-col justify-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FF00A8] to-[#00F0FF]" />
              Sexy AI Image Maker
            </span>
            <h1 className="text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[0.9] text-white">
              <span className="block bg-gradient-to-r from-[#FF00A8] via-[#7F2BFF] to-[#00F0FF] bg-clip-text text-transparent">
                Create Realistic, Stunning Sexy AI Photos Instantly
              </span>
            </h1>
            <p className="max-w-xl text-base text-white/70 sm:text-lg">
              Create life like Sexy AI images fast with custom poses, styles included.
            </p>
          </motion.div>

          <motion.div
            id="cta"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              className="w-full min-w-[220px] rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold capitalize tracking-[0.12em] text-white transition-all hover:shadow-lg sm:w-auto"
            >
              Start Creating for Free
            </button>
            <a
              href="#gallery"
              className="w-full min-w-[200px] rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold capitalize tracking-[0.12em] text-white/80 transition-all hover:border-white/60 hover:text-white sm:w-auto"
            >
              Browse Styles
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/60"
          >
            {statBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[10px] sm:text-xs"
              >
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute -inset-8 rounded-[52px] bg-gradient-to-tr from-[#FF00A8]/18 via-transparent to-[#00F0FF]/22 blur-3xl" aria-hidden />
          <div
            className="relative w-full overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,rgba(14,14,14,0.9),rgba(28,28,28,0.6))] p-[1px] shadow-[0_35px_60px_-35px_rgba(0,240,255,0.45)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-[5/3] w-full overflow-hidden rounded-[36px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide.src}
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                />
              </AnimatePresence>

              <button
                type="button"
                aria-label="Previous hero image"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/35 text-lg text-white/75 backdrop-blur transition hover:border-white/60 hover:text-white"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next hero image"
                onClick={handleNext}
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/35 text-lg text-white/75 backdrop-blur transition hover:border-white/60 hover:text-white"
              >
                ›
              </button>

              <div className="absolute inset-x-0 bottom-0 flex items-start justify-between bg-gradient-to-t from-black/85 via-black/40 to-transparent px-6 py-5 text-white">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">{activeSlide.headline}</p>
                  <p className="mt-2 max-w-[260px] text-xs text-white/65">{activeSlide.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`View ${slide.headline}`}
                onClick={() => setActiveIndex(index)}
                className={`group relative flex h-11 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-white/5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/60 transition-all hover:border-white/40 hover:text-white/90 ${
                  activeIndex === index ? 'border-white/70 text-white' : ''
                }`}
              >
                <img src={slide.src} alt={`AI generated ${slide.headline} style preview thumbnail`} className="absolute inset-0 h-full w-full object-cover opacity-50 transition group-hover:scale-105" />
                <span className="relative z-10 bg-black/40 px-2 py-1 leading-tight backdrop-blur">
                  {slide.headline}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
