'use client';

import React from 'react';

import { Stack } from '@mantine/core';

import { Post } from '@/types';
import { SectionHeading } from '../common/design/SectionHeading';
import { Glow } from '../common/design/Glow';
import { BlogCard } from './BlogCard';

type BlogFeaturedPostSectionProps = {
  featuredPost: Post;
};
export function BlogFeaturedPostSection({
  featuredPost,
}: BlogFeaturedPostSectionProps) {
  return (
    <Stack
      spacing={32}
      sx={{
        position: 'relative',
      }}
    >
      <Glow position={{ top: 50, left: 0, right: 0, bottom: 0 }} size={300} />
      <SectionHeading title="Najnowszy wpis" subtext="Koniecznie sprawdź" />
      <BlogCard post={featuredPost} />
    </Stack>
  );
}
