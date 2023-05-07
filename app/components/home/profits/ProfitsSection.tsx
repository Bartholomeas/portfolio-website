import React from 'react';
import { Image, createStyles } from '@mantine/core';
import ProfitsCard from './ProfitsCard';

const useStyles = createStyles(() => ({
  bgImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -100,
    opacity: 0.3,
  },
}));

const ProfitsSection = () => {
  const { classes } = useStyles();

  return (
    <section style={{ minHeight: '100vh' }}>
      <Image
        className={classes.bgImage}
        fit={'contain'}
        src="/iceberg.svg"
        alt="Green abstract diamond"
      />

      <ProfitsCard title={'Front-end'}>Lorem ipsum dolor sit amet</ProfitsCard>
    </section>
  );
};

export default ProfitsSection;
