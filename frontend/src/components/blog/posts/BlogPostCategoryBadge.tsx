import { Badge } from '@mantine/core';
import React from 'react';

import { BlogCategoryCodes } from '../../../types';

type CategoryColors = Record<keyof BlogCategoryCodes, string>;

const categoryColors: CategoryColors = {
  javascript: 'yellow',
  html: 'red',
  css: 'blue',
  react: 'lightblue',
  framework: 'green',
  lifestyle: 'pink',
  other: 'gray',
};

type BlogPostCategoryBadgeProps = {
  category: keyof BlogCategoryCodes;
};

export function BlogPostCategoryBadge({
  category,
}: BlogPostCategoryBadgeProps) {
  return (
    <Badge
      size="xs"
      variant="outline"
      color={categoryColors[category as keyof BlogCategoryCodes]}
    >
      {category}
    </Badge>
  );
}
