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
    color: theme.other.textPrimary,
  },
}));

type Props = {
  items: { title: string; href?: string }[];
};
export function Breadcrumbs({ items }: Props) {
  const { classes } = useStyles();
  return (
    <MantineBreadcrumbs separator="→">
      {items.map((item) =>
        item.href ? (
          <Link href={item.href} key={item.title} className={classes.item}>
            {item.title}
          </Link>
        ) : (
          <Text key={item.title} className={classes.item}>
            {item.title}
          </Text>
        )
      )}
    </MantineBreadcrumbs>
  );
}
