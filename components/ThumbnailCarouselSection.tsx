import React, { useEffect, useRef, useState } from 'react';
import { featureAssets } from '../data/galleryAssets';

const carouselItems = [...featureAssets, ...featureAssets];

const ThumbnailCarouselSection: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    let frame: number;
    const step = () => {
      if (!isHovered) {
        scroller.scrollLeft += 0.9;
        if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth - 2) {
          scroller.scrollTo({ left: 0 });
        }
      }
      frame = window.requestAnimationFrame(step);
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [isHovered]);

  return (
    <section id="styles" className="relative border-y border-white/5 bg-[#080808] py-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Trending Styles</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Fierce looks on a neon loop</h2>
          </div>
          <a
            href="#gallery"
            className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/75 transition-all hover:border-white/50 hover:text-white"
          >
            View Full Gallery →
          </a>
        </div>

        <div
          ref={scrollerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselItems.map((asset, index) => (
            <a
              key={`${asset.id}-${index}`}
              href="#gallery"
              className="group relative h-48 w-64 flex-shrink-0 overflow-hidden rounded-[28px] border border-white/12 bg-[#0B0B0B] transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={asset.src}
                alt={asset.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.3em] text-white">
                <span>{asset.headline}</span>
                <span className="text-white/60">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThumbnailCarouselSection;
