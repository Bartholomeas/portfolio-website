import React from 'react';
import dayjs from 'dayjs';

import { Image, createStyles, rem } from '@mantine/core';

// import Image from 'next/image';

import { IconArrowRight, IconHeart, IconShare } from '@tabler/icons-react';

import { BlogCategory } from '../../types';

import { Title } from '../common/mantine/Title';
import { Text } from '../common/mantine/Text';
import { Button, ButtonLink } from '../common/mantine/Button';
import { ActionIcon, Box, Card, Group, Stack } from '../common/mantine';

import { BlogPostCategoryBadge } from './posts/BlogPostCategoryBadge';
import { IconBookmark } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing.xl,
    [theme.fn.largerThan('sm')]: {
      gridTemplateColumns: '1.5fr 3fr',
    },
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
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
    // <Card>
    //   <Card.Section mb="sm">
    //     <Image src={'/blog.jpg'} alt={title} height={250} />
    //   </Card.Section>

    //   {/* <BlogPostCategoryBadgy>javascript</BlogPostCategoryBadgy> */}

    //   <Text fw={700} mt="xs">
    //     {title}
    //   </Text>

    //   <Group mt="lg">
    //     {/* <Avatar src={author.image} radius="sm" /> */}
    //     <div>
    //       <Text fw={500}>Manuel</Text>
    //       <Text fz="xs" c="dimmed">
    //         {shortDescription}
    //       </Text>
    //     </div>
    //   </Group>

    //   <Card.Section className={classes.footer}>
    //     <Group position="apart">
    //       <Text fz="xs" c="dimmed">
    //         {title}
    //       </Text>
    //       <Group spacing={0}>
    //         <ActionIcon>
    //           <IconHeart size="1.2rem" stroke={1.5} />
    //         </ActionIcon>
    //         <ActionIcon>
    //           <IconBookmark size="1.2rem" stroke={1.5} />
    //         </ActionIcon>
    //         <ActionIcon>
    //           <IconShare size="1.2rem" stroke={1.5} />
    //         </ActionIcon>
    //       </Group>
    //     </Group>
    //   </Card.Section>
    // </Card>
    <Card>
      <div className={classes.grid}>
        <Card.Section>
          <Box
            sx={(theme) => ({
              position: 'relative',
              objectFit: 'cover',
              minHeight: 200,
              height: '100%',
              width: '100%',
              borderRadius: theme.radius.md,
              overflow: 'hidden',
            })}
          >
            <Image
              style={{ objectFit: 'cover' }}
              src={`http://localhost:1337${imgSrc}`}
              // fill
              // loading="lazy"
              alt={title}
            />
          </Box>
        </Card.Section>
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
          categories.map(({ category }, index) => (
            <BlogPostCategoryBadge
              key={`${category}-${index}`}
              category={category}
            />
          ))}
      </Group>
    </Group>
  );
}
