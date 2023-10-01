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
    height: '100%',
    width: '100%',
    padding: `${rem(8)} ${rem(24)}`,
    color: theme.other.textPrimary,

    [theme.fn.largerThan('md')]: {
      padding: `${rem(12)} ${rem(32)}`,
    },
  },

  backgroundImage: {
    minHeight: '80vh',
    height: '100%',
    width: '100%',
    transform: 'translateX(-20%) scale(1.5)',
    objectFit: 'contain',
    zIndex: -10,

    [theme.fn.largerThan('md')]: {
      transform: 'translateX(-30%) translateY(-10%)',
    },
  },
}));

export function LandingCoreContent() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Image
        src="/abstract/serpent_landing.webp"
        alt="Kształt przypominający węża, z kolorowym gradientem"
        fill
        className={classes.backgroundImage}
      />

      <Stack>
        <LandingHeader />
        <LandingButtons />
      </Stack>
    </div>
  );
}
