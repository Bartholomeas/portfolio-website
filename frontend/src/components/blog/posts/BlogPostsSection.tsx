'use client';

import React, { Suspense } from 'react';

import { Loader } from '@mantine/core';

import { Post } from '@/types';

import { Stack } from '@/components/common/mantine';
import { SectionHeading } from '@/components/common/design/SectionHeading';

import { BlogPostsFilters } from './BlogPostsFilters';
import { BlogPostsList } from './BlogPostsList';

type BlogPostsSectionProps = {
  posts: Post[] | undefined;
};

export function BlogPostsSection({ posts }: BlogPostsSectionProps) {
  return (
    <section>
      <Stack>
        <SectionHeading
          title="Wszystkie wpisy"
          subtext="Z pewnością znajdziesz coś dla siebie, sprawdź"
          centered
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
