import React from 'react';
import dayjs from 'dayjs';

import { Box, Group, Stack, createStyles } from '@mantine/core';

import Image from 'next/image';

import { IconArrowRight } from '@tabler/icons-react';

import { BlogCategory } from '../../types';

import { Card } from '../common/mantine/Card';
import { Title } from '../common/mantine/Title';
import { Text } from '../common/mantine/Text';
import { ButtonLink } from '../common/mantine/Button';

import { BlogPostCategoryBadge } from './posts/BlogPostCategoryBadge';

const useStyles = createStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing.xl,
    [theme.fn.largerThan('sm')]: {
      gridTemplateColumns: '1.5fr 3fr',
    },
  },
}));

type BlogCardProps = {
  title: string;
  shortDescription: string;
  createdAt: string;
  readTime: number;
  categories: BlogCategory[];
  imgSrc: string;
};

export function BlogCard({
  title,
  shortDescription,
  createdAt,
  readTime,
  categories,
  imgSrc,
}: BlogCardProps) {
  const { classes } = useStyles();

  return (
    <Card>
      <div className={classes.grid}>
        <Box
          sx={(theme) => ({
            position: 'relative',
            objectFit: 'cover',
            minHeight: 200,
            width: '100%',
            borderRadius: theme.radius.md,
            overflow: 'hidden',
          })}
        >
          <Image
            style={{ objectFit: 'cover' }}
            src={`http://localhost:1337${imgSrc}`}
            fill
            loading="lazy"
            alt="Zdjęcie główne postu="
          />
        </Box>
        <Stack justify="space-between">
          <BlogCardTopGroup
            title={title}
            categories={categories}
            readTime={readTime}
            createdAt={createdAt}
          />
          <Stack>
            <Text textColor="textPrimary">{shortDescription}</Text>
            <ButtonLink
              href="/blog/1"
              sx={{ alignSelf: 'end' }}
              color="primary"
              variant="subtle"
              size="md"
              rightIcon={<IconArrowRight size={18} />}
            >
              Przeczytaj
            </ButtonLink>
          </Stack>
        </Stack>
      </div>
    </Card>
  );
}

type BlogCardTopGroupProps = {
  title: string;
  createdAt: string;
  readTime: number;
  categories: BlogCategory[];
};
function BlogCardTopGroup({
  title,
  createdAt,
  readTime,
  categories,
}: BlogCardTopGroupProps) {
  return (
    <Group position="apart" align="start">
      <Stack spacing={8}>
        <Title order={2} fw={700} textColor="primary">
          {title}
        </Title>
        <Group>
          <Text textColor="textSecondary" size="md">
            {dayjs(createdAt).format('DD.MM.YYYY')}
          </Text>
          <Text textColor="textSecondary" size="md">
            ~ {readTime} min
          </Text>
        </Group>
      </Stack>
      <Group spacing={4}>
        {categories &&
          categories.map(({ category }) => {
            console.log(category);
            return <BlogPostCategoryBadge category={category} />;
          })}
      </Group>
    </Group>
  );
}
