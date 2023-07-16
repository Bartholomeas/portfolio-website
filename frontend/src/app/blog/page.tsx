import React from 'react';

import { BlogFeaturedPostSection } from '@/components/blog/list/BlogFeaturedPostSection';
import { BlogHeader } from '@/components/blog/list/BlogHeader';
import { BlogPostsSection } from '@/components/blog/list/BlogPostsSection';
import { Container, Stack } from '@/components/common/mantine';

import { FetchResponse, Post } from '@/types';
import { API_TOKEN, API_URL } from '@/utils/variables';

async function getBlogPosts(): Promise<FetchResponse<Post[]>> {
  try {
    const res = await fetch(
      `${API_URL}/api/blog-posts?sort=createdAt%3Adesc&populate[blogCategories]=blogCategories&populate[headerImg]=headerImg&fields[0]=title&fields[1]=readTime&fields[2]=shortDescription&fields[3]=publishedAt&fields[4]=slug`,
      { headers: { Authorization: `Bearer ${API_TOKEN}` } }
    );

    return res.json();
  } catch (err) {
    throw new Error('getBlogPosts: error');
  }
}

export default async function Blog() {
  const blogPostsPromise = getBlogPosts();
  const { data } = await blogPostsPromise;
  // const featuredPostPromise = getLastPost();
  // const { data: featuredPost } = await featuredPostPromise;

  return (
    <Container size="md">
      <Stack spacing={128}>
        <BlogHeader />

        <Stack spacing={128}>
          <BlogFeaturedPostSection featuredPost={data[0]} />
          <BlogPostsSection posts={data} />
        </Stack>
      </Stack>
    </Container>
  );
}
