import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryAssets } from '../data/galleryAssets';

const allTags = Array.from(new Set(galleryAssets.flatMap((asset) => asset.tags)));
const filters = ['All', ...allTags];

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return galleryAssets;
    }
    return galleryAssets.filter((item) => item.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="gallery" className="bg-[#050505] py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-10 lg:px-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">AI Gallery</h2>
            <p className="mt-3 max-w-xl text-base text-white/65">
              Swipe through every preset currently lighting up the VIXLOR community. Filter by vibe and open a style to remix it inside your workspace.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(9);
                }}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#FF00A8] to-[#00F0FF] text-black shadow-[0_12px_36px_-20px_rgba(0,240,255,0.8)]'
                    : 'border border-white/15 text-white/65 hover:border-white/45 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence>
            {filteredItems.slice(0, visibleCount).map((item) => (
              <motion.figure
                key={`${item.id}-${activeFilter}`}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="group relative mb-4 overflow-hidden rounded-[32px] border border-white/10 bg-[#080808]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-5 py-5 text-xs uppercase tracking-[0.25em] text-white/70">
                  <span>{item.tags.join(' / ')}</span>
                  <span>Remix →</span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < filteredItems.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 6, filteredItems.length))}
              className="rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 transition-all hover:border-white/45 hover:text-white"
            >
              Load More Styles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
