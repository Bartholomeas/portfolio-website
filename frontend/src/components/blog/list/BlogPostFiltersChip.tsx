import { Chip } from '@mantine/core';
import React from 'react';

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
