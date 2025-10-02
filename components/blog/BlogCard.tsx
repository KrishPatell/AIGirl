import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPostSummary } from '../../types/blog';
import { format } from 'date-fns';

type BlogCardProps = {
  post: BlogPostSummary;
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0A] transition-transform duration-300 hover:-translate-y-1 hover:border-white/25">
      <Link to={`/blog/${post.slug}`} className="flex h-full flex-col">
        {post.hero_image_url ? (
          <div className="aspect-[5/3] overflow-hidden">
            <img
              src={post.hero_image_url}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="aspect-[5/3] bg-gradient-to-br from-[#161627] to-[#090909]" />
        )}
        <div className="flex flex-1 flex-col gap-4 px-6 py-6">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
            <span>{post.category}</span>
            <span>{format(new Date(post.published_at), 'MMM d, yyyy')}</span>
          </div>
          <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#FF00A8]">
            {post.title}
          </h3>
          <p className="text-sm text-white/60">{post.excerpt}</p>
          <div className="mt-auto flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
            {post.tags?.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 px-3 py-1">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
