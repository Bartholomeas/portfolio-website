'use client';

import {
  createStyles,
  TextInput as MantineTextInput,
  rem,
  TextInputProps,
} from '@mantine/core';

import React, { useState } from 'react';

const useStyles = createStyles(
  (theme, { floating }: { floating: boolean }) => ({
    root: {
      position: 'relative',
      marginTop: rem(8),
    },
    label: {
      position: 'absolute',
      zIndex: 2,
      left: rem(32),
      pointerEvents: 'none',
      color: floating ? theme.other.textPrimary : theme.other.textSecondary,
      transition:
        'transform 0.15s ease, color 0.15s ease, font-size 0.15s ease',
      transform: floating
        ? `translate(-${rem(32)}, ${rem(-40)})`
        : 'translate(0, -50%)',
      top: '50%',
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

export function TextInput({ onChange, ...props }: TextInputProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const { classes } = useStyles({
    floating: focused,
  });

  return (
    <MantineTextInput
      ref={inputRef}
      classNames={classes}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        if (!inputRef?.current?.value) setFocused(false);
      }}
      {...props}
    />
  );
}
