'use client';

import React from 'react';

import { Image } from '@/components/common/mantine/Image';

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
      sizes="50vw"
      loading="lazy"
      sx={{
        objectFit: 'cover',
        width: '100%',
      }}
    />
  );
}
