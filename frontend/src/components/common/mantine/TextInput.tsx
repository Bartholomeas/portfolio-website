import React, { useState } from 'react';

import {
  TextInput as MantineTextInput,
  TextInputProps,
  createStyles,
  rem,
} from '@mantine/core';

const useStyles = createStyles(
  (theme, { floating }: { floating: boolean }) => ({
    root: { position: 'relative', marginTop: rem(8) },
    label: {
      position: 'absolute',
      zIndex: 2,
      left: rem(32),
      pointerEvents: 'none',
      color: floating ? theme.other.textPrimary : theme.other.textSecondary,
      transition:
        'transform 0.15s ease, color 0.15s ease, font-size 0.15s ease',
      transform: floating ? `translate(-${rem(32)}, ${rem(-26)})` : 'none',
      top: '25%',
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
    },

    required: {
      transition: 'opacity .15s ease',
      opacity: floating ? 1 : 0,
    },

    input: {
      background: 'none',
      borderRadius: theme.radius.md,
      backgroundColor: theme.fn.rgba(theme.other.bg, 0.6),
      '&::placeholder': {
        transition: 'color .15s ease',
        color: !floating ? 'transparent' : undefined,
      },
    },
    icon: {
      width: 32,
    },
  })
);

export function TextInput({ ...props }: TextInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
  });

  return (
    <MantineTextInput
      {...props}
      classNames={classes}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      autoComplete="nope"
    />
  );
}
