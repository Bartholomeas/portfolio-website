import { createStyles } from '@mantine/core';
import { motion, useAnimation } from 'framer-motion';

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
    color: theme.other.textPrimary,
  },

  backgroundImage: {
    position: 'absolute',
    width: '100vw',
    height: 'auto',
    transform: 'translateX(-20%) scale(1.5)',
    objectFit: 'contain',
    zIndex: -10,

    [theme.fn.largerThan('md')]: {
      transform: 'translateX(-20%) translateY(-10%)',
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
        height="0"
        width="0"
        sizes="100vw"
        className={classes.backgroundImage}
      />

      <Stack maw="50vw">
        <LandingHeader />
        <LandingButtons />
      </Stack>
    </div>
  );
}
