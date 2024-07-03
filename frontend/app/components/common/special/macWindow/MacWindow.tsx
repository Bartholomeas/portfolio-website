import { PropsWithChildren } from 'react';
import { CardProps, createStyles, Group, rem } from '@mantine/core';


import { Box, Card } from '@/components/common/mantine';

type StyleProps = { withGlassBg?: boolean };

const useStyles = createStyles(
  (theme, { withGlassBg = false }: StyleProps) => ({
    windowBody: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: rem(100),
      width: 'auto',
      backgroundColor: withGlassBg
        ? theme.fn.rgba(theme.other.bg, 0.6)
        : theme.other.bg,
      borderRadius: rem(8),
      border: `1px solid ${theme.fn.rgba(theme.other.white, 0.1)}`,
      backdropFilter: 'blur(30px)',
      overflow: 'visible',
    },

    topBar: {
      backgroundColor: theme.colors.dark[6],
      borderRadius: `${rem(8)} ${rem(8)} 0 0`,
      zIndex: 990,
    },
    actionMacButton: { height: rem(12), width: rem(12), borderRadius: '100%' },
    red: {
      backgroundColor: '#FF605B',
    },
    yellow: {
      backgroundColor: '#FFBD44',
    },
    green: {
      backgroundColor: '#00CA4E',
    },

    content: {
      position: 'relative',
      width: '100%',
      height: 'calc(100% - 32px)',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: rem(8),
    },
  })
);

type Props = PropsWithChildren<StyleProps & CardProps>;

export function MacWindow({ children, withGlassBg, ...props }: Props) {
  const { classes, cx } = useStyles({ withGlassBg });

  return (
    <Card p={0} className={cx(classes.windowBody, props.className)} {...props}>
      <Group
        w="100%"
        noWrap
        spacing={8}
        p={8}
        h={32}
        className={classes.topBar}
      >
        <Box className={cx(classes.actionMacButton, classes.red)} />
        <Box className={cx(classes.actionMacButton, classes.yellow)} />
        <Box className={cx(classes.actionMacButton, classes.green)} />
      </Group>
      <Box className={classes.content}>{children}</Box>
    </Card>
  );
}
