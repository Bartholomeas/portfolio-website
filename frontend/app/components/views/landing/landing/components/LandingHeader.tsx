import React from 'react';
import { createStyles, rem } from '@mantine/core';


import { Stack } from '@/components/common/mantine';
import { Title } from '@/components/common/mantine/Title';
import { AccentSpan } from '@/components/common/special/AccentSpan';

import { LandingAnimationReveal } from './LandingAnimationReveal';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(48),
    width: '100%',

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
    <Stack w="100%" spacing={16} align="center">
      <LandingAnimationReveal w="100%">
        <Title
          order={1}
          size={96}
          fw={900}
          lh={1}
          w="100%"
          ta={{ base: 'center', md: 'left' }}
          textColor="white"
          className={classes.title}
        >
          Bartosz Stefaniak<AccentSpan>.</AccentSpan>
        </Title>
      </LandingAnimationReveal>
      <LandingAnimationReveal>
        <Title
          order={2}
          size={48}
          textColor="textSecondary"
          ta={{ base: 'center', md: 'left' }}
          className={classes.secondText}
        >
          Jestem <AccentSpan>front-end developerem </AccentSpan> i{' '}
          <AccentSpan>grafikiem</AccentSpan>. Tworzę{' '}
          <AccentSpan>strony i aplikacje internetowe</AccentSpan>
        </Title>
      </LandingAnimationReveal>
    </Stack>
  );
}
