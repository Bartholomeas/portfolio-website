import dayjs from 'dayjs';
import React from 'react';

import { BlogPostCategoryBadge } from '../list/BlogPostCategoryBadge';

import { Group, Stack } from '@/components/common/mantine';
import { Text } from '@/components/common/mantine/Text';
import { Title } from '@/components/common/mantine/Title';

import { Post } from '@/types';

type Props = {
  data: Post | undefined;
};

export function PostBanner({ data }: Props) {
  const { publishedAt, readTime, title, shortDescription, blogCategories } =
    data ?? {};

  return (
    <Stack spacing={8}>
      <Group position="apart" w="100%">
        <Text textColor="textSecondary" size="md">
          {dayjs(publishedAt).format('DD.MM.YYYY')}
        </Text>
        <Text textColor="textSecondary" size="md">
          ~ {readTime} min
        </Text>
      </Group>
      <Title order={1} textColor="primary">
        {title}
      </Title>
      <Group w="100%" position="apart">
        <Group spacing={4} align="center">
          {blogCategories &&
            blogCategories.map(({ category }) => (
              <BlogPostCategoryBadge
                size="md"
                key={`${category}-${title}`}
                category={category}
              />
            ))}
        </Group>
      </Group>
      <Text textColor="textPrimary">{shortDescription}</Text>
    </Stack>
  );
}
