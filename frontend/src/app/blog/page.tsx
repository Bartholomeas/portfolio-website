import React from 'react';

import { FetchResponse, Post } from '@/types';
import { API_URL } from '@/utils/variables';

import { Container, Stack } from '@/components/common/mantine';

import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogFeaturedPostSection } from '@/components/blog/BlogFeaturedPostSection';
import { BlogPostsSection } from '@/components/blog/posts/BlogPostsSection';

async function getBlogPosts(): Promise<FetchResponse<Post[]>> {
  try {
    const res = await fetch(
      `${API_URL}/api/blog-posts?populate[0]=blogCategories&populate[1]=headerImg`
    );

    return res.json();
  } catch (err) {
    throw new Error('getBlogPosts: error');
  }
}

export default async function Blog() {
  const blogPostsPromise = getBlogPosts();
  const { data } = await blogPostsPromise;

  return (
    <Container size="md">
      <Stack spacing={128}>
        <BlogHeader />

        <Stack spacing={128}>
          <BlogFeaturedPostSection />
          <BlogPostsSection posts={data} />
        </Stack>
      </Stack>
    </Container>
  );
}
