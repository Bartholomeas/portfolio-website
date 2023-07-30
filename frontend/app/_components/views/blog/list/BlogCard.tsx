




import { Link } from '@/_components/common/Link';
import {
  ActionIcon,
  Box,
  Card,
  Divider,
  Group,
  Stack,
} from '@/_components/common/mantine';
import { ButtonLink } from '@/_components/common/mantine/Button';
import { Text } from '@/_components/common/mantine/Text';
import { Title } from '@/_components/common/mantine/Title';

import { Post } from '@/_types';

import {
  IconArrowRight,
  IconBookmark,
  IconHeart,
  IconShare,
} from '@tabler/icons-react';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

import { BlogPostCategoryBadge } from './BlogPostCategoryBadge';

type BlogCardProps = {
  post: Post | undefined;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card withBorder pb={8} pt={0}>
      <Stack justify="space-between" h="100%">
        <Card.Section>
          <Link href={`/blog/${post?.slug}`}>
            <Box
              w="100%"
              sx={{
                position: 'relative',
                aspectRatio: '16/9',
              }}
            >
              <Image
                src={`${post?.headerImg?.url ?? ''}`}
                alt={`${post?.title}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Link>
        </Card.Section>

        <Stack h="100%" spacing={16} justify="space-between">
          <Group spacing={4} align="center">
            {post?.blogCategories.map(({ code, name }) => (
              <BlogPostCategoryBadge
                key={`${code}-${post?.title}`}
                code={code}
                name={name}
              />
            ))}
          </Group>

          <Link href={`/blog/${post?.slug}`}>
            <Title order={3} textColor="primary">
              {post?.title}
            </Title>
          </Link>

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
            <Group spacing={8}>
              <Text ta="center" size="sm" textColor="textSecondary">
                {dayjs(post?.publishedAt).format('DD.MM.YYYY')},
              </Text>
              <Text size="sm" textColor="textSecondary">
                ~ {post?.readTime} min
              </Text>
            </Group>

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
