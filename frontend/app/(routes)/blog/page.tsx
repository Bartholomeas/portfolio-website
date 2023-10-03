import React from 'react';

import { Box, Container, Stack } from '@/components/common/mantine';
import { ShapeWithGlow } from '@/components/common/ornaments/ShapeWithGlow';

import { BlogHeader } from '@/components/views/blog/list/BlogHeader';
import { BlogPostsSection } from '@/components/views/blog/list/BlogPostsSection';

import { getBlogCategories } from '@/lib/blog/getBlogCategories';
import { getBlogPosts } from '@/lib/blog/getBlogPosts';

async function Blog() {
  const blogPostsPromise = getBlogPosts();
  const blogCategoriesPromise = getBlogCategories();

  const [{ data: blogPostsData }, { data: blogCategoriesData }] =
    await Promise.all([blogPostsPromise, blogCategoriesPromise]);

  return (
    <Container size="md" mt={32}>
      <Stack spacing={160}>
        <Box sx={{ position: 'relative' }}>
          <BlogHeader
            featuredPost={(blogPostsData && blogPostsData[0]) ?? {}}
          />
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
            <ShapeWithGlow size={120} shape="secondShape" />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 16,
            }}
          >
            <ShapeWithGlow size={90} shape="firstShape" />
          </Box>
        </Box>

        <BlogPostsSection
          posts={blogPostsData}
          categories={blogCategoriesData}
        />
      </Stack>
    </Container>
  );
}
export default Blog;
