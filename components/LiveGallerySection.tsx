import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { galleryAssets } from '../data/galleryAssets';

const liveImages = galleryAssets.slice(6, 12);

const leaderboard = [
  { style: 'Silk Voltage', renders: 2210 },
  { style: 'Halo Dominion', renders: 1984 },
  { style: 'Night Strike', renders: 1736 },
  { style: 'Cowgirl Luxe', renders: 1592 },
];

const LiveGallerySection: React.FC = () => {
  const [countdown, setCountdown] = useState(12);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 18));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="border-t border-white/5 bg-[#080808] py-24">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:px-16">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Live Feed</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Fresh drops from the community</h2>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60">
              <span className="hidden sm:inline">New render in</span>
              <span className="font-semibold text-[#00F0FF]">{countdown}s</span>
              <span aria-hidden>⚡</span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {liveImages.slice(0, 4).map((image, index) => (
              <motion.article
                key={image.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#060606]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-5 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/70">{image.headline}</p>
                    <p className="mt-1 text-sm text-white/60">@vixlor-community</p>
                  </div>
                  <a
                    href="#prompt"
                    className="rounded-full border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70 transition-all hover:border-white/55 hover:text-white"
                  >
                    Remix →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-lg">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-white/70">Style leaderboard</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {leaderboard.map((item) => (
                <li key={item.style} className="flex items-center justify-between rounded-2xl border border-white/12 bg-black/40 px-4 py-3">
                  <span>{item.style}</span>
                  <span>{item.renders.toLocaleString()} renders</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/12 bg-gradient-to-r from-[#FF00A8]/25 via-[#7F2BFF]/18 to-[#00F0FF]/18 p-6 text-white">
            <h3 className="text-xl font-semibold">Earn bonus credits</h3>
            <p className="mt-3 text-sm text-white/70">
              Refer fellow creators and unlock 100 bonus credits each time they publish a gallery set. Track progress in your dashboard.
            </p>
            <a
              href="#pricing"
              className="mt-4 inline-block rounded-full border border-white/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/70"
            >
              Start earning →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveGallerySection;
