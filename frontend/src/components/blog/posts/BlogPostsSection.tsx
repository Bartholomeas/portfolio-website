'use client';

import React, { Suspense, useState } from 'react';

import { Post } from '@/types';
import { useSearchParams } from 'next/navigation';

import { Loader } from '@mantine/core';

import { Stack } from '@/components/common/mantine';
import { SectionHeading } from '@/components/common/design/SectionHeading';

import { BlogPostsFilters } from './BlogPostsFilters';
import { BlogCard } from '../BlogCard';
import { useDebouncedState } from '@mantine/hooks';

type BlogPostsSectionProps = {
  posts: Post[] | undefined;
};
export function BlogPostsSection({ posts }: BlogPostsSectionProps) {
  const [postsArr, setPostsArr] = useState<Post[] | undefined>(posts);
  const [value, setValue] = useDebouncedState('', 400);
  const filteredPosts = posts;

  return (
    <section>
      <Stack>
        <SectionHeading
          title="Wszystkie wpisy"
          subtext="Z pewnością znajdziesz coś dla siebie, sprawdź"
          centered
        />
        <Stack spacing={32}>
          <Suspense fallback={<Loader />}>
            <BlogPostsFilters onChange={setValue} />
          </Suspense>

          {posts?.map((post) => (
            <BlogCard
              key={post.id}
              title={post?.title}
              shortDescription={post?.shortDescription}
              createdAt={post?.publishedAt}
              readTime={post?.readTime}
              imgSrc={post?.headerImg?.url}
              categories={post?.blogCategories}
            />
          ))}
        </Stack>
      </Stack>
    </section>
  );
}
