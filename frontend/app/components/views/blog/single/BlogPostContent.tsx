'use client';

import {
  Divider,
  Stack,
  TypographyStylesProvider,
} from '@/components/common/mantine';

import { Post } from '@/types';

import { createStyles, rem } from '@mantine/core';
import React from 'react';

import Markdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

import { BlogPostBanner } from './BlogPostBanner';

const useStyles = createStyles((theme) => ({
  postContent: {
    backgroundColor: theme.other.bgDark,
    borderRadius: rem(8),
    [theme.fn.largerThan('sm')]: {
      transform: 'translateY(-100px)',
    },
  },
}));

type Props = {
  data: Post;
};
export function BlogPostContent({ data }: Props) {
  const { classes } = useStyles();

  return (
    <Stack w="100%" maw={800} mx="auto" p={24} className={classes.postContent}>
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
    </Stack>
  );
}
