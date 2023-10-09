import React, { PropsWithChildren } from 'react';

import { Box } from '@/components/common/mantine';
import { FloatingShape } from '@/components/common/ornaments/FloatingShape';

export function RecommendedShapesWrapper({ children }: PropsWithChildren) {
  return (
    <Box
      component="div"
      sx={{
        position: 'relative',
      }}
      w="100%"
      h="100%"
    >
      <FloatingShape
        shape="firstShape"
        size={250}
        rotate={85}
        sx={{
          position: 'absolute',
          top: -50,
          right: 16,
        }}
      />
      <FloatingShape
        shape="firstShape"
        size={200}
        rotate={25}
        sx={{
          position: 'absolute',
          top: -150,
          left: 16,
        }}
      />
      {children}
      <FloatingShape
        shape="firstShape"
        size={150}
        rotate={25}
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          opacity: 0.4,
        }}
      />
      <FloatingShape
        shape="firstShape"
        size={350}
        rotate={200}
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: '35%',
          opacity: 0.2,
        }}
      />
    </Box>
  );
}
