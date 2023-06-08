import React from 'react';

import { useFocusWithin } from '@mantine/hooks';

import {
  TextInput as MantineTextInput,
  TextInputProps,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme, { focused }: { focused: boolean }) => ({
  root: { position: 'relative' },
  label: {
    position: 'absolute',
    top: '50%',
    left: 32,
    transform: focused ? 'translateY(-150%)' : 'translateY(-50%)',
    transition: 'transform .2s ease',
    zIndex: 10,
    backgroundColor: theme.other.bg,
    padding: '0 8px',
  },
  input: {
    background: 'none',
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.6),
    padding: 8,
    borderRadius: theme.radius.md,
  },
}));

export function TextInput({ ...props }: TextInputProps) {
  const { ref, focused } = useFocusWithin();
  const { classes } = useStyles({ focused });

  return (
    <MantineTextInput
      {...props}
      ref={ref}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
    />
  );
}
