'use client';

import { createStyles, Stack } from '@mantine/core';

import {
  IconFlame,
  IconMail,
  IconMoodWink2,
  IconSend,
  IconUser,
} from '@tabler/icons-react';

import React from 'react';

import { Glow } from '@/components/common/design/Glow';
import { SectionHeading } from '@/components/common/design/SectionHeading';
import {
  Flex,
  Group,
  SimpleGrid,
  ThemeIcon,
} from '@/components/common/mantine';
import { Button } from '@/components/common/mantine/Button';
import { TextInput } from '@/components/common/mantine/TextInput';
import { Title } from '@/components/common/mantine/Title';

import { BlogCard } from './BlogCard';

import { Post } from '@/types';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.other.box,
    border: 0,
    overflow: 'none',
  },
  icon: {
    border: 0,
  },
  winkIcon: {
    transform: 'rotate(-20deg)',
  },
  flameOne: {
    transform: 'scaleX(-1) rotate(15deg) translateY(-45px)',
  },
  flameTwo: {
    transform: 'rotate(15deg) translateY(25px)',
  },
}));

type BlogFeaturedPostSectionProps = {
  featuredPost: Post;
};
export function BlogFeaturedPostSection({
  featuredPost,
}: BlogFeaturedPostSectionProps) {
  const { cx, classes } = useStyles();

  return (
    <Stack
      spacing={32}
      sx={{
        position: 'relative',
      }}
    >
      <Glow position={{ top: 50, left: 0, right: 0, bottom: 0 }} size={300} />
      <SectionHeading
        title="Najnowszy wpis"
        subtext="Koniecznie sprawdź"
        centered
      />

      <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
        <Stack h="100%" justify="space-between">
          <Flex
            align="center"
            justify="center"
            h="100%"
            direction="row"
            gap={16}
          >
            <ThemeIcon
              variant="outline"
              size={84}
              className={cx(classes.icon, classes.flameOne)}
            >
              <IconFlame size={64} />
            </ThemeIcon>
            <ThemeIcon
              variant="outline"
              size={96}
              className={cx(classes.icon, classes.winkIcon)}
            >
              <IconMoodWink2 size={96} />
            </ThemeIcon>
            <ThemeIcon
              variant="outline"
              size={80}
              className={cx(classes.icon, classes.flameTwo)}
            >
              <IconFlame size={80} />
            </ThemeIcon>
          </Flex>

          <Stack>
            <Title order={2} textColor="primary">
              Chcesz być na bieżąco z nowymi wpisami?
            </Title>
            <Title order={3} textColor="textPrimary">
              Zapisz się do newslettera
            </Title>

            <Stack spacing={8}>
              <Group spacing={4} noWrap>
                <TextInput
                  label="E-mail"
                  icon={<IconMail size={16} />}
                  w="100%"
                />
                <TextInput
                  label="Imie"
                  icon={<IconUser size={16} />}
                  w="100%"
                />
              </Group>
              <Button
                variant="outline"
                onClick={() => console.log('newsletter')}
                leftIcon={<IconSend size={16} />}
              >
                Zapisz się!
              </Button>
            </Stack>
          </Stack>
        </Stack>

        <Glow
          position={{ top: 50, left: 0, right: 0, bottom: 0 }}
          zIndex={-999}
          size={300}
        />
        <BlogCard post={featuredPost} />
      </SimpleGrid>
    </Stack>
  );
}
