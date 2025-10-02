import { useEffect } from 'react';

type PageMeta = {
  title?: string;
  description?: string;
  image?: string | null;
};

const DEFAULT_META: PageMeta = {
  title: 'VIXLOR – Sexy AI Girl Generator',
  description: 'Generate cinematic, brand-safe sexy AI muses in seconds with VIXLOR. Vogue-grade presets, GSAP-ready Webflow components, and SEO-first funnels.',
};

export const usePageMeta = ({ title, description, image }: PageMeta) => {
  useEffect(() => {
    const metaTitle = title ?? DEFAULT_META.title;
    const metaDescription = description ?? DEFAULT_META.description;

    document.title = metaTitle;

    const descriptionTag = ensureMetaTag('description');
    descriptionTag.setAttribute('content', metaDescription);

    setOgTag('og:title', metaTitle);
    setOgTag('og:description', metaDescription);
    setOgTag('og:image', image ?? 'https://vixlor.ai/og-image.jpg');
    setOgTag('og:type', 'article');

    setTwitterTag('twitter:title', metaTitle);
    setTwitterTag('twitter:description', metaDescription);
    setTwitterTag('twitter:image', image ?? 'https://vixlor.ai/og-image.jpg');
  }, [title, description, image]);
};

const ensureMetaTag = (name: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  return tag;
};

const ensurePropertyMetaTag = (property: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  return tag;
};

const setOgTag = (property: string, value: string) => {
  const tag = ensurePropertyMetaTag(property);
  tag.setAttribute('content', value);
};

const setTwitterTag = (name: string, value: string) => {
  const tag = ensureMetaTag(name);
  tag.setAttribute('content', value);
};
