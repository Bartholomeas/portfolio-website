'use client';

import { ThemeColors } from '@/_theme/types';

import { createStyles, TitleProps } from '@mantine/core';

import React from 'react';

import { Title as MantineTitle } from '.';

type StylesProps = {
  textColor: ThemeColors;
};

const useStyles = createStyles((theme, { textColor }: StylesProps) => ({
  textColor: {
    color: theme.other[textColor],
  },
}));

type TextComponentProps = {
  children: React.ReactNode;
  textColor?: ThemeColors;
} & TitleProps;

export function Title({
  children,
  textColor = 'textPrimary',
  ...props
}: TextComponentProps) {
  const { classes } = useStyles({ textColor });

  return (
    <MantineTitle className={classes.textColor} {...props}>
      {children}
    </MantineTitle>
  );
}
