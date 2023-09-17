import { createStyles, rem } from '@mantine/core';

import NextLink, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const useStyles = createStyles((theme) => ({
  link: {
    color: theme.other.textSecondary,

    [`&:hover`]: {
      color: theme.other.textPrimary,
    },

    fontSize: rem(16),
    [theme.fn.largerThan('md')]: {
      fontSize: rem(14),
    },
  },
  linkActive: {
    color: theme.other.textPrimary,
  },
}));

type Props = React.PropsWithChildren<
  { href: string; className?: string } & LinkProps
>;

export function Link({ href, className, children, ...props }: Props) {
  const { cx, classes } = useStyles();
  const pathname = usePathname();
  const isCurrent = pathname === href;

  return (
    <NextLink
      className={cx(
        classes.link,
        { [classes.linkActive]: isCurrent },
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </NextLink>
  );
}
