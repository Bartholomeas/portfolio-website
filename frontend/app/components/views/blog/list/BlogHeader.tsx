'use client';

import { createStyles, rem } from '@mantine/core';

import { Stack } from '@/components/common/mantine';
import { Title } from '@/components/common/mantine/Title';
import { AccentSpan } from '@/components/common/special/AccentSpan';

import { BlogCard } from './BlogCard';

import { Post } from '@/types';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'grid',
    gridTemplateColumns: '2fr 1.5fr',
    justifyContent: 'space-between',
    gap: rem(24),
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('md')]: {
      gridTemplateColumns: '1fr',
    },
  },

  content: {
    maxWidth: rem(480),

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: rem(44),

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  listItem: {
    color: theme.other.textPrimary,
    fontSize: theme.fontSizes.md,
  },
}));

type BlogHeaderProps = {
  featuredPost: Post | undefined;
};
export function BlogHeader({ featuredPost }: BlogHeaderProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.inner}>
      <Stack className={classes.content} miw={300} spacing={8}>
        <Title order={1} size={64} lh={1}>
          <AccentSpan>Front-endowy</AccentSpan> i fajowy blog
        </Title>
        <Title textColor="textSecondary" order={2}>
          Front-end, design, kawa i szeroko pojęte IT. <br />
          Tego Ci tutaj napewno nie zabraknie!
        </Title>
      </Stack>

      <BlogCard post={featuredPost} />
    </div>
  );
}
