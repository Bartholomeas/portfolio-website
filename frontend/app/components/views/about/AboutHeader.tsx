import React from 'react';

import { Stack } from '@/components/common/mantine';
import { Title } from '@/components/common/mantine/Title';
import { FloatingShape } from '@/components/common/ornaments/FloatingShape';
import { AccentSpan } from '@/components/common/special/AccentSpan';

export function AboutHeader() {
  return (
    <Stack align="center" w="100%" sx={{ position: 'relative' }}>
      <Stack>
        <Title size={64} order={1} color="primary">
          <AccentSpan>Kilka słów o mnie</AccentSpan>
        </Title>
      </Stack>

      <FloatingShape
        shape="firstShape"
        size={150}
        sx={{
          position: 'absolute',
          top: '-5%',
          right: 0,
        }}
      />

      <FloatingShape
        shape="firstShape"
        size={350}
        rotate={85}
        sx={{
          position: 'absolute',
          top: -200,
          left: '10%',
          opacity: 0.8,
        }}
      />
      <FloatingShape
        shape="firstShape"
        size={250}
        rotate={238}
        sx={{
          position: 'absolute',
          bottom: -300,
          left: '35%',
        }}
      />
    </Stack>
  );
}
