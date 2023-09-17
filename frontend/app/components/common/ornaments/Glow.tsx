'use client';

import { Box, createStyles } from '@mantine/core';
import React from 'react';

type Positions = {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
};
type StylesProps = {
  position: Positions;
  size: number | undefined;
  zIndex: number | undefined;
};
const useStyles = createStyles(
  (theme, { position, size, zIndex }: StylesProps) => ({
    glow: {
      position: 'absolute',
      top: position.top ?? 'auto',
      bottom: position.bottom ?? 'auto',
      left: position.left ?? 'auto',
      right: position.right ?? 'auto',
      height: size ?? 0,
      width: size ?? 0,
      background: `radial-gradient(50% 50% at 50% 50%, ${theme.other.primary} 0%, ${theme.other.secondary} 100%)`,
      opacity: 0.1,
      filter: 'blur(95.5px)',
      borderRadius: '100%',
      zIndex: zIndex ?? 'initial',
    },
  })
);

type GlowProps = {
  position: Positions;
  size?: number;
  zIndex?: number;
};

export function Glow({ position, zIndex, size }: GlowProps) {
  const { classes } = useStyles({ size, position, zIndex });
  return <Box className={classes.glow} />;
}
