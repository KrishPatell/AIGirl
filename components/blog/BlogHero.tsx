import React from 'react';

type BlogHeroProps = {
  title: string;
  subtitle: string;
};

const BlogHero: React.FC<BlogHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0b0b] via-[#111018] to-[#151522] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,168,0.28),_transparent_55%)]" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
          VIXLOR Blog
        </span>
        <h1 className="mt-6 text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.05] text-white">
          {title}
        </h1>
        <p className="mt-4 text-base text-white/65 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
