import { Stack } from '@mantine/core';
import React from 'react';
import { BlogCard } from '../BlogCard';
import { getAllPosts } from '../../../services/services';
import { useFetch } from '../../../services/useFetch';
import { Post } from '../../../types';

export function BlogPostsList() {
  const { data, isLoading } = useFetch<Post>(getAllPosts);
  console.log(data);
  return (
    <Stack spacing={32}>
      {data?.map(({ id, attributes: post }) => (
        <BlogCard
          key={id}
          title={post?.title}
          content={post?.content}
          createdAt={post?.publishDate}
          readTime={post?.readTime}
          imgSrc="/blog.jpg"
          categories={post?.blogCategories}
        />
      ))}
    </Stack>
  );
}
