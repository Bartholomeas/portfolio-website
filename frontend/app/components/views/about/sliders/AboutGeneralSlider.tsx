import { Box } from '@/components/common/mantine';
import { Image } from '@/components/common/mantine/Image';
import { MacWindow } from '@/components/common/special/macWindow/MacWindow';

import { StrapiImage } from '@/types';

import { createStyles, rem } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    minHeight: 500,
  },

  firstWindow: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '80%',
    height: '100%',
    overflow: 'hidden',
    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },

  secondWindow: {
    position: 'absolute',
    height: rem(200),
    width: rem(200),
    bottom: -50,
    left: 50,
    boxShadow: '8px 16px 40px #28282861',
  },
  thirdWindow: {
    position: 'absolute',
    height: rem(150),
    width: rem(150),
    top: -50,
    right: 16,
    backgroundColor: theme.fn.rgba(theme.other.white, 0.2),
    boxShadow: '8px 16px 40px #28282861',
  },
  image: {
    objectFit: 'cover',
    height: 'auto',
    width: '100%',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    padding: rem(4),
    objectFit: 'contain',
    backgroundColor: theme.fn.rgba(theme.other.primary, 0.4),
  },

  imageWithBackground: {
    backgroundColor: theme.fn.rgba(theme.colors.blue[4], 0.4),
  },
}));

type Props = {
  image: StrapiImage | undefined;
};

export function AboutGeneralSlider({ image }: Props) {
  const { classes, cx } = useStyles();

  return (
    <Box className={classes.root}>
      <MacWindow withGlassBg className={classes.firstWindow}>
        {image && (
          <Image
            src={image.url}
            alt={image.alternativeText ?? 'Zdjęcie o mnie'}
            fill
            className={classes.image}
          />
        )}
      </MacWindow>
      <MacWindow withGlassBg className={classes.secondWindow}>
        <Image
          src="/avatars/me_blink.webp"
          alt="Moja twarz w postaci apple awatara"
          fill
          className={cx(classes.logoImage, classes.imageWithBackground)}
        />
      </MacWindow>
      <MacWindow withGlassBg className={classes.thirdWindow}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src="/Logo.svg"
            alt="Moje logo, litera B w okręgu o finezyjnych kształtach"
            width="0"
            height="0"
            sizes="100vw"
            className={classes.logoImage}
          />
        </Box>
      </MacWindow>
    </Box>
  );
}
