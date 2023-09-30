'use client';

import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { SimpleGrid } from '@/components/common/mantine';

import { BlogCard } from './BlogCard';

import { useBlogPostsFilters } from '@/hooks/usePostsFilters';

import { Post } from '@/types';

type BlogPostsListProps = {
  posts: Post[] | undefined;
};

export function BlogPostsList({ posts }: BlogPostsListProps) {
  const { filteredPosts } = useBlogPostsFilters(posts);

  return (
    <SimpleGrid
      cols={1}
      breakpoints={[
        { minWidth: 'sm', cols: 2 },
        { minWidth: 'lg', cols: 3 },
      ]}
    >
      {filteredPosts &&
        filteredPosts.map((post) => <BlogCard key={post.uuid} post={post} />)}
    </SimpleGrid>
  );
}
