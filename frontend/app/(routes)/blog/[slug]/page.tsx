import React from 'react';

import { Box, Stack } from '@/components/common/mantine';
import { Breadcrumbs } from '@/components/common/mantine/Breadcrumbs';

import { BlogPostContent } from '@/components/views/blog/single/BlogPostContent';
import { BlogPostHeaderImg } from '@/components/views/blog/single/BlogPostHeaderImg';

import type { Metadata } from 'next';

import { getBlogPosts } from '@/lib/blog/getBlogPosts';
import { getSingleBlogPost } from '@/lib/blog/getSingleBlogPost';

import { createQueryClient } from '@/utils/createQueryClient';

const queryClient = createQueryClient();

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // const { data } = use(
  //   queryClient(`blogPost-${params.slug}`, () => getSingleBlogPost(params.slug))
  // );
  const singleBlogPostData = getSingleBlogPost(params.slug);
  const { data } = await singleBlogPostData;

  return {
    title: data.title,
    description: data.shortDescription,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const singleBlogPostData = queryClient(`blogPost-${params.slug}`, () =>
    getSingleBlogPost(params.slug)
  );
  const { data } = await singleBlogPostData;

  const items = [
    { title: 'Blog', href: '/blog' },
    { title: data?.title ?? '' },
  ];

  return (
    <Stack maw={1000} mx="auto" px={16}>
      <Breadcrumbs items={items} />

      <Box
        w="100%"
        h="auto"
        sx={{
          aspectRatio: '16/8',
          position: 'relative',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <BlogPostHeaderImg imgUrl={data.headerImg.url} imgAlt="alt text" />
      </Box>
      <BlogPostContent data={data} />
    </Stack>
  );
}

export async function generateStaticParams() {
  const blogPostsPromise = getBlogPosts();
  const { data } = await blogPostsPromise;

  return data.map((post) => ({ slug: post.slug }));
}
