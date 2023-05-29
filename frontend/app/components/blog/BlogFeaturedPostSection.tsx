import React from 'react';

import { Stack } from '@mantine/core';
import { BlogCard } from './BlogCard';
import { SectionHeading } from '../common/design/SectionHeading';

export function BlogFeaturedPostSection() {
  return (
    <section>
      <Stack spacing={32}>
        <SectionHeading title="Najnowszy wpis" subtext="Koniecznie sprawdź" />
        <BlogCard />
      </Stack>
    </section>
  );
}
