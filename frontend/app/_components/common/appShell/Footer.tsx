import { createStyles, rem } from '@mantine/core';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import React from 'react';

import { ActionIcon, Container, Group, Stack } from '../mantine';
import { Text } from '../mantine/Text';

import { FooterNewsletterSection } from './FooterNewsletterSection';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();
  return (
    <Stack spacing={0} mt={120}>
      <FooterNewsletterSection />
      <div className={classes.footer}>
        <Container className={classes.inner}>
          <Text>bstfnc</Text>
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <ActionIcon
              component="a"
              href="https://github.com/Bartholomeas"
              target="_blank"
            >
              <IconBrandTwitter size={18} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://github.com/Bartholomeas"
              target="_blank"
            >
              <IconBrandGithub size={18} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/bartosz-stefaniak-a82727222/"
              target="_blank"
            >
              <IconBrandLinkedin size={18} />
            </ActionIcon>
            <ActionIcon
              // className={classes.icon}
              component="a"
              href="https://www.linkedin.com/in/bartosz-stefaniak-a82727222/"
              target="_blank"
            >
              <IconBrandDiscord size={18} />
            </ActionIcon>
          </Group>
        </Container>
      </div>
    </Stack>
  );
}
