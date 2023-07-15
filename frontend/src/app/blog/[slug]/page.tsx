'use client';

import { Stack, TypographyStylesProvider } from '@mantine/core';

import React, { Suspense, use } from 'react';
import Markdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
import { PostBanner } from '@/components/blog/single/PostBanner';
import { Breadcrumbs } from '@/components/common/mantine/Breadcrumbs';

import { FetchResponse, Post } from '@/types';

import { createQueryClient } from '@/utils/createQueryClient';
import { API_TOKEN, API_URL } from '@/utils/variables';

async function getBlogPost(slug: string): Promise<FetchResponse<Post>> {
  try {
    const res = await fetch(`${API_URL}/api/blog-posts/${slug}`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    return res.json();
  } catch (err) {
    throw new Error('getBlogPost: error');
  }
}

const queryClient = createQueryClient();

export default function Page({ params }: { params: { slug: string } }) {
  const { data } = use(
    queryClient(`blogPost-${params.slug}`, () => getBlogPost(params.slug))
  );

  const items = [
    { title: 'Blog', href: '/blog' },
    { title: data?.title ?? '' },
  ];

  return (
    <Stack w="100%" maw={800} mx="auto" px={16}>
      <Breadcrumbs items={items} />
      <Suspense fallback={<p>loading..</p>}>
        <Stack>
          <PostBanner data={data} />
          <TypographyStylesProvider>
            <Markdown
              transformImageUri={(src) => `${API_URL}${src}`}
              remarkPlugins={[remarkGfm]}
            >
              {data?.content}
            </Markdown>
          </TypographyStylesProvider>
        </Stack>
      </Suspense>
    </Stack>
  );
}
