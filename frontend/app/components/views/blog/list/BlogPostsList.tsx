import React, { useEffect } from 'react';

import { SimpleGrid } from '@/components/common/mantine';
import { useFiltersCtx } from '@/components/templates/FiltersContextProvider';

import { BlogCard } from './BlogCard';

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
    <SimpleGrid
      cols={1}
      breakpoints={[
        { minWidth: 'sm', cols: 2 },
        { minWidth: 'lg', cols: 3 },
      ]}
    >
      {filteredData &&
        filteredData.map((post) => <BlogCard key={post.id} post={post} />)}
    </SimpleGrid>
  );
}