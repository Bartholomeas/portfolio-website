import { Stack } from '@mantine/core';
import React, { useEffect } from 'react';
import { BlogCard } from '../BlogCard';
import { useFiltersCtx } from '@/components/templates/FiltersContextProvider';
import { Post } from '@/types';

type BlogPostsListProps = {
  posts: Post[] | undefined;
};

export function BlogPostsList({ posts }: BlogPostsListProps) {
  const { searchParams, filterArray, filteredData } = useFiltersCtx();

  useEffect(() => {
    if (filterArray) filterArray(['Search', 'Categories'], posts);
  }, [searchParams]);

  return (
    <Stack spacing={32}>
      {filteredData &&
        filteredData?.map((post) => <BlogCard key={post.id} post={post} />)}
    </Stack>
  );
}
