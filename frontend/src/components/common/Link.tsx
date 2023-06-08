import React from 'react';
import NextLink from 'next/link';

import { usePathname } from 'next/navigation';
import { createStyles } from '@mantine/core';

const useStyles = createStyles(
  (theme, { isCurrent }: { isCurrent: boolean }) => ({
    link: {
      color: isCurrent ? theme.other.white : theme.other.textSecondary,
      fontSize: 24,
      [`&:hover`]: {
        color: theme.other.textPrimary,
      },

      [theme.fn.largerThan('md')]: {
        fontSize: 16,
      },
    },
  })
);

type LinkProps = React.PropsWithChildren<{ href: string }>;

function Link({ href, children }: LinkProps) {
  const pathname = usePathname();
  const isCurrent = pathname === href;
  const { classes } = useStyles({ isCurrent });

  return (
    <NextLink className={classes.link} href={href}>
      {children}
    </NextLink>
  );
}

export default Link;
