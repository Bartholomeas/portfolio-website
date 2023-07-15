'use client';

import { createStyles, Stack } from '@mantine/core';
import Image from 'next/image';
import React, { Suspense, use } from 'react';

import { Box } from '@/components/common/mantine';
import { Breadcrumbs } from '@/components/common/mantine/Breadcrumbs';
import { Text } from '@/components/common/mantine/Text';
import { Title } from '@/components/common/mantine/Title';
import { FetchResponse, Post } from '@/types';
import { createQueryClient } from '@/utils/createQueryClient';
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

const queryClient = createQueryClient();

const useStyles = createStyles(() => ({
  image: {
    objectFit: 'cover',
    width: '100%',
  },
}));

export default function Page({ params }: { params: { slug: string } }) {
  const { data } = use(
    queryClient(`blogPost-${params.slug}`, () => getBlogPost(params.slug))
  );
  const items = [
    { title: 'Blog', href: '/blog' },
    { title: data?.title ?? '' },
  ];

  console.log(`${API_URL}${data?.headerImg?.url.trim()}`);

  const { classes } = useStyles();

  return (
    <Stack w="100%" maw={800} mx="auto" px={16}>
      <Breadcrumbs items={items} />
      <Suspense fallback={<p>loading..</p>}>
        <Stack>
          <Stack spacing={8}>
            <Title order={2} textColor="primary">
              {data?.title}
            </Title>
            <Text textColor="textSecondary">{data?.shortDescription}</Text>
          </Stack>
          <Box
            w="100%"
            h="auto"
            sx={{
              aspectRatio: '16/8',
              position: 'relative',
            }}
          >
            <Image
              src={`${API_URL}${data?.headerImg?.url}` ?? '/'}
              alt={data?.title}
              fill
              loading="lazy"
              className={classes.image}
            />
          </Box>
          <Text>page {params.slug}</Text>
        </Stack>
      </Suspense>
    </Stack>
  );
}
