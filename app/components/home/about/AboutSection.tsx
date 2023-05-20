import React from 'react';
import { SimpleGrid, createStyles } from '@mantine/core';
import AboutCard from './AboutCard';

const useStyles = createStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    height: '100%',
  },
  bgImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    maxWidth: 900,
    margin: '0 auto',
    zIndex: -100,
    opacity: 0.3,
  },
  fullWidth: { width: '100%' },
}));

const AboutSection = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.wrapper}>
      <SimpleGrid
        cols={1}
        breakpoints={[{ minWidth: 'xs', cols: 2 }]}
        className={classes.fullWidth}>
        <AboutCard title={'Front-end'}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic qui, alias tempore pariatur
          in rerum labore quia delectus expedita, quibusdam aspernatur repellat esse voluptatem
          ducimus ratione accusantium natus a itaque! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Officia doloremque quae quos expedita excepturi ipsam necessitatibus
          sequi accusamus quod, deleniti ad doloribus error enim a ut odit natus minus facilis!
        </AboutCard>
        <AboutCard title={'Design'}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic qui, alias tempore pariatur
          in rerum labore quia delectus expedita, quibusdam aspernatur repellat esse voluptatem
          ducimus ratione accusantium natus a itaque! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Officia doloremque quae quos expedita excepturi ipsam necessitatibus
          sequi accusamus quod, deleniti ad doloribus error enim a ut odit natus minus facilis!
        </AboutCard>
      </SimpleGrid>
    </section>
  );
};

export default AboutSection;
