import React from 'react';

import { Box, Image, Stack, createStyles } from '@mantine/core';

import { SectionHeading } from '../../common/design/SectionHeading';
import { Text } from '../../common/mantine/Text';
import { ShapeWithGlow } from '../../common/ShapeWithGlow';
import { Glow } from '../../common/design/Glow';
import { AboutSpecializationsGrid } from './AboutSpecializationsGrid';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    height: '100%',
    width: '100%',
    padding: '100px 0',
  },

  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    [theme.fn.largerThan('md')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
    },
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

  shapePosition: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    right: 0,
    transform: 'translateY(-75%)',
  },
}));

export function AboutSection() {
  const { classes } = useStyles();

  return (
    <section className={classes.wrapper}>
      <Box sx={{ position: 'relative' }}>
        <ShapeWithGlow className={classes.shapePosition} size={120} />
        <Glow
          position={{ top: 200, left: -50, right: 0, bottom: 0 }}
          size={400}
          zIndex={-10}
        />
        <Stack>
          <div className={classes.grid}>
            <Image
              src="./man.jpg"
              alt="my portrait photo"
              sx={{ borderRadius: 8, overflow: 'hidden' }}
            />
            <Stack justify="center">
              <SectionHeading
                title="Cześć, jestem Bartek!"
                subtext="Kim jestem?"
              />
              <Text size={16}>
                Lorem ipsum dolor sit amet consectetur. Sit in amet amet dui
                orci feugiat diam. Condimentum turpis tortor lorem blandit orci
                morbi. Malesuada purus vel commodo iaculis semper lacinia tortor
                lectus. Lorem consequat ultricies diam enim.Lorem ipsum dolor
                sit Loreorem consequat ultricies diam enim.Lorem ipsum dolor sit
                Lorem ipsum.Lorem ipsum dolor sit amet consectetur. Sit in amet
                amet dui orci feugiat diam. Condimentum turpis tortor lorem
                blandit orci morbi. Malesuada purus vel commodo iaculis semper
                lacinia tortor lectus. Lorem consequat ultricies diam enim.Lorem
                ipsum dolor sit Lorem ipsum.
              </Text>
            </Stack>
          </div>
          <AboutSpecializationsGrid />
        </Stack>
      </Box>
    </section>
  );
}
