// 'use client';

import { forwardRef } from 'react';
import { Box, createPolymorphicComponent } from '@mantine/core';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

const ImageComponent = forwardRef<HTMLImageElement, NextImageProps>(
  ({ ...props }, ref) => <Box component={NextImage} ref={ref} {...props} />
);

export const Image = createPolymorphicComponent<any, NextImageProps>(
  ImageComponent
);
