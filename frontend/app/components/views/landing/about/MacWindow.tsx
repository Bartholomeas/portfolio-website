import { CardProps, createStyles, Group } from '@mantine/core';

import { PropsWithChildren } from 'react';

import { Box, Card } from '@/components/common/mantine';

const useStyles = createStyles((theme) => ({
  windowBody: {
    position: 'relative',
    minHeight: 200,
    width: '100%',
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.5),
    borderRadius: 8,
    border: `1px solid ${theme.fn.rgba(theme.other.white, 0.1)}`,
    backdropFilter: 'blur(30px)',
    overflow: 'visible',
  },
}));

type Props = PropsWithChildren<CardProps>;

export function MacWindow({ children, ...props }: Props) {
  const { classes } = useStyles();

  return (
    <Card
      p={0}
      sx={(theme) => ({
        position: 'relative',
        minHeight: 200,
        width: '100%',
        backgroundColor: theme.other.bg,
        // backgroundColor: theme.fn.rgba(theme.other.bg, 0.95),
        borderRadius: 8,
        border: `1px solid ${theme.fn.rgba(theme.other.white, 0.1)}`,
        // backdropFilter: 'blur(30px)',
        overflow: 'visible',
      })}
      className={classes.windowBody}
      {...props}
    >
      <Group
        w="100%"
        noWrap
        spacing={8}
        p={8}
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[6],
          borderRadius: '8px 8px 0 0',
          zIndex: 999,
        })}
      >
        <Box
          sx={{
            height: 12,
            width: 12,
            borderRadius: '100%',
            backgroundColor: '#FF605B',
          }}
        />
        <Box
          sx={{
            height: 12,
            width: 12,
            borderRadius: '100%',
            backgroundColor: '#FFBD44',
          }}
        />
        <Box
          sx={{
            height: 12,
            width: 12,
            borderRadius: '100%',
            backgroundColor: '#00CA4E',
          }}
        />
      </Group>
      <Box p={8} sx={{ zIndex: 0, paddingTop: 32 }}>
        {children}
      </Box>
    </Card>
  );
}
