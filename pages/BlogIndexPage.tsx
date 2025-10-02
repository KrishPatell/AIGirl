import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExitIntentModal from '../components/ExitIntentModal';
import BlogHero from '../components/blog/BlogHero';
import BlogFilters from '../components/blog/BlogFilters';
import BlogCard from '../components/blog/BlogCard';
import PaginationControls from '../components/blog/PaginationControls';
import NewsletterSignup from '../components/blog/NewsletterSignup';
import { fetchPosts, fetchCategories, fetchTags } from '../lib/blogService';
import type { BlogCategory, BlogTag, BlogPostSummary } from '../types/blog';
import { usePageMeta } from '../hooks/usePageMeta';

const PAGE_SIZE = 6;

const BlogIndexPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  usePageMeta({
    title: 'VIXLOR Blog – AI Girl Generation Tips & Tutorials',
    description:
      'Learn how to create stunning AI girl images with our expert guides, prompt tips, and generation techniques. Master AI image creation today.',
  });

  useEffect(() => {
    (async () => {
      const [catData, tagData] = await Promise.all([fetchCategories(), fetchTags()]);
      setCategories(catData);
      setTags(tagData);
    })();
  }, []);

  const filters = useMemo(() => ({ category: activeCategory, tag: activeTag }), [activeCategory, activeTag]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { posts: fetchedPosts, total: fetchedTotal } = await fetchPosts({
        page,
        pageSize: PAGE_SIZE,
        category: filters.category,
        tag: filters.tag,
      });
      setPosts(fetchedPosts);
      setTotal(fetchedTotal);
      setLoading(false);
    })();
  }, [page, filters]);

  const handleCategoryChange = (slug: string | null) => {
    setActiveCategory(slug);
    setPage(1);
  };

  const handleTagChange = (slug: string | null) => {
    setActiveTag(slug);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F8FAFC]">
      <ExitIntentModal />
      <Header />
      <main className="pb-16">
        <BlogHero
          title="AI Girl Generation Tips & Tutorials"
          subtitle="Learn how to create stunning AI girl images with our expert guides, prompt techniques, and generation tips."
        />
        <BlogFilters
          categories={categories}
          tags={tags}
          activeCategory={activeCategory}
          activeTag={activeTag}
          onCategoryChange={handleCategoryChange}
          onTagChange={handleTagChange}
        />

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="h-80 animate-pulse rounded-[28px] border border-white/10 bg-[#070707]"
                />
              ))}
            </div>
          ) : posts.length ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <PaginationControls
                  currentPage={page}
                  total={total}
                  pageSize={PAGE_SIZE}
                  onPageChange={setPage}
                />
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-[#080808] p-10 text-center text-white/70">
              No posts found for the selected filters yet. Check back soon.
            </div>
          )}

          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndexPage;
