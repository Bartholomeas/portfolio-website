'use client';

import { createStyles, rem } from '@mantine/core';

import dayjs from 'dayjs';
import React from 'react';

import { Container, Group, Stack } from '../mantine';
import { Text } from '../mantine/Text';

import { FooterNewsletterSection } from './FooterNewsletterSection';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <Stack spacing={0} mt={120}>
      <FooterNewsletterSection />
      <div className={classes.footer}>
        <Container className={classes.inner}>
          <Text size="sm" textColor="textSecondary">
            Bartosz Stefaniak Ⓒ {dayjs(new Date()).format('YYYY')}
          </Text>
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              rel="noreferrer"
            >
              <Text size="sm" fw={400} textColor="textSecondary">
                Polityka prywatności
              </Text>
            </a>
          </Group>
        </Container>
      </div>
    </Stack>
  );
}
