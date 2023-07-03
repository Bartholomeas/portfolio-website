'use client';

import React from 'react';

import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Burger,
  Drawer,
  Group,
  Header as MantineHeader,
  Stack,
  createStyles,
} from '@mantine/core';
import { openContactModal, useModalStyles } from '../../../utils/modalsHandler';

import Link from '../Link';
import { Button } from '../mantine/Button';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.5),
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

  iconsWrapper: {
    position: 'absolute',
    bottom: 16,
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  icon: {
    color: theme.other.textSecondary,
  },
}));

export function Header() {
  const { classes } = useStyles();

  const largerThanMd = useMediaQuery(`(min-width: 768px)`);

  return (
    <MantineHeader
      height={56}
      zIndex={99999}
      withBorder={false}
      px={16}
      py={8}
      className={classes.wrapper}
    >
      {largerThanMd ? <HeaderDesktop /> : <HeaderMobile />}
    </MantineHeader>
  );
}

function HeaderMobile() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const { classes } = useStyles();
  const { classes: modalClasses } = useModalStyles();

  return (
    <Group position="apart" w="100%">
      <p>bartholomeas</p>
      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        withCloseButton={false}
        zIndex={999}
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
          <Button
            variant="outline"
            color="primary"
            size="xl"
            compact
            fw={400}
            onClick={() =>
              openContactModal({
                title: modalClasses.title,
                content: modalClasses.body,
                header: modalClasses.header,
                overlay: modalClasses.overlay,
              })
            }
          >
            kontakt
          </Button>

          <HeaderSocialsGroup />
        </Stack>
      </Drawer>
      <Burger opened={opened} onClick={toggle} />
    </Group>
  );
}
function HeaderDesktop() {
  const { classes: modalClasses } = useModalStyles();

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
        onClick={() =>
          openContactModal({
            title: modalClasses.title,
            content: modalClasses.body,
            header: modalClasses.header,
            overlay: modalClasses.overlay,
          })
        }
      >
        kontakt
      </Button>
    </Group>
  );
}

function HeaderSocialsGroup() {
  const { classes } = useStyles();

  return (
    <Group
      w="100%"
      position="apart"
      align="center"
      px={16}
      className={classes.iconsWrapper}
    >
      <ActionIcon
        className={classes.icon}
        component="a"
        href="https://www.linkedin.com/in/bartosz-stefaniak-a82727222/"
        target="_blank"
      >
        <IconBrandLinkedin size={32} />
      </ActionIcon>
      <ActionIcon
        className={classes.icon}
        component="a"
        href="https://github.com/Bartholomeas"
        target="_blank"
      >
        <IconBrandGithub size={32} />
      </ActionIcon>
      <ActionIcon
        className={classes.icon}
        component="a"
        href="https://linkedin.com"
        target="_blank"
      >
        <IconBrandMedium size={32} />
      </ActionIcon>
      <ActionIcon
        className={classes.icon}
        component="a"
        href="https://www.linkedin.com/in/bartosz-stefaniak-a82727222/"
        target="_blank"
      >
        <IconBrandDiscord size={32} />
      </ActionIcon>
    </Group>
  );
}
