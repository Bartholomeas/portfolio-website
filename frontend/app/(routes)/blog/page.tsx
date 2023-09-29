import React from 'react';

import { Box, Container, Stack } from '@/components/common/mantine';
import { ShapeWithGlow } from '@/components/common/ornaments/ShapeWithGlow';

import { BlogHeader } from '@/components/views/blog/list/BlogHeader';
import { BlogPostsSection } from '@/components/views/blog/list/BlogPostsSection';

import { getBlogPosts } from '@/lib/blog/getBlogPosts';

async function Blog() {
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
export default Blog;
