import React from 'react';
import { Image, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'relative',
    padding: '35px',
  },
  glow: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(50% 50% at 50% 50%, #14FFFF 0%, #00F680 100%)',
    opacity: 0.4,
    filter: 'blur(95.5px)',
    borderRadius: '100%',
  },
}));

type ShapeWithGlowProps = {
  size?: number;
};

export function ShapeWithGlow({ size = 150 }: ShapeWithGlowProps) {
  const { classes } = useStyles();
  const desktop = useMediaQuery('(min-width: 576px)');
  return (
    <div className={classes.wrapper}>
      <span className={classes.glow} />
      <Image
        src="/ball.svg"
        height={desktop ? size : size * 0.6}
        fit="contain"
        alt="Abstract shape"
      />
    </div>
  );
}

// export default ShapeWithGlow;
