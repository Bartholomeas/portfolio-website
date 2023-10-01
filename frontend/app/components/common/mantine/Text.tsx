'use client';

import { ThemeColors } from '@/misc/theme/types';

import { createStyles, TextProps } from '@mantine/core';

import React, { forwardRef } from 'react';

import { Text as MantineText } from '.';

type StylesProps = {
  textColor: ThemeColors;
};

const useStyles = createStyles((theme, { textColor }: StylesProps) => ({
  children: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  textColor: { color: theme.other[textColor] },
}));

type TextComponentProps = {
  textColor?: ThemeColors;
  children: React.ReactNode;
} & TextProps;

export const Text = forwardRef<HTMLParagraphElement, TextComponentProps>(
  ({ textColor = 'textPrimary', className, children, ...props }, ref) => {
    const { classes, cx } = useStyles({ textColor });

    return (
      <MantineText
        ref={ref}
        className={cx(classes.children, classes.textColor, className)}
        {...props}
      >
        {children}
      </MantineText>
    );
  }
);
