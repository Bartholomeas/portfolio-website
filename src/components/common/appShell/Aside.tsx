import React from 'react';
import { ActionIcon, Aside as MantineAside, Stack, createStyles } from '@mantine/core';
import { Dribbble, GitHub, Linkedin, Mail } from 'react-feather';

const useStyles = createStyles(theme => ({
  wrapper: {
    right: 0,
    bottom: 24,
    width: 'fit-content',
    background: 'none',
  },

  icon: {
    color: theme.other.textSecondary,
  },
}));
const Aside = () => {
  const { classes } = useStyles();

  return (
    <MantineAside fixed className={classes.wrapper} withBorder={false}>
      <Stack align={'center'} spacing={8}>
        <ActionIcon
          className={classes.icon}
          component="a"
          href="https://linkedin.com"
          target="_blank">
          <Linkedin size={16} />
        </ActionIcon>
        <ActionIcon
          className={classes.icon}
          component="a"
          href="https://linkedin.com"
          target="_blank">
          <GitHub size={16} />
        </ActionIcon>
        <ActionIcon
          className={classes.icon}
          component="a"
          href="https://linkedin.com"
          target="_blank">
          <Dribbble size={16} />
        </ActionIcon>
        <ActionIcon
          className={classes.icon}
          component="a"
          href="https://linkedin.com"
          target="_blank">
          <Mail size={16} />
        </ActionIcon>
      </Stack>
    </MantineAside>
  );
};

export default Aside;
