import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPostSummary } from '../../types/blog';
import { fetchRelatedPosts } from '../../lib/blogService';
import { format } from 'date-fns';

type RelatedPostsProps = {
  categorySlug: string;
  currentSlug: string;
};

const RelatedPosts: React.FC<RelatedPostsProps> = ({ categorySlug, currentSlug }) => {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);

  useEffect(() => {
    (async () => {
      const related = await fetchRelatedPosts(categorySlug, currentSlug);
      setPosts(related);
    })();
  }, [categorySlug, currentSlug]);

  if (!posts.length) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-white">More looks you&apos;ll love</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="group flex flex-col gap-3 rounded-2xl border border-white/12 bg-[#080808] p-5 transition hover:border-white/35"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
              {format(new Date(post.published_at), 'MMM d, yyyy')}
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-[#FF00A8]">{post.title}</h3>
            <p className="text-sm text-white/60">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
