import React from 'react';
import { Chip } from '@mantine/core';

type BlogPostFiltersChipProps = {
  value: string;
};

export function BlogPostFiltersChip({ value }: BlogPostFiltersChipProps) {
  return (
    <Chip variant="light" value={value}>
      {value.toUpperCase()}
    </Chip>
  );
}
