import React from 'react';

import { CaseStudiesCards } from './CaseStudiesCards';

import { Container, Stack } from '@/_components/common/mantine';
import { SectionHeading } from '@/_components/common/ornaments/SectionHeading';

import { HomePageSections } from '@/_types/pages';

type Props = {
  data: HomePageSections['caseStudiesSection'] | undefined;
};

export function CaseStudiesSection({ data }: Props) {
  return (
    <section>
      <Stack py={64} mih="50vh" spacing={64}>
        <Container size="md" w="100%">
          <SectionHeading
            title={data?.heading.title}
            subtext={data?.heading.subtitle}
          />

          {data ? <CaseStudiesCards data={data?.caseStudies} /> : null}
        </Container>
      </Stack>
    </section>
  );
}
