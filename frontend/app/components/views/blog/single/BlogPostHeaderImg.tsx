'use client';

import { Image } from '@/components/common/mantine/Image';

import React from 'react';

type Props = {
  imgUrl: string;
  imgAlt: string;
};

export function BlogPostHeaderImg({ imgUrl, imgAlt }: Props) {
  return (
    <Image
      src={`${imgUrl}` ?? '/'}
      alt={imgAlt}
      fill
      loading="lazy"
      sx={{
        objectFit: 'cover',
        width: '100%',
      }}
    />
  );
}
