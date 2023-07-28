'use client';

import { createStyles, TextProps } from '@mantine/core';

import React from 'react';

import { Text as MantineText } from '.';

import { ThemeColors } from '@/_theme/types';

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

export function Text({
  textColor = 'textPrimary',
  className,
  children,
  ...props
}: TextComponentProps) {
  const { classes, cx } = useStyles({ textColor });

  return (
    <MantineText
      className={cx(classes.children, classes.textColor, className)}
      {...props}
    >
      {children}
    </MantineText>
  );
}
