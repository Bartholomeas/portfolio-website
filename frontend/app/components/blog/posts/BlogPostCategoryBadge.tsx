import React from 'react';

import { Badge } from '@mantine/core';
import { BlogCategory } from '../../../types';

type CategoryColors = Record<BlogCategory, string>;

const categoryColors: CategoryColors = {
  javascript: 'yellow',
  html: 'red',
  css: 'blue',
  frameworki: 'green',
  lifestyle: 'pink',
  inne: 'gray',
};

type BlogPostCategoryBadgeProps = {
  category: BlogCategory;
};

export function BlogPostCategoryBadge({
  category,
}: BlogPostCategoryBadgeProps) {
  return (
    <Badge color={categoryColors[category]}>{category.toUpperCase()}</Badge>
  );
}
