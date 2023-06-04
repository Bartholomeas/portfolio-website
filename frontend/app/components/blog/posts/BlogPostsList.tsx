import { Stack } from '@mantine/core';
import React from 'react';
import { BlogCard } from '../BlogCard';

const mockPostsArr = {
  title: 'Testowy wpis',
  content:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui deserunt doloribus, corrupti quis enim excepturi sequi sunt nobis. Quos debitis nemo fugiat, labore iusto Quos debitis nemo fugiat, labore iusto nesciunt atque!',
  imgSrc: '/blog.jpg',
  createdAt: '2021-08-01',
  readTime: 5,
  categories: ['frameworki', 'javascript'],
};

export function BlogPostsList() {
  return (
    <Stack spacing={32}>
      {new Array(10).fill(mockPostsArr).map((post) => (
        <BlogCard key={post.title} {...post} />
      ))}
    </Stack>
  );
}
