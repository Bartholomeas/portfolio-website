import React from 'react';

import { CaseStudiesCarousel } from './CaseStudiesCarousel';

import { Container, Stack } from '@/_components/common/mantine';
import { SectionHeading } from '@/_components/common/ornaments/SectionHeading';

export function CaseStudiesSection() {
  return (
    <section>
      <Stack py={64} mih="50vh" spacing={64}>
        <Container size="md" w="100%">
          <SectionHeading title="Case studies" subtext="Jak to powstaje?" />
        </Container>
        <CaseStudiesCarousel />
      </Stack>
    </section>
  );
}
