'use client';

import { BoxProps, createStyles } from '@mantine/core';

import React from 'react';

import { Box } from '../mantine';
import { Image } from '../mantine/Image';

type StyleProps = {
  size: number;
  rotate: number;
};

const useStyles = createStyles((theme, { size, rotate }: StyleProps) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '35px',
    zIndex: -99,
  },

  image: {
    height: `${size * 0.6}px`,
    width: 'auto',
    objectFit: 'contain',
    transform: `rotate(${rotate}deg)`,

    transition: 'transform .3s ease',

    [theme.fn.largerThan('sm')]: {
      height: `${size}px`,
    },
  },
}));

type Shapes = 'firstShape' | 'secondShape' | 'thirdShape';

export type FloatingShapeProps = {
  size?: number;
  shape?: Shapes;
  rotate?: number;
} & BoxProps;

export function FloatingShape({
  size = 150,
  shape = 'firstShape',
  rotate = 0,

  ...props
}: FloatingShapeProps) {
  const { classes } = useStyles({ size, rotate });

  const shapes: Record<Shapes, string> = {
    firstShape: '/abstract/crisp_1.webp',
    secondShape: '/abstract/serpent_2.webp',
    thirdShape: '/abstract/serpent_3.webp',
  };

  return (
    <Box sx={{ zIndex: -10000 }} className={classes.wrapper} {...props}>
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
