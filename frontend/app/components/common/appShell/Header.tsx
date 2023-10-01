'use client';

import { createStyles, rem } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconPhone,
} from '@tabler/icons-react';

import React from 'react';

import {
  ActionIcon,
  Burger,
  Container,
  Drawer,
  Group,
  Header as MantineHeader,
  Stack,
} from '../mantine';
import { Button, ButtonLink } from '../mantine/Button';
import { Image } from '../mantine/Image';
import { Link } from '../special/Link';

import { routes } from '@/misc/routes';
import { openContactModal, useModalStyles } from '@/utils/modalsHandler';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.5),
    backdropFilter: 'blur(10px)',
    borderBottom: `1px solid ${theme.fn.rgba(theme.other.white, 0.2)}`,
  },
  desktopWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
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
}));

export const HEADER_HEIGHT = 56;

export function Header() {
  const { classes, theme } = useStyles();

  const largerThanMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  return (
    <MantineHeader
      height={HEADER_HEIGHT}
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
  { link: routes.home, label: 'Strona główna' },
  { link: routes.blog, label: 'Blog' },
  { link: routes.recommended, label: 'Polecane' },
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
      <ButtonLink variant="subtle" href="/" size="lg" pl={0}>
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
              variant="subtle"
              color="primary"
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
    <div className={classes.desktopWrapper}>
      <Group spacing={16} noWrap>
        {items}
      </Group>
      <Link href={routes.home}>
        <Image
          src="/Logo.svg"
          height={50}
          width={20}
          // sizes="100vw"
          alt="Moje logo, litera B o finezyjnych kształtach"
          sx={{ objectFit: 'contain' }}
        />
      </Link>

      <Group spacing={16} position="right" noWrap>
        <ActionIcon
          className={classes.icon}
          component="a"
          href={routes.github}
          target="_blank"
        >
          <IconBrandGithub size={18} />
        </ActionIcon>
        <ActionIcon
          className={classes.icon}
          component="a"
          href={routes.linkedin}
          target="_blank"
        >
          <IconBrandLinkedin size={18} />
        </ActionIcon>
        <ActionIcon
          className={classes.icon}
          component="a"
          href={routes.discord}
          target="_blank"
        >
          <IconBrandDiscord size={18} />
        </ActionIcon>
        <ActionIcon
          color="primary"
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
    </div>
  );
}

function HeaderSocialsGroup() {
  const { classes } = useStyles();

  return (
    <Group w="100%" position="apart" align="center" px={16}>
      <ActionIcon
        className={classes.icon}
        component="a"
        href={routes.linkedin}
        target="_blank"
      >
        <IconBrandLinkedin size={32} />
      </ActionIcon>
      <ActionIcon
        className={classes.icon}
        component="a"
        href={routes.github}
        target="_blank"
      >
        <IconBrandGithub size={32} />
      </ActionIcon>
      <ActionIcon
        className={classes.icon}
        component="a"
        href={routes.discord}
        target="_blank"
      >
        <IconBrandDiscord size={32} />
      </ActionIcon>
    </Group>
  );
}
