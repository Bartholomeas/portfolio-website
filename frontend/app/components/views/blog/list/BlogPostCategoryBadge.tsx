
import { Badge } from '@/components/common/mantine';

import { BlogCategoryCodes } from '@/types';

import React from 'react';

type CategoryColors = Record<keyof BlogCategoryCodes, string>;

const categoryColors: CategoryColors = {
  tutorial: 'yellow',
  framework: 'red',
  styles: 'blue',
  tools: 'green',
  other: 'pink',
};

type BlogPostCategoryBadgeProps = {
  code: keyof BlogCategoryCodes;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function BlogPostCategoryBadge({
  code,
  name,
  size = 'xs',
}: BlogPostCategoryBadgeProps) {
  return (
    <Badge
      size={size}
      variant="outline"
      color={categoryColors[code as keyof BlogCategoryCodes]}
    >
      {name}
    </Badge>
  );
}
