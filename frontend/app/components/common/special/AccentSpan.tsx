import { createStyles, rem } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

const useStyles = createStyles((theme) => ({
  highlight: {
    background: `linear-gradient(to right, ${theme.other.primary}, ${theme.other.secondary})`,
    fontWeight: 700,
    whiteSpace: 'nowrap',
    backgroundClip: 'text',
    paddingBottom: rem(4),
    WebkitTextFillColor: 'transparent',
  },
}));

type Props = PropsWithChildren;

export function AccentSpan({ children }: Props) {
  const { classes } = useStyles();
  return <span className={classes.highlight}>{children}</span>;
}
