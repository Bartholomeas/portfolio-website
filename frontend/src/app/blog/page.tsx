import React from 'react';

import { FetchResponse, Post } from '@/types';

import { Container, Stack } from '@/components/common/mantine';

import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogFeaturedPostSection } from '@/components/blog/BlogFeaturedPostSection';
import { BlogPostsSection } from '@/components/blog/posts/BlogPostsSection';
import { API_URL } from '@/utils/variables';

async function getBlogPosts(
  queryParams: string
): Promise<FetchResponse<Post[]>> {
  console.log(queryParams);
  try {
    const res = await fetch(
      `${API_URL}/api/blog-posts?populate[blogCategories]=blogCategories&populate[headerImg]=headerImg&fields[0]=title&fields[1]=readTime&fields[2]=shortDescription&fields[3]=publishedAt`
    );

    return res.json();
  } catch (err) {
    throw new Error('getBlogPosts: error');
  }
}

async function getLastPost(): Promise<FetchResponse<Post[]>> {
  try {
    const res = await fetch(
      `${API_URL}/api/blog-posts?sort=createdAt%3Adesc&populate[headerImg]=headerImg&pagination[limit]=1`,
      {
        cache: 'no-cache',
      }
    );

    return res.json();
  } catch (err) {
    throw new Error('getLasPost: error');
  }
}

export default async function Blog({ params }: { params: any }) {
  const blogPostsPromise = getBlogPosts('ese');
  const { data } = await blogPostsPromise;

  const featuredPostPromise = getLastPost();
  const { data: featuredPost } = await featuredPostPromise;

  console.log(params);

  return (
    <Container size="md">
      <Stack spacing={128}>
        <BlogHeader />

        <Stack spacing={128}>
          <BlogFeaturedPostSection featuredPost={featuredPost[0]} />
          <BlogPostsSection posts={data} />
        </Stack>
      </Stack>
    </Container>
  );
}
