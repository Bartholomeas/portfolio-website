'use client';

import { createStyles, rem } from '@mantine/core';

import { Title } from '@/_components/common/mantine/Title';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: rem(24),
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  highlight: {
    background: `linear-gradient(to right, ${theme.other.primary}, ${theme.other.secondary})`,
    fontWeight: 700,
    whiteSpace: 'nowrap',
    backgroundClip: 'text',
    paddingBottom: rem(4),
    WebkitTextFillColor: 'transparent',
  },
}));

export function RecommendedHeader() {
  const { classes } = useStyles();

  return (
    <div className={classes.inner}>
      <Title order={1}>
        Znajdziesz tutaj wszystkie rzeczy, które{' '}
        <span className={classes.highlight}>lubię</span>,{' '}
        <span className={classes.highlight}>używam</span> i{' '}
        <span className={classes.highlight}>polecam</span>.
      </Title>
    </div>
  );
}
