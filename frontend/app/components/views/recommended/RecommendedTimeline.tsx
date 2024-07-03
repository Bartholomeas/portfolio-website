'use client';

import React, { PropsWithChildren } from 'react';
import { createStyles } from '@mantine/core';
import { Timeline } from '@/components/common/mantine';


const useStyles = createStyles((theme) => ({
  itemBullet: {
    [`&[data-with-child]`]: {
      background: theme.other.bg,
      border: `1px solid ${theme.other.primary}`,
    },
  },
}));

export function RecommendedTimeline({ children }: PropsWithChildren) {
  const { classes } = useStyles();

  return (
    <Timeline
      bulletSize={24}
      lineWidth={2}
      color="primary"
      classNames={{ ...classes }}
    >
      {children}
    </Timeline>
  );
}
