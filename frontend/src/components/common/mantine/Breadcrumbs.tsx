'use client';

import { createStyles } from '@mantine/core';
import React from 'react';
import Link from '@/components/common/Link';
import {
  Breadcrumbs as MantineBreadcrumbs,
  Text,
} from '@/components/common/mantine';

const useStyles = createStyles((theme) => ({
  item: {
    fontSize: theme.fontSizes.md,
    color: theme.other.textSecondary,
  },
  itemActive: {
    color: theme.other.textPrimary,
  },
}));

type Props = {
  items: { title: string; href?: string }[];
};
export function Breadcrumbs({ items }: Props) {
  const { classes, cx } = useStyles();
  return (
    <MantineBreadcrumbs my={32}>
      {items.map((item, index) =>
        item.href ? (
          <Link href={item.href} key={item.title} className={classes.item}>
            {item.title}
          </Link>
        ) : (
          <Text
            key={item.title}
            className={cx(classes.item, {
              [classes.itemActive]: index === items.length - 1,
            })}
          >
            {item.title}
          </Text>
        )
      )}
    </MantineBreadcrumbs>
  );
}
