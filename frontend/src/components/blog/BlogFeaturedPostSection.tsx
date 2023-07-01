'use client';

import React from 'react';

import { Stack } from '@mantine/core';

import { SectionHeading } from '../common/design/SectionHeading';
import { Glow } from '../common/design/Glow';
import { BlogCard } from './BlogCard';

export function BlogFeaturedPostSection() {
  return (
    <Stack
      spacing={32}
      sx={{
        position: 'relative',
      }}
    >
      <Glow position={{ top: 50, left: 0, right: 0, bottom: 0 }} size={300} />
      <SectionHeading title="Najnowszy wpis" subtext="Koniecznie sprawdź" />
      <BlogCard
        title="Testowy wpis"
        shortDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui deserunt doloribus, corrupti quis enim excepturi sequi sunt nobis. Quos debitis nemo fugiat, labore iusto nesciunt atque! Ab ipsa maiores atque! Lorem ipsum dolor, sit amet"
        imgSrc=""
        createdAt="2021-08-01"
        readTime={5}
        categories={['javascript', 'html', 'css'] as any}
      />
    </Stack>
  );
}
