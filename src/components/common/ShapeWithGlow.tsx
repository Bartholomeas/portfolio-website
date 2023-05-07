import React from 'react';
import { Box, Image, createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
  glow: {
    background: 'radial-gradient(50% 50% at 50% 50%, #14FFFF 0%, rgba(120, 216, 23, 0) 100%)',
    opacity: 0.4,
    filter: 'blur(95.5px)',
    borderRadius: '426px',
  },
}));

type ShapeWithGlowProps = {
  size?: number;
};

const ShapeWithGlow = ({ size = 100 }: ShapeWithGlowProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Box
        sx={{
          position: 'absolute',
          background: 'radial-gradient(50% 50% at 50% 50%, #14FFFF 0%, rgba(120, 216, 23, 0) 100%)',
          opacity: 0.4,
          filter: 'blur(95.5px)',
          borderRadius: '426px',
        }}
      />
      {/* <Image src={'/ball.svg'} height={size} fit="contain" alt="Abstract shape" /> */}
    </div>
  );
};

export default ShapeWithGlow;
