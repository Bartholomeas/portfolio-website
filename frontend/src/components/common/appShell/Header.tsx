'use client';

import {
  ActionIcon,
  Burger,
  createStyles,
  Drawer,
  Group,
  Header as MantineHeader,
  rem,
  Stack,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconPhone,
} from '@tabler/icons-react';

import React from 'react';

import Link from '../Link';
import { Container } from '../mantine';
import { Button, ButtonLink } from '../mantine/Button';

import { openContactModal, useModalStyles } from '@/utils/modalsHandler';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.5),
    backdropFilter: 'blur(10px)',
    borderBottom: `1px solid ${theme.fn.rgba(theme.other.white, 0.2)}`,
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
    fontSize: rem(24),
    [theme.fn.largerThan('md')]: {
      fontSize: rem(16),
    },
  },
}));

export function Header() {
  const { classes, theme } = useStyles();

  const largerThanMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  return (
    <MantineHeader
      height={56}
      zIndex={99999}
      withBorder={false}
      className={classes.wrapper}
    >
      <Container className={classes.inner}>
        {largerThanMd ? <HeaderDesktop /> : <HeaderMobile />}
      </Container>
    </MantineHeader>
  );
}

const links = [
  { link: '/', label: 'Strona główna' },
  { link: '/blog', label: 'Blog' },
  { link: '/recommended', label: 'Polecane' },
];

function HeaderMobile() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const { classes } = useStyles();
  const { classes: modalClasses } = useModalStyles();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link}>
      {link.label}
    </Link>
  ));

  return (
    <Group align="center" position="apart" w="100%">
      <ButtonLink variant="subtle" href="/" size="lg">
        bstfnc.
      </ButtonLink>
      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        className={classes.burger}
      />

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
        <Stack h="100%" justify="space-between">
          <Stack
            onClick={() => close()}
            align="center"
            justify="center"
            spacing={32}
            h="100%"
            w="100%"
          >
            {items}

            <Button
              variant="outline"
              color="primary"
              leftIcon={<IconPhone />}
              fw={400}
              className={classes.contactButton}
              onClick={() =>
                openContactModal({
                  title: modalClasses.title,
                  content: modalClasses.body,
                  header: modalClasses.header,
                  overlay: modalClasses.overlay,
                })
              }
            >
              Kontakt
            </Button>
          </Stack>
          <HeaderSocialsGroup />
        </Stack>
      </Drawer>
    </Group>
  );
}
function HeaderDesktop() {
  const { classes: modalClasses } = useModalStyles();
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link}>
      {link.label}
    </Link>
  ));

  return (
    <Group w="100%" position="apart">
      <Group spacing={16}>{items}</Group>
      <ButtonLink variant="subtle" href="/" size="lg">
        bstfnc.
      </ButtonLink>
      <Group spacing={16} position="right" noWrap>
        <ActionIcon
          className={classes.icon}
          component="a"
          href="https://github.com/Bartholomeas"
          target="_blank"
        >
          <IconBrandGithub size={18} />
        </ActionIcon>
        <ActionIcon
          className={classes.icon}
          component="a"
          href="https://www.linkedin.com/in/bartosz-stefaniak-a82727222/"
          target="_blank"
        >
          <IconBrandLinkedin size={18} />
        </ActionIcon>
        <ActionIcon
          className={classes.icon}
          component="a"
          href="https://www.linkedin.com/in/bartosz-stefaniak-a82727222/"
          target="_blank"
        >
          <IconBrandDiscord size={18} />
        </ActionIcon>
        <ActionIcon
          color="primary"
          // ml={24}
          onClick={() =>
            openContactModal({
              title: modalClasses.title,
              content: modalClasses.body,
              header: modalClasses.header,
              overlay: modalClasses.overlay,
            })
          }
        >
          <IconPhone size={18} />
        </ActionIcon>
      </Group>
    </Group>
  );
}

function HeaderSocialsGroup() {
  const { classes } = useStyles();

  return (
    <Group w="100%" position="apart" align="center" px={16}>
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
        href="https://www.linkedin.com/in/bartosz-stefaniak-a82727222/"
        target="_blank"
      >
        <IconBrandDiscord size={32} />
      </ActionIcon>
    </Group>
  );
}
