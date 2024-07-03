import React from 'react';
import { Chip } from '@/components/common/mantine';

import { BlogCategoryCodes } from '@/types';


type BlogPostFiltersChipProps = {
  value: keyof BlogCategoryCodes;
  name: string;
};

export function BlogPostFiltersChip({ value, name }: BlogPostFiltersChipProps) {
  return (
    <Chip variant="outline" value={value} sx={{ textTransform: 'capitalize' }}>
      {name}
    </Chip>
  );
}
