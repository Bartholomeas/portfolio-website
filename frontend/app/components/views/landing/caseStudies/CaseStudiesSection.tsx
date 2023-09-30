import { Stack } from '@/components/common/mantine';
import { SectionHeading } from '@/components/common/ornaments/SectionHeading';

import { HomePageSections } from '@/types/pages';

import React from 'react';

import { CaseStudiesCards } from './CaseStudiesCards';

type Props = {
  data: HomePageSections['caseStudiesSection'] | undefined;
};

export function CaseStudiesSection({ data }: Props) {
  return (
    <section>
      <Stack py={64} mih="50vh" spacing={64}>
        <SectionHeading
          title={data?.heading.title}
          subtext={data?.heading.subtitle}
        />

        {data ? <CaseStudiesCards data={data?.caseStudies} /> : null}
      </Stack>
    </section>
  );
}
