'use client';

import React from 'react';

import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import {
  Burger,
  Drawer,
  Group,
  Header as MantineHeader,
  Stack,
  createStyles,
} from '@mantine/core';

import Link from '../Link';
import { Button } from '../mantine/Button';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.8),
    backdropFilter: 'blur(10px)',
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
}));

function Header() {
  const { classes } = useStyles();

  const largerThanMd = useMediaQuery(`(min-width: 768px)`, true, {
    getInitialValueInEffect: false,
  });

  return (
    <MantineHeader
      height="auto"
      withBorder={false}
      px={16}
      py={8}
      className={classes.wrapper}
    >
      {largerThanMd ? <HeaderDesktop /> : <HeaderMobile />}
    </MantineHeader>
  );
}

export default Header;

function HeaderMobile() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const { classes } = useStyles();

  return (
    <Group position="apart" w="100%">
      <p>bartholomeas</p>
      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        transitionProps={{
          transition: 'skew-up',
          duration: 200,
          timingFunction: 'ease-out',
        }}
        classNames={{
          content: classes.drawerContent,
          body: classes.drawerBody,
          header: classes.drawerHeader,
        }}
      >
        <Stack
          onClick={() => close()}
          align="center"
          justify="center"
          spacing={32}
          w="100%"
          h="100%"
        >
          <Link href="/">strona główna</Link>
          <Link href="/blog">blog</Link>
          <Link href="/recommended">polecane</Link>
          <Link href="/contact">kontakt</Link>
        </Stack>
      </Drawer>
      <Burger opened={opened} onClick={toggle} />
    </Group>
  );
}
function HeaderDesktop() {
  return (
    <Group position="center" spacing={32} w="100%">
      <Link href="/">strona główna</Link>
      <Link href="/blog">blog</Link>
      <Link href="/recommended">polecane</Link>
      <Button
        variant="outline"
        color="primary"
        size="md"
        compact
        fw={400}
        onClick={() => console.log('git')}
      >
        kontakt
      </Button>
    </Group>
  );
}
