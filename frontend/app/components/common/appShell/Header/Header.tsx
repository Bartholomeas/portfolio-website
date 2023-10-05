'use client';

import React from 'react';

import { Container, Header as MantineHeader } from '../../mantine';

import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';
import { useHeaderStyles } from './useHeaderStyles';

export const HEADER_HEIGHT = 56;

export function Header() {
  const { classes } = useHeaderStyles();

  return (
    <MantineHeader
      height={HEADER_HEIGHT}
      zIndex={99999}
      withBorder={false}
      className={classes.wrapper}
    >
      <Container size="lg" className={classes.inner}>
        <HeaderDesktop />
        <HeaderMobile />
      </Container>
    </MantineHeader>
  );
}
