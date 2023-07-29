import React from 'react';

import { Container, Stack } from '@/_components/common/mantine';
import { BlogFeaturedPostSection } from '@/_components/views/blog/list/BlogFeaturedPostSection';
import { BlogHeader } from '@/_components/views/blog/list/BlogHeader';
import { BlogPostsSection } from '@/_components/views/blog/list/BlogPostsSection';

import { FetchResponse, Post } from '@/_types';
import { API_TOKEN, API_URL } from '@/_utils/variables';

async function getBlogPosts(): Promise<FetchResponse<Post[]>> {
  try {
    const res = await fetch(
      `${API_URL}/api/blog-posts?sort=createdAt%3Adesc&populate[blogCategories]=blogCategories&populate[headerImg]=headerImg&fields[0]=title&fields[1]=readTime&fields[2]=shortDescription&fields[3]=publishedAt&fields[4]=slug&populate[slug]=slug`
      // { headers: { Authorization: `Bearer ${API_TOKEN}` } }
    );

    return res.json();
  } catch (err) {
    throw new Error('getBlogPosts: error');
  }
}
async function getLatestPost(): Promise<FetchResponse<Post[]>> {
  try {
    const res = await fetch(`${API_URL}/api/blog-posts/latest`, {
      // headers: { Authorization: `Bearer ${API_TOKEN}` },
    });

    return res.json();
  } catch (err) {
    throw new Error('getLatestPost: error');
  }
}

export default async function Blog() {
  const blogPostsPromise = getBlogPosts();
  // const latestPostPromise = getLatestPost();

  const { data } = await blogPostsPromise;
  // const { data: latestPostData } = await latestPostPromise;

  // console.log(latestPostData);
  console.log(API_URL);

  return (
    <Container size="md">
      <Stack spacing={128}>
        <BlogHeader />

        <Stack spacing={128}>
          <BlogFeaturedPostSection featuredPost={(data && data[0]) ?? {}} />
          <BlogPostsSection posts={data} />
        </Stack>
      </Stack>
    </Container>
  );
}
