'use client';

import React from 'react';
import {
  ActionIcon,
  Aside as MantineAside,
  Stack,
  createStyles,
} from '@mantine/core';

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: 'fit-content',
    background: 'none',
  },

  icon: {
    color: theme.other.textSecondary,
  },

  iconsContainer: {
    position: 'fixed',
    right: 16,
    bottom: 16,
  },
}));

export function Aside() {
  const { classes } = useStyles();

  return (
    <MantineAside fixed className={classes.wrapper} withBorder={false}>
      <Stack align="center" spacing={16} className={classes.iconsContainer}>
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
      </Stack>
    </MantineAside>
  );
}
