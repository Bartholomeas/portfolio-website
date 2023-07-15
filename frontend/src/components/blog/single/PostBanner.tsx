import { createStyles } from '@mantine/core';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

import { BlogPostCategoryBadge } from '../list/BlogPostCategoryBadge';
import { Box, Group, Stack } from '@/components/common/mantine';
import { Text } from '@/components/common/mantine/Text';
import { Title } from '@/components/common/mantine/Title';

import { Post } from '@/types';
import { API_URL } from '@/utils/variables';

const useStyles = createStyles(() => ({
  image: {
    objectFit: 'cover',
    width: '100%',
  },
}));

type Props = {
  data: Post | undefined;
};

export function PostBanner({ data }: Props) {
  const { classes } = useStyles();
  const {
    slug,
    publishedAt,
    readTime,
    headerImg,
    title,
    shortDescription,
    blogCategories,
  } = data ?? {};
  console.log(blogCategories);
  const imgUrl = headerImg?.url ?? '';

  return (
    <Stack>
      <Stack spacing={8}>
        <Title order={1} textColor="primary">
          {title}
        </Title>
        <Text textColor="textPrimary">{shortDescription}</Text>
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
          src={`${API_URL}${imgUrl}` ?? '/'}
          alt={`${slug}-photo` ?? '/'}
          fill
          loading="lazy"
          className={classes.image}
        />
      </Box>

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
        <Group>
          <Text textColor="textSecondary" size="md">
            {dayjs(publishedAt).format('DD.MM.YYYY')}
          </Text>
          <Text textColor="textSecondary" size="md">
            ~ {readTime} min
          </Text>
        </Group>
      </Group>
    </Stack>
  );
}
