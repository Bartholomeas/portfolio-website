import React from 'react';

import { Container, Stack } from '@/components/common/mantine';

import {
  FloatingShape,
  FloatingShapeProps,
} from '@/components/common/ornaments/FloatingShape';
import { AboutHeader } from '@/components/views/about/AboutHeader';
import { AboutSection } from '@/components/views/about/AboutSection';

import { getHomePage } from '@/lib/getHomePage';

export default async function AboutMe() {
  const homePageData = getHomePage();
  const { data } = await homePageData;

  return (
    <Container size="lg" h="100%" w="100%">
      <Stack
        spacing={128}
        align="center"
        mt={128}
        sx={{ position: 'relative' }}
      >
        <AboutHeader />
        <AboutSection data={data.aboutMeSection} />

        {pageShapes.map((shape) => (
          <FloatingShape key={`${shape.shape}-${shape.size}`} {...shape} />
        ))}
      </Stack>
    </Container>
  );
}

const pageShapes: FloatingShapeProps[] = [
  {
    shape: 'firstShape',
    rotate: 39,
    size: 300,
    sx: {
      position: 'absolute',
      bottom: '20%',
      right: 32,
    },
  },
  {
    shape: 'firstShape',
    rotate: 120,

    size: 250,
    sx: {
      position: 'absolute',
      bottom: '45%',
      left: 16,
    },
  },
  {
    shape: 'firstShape',
    rotate: 45,
    size: 150,
    sx: {
      position: 'absolute',
      bottom: '60%',
      right: 16,
      opacity: 0.4,
    },
  },
  {
    shape: 'firstShape',
    size: 320,
    sx: {
      position: 'absolute',
      bottom: '85%',
      right: 32,
    },
  },
];
