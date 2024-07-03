'use client';

import React, { PropsWithChildren } from 'react';
import { createStyles, rem } from '@mantine/core';

type StyleProps = { wrapText: boolean };
const useStyles = createStyles((theme, { wrapText }: StyleProps) => ({
  highlight: {
    background: `linear-gradient(to right, ${theme.other.primary}, ${theme.other.secondary})`,
    fontWeight: 700,
    whiteSpace: wrapText ? undefined : 'nowrap',
    backgroundClip: 'text',
    paddingBottom: rem(4),
    WebkitTextFillColor: 'transparent',
    lineHeight: 1.2,
  },
}));

type Props = PropsWithChildren<{ wrapText?: boolean }>;

export function AccentSpan({ wrapText = true, children }: Props) {
  const { classes } = useStyles({ wrapText });
  return <span className={classes.highlight}>{children}</span>;
}
