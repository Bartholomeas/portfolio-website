import { Button as MantineButton } from '@/components/common/mantine/index';
import { ButtonProps, createStyles } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

const useStyles = createStyles(() => ({
  buttonBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonSubtle: {
    '&:hover': {
      background: 'none',
    },

    '& svg': {
      transition: 'transform 0.2s ease',
    },
    '&:hover svg': {
      transform: 'translateX(5px)',
    },
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
      className={cx(
        classes.buttonBody,
        variant === 'subtle' && classes.buttonSubtle,
        className
      )}
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
      component={Link}
      href={href}
      className={cx(
        classes.buttonBody,
        variant === 'subtle' && classes.buttonSubtle,
        className
      )}
      variant={variant}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
