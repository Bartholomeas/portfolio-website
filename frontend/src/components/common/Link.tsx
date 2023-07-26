import { createStyles } from '@mantine/core';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const useStyles = createStyles(
  (theme, { isCurrent }: { isCurrent: boolean }) => ({
    link: {
      color: isCurrent ? theme.other.white : theme.other.textSecondary,
      // fontSize: 24,
      [`&:hover`]: {
        color: theme.other.textPrimary,
      },

      [theme.fn.largerThan('md')]: {
        // fontSize: 16,
      },
    },
  })
);

type LinkProps = React.PropsWithChildren<{ href: string; className?: string }>;

function Link({ href, className, children }: LinkProps) {
  const pathname = usePathname();
  const isCurrent = pathname === href;
  const { cx, classes } = useStyles({ isCurrent });

  return (
    <NextLink className={cx(classes.link, className)} href={href}>
      {children}
    </NextLink>
  );
}

export default Link;
