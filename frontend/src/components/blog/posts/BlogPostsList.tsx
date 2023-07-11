import React, { useEffect } from 'react';
import { Stack } from '@mantine/core';
import { Post } from '@/types';
import { BlogCard } from '../BlogCard';
import { useFiltersCtx } from '@/components/templates/FiltersContextProvider';

type BlogPostsListProps = {
  posts: Post[] | undefined;
};

export function BlogPostsList({ posts }: BlogPostsListProps) {
  const { searchParams, filterArray, filteredData } = useFiltersCtx();

  useEffect(() => {
    if (filterArray) filterArray(['Search', 'Categories'], posts, 'title');
  }, [searchParams]);

  return (
    <Stack spacing={32}>
      {filteredData &&
        filteredData?.map((post) => (
          <BlogCard
            key={post.id}
            title={post?.title}
            shortDescription={post?.shortDescription}
            publishedAt={post?.publishedAt}
            readTime={post?.readTime}
            imgSrc={post?.headerImg?.url}
            categories={post?.blogCategories}
          />
        ))}
    </Stack>
  );
}
