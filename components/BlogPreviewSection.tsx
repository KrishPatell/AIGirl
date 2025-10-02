import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchPosts } from '../lib/blogService';
import type { BlogPostSummary } from '../types/blog';

const BlogPreviewSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);

  useEffect(() => {
    (async () => {
      const { posts: latest } = await fetchPosts({ pageSize: 3 });
      setPosts(latest);
    })();
  }, []);

  return (
    <section id="blog" className="border-t border-white/5 bg-[#090909] py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">SEO Playbook</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Insights to rank + convert</h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition hover:border-white/40 hover:text-white"
          >
            Explore the blog →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {(posts.length ? posts : placeholderPosts).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                  {post.category ?? 'VIXLOR'}
                </span>
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{post.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                <Link
                  to={posts.length ? `/blog/${post.slug}` : '/blog'}
                  className="transition-colors hover:text-white"
                >
                  Read Article
                </Link>
                <span aria-hidden>→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const placeholderPosts: BlogPostSummary[] = [
  {
    id: 'placeholder-1',
    slug: 'best-ai-girl-generator-prompts',
    title: 'Best Sexy AI Girl Generator Prompts for 2025',
    hero_image_url: null,
    excerpt: 'Discover the best AI girl generation prompts for creating stunning portraits, anime characters, and custom AI art.',
    category: 'Prompts',
    category_slug: 'prompts',
    tags: ['prompts'],
    published_at: new Date().toISOString(),
    seo_title: null,
    seo_description: null,
  },
  {
    id: 'placeholder-2',
    slug: 'monetize-sexy-ai-muses',
    title: 'How to Monetize Sexy AI Visuals Without Burning Out',
    hero_image_url: null,
    excerpt: 'Pack your renders into no-brainer offers, VIP drops, and funnels that turn lurkers into subscribers.',
    category: 'Growth',
    category_slug: 'growth',
    tags: ['growth'],
    published_at: new Date().toISOString(),
    seo_title: null,
    seo_description: null,
  },
  {
    id: 'placeholder-3',
    slug: 'brand-safe-sexy-ai',
    title: 'Keep Sexy AI Content Brand-Safe & Ad Platform Approved',
    hero_image_url: null,
    excerpt: 'Dial in NSFW toggles, safe-mode filters, and compliance checks before you launch paid traffic.',
    category: 'Brand Safety',
    category_slug: 'brand-safety',
    tags: ['brand-safety'],
    published_at: new Date().toISOString(),
    seo_title: null,
    seo_description: null,
  },
];

export default BlogPreviewSection;
