import React, { useEffect, useState } from 'react';
import { Stack } from '@mantine/core';
import { Post } from '@/types';
import { BlogCard } from '../BlogCard';
import { useFiltersCtx } from '@/components/templates/FiltersContextProvider';

type BlogPostsListProps = {
  posts: Post[] | undefined;
};

export function BlogPostsList({ posts }: BlogPostsListProps) {
  const { searchParams, filterArray } = useFiltersCtx();

  const [currentPosts, setCurrentPosts] = useState<Post[] | undefined>(posts);

  useEffect(() => {
    const filteredData =
      filterArray && filterArray<Post>('Search', posts, 'title');
    setCurrentPosts(filteredData);
  }, [searchParams]);

  return (
    <Stack spacing={32}>
      {currentPosts &&
        currentPosts?.map((post) => (
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
