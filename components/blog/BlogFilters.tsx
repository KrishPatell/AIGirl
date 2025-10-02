import React from 'react';
import type { BlogCategory, BlogTag } from '../../types/blog';

type BlogFiltersProps = {
  categories: BlogCategory[];
  tags: BlogTag[];
  activeCategory?: string | null;
  activeTag?: string | null;
  onCategoryChange: (slug: string | null) => void;
  onTagChange: (slug: string | null) => void;
};

const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  tags,
  activeCategory,
  activeTag,
  onCategoryChange,
  onTagChange,
}) => {
  return (
    <section className="border-b border-white/5 bg-[#060606] py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
          <button
            type="button"
            onClick={() => onCategoryChange(null)}
            className={`rounded-full border px-4 py-2 transition-all ${
              activeCategory ? 'border-white/15 text-white/55 hover:border-white/35 hover:text-white' : 'border-white/45 bg-white/10 text-white'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => onCategoryChange(category.slug)}
              className={`rounded-full border px-4 py-2 transition-all ${
                activeCategory === category.slug
                  ? 'border-white/45 bg-white/10 text-white'
                  : 'border-white/15 text-white/55 hover:border-white/35 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">
          <button
            type="button"
            onClick={() => onTagChange(null)}
            className={`rounded-full border px-4 py-2 transition-all ${
              activeTag ? 'border-white/15 hover:border-white/35 hover:text-white' : 'border-white/35 bg-white/10 text-white'
            }`}
          >
            All Tags
          </button>
          {tags.map((tag) => (
            <button
              key={tag.slug}
              type="button"
              onClick={() => onTagChange(tag.slug)}
              className={`rounded-full border px-4 py-2 transition-all ${
                activeTag === tag.slug
                  ? 'border-white/35 bg-white/10 text-white'
                  : 'border-white/15 text-white/55 hover:border-white/35 hover:text-white'
              }`}
            >
              #{tag.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFilters;
