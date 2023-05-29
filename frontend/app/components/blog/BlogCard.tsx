import React from 'react';
import dayjs from 'dayjs';

import { Badge, Box, Group, Stack, createStyles } from '@mantine/core';

import Image from 'next/image';

import { IconArrowRight } from '@tabler/icons-react';
import { Card } from '../common/mantine/Card';
import { Title } from '../common/mantine/Title';
import { Text } from '../common/mantine/Text';
import { ButtonLink } from '../common/mantine/Button';

const useStyles = createStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing.md,
    [theme.fn.largerThan('sm')]: {
      gridTemplateColumns: '1fr 3fr',
    },
  },
}));

export function BlogCard() {
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
            src="/blog.jpg"
            fill
            loading="lazy"
            alt="Zdjęcie główne postu="
          />
        </Box>
        <Stack justify="space-between">
          <BlogCardTopGroup />
          <Stack>
            <Text textColor="textPrimary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit id
              quis doloremque possimus dolores, optio saepe, fugiat qui
              excepturi error laboriosam iusto dolor ullam voluptate
              perspiciatis exercitationem veritatis eius vitae.
            </Text>
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

function BlogCardTopGroup() {
  return (
    <Group position="apart" align="start">
      <Stack spacing={0}>
        <Title order={3} textColor="primary">
          Tytuł wpisu
        </Title>
        <Group>
          <Text textColor="textSecondary" size="sm">
            {dayjs().format('DD.MM.YYYY')}
          </Text>
          <Text textColor="textSecondary" size="sm">
            ~ 5 min
          </Text>
        </Group>
      </Stack>
      <Group spacing={4}>
        <Badge color="blue" variant="light" size="xs">
          javascript
        </Badge>
        <Badge color="red" variant="light" size="xs">
          html
        </Badge>
      </Group>
    </Group>
  );
}
