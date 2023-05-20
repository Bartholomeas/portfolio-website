import React from 'react';
import { Footer as MantineFooter, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'static',
    backgroundColor: theme.other.bgDark,
  },
}));

function Footer() {
  const { classes } = useStyles();

  return (
    <MantineFooter className={classes.wrapper} height={100} withBorder={false}>
      footer
    </MantineFooter>
  );
}

export default Footer;
