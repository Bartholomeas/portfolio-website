import React from 'react';
import {
  ButtonProps,
  Button as MantineButton,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles(() => ({
  children: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
}));

type ButtonDefaultProps = {
  variant?: string;
  onClick: () => void;
  children: React.ReactNode;
} & ButtonProps;

export function Button({
  variant = 'default',
  className,
  onClick,
  children,
  ...props
}: ButtonDefaultProps) {
  const { classes, cx } = useStyles();

  return (
    <MantineButton
      onClick={onClick}
      className={cx(classes.children, className)}
      variant={variant}
      {...props}
    >
      {children}
    </MantineButton>
  );
}

type ButtonLinkProps = {
  variant: string;
  href: string;
  children: React.ReactNode;
} & ButtonProps;

export function ButtonLink({
  variant = 'default',
  className,
  href,
  children,
  ...props
}: ButtonLinkProps) {
  const { classes, cx } = useStyles();

  return (
    <MantineButton
      component="a"
      href={href}
      className={cx(classes.children, className)}
      variant={variant}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
