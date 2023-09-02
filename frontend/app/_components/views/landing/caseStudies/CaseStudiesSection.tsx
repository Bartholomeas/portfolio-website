import React from 'react';

import { CaseStudiesCarousel } from './CaseStudiesCarousel';

import { Container, Stack } from '@/_components/common/mantine';
import { SectionHeading } from '@/_components/common/ornaments/SectionHeading';

import { HomePageSections } from '@/_types/pages';

type Props = {
  data: HomePageSections['caseStudiesSection'] | undefined;
};

export function CaseStudiesSection({ data }: Props) {
  console.log(data);
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
