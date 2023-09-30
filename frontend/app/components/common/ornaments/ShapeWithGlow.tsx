'use client';

import { BoxProps, createStyles } from '@mantine/core';

import React from 'react';

import { Box } from '../mantine';
import { Image } from '../mantine/Image';

type StyleProps = {
  size: number;
};

const useStyles = createStyles((theme, { size }: StyleProps) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '35px',
  },
  glow: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(50% 50% at 50% 50%, #14FFFF 0%, #00F680 100%)',
    opacity: 0.7,
    filter: 'blur(95.5px)',
    borderRadius: '100%',
  },
  image: {
    height: `${size * 0.6}px`,
    width: 'auto',
    objectFit: 'contain',
    [theme.fn.largerThan('sm')]: {
      height: `${size}px`,
    },
  },
}));

type Shapes = 'circle1' | 'circle2';

type ShapeWithGlowProps = {
  size?: number;
  shape?: Shapes;
} & BoxProps;

export function ShapeWithGlow({
  size = 150,
  shape = 'circle1',
  ...props
}: ShapeWithGlowProps) {
  const { classes } = useStyles({ size });

  const shapes: Record<Shapes, string> = {
    circle1: '/ball.svg',
    circle2: '/ball2.svg',
  };

  return (
    <Box sx={{ zIndex: -10000 }} className={classes.wrapper} {...props}>
      <span className={classes.glow} />

      <Image
        src={shapes[shape]}
        height="0"
        width="0"
        sizes="100vw"
        alt="Abstrakcyjny i kolorowy kształt"
        className={classes.image}
      />
    </Box>
  );
}
