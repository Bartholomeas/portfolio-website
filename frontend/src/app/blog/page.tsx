'use client';

import React from 'react';

import { Container, Stack } from '@mantine/core';

import { BlogHeader } from '../../components/blog/BlogHeader';
import { BlogPostsSection } from '../../components/blog/posts/BlogPostsSection';
import { BlogFeaturedPostSection } from '../../components/blog/BlogFeaturedPostSection';

function Blog() {
  return (
    <Container size="md">
      <Stack spacing={128}>
        <BlogHeader />
        <BlogFeaturedPostSection />
        <BlogPostsSection />
      </Stack>
    </Container>
  );
}

export default Blog;
