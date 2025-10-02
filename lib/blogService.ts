import { supabase } from './supabaseClient';
import type { BlogPost, BlogPostSummary } from '../types/blog';
import { mockPosts, mockCategories, mockTags } from '../data/mockPosts';

export type FetchPostsParams = {
  page?: number;
  pageSize?: number;
  category?: string | null;
  tag?: string | null;
};

export type BlogListResponse = {
  posts: BlogPostSummary[];
  total: number;
};

const DEFAULT_PAGE_SIZE = 6;

export const fetchPosts = async ({
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE,
  category,
  tag,
}: FetchPostsParams): Promise<BlogListResponse> => {
  if (!supabase) {
    let filtered = [...mockPosts];

    if (category) {
      filtered = filtered.filter((post) => post.category_slug === category);
    }

    if (tag) {
      filtered = filtered.filter((post) => post.tags.includes(tag));
    }

    const total = filtered.length;
    const start = (page - 1) * pageSize;
    const posts = filtered
      .slice(start, start + pageSize)
      .map((post) => normalizePostSummary(post));

    return { posts, total };
  }

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from('posts')
    .select('*', { count: 'exact' })
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range(from, to);

  if (category) {
    query = query.eq('category_slug', category);
  }

  if (tag) {
    query = query.contains('tags', [tag]);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error('[Supabase] fetchPosts error', error);
    return { posts: [], total: 0 };
  }

  const posts = (data ?? []).map(normalizePostSummary);

  return { posts, total: count ?? 0 };
};

export const fetchPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  if (!supabase) {
    const post = mockPosts.find((item) => item.slug === slug);
    return post ? { ...post } : null;
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) {
    console.error('[Supabase] fetchPostBySlug error', error);
    return null;
  }

  return data ? normalizePost(data) : null;
};

export const fetchCategories = async () => {
  if (!supabase) {
    return mockCategories;
  }

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('[Supabase] fetchCategories error', error);
    return [];
  }

  return data ?? [];
};

export const fetchTags = async () => {
  if (!supabase) {
    return mockTags;
  }

  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('[Supabase] fetchTags error', error);
    return [];
  }

  return data ?? [];
};

export const fetchRelatedPosts = async (
  category: string,
  currentSlug: string,
  limit = 3
): Promise<BlogPostSummary[]> => {
  if (!supabase) {
    return mockPosts
      .filter((post) => post.category_slug === category && post.slug !== currentSlug)
      .slice(0, limit)
      .map((post) => normalizePostSummary(post));
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('category_slug', category)
    .neq('slug', currentSlug)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('[Supabase] fetchRelatedPosts error', error);
    return [];
  }

  return (data ?? []).map(normalizePostSummary);
};

const normalizePostSummary = (post: any): BlogPostSummary => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  hero_image_url: post.hero_image_url ?? null,
  excerpt: post.excerpt,
  category: post.category,
  category_slug: post.category_slug,
  tags: post.tags ?? [],
  published_at: post.published_at,
  seo_title: post.seo_title ?? null,
  seo_description: post.seo_description ?? null,
});

const normalizePost = (post: any): BlogPost => ({
  ...normalizePostSummary(post),
  content_html: post.content_html ?? '',
});
