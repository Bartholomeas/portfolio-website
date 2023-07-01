'use client';

import React from 'react';

import { Post } from '@/types';

import { BlogPostsFilters } from './BlogPostsFilters';
import { BlogCard } from '../BlogCard';

import { Stack } from '@/components/common/mantine';
import { SectionHeading } from '@/components/common/design/SectionHeading';

type BlogPostsSectionProps = {
  posts: Post[] | undefined;
};
export function BlogPostsSection({ posts }: BlogPostsSectionProps) {
  console.log(posts);
  return (
    <section>
      <Stack>
        <SectionHeading
          title="Wszystkie wpisy"
          subtext="Z pewnością znajdziesz coś dla siebie, sprawdź"
          centered
        />
        <Stack spacing={96}>
          <BlogPostsFilters />

          {posts?.map((post) => (
            <BlogCard
              key={post.id}
              title={post?.title}
              shortDescription={post?.shortDescription}
              createdAt={post?.publishedDate}
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
