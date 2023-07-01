import React from 'react';

import { Badge } from '@mantine/core';
import { BlogCategoryCodes } from '../../../types';

type CategoryColors = Record<keyof BlogCategoryCodes, string>;

const categoryColors: CategoryColors = {
  javascript: 'yellow',
  html: 'red',
  css: 'blue',
  react: 'lightblue',
  frameworki: 'green',
  lifestyle: 'pink',
  inne: 'gray',
};

type BlogPostCategoryBadgeProps = {
  category: keyof BlogCategoryCodes;
};

export function BlogPostCategoryBadge({
  category,
}: BlogPostCategoryBadgeProps) {
  return (
    <Badge color={categoryColors[category as keyof BlogCategoryCodes]}>
      {category}
    </Badge>
  );
}
