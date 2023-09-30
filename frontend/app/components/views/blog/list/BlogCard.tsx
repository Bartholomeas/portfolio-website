import {
  IconArrowRight,
  IconBookmark,
  IconHeart,
  IconShare,
} from '@tabler/icons-react';

import dayjs from 'dayjs';
import { motion } from 'framer-motion';

import Image from 'next/image';

import React from 'react';

import {
  ActionIcon,
  Box,
  Card,
  Divider,
  Group,
  Stack,
} from '@/components/common/mantine';
import { ButtonLink } from '@/components/common/mantine/Button';
import { Text } from '@/components/common/mantine/Text';
import { Title } from '@/components/common/mantine/Title';
import { Link } from '@/components/common/special/Link';

import { BlogPostCategoryBadge } from './BlogPostCategoryBadge';

import { Post } from '@/types';

type BlogCardProps = {
  post: Post | undefined;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card
      component={motion.div}
      withBorder
      pb={8}
      pt={0}
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
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
            {post?.blogCategories.map(({ uuid, code, name }) => (
              <BlogPostCategoryBadge key={uuid} code={code} name={name} />
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
