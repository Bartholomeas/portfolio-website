import React from 'react';
import { AnchorProps, createStyles } from '@mantine/core';
import { LinkProps } from 'next/link';
import { Anchor as MantineAnchor } from '@/components/common/mantine/index';
import { ThemeColors } from '../../../theme/types';

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

type AnchorLinkProps = {
  href: string | undefined;
  target?: string;
} & Omit<LinkProps, 'href'>;

type AnchorComponentProps = {
  children: React.ReactNode;
  textColor?: ThemeColors;
} & AnchorProps &
  AnchorLinkProps;

export function Anchor({
  children,
  textColor = 'textPrimary',
  className,
  ...props
}: AnchorComponentProps) {
  const { classes, cx } = useStyles({ textColor });

  return (
    <MantineAnchor
      component="a"
      className={cx(classes.children, classes.textColor, className)}
      {...props}
    >
      {children}
    </MantineAnchor>
  );
}
