'use client';

import { createStyles, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

import { BlogCard } from './BlogCard';

import { Box, List, Stack, ThemeIcon } from '@/_components/common/mantine';

import { Text } from '@/_components/common/mantine/Text';
import { Title } from '@/_components/common/mantine/Title';

import { Post } from '@/_types';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: rem(24),
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: rem(44),

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  listItem: {
    color: theme.other.textPrimary,
    fontSize: theme.fontSizes.md,
  },

  highlight: {
    background: `linear-gradient(to right, ${theme.other.primary}, ${theme.other.secondary})`,
    fontWeight: 700,
    whiteSpace: 'nowrap',
    backgroundClip: 'text',
    paddingBottom: rem(4),
    WebkitTextFillColor: 'transparent',
  },
}));

type BlogHeaderProps = {
  featuredPost: Post | undefined;
};
export function BlogHeader({ featuredPost }: BlogHeaderProps) {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.inner}>
        <Stack className={classes.content}>
          <Title order={1}>
            Witaj na blogu! <br />{' '}
            <span className={classes.highlight}>Front-end</span>, kawa, słabe
            żarty i <span className={classes.highlight}>web design</span>.{' '}
          </Title>
          <Text textColor="textSecondary" size="md">
            Zagadnienia ze świata front-endu są tutaj pierwszym planie, ale
            czasami zdarza się, że odwiedzamy inne rejony świata technologii.
            Zaparz kawę, usiądź wygodnie i zacznijmy tę przygodę!
          </Text>

          <List
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={rem(12)} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item className={classes.listItem}>
              <b>Spostrzeżenia</b> – Dzielę się swoimi spotrzeżeniami i
              doświadczeniami, zachęcam do dyskusji, możemy się od siebie wiele
              nauczyć!
            </List.Item>
            <List.Item className={classes.listItem}>
              <b>Ciekawostki</b> – Czy wiedziałeś, że orzeszkom ziemnym dalej do
              orzechów niż do... no, dowiesz się tego z bloga
            </List.Item>
            <List.Item className={classes.listItem}>
              <b>Kawa i kodowanie</b> – Moje dwa ulubione &quot;K&quot;, no bo
              jak to tak, bez kawy?
            </List.Item>
          </List>
        </Stack>
        <Box>
          <BlogCard post={featuredPost} />
        </Box>
      </div>
    </div>
  );
}
