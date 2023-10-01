'use client';

import { createStyles, rem } from '@mantine/core';

import React from 'react';

import { Stack } from '@/components/common/mantine';
import { Image } from '@/components/common/mantine/Image';

import { LandingButtons } from './components/LandingButtons';
import { LandingHeader } from './components/LandingHeader';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  },

  contentContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    color: theme.other.textPrimary,
  },

  backgroundImage: {
    position: 'absolute',
    top: '20%',
    width: '100vw',
    height: 'auto',
    transform: 'translateX(-20%) translateY(-20%) scale(1.5)',
    objectFit: 'contain',
    zIndex: -10,

    [theme.fn.largerThan('md')]: {
      transform: 'translateX(-20%) translateY(-40%)',
    },
    [theme.fn.largerThan('xl')]: {
      transform: 'translateX(-50%) translateY(-30%)',
      maxWidth: '50vw',
    },
  },

  smallImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: rem(300),
    height: 'auto',
    objectFit: 'contain',
    transform: 'translateX(40%) scaleX(-1)',
    zIndex: -10,

    [theme.fn.largerThan('md')]: {
      width: '50%',
      bottom: '10%',
      transform: 'translateX(20%) scaleX(-1)',
    },

    [theme.fn.largerThan('xl')]: {
      width: '70%',
      bottom: '10%',
      transform: 'translateX(50%) scaleX(-1)',
    },
  },
}));

export function LandingSection() {
  const { classes } = useStyles();

  return (
    <section className={classes.wrapper}>
      <div className={classes.contentContainer}>
        <Image
          src="/abstract/serpent_landing.webp"
          alt="Kształt przypominający węża, z kolorowym gradientem"
          height="0"
          width="0"
          sizes="100vw"
          className={classes.backgroundImage}
        />
        <Image
          src="/abstract/serpent_2.webp"
          alt="Półokragły, kolorowy kształt"
          height="0"
          width="0"
          sizes="100vw"
          className={classes.smallImage}
        />

        <Stack>
          <LandingHeader />
          <LandingButtons />
        </Stack>
      </div>
    </section>
  );
}
