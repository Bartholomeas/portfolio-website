import React from 'react';

import { Stack } from '@mantine/core';

import { BlogCard } from './BlogCard';
import { SectionHeading } from '../common/design/SectionHeading';
import { Glow } from '../common/design/Glow';

export function BlogFeaturedPostSection() {
  return (
    <section>
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
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui deserunt doloribus, corrupti quis enim excepturi sequi sunt nobis. Quos debitis nemo fugiat, labore iusto nesciunt atque! Ab ipsa maiores atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui deserunt doloribus, corrupti quis enim excepturi sequi sunt nobis. Quos debitis nemo fugiat, labore iusto nesciunt atque!"
          imgSrc="/blog.jpg"
          createdAt="2021-08-01"
          readTime={5}
          categories={['javascript', 'html', 'css']}
        />
      </Stack>
    </section>
  );
}
