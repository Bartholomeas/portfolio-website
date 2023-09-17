import {
  createStyles,
  Textarea as MantineTextarea,
  rem,
  TextareaProps,
} from '@mantine/core';

import React, { useState } from 'react';

const useStyles = createStyles(
  (theme, { floating, isError }: { floating: boolean; isError: boolean }) => ({
    root: { position: 'relative', marginTop: rem(8) },
    label: {
      display: isError ? 'none' : 'block',
      position: 'absolute',
      zIndex: 2,
      top: rem(8),
      left: rem(32),
      pointerEvents: 'none',
      color: floating ? theme.other.textPrimary : theme.other.textSecondary,
      transition:
        'transform 0.15s ease, color 0.15s ease, font-size 0.15s ease',
      transform: floating
        ? `translate(-${rem(32)}, ${rem(-28)})`
        : 'translate(0, 0)',

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
        top: -16,
        transition: 'color .15s ease',
        color: !floating ? 'transparent' : undefined,
      },
    },
    error: {
      position: 'absolute',
      top: 0,
      transform: `translateY(calc(-100% - ${rem(8)}))`,
      fontSize: theme.fontSizes.xs,
    },
    icon: {
      alignItems: 'start',
      paddingTop: rem(10),
      width: rem(32),
    },
  })
);

export function Textarea({ ...props }: TextareaProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = React.useRef<HTMLTextAreaElement | null>(null);

  const { classes } = useStyles({
    floating: inputRef.current?.value.trim().length !== 0 || focused,
    isError: !!props.error,
  });

  return (
    <MantineTextarea
      classNames={classes}
      autosize
      minRows={3}
      ref={inputRef}
      onFocus={() => {
        if (!props.error) setFocused(true);
      }}
      onBlur={() => {
        if (!inputRef?.current?.value) setFocused(false);
      }}
      {...props}
      autoComplete="nope"
    />
  );
}
