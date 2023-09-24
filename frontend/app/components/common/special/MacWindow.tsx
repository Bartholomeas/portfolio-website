import { CardProps, createStyles, Group, rem } from '@mantine/core';

import { PropsWithChildren } from 'react';

import { Box, Card } from '@/components/common/mantine';

type StyleProps = { withGlassBg?: boolean };

const useStyles = createStyles(
  (theme, { withGlassBg = false }: StyleProps) => ({
    windowBody: {
      position: 'relative',
      minHeight: rem(200),
      width: '100%',
      backgroundColor: withGlassBg
        ? theme.fn.rgba(theme.other.bg, 0.6)
        : theme.other.bg,
      borderRadius: rem(8),
      border: `1px solid ${theme.fn.rgba(theme.other.white, 0.1)}`,
      backdropFilter: 'blur(30px)',
      overflow: 'visible',
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
  })
);

type Props = PropsWithChildren<StyleProps & CardProps>;

export function MacWindow({ children, withGlassBg, ...props }: Props) {
  const { classes, cx } = useStyles({ withGlassBg });

  return (
    <Card p={0} className={classes.windowBody} {...props}>
      <Group
        w="100%"
        noWrap
        spacing={8}
        p={8}
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[6],
          borderRadius: '8px 8px 0 0',
          zIndex: 199,
        })}
      >
        <Box className={cx(classes.actionMacButton, classes.red)} />
        <Box className={cx(classes.actionMacButton, classes.yellow)} />
        <Box className={cx(classes.actionMacButton, classes.green)} />
      </Group>
      <Box
        p={8}
        w="100%"
        h="100%"
        sx={{
          position: 'relative',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          // paddingTop: 32,
        }}
      >
        {children}
      </Box>
    </Card>
  );
}
