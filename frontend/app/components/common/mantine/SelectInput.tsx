import React from 'react';

import { Select, SelectProps, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: { position: 'relative' },

  input: {
    background: 'none',
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.6),
    padding: 8,
    borderRadius: theme.radius.md,
  },
}));

type SelectInputProps = {} & SelectProps;

export function SelectInput({ ...props }: SelectInputProps) {
  const { classes } = useStyles();

  return <Select {...props} classNames={{ input: classes.input }} />;
}
