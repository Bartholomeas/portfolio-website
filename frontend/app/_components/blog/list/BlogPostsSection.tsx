'use client';

import { Loader } from '@mantine/core';
import React, { Suspense } from 'react';

import { Post } from '../../../_types';
import { SectionHeading } from '../../common/design/SectionHeading';

import { Stack } from '../../common/mantine';

import { BlogPostsFilters } from './BlogPostsFilters';
import { BlogPostsList } from './BlogPostsList';

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
