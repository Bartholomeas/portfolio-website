import { Image } from '@mantine/core';
import {
  IconArrowRight,
  IconBookmark,
  IconHeart,
  IconShare,
} from '@tabler/icons-react';
import dayjs from 'dayjs';
import React from 'react';

import { BlogPostCategoryBadge } from './BlogPostCategoryBadge';

import Link from '@/components/common/Link';
import {
  ActionIcon,
  Card,
  Divider,
  Group,
  Stack,
} from '@/components/common/mantine';
import { ButtonLink } from '@/components/common/mantine/Button';
import { Text } from '@/components/common/mantine/Text';
import { Title } from '@/components/common/mantine/Title';

import { Post } from '@/types';
import { API_URL } from '@/utils/variables';

type BlogCardProps = {
  post: Post | undefined;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card withBorder pb={8} pt={0}>
      <Stack justify="space-between" h="100%">
        <Card.Section>
          <Link href={`/blog/${post?.slug}`}>
            <Image src={`${API_URL}${post?.headerImg.url}`} height={180} />
          </Link>
        </Card.Section>

        <Stack h="100%" spacing={16}>
          <Group spacing={4} align="center">
            {post?.blogCategories &&
              post?.blogCategories.map(({ category }) => (
                <BlogPostCategoryBadge
                  key={`${category}-${post?.title}`}
                  category={category}
                />
              ))}
          </Group>

          <Title order={3} textColor="primary">
            {post?.title}
          </Title>

          <Text textColor="textPrimary" size="sm">
            {post?.shortDescription}
          </Text>
          <ButtonLink
            href={`/blog/${post?.slug}`}
            variant="subtle"
            sx={{ alignSelf: 'end' }}
            compact
            rightIcon={<IconArrowRight size={16} />}
          >
            Przeczytaj
          </ButtonLink>
        </Stack>
        <Stack spacing={8}>
          <Divider />
          <Group position="apart">
            <Text size="sm" textColor="textSecondary">
              {dayjs(post?.publishedAt).format('DD.MM.YYYY')}, ~{' '}
              {post?.readTime}
              min
            </Text>
            <Group spacing={8} mr={0}>
              <ActionIcon>
                <IconHeart size="1rem" />
              </ActionIcon>
              <ActionIcon>
                <IconBookmark size="1rem" />
              </ActionIcon>
              <ActionIcon>
                <IconShare size="1rem" />
              </ActionIcon>
            </Group>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
}
