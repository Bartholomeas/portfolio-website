'use client';

import { createStyles, rem } from '@mantine/core';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Box } from '../mantine';

const useStyles = createStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(16),
    padding: 0,
    overflow: 'auto',

    '& p ': {
      color: theme.other.textSecondary,
      fontSize: theme.fontSizes.sm,
      margin: 0,
    },
    '& img': {
      height: 'auto',
      width: '100%',
      objectFit: 'contain',
    },
  },
}));

type Props = {
  content: string;
};

export function MarkdownContent({ content }: Props) {
  const { classes } = useStyles();

  return (
    <Box className={classes.content}>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </Box>
  );
}
