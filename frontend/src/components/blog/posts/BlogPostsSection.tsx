'use client';

import React from 'react';

import { Stack } from '@mantine/core';

import { BlogPostsList } from './BlogPostsList';
import { BlogPostsFilters } from './BlogPostsFilters';
import { SectionHeading } from '../../common/design/SectionHeading';

export function BlogPostsSection() {
  return (
    <section>
      <Stack>
        <SectionHeading
          title="Wszystkie wpisy"
          subtext="Z pewnością znajdziesz coś dla siebie, sprawdź"
          centered
        />
        <Stack spacing={96}>
          <BlogPostsFilters />
          <BlogPostsList />
        </Stack>
      </Stack>
    </section>
  );
}
