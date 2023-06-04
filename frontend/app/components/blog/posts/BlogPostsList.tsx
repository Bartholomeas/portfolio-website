import { Stack } from '@mantine/core';
import React from 'react';
import { BlogCard } from '../BlogCard';

export function BlogPostsList() {
  return (
    <Stack>
      <BlogCard
        title="Testowy wpis"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui deserunt doloribus, corrupti quis enim excepturi sequi sunt nobis. Quos debitis nemo fugiat, labore iusto Quos debitis nemo fugiat, labore iusto nesciunt atque!"
        imgSrc="/blog.jpg"
        createdAt="2021-08-01"
        readTime={5}
        categories={['frameworki', 'javascript']}
      />
    </Stack>
  );
}
