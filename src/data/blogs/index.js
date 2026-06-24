import { post as leadsPost } from './why-business-websites-dont-generate-leads';
import { post as aiSeoPost } from './ai-search-replacing-traditional-seo';
import { post as brandingPost } from './branding-vs-marketing-small-business';
import { post as trendsPost } from './website-design-trends-delhi-2026';

export const BLOG_POSTS = [leadsPost, aiSeoPost, brandingPost, trendsPost].sort(
  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
);

export function getAllBlogPosts() {
  return BLOG_POSTS;
}

export function getBlogBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? null;
}

import { extractBlockText } from '../../lib/blogBlocks';

function getSectionBlocks(section) {
  if (section.blocks?.length) return section.blocks;
  if (section.paragraphs?.length) {
    return section.paragraphs.map((text) => ({ type: 'paragraph', text }));
  }
  return [];
}

export function getBlogWordCount(post) {
  return post.sections
    .flatMap(getSectionBlocks)
    .map(extractBlockText)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
}
