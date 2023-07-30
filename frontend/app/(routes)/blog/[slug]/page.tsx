'use client';

import {
  createStyles,
  rem,
  Stack,
  TypographyStylesProvider,
} from '@mantine/core';

import Image from 'next/image';

import React, { Suspense, use } from 'react';

import Markdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

import { Box, Divider } from '@/_components/common/mantine';
import { Breadcrumbs } from '@/_components/common/mantine/Breadcrumbs';
import { BlogPostBanner } from '@/_components/views/blog/single/BlogPostBanner';

import { FetchResponse, Post } from '@/_types';

import { createQueryClient } from '@/_utils/createQueryClient';
import { API_TOKEN, API_URL } from '@/_utils/variables';

const useStyles = createStyles((theme) => ({
  image: {
    objectFit: 'cover',
    width: '100%',
  },

  postContent: {
    backgroundColor: theme.other.bgDark,
    borderRadius: rem(8),
    [theme.fn.largerThan('sm')]: {
      transform: 'translateY(-100px)',
    },
  },
}));

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
  const { classes } = useStyles();

  const items = [
    { title: 'Blog', href: '/blog' },
    { title: data?.title ?? '' },
  ];
  const imgUrl = data?.headerImg?.url ?? '';

  return (
    <Stack maw={1000} mx="auto" px={16}>
      <Breadcrumbs items={items} />

      <Box
        w="100%"
        h="auto"
        sx={{
          aspectRatio: '16/8',
          position: 'relative',
          borderRadius: rem(8),
          overflow: 'hidden',
        }}
      >
        <Image
          src={`${imgUrl}` ?? '/'}
          alt={`${data?.slug}-blog-photo`}
          fill
          loading="lazy"
          className={classes.image}
        />
      </Box>
      <Stack
        w="100%"
        maw={800}
        mx="auto"
        p={24}
        className={classes.postContent}
      >
        <Suspense fallback={<p>loading..</p>}>
          <BlogPostBanner data={data} />
          <Divider />

          <TypographyStylesProvider>
            <Markdown
              // transformImageUri={(src) => `${API_URL}${src}`}
              remarkPlugins={[remarkGfm]}
            >
              {data?.content}
            </Markdown>
          </TypographyStylesProvider>
        </Suspense>
      </Stack>
    </Stack>
  );
}
