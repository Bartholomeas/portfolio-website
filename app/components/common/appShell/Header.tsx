'use client';

import React from 'react';
import { Burger, Drawer, Group, Header as MantineHeader, Stack, createStyles } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import Link from '../Link';
import { ModalBaseCloseButtonProps } from '@mantine/core';

const useStyles = createStyles(theme => ({
  wrapper: {
    backgroundColor: 'transparent',
  },

  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: theme.fn.rgba(theme.other.bgDark, 0.5),
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

const Header = () => {
  const { classes } = useStyles();

  const largerThanMd = useMediaQuery(`(min-width: 768px)`, true, {
    getInitialValueInEffect: false,
  });

  return (
    <MantineHeader height={'auto'} withBorder={false} p={16} className={classes.wrapper}>
      {largerThanMd ? <HeaderDesktop /> : <HeaderMobile />}
    </MantineHeader>
  );
};

export default Header;

const HeaderMobile = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const { classes } = useStyles();

  return (
    <Group position="apart" w={'100%'}>
      <p>bartholomeas</p>
      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        transitionProps={{ transition: 'skew-up', duration: 200, timingFunction: 'ease-out' }}
        classNames={{
          content: classes.drawerContent,
          body: classes.drawerBody,
          header: classes.drawerHeader,
        }}>
        <Stack
          onClick={() => close()}
          align="center"
          justify="center"
          spacing={32}
          w={'100%'}
          h={'100%'}>
          <Link href="/">strona główna</Link>
          <Link href="/blog">blog</Link>
          <Link href="/recommended">polecane</Link>
          <Link href="/contact">kontakt</Link>
        </Stack>
      </Drawer>
      <Burger opened={opened} onClick={toggle} />
    </Group>
  );
};
const HeaderDesktop = () => {
  return (
    <Group position="center" spacing={32} w={'100%'}>
      <Link href="/">strona główna</Link>
      <Link href="/blog">blog</Link>
      <Link href="/recommended">polecane</Link>
      <Link href="/contact">kontakt</Link>
    </Group>
  );
};
