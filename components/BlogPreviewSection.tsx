import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Best AI Girl Generator Prompts for 2025',
    description: 'Level up your muses with cinematic, anime, and editorial prompt formulas tuned for Midjourney v7 and SDXL.',
    href: '/blog/best-ai-girl-generator-prompts-2025',
    tag: 'Prompts',
  },
  {
    title: 'How to Monetize AI-Generated Visuals',
    description: 'From Patreon exclusives to paid packs — learn the funnels top creators use to cash-in without burnout.',
    href: '/blog/how-to-monetize-ai-generated-visuals',
    tag: 'Growth',
  },
  {
    title: 'Creating Brand-Safe Glamour Photos with AI',
    description: 'Keep campaigns edgy yet compliant. We break down safe-mode settings and NSFW toggles for Pro brands.',
    href: '/blog/creating-brand-safe-glamour-photos-with-ai',
    tag: 'Brand Safety',
  },
];

const BlogPreviewSection: React.FC = () => {
  return (
    <section id="blog" className="border-t border-white/5 bg-[#090909] py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">SEO Playbook</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Insights to rank + convert</h2>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition hover:border-white/40 hover:text-white"
          >
            Explore the blog →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                  {post.tag}
                </span>
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{post.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                <a href={post.href} className="transition-colors hover:text-white">
                  Read Article
                </a>
                <span aria-hidden>→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
