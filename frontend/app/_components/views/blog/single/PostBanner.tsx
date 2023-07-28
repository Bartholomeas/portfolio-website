import { Group, Stack } from '@mantine/core';
import dayjs from 'dayjs';

import React from 'react';

import { BlogPostCategoryBadge } from '../list/BlogPostCategoryBadge';

import { Text } from '@/_components/common/mantine/Text';
import { Title } from '@/_components/common/mantine/Title';
import { Post } from '@/_types';

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
            blogCategories.map(({ code, name }) => (
              <BlogPostCategoryBadge
                size="md"
                key={`${code}-${title}`}
                code={code}
                name={name}
              />
            ))}
        </Group>
      </Group>
      <Text textColor="textPrimary">{shortDescription}</Text>
    </Stack>
  );
}
