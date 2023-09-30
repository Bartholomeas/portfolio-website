'use client';

import { ThemeColors } from '@/theme/types';

import { createStyles, TitleProps } from '@mantine/core';

import { motion } from 'framer-motion';

import React from 'react';

import { Title as MantineTitle } from '.';

type StylesProps = {
  textColor: ThemeColors;
};

const useStyles = createStyles((theme, { textColor }: StylesProps) => ({
  title: {
    color: theme.other[textColor],
    lineHeight: 1.2,
    fontWeight: 900,
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
    <MantineTitle className={classes.title} {...props}>
      {children}
    </MantineTitle>
  );
}

export const MotionTitle = motion(Title);
