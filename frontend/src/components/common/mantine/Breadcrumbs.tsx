'use client';

import React from 'react';
import Link from '@/components/common/Link';
import {
  Breadcrumbs as MantineBreadcrumbs,
  Text,
} from '@/components/common/mantine';

type Props = {
  items: { title: string; href?: string }[];
};
export function Breadcrumbs({ items }: Props) {
  return (
    <MantineBreadcrumbs>
      {items.map((item) =>
        item.href ? (
          <Link href={item.href} key={item.title}>
            {item.title}
          </Link>
        ) : (
          <Text>{item.title}</Text>
        )
      )}
    </MantineBreadcrumbs>
  );
}
