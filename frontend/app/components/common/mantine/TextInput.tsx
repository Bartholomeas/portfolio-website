import React from 'react';

import {
  TextInput as MantineTextInput,
  TextInputProps,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  input: {
    background: 'none',
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.6),
    padding: 8,
    borderRadius: theme.radius.md,
  },
}));

export function TextInput({ ...props }: TextInputProps) {
  const { classes } = useStyles();

  return (
    <MantineTextInput
      {...props}
      classNames={{
        input: classes.input,
      }}
    />
  );
}
