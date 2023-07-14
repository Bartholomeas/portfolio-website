'use client';

import { Stack } from '@mantine/core';
import React, { Suspense, use } from 'react';

import { Text } from '@/components/common/mantine';
import { Breadcrumbs } from '@/components/common/mantine/Breadcrumbs';
import { FetchResponse, Post } from '@/types';
// import { createQueryClient } from '@/utils/createQueryClient';
import { API_URL } from '@/utils/variables';

async function getBlogPost(slug: string): Promise<FetchResponse<Post>> {
  try {
    const res = await fetch(`${API_URL}/api/blog-posts/${slug}`);
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error('getBlogPost: error');
  }
}

// const queryClient = createQueryClient();

export default function Page({ params }: { params: { slug: string } }) {
  // const { data } = use(queryClient('blogPost', () => getBlogPost(params.slug)));
  const { data } = use(getBlogPost(params.slug));
  console.log(data);
  const items = [{ title: 'Blog', href: '/blog' }, { title: data.title ?? '' }];

  return (
    <Suspense fallback={<p>loading..</p>}>
      <Stack>
        <Breadcrumbs items={items} />
        <Text>page {params.slug}</Text>
      </Stack>
    </Suspense>
  );
}
