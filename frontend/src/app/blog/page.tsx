'use client';

import React from 'react';

import { Container, Stack } from '@mantine/core';

import { API_URL } from '../../utils/variables';
import { FetchResponse, Post } from '../../types';

import { BlogHeader } from '../../components/blog/BlogHeader';
import { BlogPostsSection } from '../../components/blog/posts/BlogPostsSection';
import { BlogFeaturedPostSection } from '../../components/blog/BlogFeaturedPostSection';

async function getBlogPosts(): Promise<FetchResponse<Post>> {
  const res = await fetch(
    `${API_URL}/api/blog-posts?populate[0]=blogCategories&populate[1]=headerImg`,
    { cache: 'force-cache' }
  );

  if (!res.ok) throw new Error('getBlogPosts: Failed to fetch');

  return res.json();
}

export default async function Blog() {
  const { data } = await getBlogPosts();
  console.log(data);

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
