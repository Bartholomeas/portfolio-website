import { ButtonProps, createStyles, rem } from '@mantine/core';

import React from 'react';

import { Link } from '../special/Link';

import { Button as MantineButton } from './index';

const useStyles = createStyles((theme) => ({
  buttonBody: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: rem(8),
    borderRadius: rem(10),
    overflow: 'hidden',
    transition: 'background-color .3s ease, color .3s ease',

    '&::before': {
      content: "''",
      position: 'absolute',
      left: '50%',
      top: '50%',
      height: 'auto',
      width: '100%',
      aspectRatio: '1/1',
      backgroundColor: theme.other.primary,
      borderRadius: '100%',
      transform: 'translate(-50%,-50%) scale(0)',
      transformOrigin: 'right bottom',
      transition: '.6s transform ease',
      zIndex: -1,
    },

    '&:hover': {
      '&': {
        backgroundColor: 'transparent',
        color: theme.other.bgDark,
        borderColor: theme.other.primary,
      },
      '&::before': {
        left: '50%',
        top: '50%',
        transform: 'translate(-10%) scale(1.5)',
      },
    },
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
  buttonFilled: {
    color: theme.other.bgDark,
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
  href: string;
  children: React.ReactNode;
} & ButtonProps;

export function ButtonLink({
  variant = 'filled',
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
        {
          [classes.buttonSubtle]: variant === 'subtle',
          [classes.buttonFilled]: variant === 'filled',
        },
        className
      )}
      variant={variant}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
