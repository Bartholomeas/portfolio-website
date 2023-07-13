import React from 'react';
import dayjs from 'dayjs';

import {
  IconBookmark,
  IconArrowRight,
  IconHeart,
  IconShare,
} from '@tabler/icons-react';
import Image from 'next/image';
import { createStyles, rem } from '@mantine/core';
import { API_URL } from '@/utils/variables';
import { Post } from '../../types';

import { Title } from '../common/mantine/Title';
import { Text } from '../common/mantine/Text';
import { ButtonLink } from '../common/mantine/Button';
import {
  ActionIcon,
  Box,
  Card,
  Divider,
  Group,
  Stack,
} from '../common/mantine';

import { BlogPostCategoryBadge } from './posts/BlogPostCategoryBadge';

const useStyles = createStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: rem(16),
    [theme.fn.largerThan('md')]: {
      gridTemplateColumns: '2fr 3fr',
    },
  },
  image: {
    objectFit: 'cover',
  },
}));

type BlogCardProps = {
  post: Post | undefined;
};

export function BlogCard({ post }: BlogCardProps) {
  const { classes } = useStyles();
  return (
    <Card p={0}>
      <div className={classes.grid}>
        <Card.Section>
          <Box
            mih={250}
            h="100%"
            sx={{
              position: 'relative',
            }}
          >
            {post && post.headerImg && post.headerImg.url && (
              <Image
                src={`${API_URL}${post.headerImg.url.trim()}`}
                alt={post.title ?? 'Image of blog post'}
                fill
                loading="lazy"
                className={classes.image}
              />
            )}
          </Box>
        </Card.Section>

        <Stack justify="space-between" p={16}>
          <Stack spacing={8}>
            <BlogCardTopGroup
              title={post?.title ?? ''}
              readTime={post?.readTime ?? 0}
              publishedAt={post?.publishedAt ?? ''}
            />
            <Text textColor="textSecondary">{post?.shortDescription}</Text>
            <ButtonLink
              href={`/blog/${post?.slug}`}
              sx={{ alignSelf: 'end' }}
              color="primary"
              variant="subtle"
              px={0}
              size="md"
              rightIcon={<IconArrowRight size={18} />}
            >
              Przeczytaj
            </ButtonLink>
          </Stack>
          <Stack>
            <Divider my={0} />
            <Group position="apart">
              <Group spacing={8}>
                <ActionIcon>
                  <IconHeart size="1.2rem" stroke={1.5} />
                </ActionIcon>
                <ActionIcon>
                  <IconBookmark size="1.2rem" stroke={1.5} />
                </ActionIcon>
                <ActionIcon>
                  <IconShare size="1.2rem" stroke={1.5} />
                </ActionIcon>
              </Group>
              <Group spacing={4} align="center">
                {post?.blogCategories &&
                  post?.blogCategories.map(({ category }) => (
                    <BlogPostCategoryBadge
                      key={`${category}-${post?.title}`}
                      category={category}
                    />
                  ))}
              </Group>
            </Group>
          </Stack>
        </Stack>
      </div>
    </Card>
  );
}

type BlogCardTopGroupProps = {
  title: string;
  publishedAt: string;
  readTime: number;
};
function BlogCardTopGroup({
  title,
  publishedAt,
  readTime,
}: BlogCardTopGroupProps) {
  return (
    <Stack spacing={8}>
      <Title order={2} fw={700} textColor="primary">
        {title}
      </Title>
      <Group align="end">
        <Text textColor="textSecondary" size="sm">
          {dayjs(publishedAt).format('DD.MM.YYYY')}
        </Text>
        <Text textColor="textSecondary" size="sm">
          ~ {readTime} min
        </Text>
      </Group>
    </Stack>
  );
}
