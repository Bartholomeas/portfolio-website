import { Badge } from '@mantine/core';
import React from 'react';

import { BlogCategoryCodes } from '../../../types';

type CategoryColors = Record<keyof BlogCategoryCodes, string>;

const categoryColors: CategoryColors = {
  javascript: 'yellow',
  html: 'red',
  css: 'blue',
  framework: 'green',
  lifestyle: 'pink',
  other: 'indigo',
};

type BlogPostCategoryBadgeProps = {
  category: keyof BlogCategoryCodes;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function BlogPostCategoryBadge({
  category,
  size = 'xs',
}: BlogPostCategoryBadgeProps) {
  return (
    <Badge
      size={size}
      variant="outline"
      color={categoryColors[category as keyof BlogCategoryCodes]}
    >
      {category}
    </Badge>
  );
}
