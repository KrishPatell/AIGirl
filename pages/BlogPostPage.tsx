import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExitIntentModal from '../components/ExitIntentModal';
import RelatedPosts from '../components/blog/RelatedPosts';
import NewsletterSignup from '../components/blog/NewsletterSignup';
import { fetchPostBySlug } from '../lib/blogService';
import type { BlogPost } from '../types/blog';
import { usePageMeta } from '../hooks/usePageMeta';
import { format } from 'date-fns';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      return;
    }
    setLoading(true);
    (async () => {
      const fetched = await fetchPostBySlug(slug);
      setPost(fetched);
      setLoading(false);
    })();
  }, [slug]);

  usePageMeta({
    title: post?.seo_title ?? post?.title,
    description: post?.seo_description ?? post?.excerpt,
    image: post?.hero_image_url ?? null,
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505]">
        <ExitIntentModal />
        <Header />
        <main className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
          <div className="h-12 w-40 animate-pulse rounded-full bg-[#0a0a0a]" />
          <div className="mt-6 h-10 w-3/4 animate-pulse rounded bg-[#0a0a0a]" />
          <div className="mt-4 h-10 w-2/3 animate-pulse rounded bg-[#0a0a0a]" />
          <div className="mt-10 h-96 animate-pulse rounded-3xl bg-[#0a0a0a]" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050505] text-white">
        <ExitIntentModal />
        <Header />
        <main className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <h1 className="text-3xl font-semibold">We couldn&apos;t find that story.</h1>
          <p className="mt-4 text-white/70">
            It might have been unpublished. Explore more insights from the VIXLOR team.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-white/60 hover:text-white"
          >
            Back to Journal
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#F8FAFC]">
      <ExitIntentModal />
      <Header />
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 transition hover:border-white/35 hover:text-white"
        >
          ← Back to Blog
        </Link>
        <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
          {post.category}
        </div>
        <h1 className="mt-4 text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight text-white">{post.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/45">
          <span>VIXLOR Editorial</span>
          <span>{format(new Date(post.published_at), 'MMMM d, yyyy')}</span>
          <div className="flex flex-wrap gap-2 text-[10px]">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 px-3 py-1">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {post.hero_image_url && (
          <div className="mt-10 overflow-hidden rounded-[32px] border border-white/12">
            <img
              src={post.hero_image_url}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-invert prose-h2:text-white prose-a:text-[#00F0FF] prose-li:marker:text-[#FF00A8] mt-10 space-y-6 text-white/80"
          dangerouslySetInnerHTML={{ __html: post.content_html }}
        />

        <RelatedPosts categorySlug={post.category_slug} currentSlug={post.slug} />

        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
