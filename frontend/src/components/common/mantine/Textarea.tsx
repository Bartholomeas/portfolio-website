import {
  createStyles,
  Textarea as MantineTextarea,
  rem,
  TextareaProps,
} from '@mantine/core';

import React, { useState } from 'react';

const useStyles = createStyles(
  (theme, { floating }: { floating: boolean }) => ({
    root: { position: 'relative', marginTop: rem(8) },
    label: {
      position: 'absolute',
      zIndex: 2,
      top: rem(8),
      left: rem(32),
      pointerEvents: 'none',
      color: floating ? theme.other.textPrimary : theme.other.textSecondary,
      transition:
        'transform 0.15s ease, color 0.15s ease, font-size 0.15s ease',
      transform: floating ? `translate(-${rem(32)}, ${rem(-26)})` : 'none',
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
    },

    required: {
      transition: 'opacity .15s ease',
      opacity: floating ? 1 : 0,
    },

    input: {
      top: 0,
      background: 'none',
      borderRadius: theme.radius.md,
      backgroundColor: theme.fn.rgba(theme.other.bg, 0.6),
      '&::placeholder': {
        transition: 'color .15s ease',
        color: !floating ? 'transparent' : undefined,
      },
    },
    icon: {
      alignItems: 'start',
      paddingTop: rem(8),
      width: rem(32),
    },
  })
);

export function Textarea({ ...props }: TextareaProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = React.useRef<HTMLTextAreaElement | null>(null);

  const { classes } = useStyles({
    floating: inputRef.current?.value.trim().length !== 0 || focused,
  });

  return (
    <MantineTextarea
      {...props}
      classNames={classes}
      autosize
      minRows={3}
      ref={inputRef}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      autoComplete="nope"
    />
  );
}
