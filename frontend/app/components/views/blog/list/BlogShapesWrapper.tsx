import React, { PropsWithChildren } from 'react';

import { FloatingShape } from '@/components/common/ornaments/FloatingShape';

export function BlogShapesWrapper({ children }: PropsWithChildren) {
  return (
    <>
      <FloatingShape
        shape="firstShape"
        size={250}
        sx={{
          position: 'absolute',
          top: '-5%',
          left: 16,
          opacity: 0.4,
        }}
      />

      <FloatingShape
        size={300}
        rotate={60}
        shape="secondShape"
        sx={{
          position: 'absolute',
          top: 450,
          right: 24,
          opacity: 0.8,
        }}
      />

      <FloatingShape
        size={100}
        rotate={120}
        shape="firstShape"
        sx={{
          position: 'absolute',
          top: '30%',
          left: 16,
          opacity: 0.2,
        }}
      />

      <FloatingShape
        size={150}
        rotate={250}
        shape="firstShape"
        sx={{
          position: 'absolute',
          top: 100,
          left: '40%',
        }}
      />
      {children}
    </>
  );
}
