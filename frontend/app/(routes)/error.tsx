'use client';

import { createStyles, rem } from '@mantine/core';
import Error from 'next/error';
import React, { useEffect } from 'react';

import { Container, Group } from '@/_components/common/mantine';
import { Button } from '@/_components/common/mantine/Button';
import { Text } from '@/_components/common/mantine/Text';
import { Title } from '@/_components/common/mantine/Title';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>Error</div>
      <Title className={classes.title}>Ajajaj, coś poszło nie tak</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Nie martw się, już pracujemy nad tym.
      </Text>
      <Group position="center">
        <Button onClick={() => reset()} variant="subtle" size="md">
          Spróbuj ponownie
        </Button>
      </Group>
    </Container>
  );
}
