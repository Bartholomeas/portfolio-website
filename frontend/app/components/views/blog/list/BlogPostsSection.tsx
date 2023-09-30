import React from 'react';

import { Stack } from '@/components/common/mantine';
import { SectionHeading } from '@/components/common/ornaments/SectionHeading';

import { BlogPostsFilters } from './BlogPostsFilters';
import { BlogPostsList } from './BlogPostsList';

import { BlogCategory, Post } from '@/types';

type BlogPostsSectionProps = {
  posts: Post[] | undefined;
  categories: BlogCategory[] | undefined;
};

export function BlogPostsSection({ posts, categories }: BlogPostsSectionProps) {
  return (
    <section style={{ minHeight: '50vh' }}>
      <Stack>
        <SectionHeading
          title="Wszystkie wpisy"
          subtext="Z pewnością znajdziesz coś dla siebie, sprawdź"
        />
        <Stack spacing={32}>
          <BlogPostsFilters categories={categories} />

          <BlogPostsList posts={posts} />
        </Stack>
      </Stack>
    </section>
  );
}
