'use client';

import { Box, createStyles, Image, Stack } from '@mantine/core';

import React from 'react';

import { Text } from '@/components/common/mantine/Text';
import { Glow } from '@/components/common/ornaments/Glow';
import { SectionHeading } from '@/components/common/ornaments/SectionHeading';
import { ShapeWithGlow } from '@/components/common/ornaments/ShapeWithGlow';

import { AboutSpecializationsGrid } from './AboutSpecializationsGrid';

import { AboutMeSection } from '@/types/pages';

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

type Props = {
  data: AboutMeSection;
};
export function AboutSection({ data }: Props) {
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
              src={data.sectionImage.url}
              alt={data.sectionImage.alternativeText ?? 'Moje zdjęcie'}
              sx={{ borderRadius: 8, overflow: 'hidden' }}
            />
            <Stack justify="center">
              <SectionHeading
                title={data.heading.title}
                subtext={data.heading.subtitle}
              />
              <Text size={16}>{data.aboutMeDescription}</Text>
            </Stack>
          </div>
          <AboutSpecializationsGrid skills={data.skillCards} />
        </Stack>
      </Box>
    </section>
  );
}
