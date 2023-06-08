'use client';

import React from 'react';

import { Box, Flex } from '@mantine/core';
import { Title } from '../common/mantine/Title';
import { ShapeWithGlow } from '../common/ShapeWithGlow';

export function BlogHeader() {
  return (
    <Flex
      align="center"
      justify="center"
      h="40vh"
      sx={{ position: 'relative' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -20,
          left: 32,
        }}
      >
        <ShapeWithGlow size={100} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 24,
        }}
      >
        <ShapeWithGlow size={80} shape="circle2" />
      </Box>
      <Title order={1}>Przeglądaj Bloga</Title>
    </Flex>
  );
}
