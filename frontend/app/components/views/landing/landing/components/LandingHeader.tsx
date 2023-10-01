import { createStyles, rem } from '@mantine/core';

import React from 'react';

import { Stack } from '@/components/common/mantine';
import { Title } from '@/components/common/mantine/Title';
import { AccentSpan } from '@/components/common/special/AccentSpan';

import { LandingAnimationReveal } from './LandingAnimationReveal';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(48),

    [theme.fn.largerThan('md')]: {
      fontSize: rem(64),
    },
  },
  secondText: {
    color: theme.other.textSeconary,
    lineHeight: 1,
    fontWeight: 600,
    fontSize: rem(24),
    [theme.fn.largerThan('md')]: {
      fontSize: rem(24),
    },
  },
}));

export function LandingHeader() {
  const { classes } = useStyles();
  return (
    <Stack spacing={16}>
      <LandingAnimationReveal>
        <Title
          order={1}
          fw={900}
          lh={1}
          textColor="white"
          className={classes.title}
        >
          Cześć, tu Bartosz Stefaniak<AccentSpan>.</AccentSpan>
        </Title>
      </LandingAnimationReveal>
      <LandingAnimationReveal>
        <Title
          order={2}
          textColor="textSecondary"
          className={classes.secondText}
        >
          Jestem <AccentSpan>Front-end developerem </AccentSpan> i{' '}
          <AccentSpan>grafikiem</AccentSpan>.
        </Title>
      </LandingAnimationReveal>
    </Stack>
  );
}
