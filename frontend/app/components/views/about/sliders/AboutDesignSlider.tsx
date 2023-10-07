import { Box } from '@/components/common/mantine';
import { Image } from '@/components/common/mantine/Image';

import { MacWindow } from '@/components/common/special/macWindow/MacWindow';
import { MacWindowGraphicTools } from '@/components/common/special/macWindow/MacWindowGraphicTools';

import { StrapiImage } from '@/types';

import { createStyles, rem } from '@mantine/core';
import React from 'react';

const useStyles = createStyles(() => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    minHeight: rem(500),
  },
  firstWindow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    right: 'auto',
    top: 0,
    padding: 0,
    overflow: 'visible',
  },
  secondWindow: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    bottom: rem(-100),
    right: rem(32),
    backgroundColor: '#0b0866',
  },

  springWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    transform: 'translateY(-40px)',
  },
  image: {
    objectFit: 'contain',
  },
}));

type Props = {
  image: StrapiImage | undefined;
};

export function AboutDesignSlider({ image }: Props) {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <MacWindow withGlassBg className={classes.firstWindow}>
        <MacWindowGraphicTools />
        <Box className={classes.springWrapper}>
          <Image
            src="/abstract/spring_1.webp"
            alt="Abstrakcyjny kolorowy kształt przypominający sprężynę"
            fill
            sizes="50vw"
            className={classes.image}
          />
        </Box>
      </MacWindow>
      <MacWindow withGlassBg className={classes.secondWindow}>
        {image && (
          <Image
            src={image?.url}
            alt={image?.alternativeText ?? 'Zdjęcie'}
            width={300}
            height={300}
            className={classes.image}
          />
        )}
      </MacWindow>
    </Box>
  );
}
