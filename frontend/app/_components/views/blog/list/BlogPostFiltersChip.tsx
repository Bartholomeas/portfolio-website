import React from 'react';

import { Chip } from '@/_components/common/mantine';

type BlogPostFiltersChipProps = {
  value: string;
};

export function BlogPostFiltersChip({ value }: BlogPostFiltersChipProps) {
  return (
    <Chip variant="outline" value={value}>
      {value.toUpperCase()}
    </Chip>
  );
}
