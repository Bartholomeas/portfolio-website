'use client';

import { Loader } from '@mantine/core';
import React, { Suspense } from 'react';

import { Stack } from '@/components/common/mantine';
import { SectionHeading } from '@/components/common/ornaments/SectionHeading';

import { BlogPostsFilters } from './BlogPostsFilters';
import { BlogPostsList } from './BlogPostsList';

import { Post } from '@/types';

type BlogPostsSectionProps = {
  posts: Post[] | undefined;
};

export function BlogPostsSection({ posts }: BlogPostsSectionProps) {
  return (
    <section style={{ minHeight: '50vh' }}>
      <Stack>
        <SectionHeading
          title="Wszystkie wpisy"
          subtext="Z pewnością znajdziesz coś dla siebie, sprawdź"
        />
        <Stack spacing={32}>
          <Suspense fallback={<Loader />}>
            <BlogPostsFilters />
          </Suspense>

          <BlogPostsList posts={posts} />
        </Stack>
      </Stack>
    </section>
  );
}
