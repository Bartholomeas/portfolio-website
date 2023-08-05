import React from 'react';

import { Box, Container, Stack } from '@/_components/common/mantine';
import { ShapeWithGlow } from '@/_components/common/ornaments/ShapeWithGlow';

import { BlogHeader } from '@/_components/views/blog/list/BlogHeader';
import { BlogPostsSection } from '@/_components/views/blog/list/BlogPostsSection';

import { FetchResponse, Post } from '@/_types';
import { API_TOKEN, API_URL } from '@/_utils/variables';

async function getBlogPosts(): Promise<FetchResponse<Post[]>> {
  try {
    const res = await fetch(
      `${API_URL}/api/blog-posts?sort=createdAt%3Adesc&populate[blogCategories]=blogCategories&populate[headerImg]=headerImg&fields[0]=title&fields[1]=readTime&fields[2]=shortDescription&fields[3]=publishedAt&fields[4]=slug&populate[slug]=slug`,
      { headers: { Authorization: `Bearer ${API_TOKEN}` } }
    );

    if (!res.ok) {
      throw new Error('getBlogPosts: error');
    }

    return await res.json();
  } catch (err) {
    throw new Error('getBlogPosts: error');
  }
}

export default async function Blog() {
  const blogPostsPromise = getBlogPosts();
  const { data } = await blogPostsPromise;

  return (
    <Container size="md" mt={32}>
      <Stack spacing={128}>
        <Box sx={{ position: 'relative' }}>
          <BlogHeader featuredPost={(data && data[0]) ?? {}} />
          <Box
            sx={{
              position: 'absolute',
              top: '-5%',
              left: 16,
            }}
          >
            <ShapeWithGlow size={100} />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 24,
            }}
          >
            <ShapeWithGlow size={80} shape="circle2" />
          </Box>
        </Box>

        <BlogPostsSection posts={data} />
      </Stack>
    </Container>
  );
}
