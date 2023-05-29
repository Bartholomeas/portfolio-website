import React from 'react';

import { useFocusWithin } from '@mantine/hooks';

import {
  Textarea as MantineTextarea,
  TextareaProps,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme, { focused }: { focused: boolean }) => ({
  root: { position: 'relative' },
  label: {
    position: 'absolute',
    top: 0,
    left: 32,
    transform: focused ? 'translateY(-50%)' : 'translateY(8px)',
    transition: 'transform .2s ease',
    zIndex: 10,
    backgroundColor: theme.other.bg,
    padding: '0 8px',
  },
  icon: {
    alignItems: 'start',
    paddingTop: 8,
  },
  input: {
    background: 'none',
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.6),
    padding: 8,
    borderRadius: theme.radius.md,
  },
}));

export function Textarea({ ...props }: TextareaProps) {
  const { ref, focused } = useFocusWithin();
  const { classes } = useStyles({ focused });

  return (
    <MantineTextarea
      autosize
      minRows={3}
      {...props}
      ref={ref}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
        icon: classes.icon,
      }}
    />
  );
}
