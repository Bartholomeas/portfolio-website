import { createStyles, rem } from '@mantine/core';

export const useHeaderStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.5),
    backdropFilter: 'blur(10px)',
    borderBottom: `1px solid ${theme.fn.rgba(theme.other.white, 0.2)}`,
  },
  desktopWrapper: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr 1fr',
    gap: rem(24),
    width: '100%',
  },

  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: theme.fn.rgba(theme.other.bgDark, 0.7),
    backdropFilter: 'blur(10px)',
  },

  drawerBody: {
    background: 'none',
    width: '100%',
    height: '100%',
  },

  drawerHeader: {
    width: '100%',
    background: 'none',
  },

  icon: {
    color: theme.other.textSecondary,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  burger: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  contactButton: {
    fontSize: rem(16),
    [theme.fn.largerThan('md')]: {
      fontSize: rem(16),
    },
  },

  logoLink: {
    margin: '0 auto',
  },

  showMobile: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  showDesktop: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}));
