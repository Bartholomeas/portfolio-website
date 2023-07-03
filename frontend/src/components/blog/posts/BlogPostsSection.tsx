'use client';

import React, { Suspense } from 'react';

import { Loader } from '@mantine/core';

import { useDebouncedState } from '@mantine/hooks';
import { Post } from '@/types';

import { Stack } from '@/components/common/mantine';
import { SectionHeading } from '@/components/common/design/SectionHeading';

import { BlogPostsFilters } from './BlogPostsFilters';
import { BlogCard } from '../BlogCard';

type BlogPostsSectionProps = {
  posts: Post[] | undefined;
};
export function BlogPostsSection({ posts }: BlogPostsSectionProps) {
  // const [postsArr, setPostsArr] = useState<Post[] | undefined>(posts);
  const [value, setValue] = useDebouncedState('', 400);
  console.log(value);
  // const filteredPosts = posts;

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
              publishedAt={post?.publishedAt}
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
