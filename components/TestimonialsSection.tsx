import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryAssets } from '../data/galleryAssets';

const testimonialArt = [
  galleryAssets[0],
  galleryAssets[14],
  galleryAssets[16],
];

const testimonials = [
  {
    quote: 'We swapped manual photo shoots for VIXLOR and now deliver 5x more options to clients. The renders feel editorial right out of the gate.',
    name: 'Rae Minori',
    role: 'Creative Director, Neon Atelier',
    avatar: '/avatars/rae-minori.jpg',
    artwork: testimonialArt[0],
  },
  {
    quote: 'The NSFW toggle plus safe-mode keeps our funnel compliant, and the GSAP-ready sections helped us launch a premium microsite in 3 days.',
    name: 'Lex Harper',
    role: 'Founder, Softline Studios',
    avatar: '/avatars/lex-harper.jpg',
    artwork: testimonialArt[1],
  },
  {
    quote: 'Prompting feels effortless thanks to the curated presets. Leaderboards and community drops give our influencers endless content hooks.',
    name: 'Hana Vyr',
    role: 'Head of Growth, MuseVerse',
    avatar: '/avatars/hana-vyr.jpg',
    artwork: testimonialArt[2],
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-[#060606] py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Testimonials</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Loved by creators, brands, and dev collectives</h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="rounded-full border border-white/15 p-2 text-white/70 transition hover:border-white/40 hover:text-white"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="rounded-full border border-white/15 p-2 text-white/70 transition hover:border-white/40 hover:text-white"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
          <div className="rounded-[32px] border border-white/12 bg-white/5 p-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeTestimonial.quote}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5 }}
                className="flex h-full flex-col gap-6 text-white"
              >
                <p className="text-xl leading-relaxed text-white/80">“{activeTestimonial.quote}”</p>
                <div className="flex items-center gap-4">
                  <img
                    src={activeTestimonial.avatar}
                    alt={`${activeTestimonial.name} avatar`}
                    className="h-12 w-12 rounded-full border border-white/20 object-cover"
                  />
                  <div className="text-sm text-white/70">
                    <p className="font-semibold text-white">{activeTestimonial.name}</p>
                    <p>{activeTestimonial.role}</p>
                  </div>
                </div>
                <div className="mt-auto flex gap-2">
                  {testimonials.map((_, index) => (
                    <span
                      key={`bullet-${index}`}
                      className={`h-1.5 w-8 rounded-full transition-all ${
                        index === activeIndex ? 'bg-gradient-to-r from-[#FF00A8] to-[#00F0FF]' : 'bg-white/15'
                      }`}
                    />
                  ))}
                </div>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.figure
              key={activeTestimonial.artwork.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[38px] border border-white/12 bg-[#050505]"
            >
              <img
                src={activeTestimonial.artwork.src}
                alt={activeTestimonial.artwork.alt}
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
