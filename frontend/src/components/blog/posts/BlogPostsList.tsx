import React, { useEffect } from 'react';
import { Stack } from '@mantine/core';
import { Post } from '@/types';
import { useFiltersCtx } from '@/components/templates/FiltersContextProvider';
import { BlogCard } from '../BlogCard';

type BlogPostsListProps = {
  posts: Post[] | undefined;
};

export function BlogPostsList({ posts }: BlogPostsListProps) {
  const { searchParams, filterArray, filteredData } = useFiltersCtx();

  useEffect(() => {
    if (filterArray) filterArray(['Search', 'Categories'], posts);
  }, [searchParams]);
  console.log(posts);
  return (
    <Stack spacing={32}>
      {filteredData &&
        filteredData?.map((post) => <BlogCard key={post.id} post={post} />)}
    </Stack>
  );
}
