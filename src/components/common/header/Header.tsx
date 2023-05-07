'use client';

import React from 'react';
import { Burger, Drawer, Group, Header as MantineHeader, Stack, createStyles } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import Link from '../Link';

const useStyles = createStyles(() => ({
  wrapper: {
    backgroundColor: 'transparent',
  },

  drawerBg: {
    background: 'none',
  },
}));

const Header = () => {
  const { classes } = useStyles();

  // const largerThanMd = useMediaQuery(`(min-width: 768px)`);

  return (
    <MantineHeader height={'auto'} withBorder={false} px={16} className={classes.wrapper}>
      {/* {largerThanMd ? <HeaderDesktop /> : <HeaderMobile />} */}
      <HeaderDesktop />
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
        transitionProps={{ transition: 'slide-down', duration: 200, timingFunction: 'ease-out' }}
        sx={{
          background: 'none',
        }}
        withCloseButton={false}
        classNames={{ content: classes.drawerBg }}>
        <Stack align="center" justify="center" spacing={32} w={'100%'} h={'100%'}>
          <Link href="/">strona główna</Link>
          <Link href="/blog">blog</Link>
          <Link href="/about">o mnie</Link>
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
      <Link href="/about">o mnie</Link>
      <Link href="/recommended">polecane</Link>
      <Link href="/contact">kontakt</Link>
    </Group>
  );
};
