import React from 'react';

import {
  Textarea as MantineTextarea,
  TextareaProps,
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

export function Textarea({ ...props }: TextareaProps) {
  const { classes } = useStyles();

  return (
    <MantineTextarea
      autosize
      minRows={3}
      {...props}
      classNames={{
        input: classes.input,
      }}
    />
  );
}
