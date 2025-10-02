export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  hero_image_url: string | null;
  excerpt: string;
  content_html: string;
  category: string;
  category_slug: string;
  tags: string[];
  published_at: string;
  seo_title: string | null;
  seo_description: string | null;
};

export type BlogPostSummary = Omit<BlogPost, 'content_html'>;

export type BlogCategory = {
  name: string;
  slug: string;
  description?: string | null;
};

export type BlogTag = {
  name: string;
  slug: string;
};
