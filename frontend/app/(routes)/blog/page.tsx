import React from 'react';

import { Container, Stack } from '@/components/common/mantine';
import { BlogHeader } from '@/components/views/blog/list/BlogHeader';
import { BlogPostsSection } from '@/components/views/blog/list/BlogPostsSection';
import { BlogShapesWrapper } from '@/components/views/blog/list/BlogShapesWrapper';

import { getBlogCategories } from '@/lib/blog/getBlogCategories'; 
import { getBlogPosts } from '@/lib/blog/getBlogPosts';

async function Blog() {
  const blogPostsPromise = getBlogPosts();
  const blogCategoriesPromise = getBlogCategories();

  const [{ data: blogPostsData }, { data: blogCategoriesData }] =
    await Promise.all([blogPostsPromise, blogCategoriesPromise]);

  return (
    <Container size="lg" mt={32}>
      <Stack spacing={160} sx={{ position: 'relative' }}>
        <BlogShapesWrapper>
          <BlogHeader
            featuredPost={(blogPostsData && blogPostsData[0]) ?? {}}
          />
        </BlogShapesWrapper>
        <BlogPostsSection
          posts={blogPostsData}
          categories={blogCategoriesData}
        />
      </Stack>
    </Container>
  );
}
export default Blog;
