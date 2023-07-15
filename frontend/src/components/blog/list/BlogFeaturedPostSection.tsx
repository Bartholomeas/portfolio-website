'use client';

import { Stack } from '@mantine/core';
import React from 'react';

import { BlogCard } from './BlogCard';
import { Glow } from '@/components/common/design/Glow';
import { SectionHeading } from '@/components/common/design/SectionHeading';
import { Post } from '@/types';

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
