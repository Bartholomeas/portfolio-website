'use client';

import { createStyles } from '@mantine/core';

import React from 'react';

import { LandingCoreContent } from './LandingCoreContent';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  },
}));

export function LandingSection() {
  const { classes } = useStyles();

  return (
    <section className={classes.wrapper}>
      {/* <Stack align="center" spacing={8}> */}
      {/* <ShapeWithGlow size={250} /> */}
      <LandingCoreContent />
      {/* <Title order={1}>bstfnc.</Title>
        <Title order={2} textColor="textSecondary">
          front-end development
        </Title>
        <Title order={2} textColor="textSecondary">
          design
        </Title>

        <ButtonLink size="md" variant="outline" href="/blog" mt={16}>
          Zajrzyj na blog
        </ButtonLink>
      </Stack>
      <Anchor
        href="#about"
        textColor="textSecondary"
        sx={{
          position: 'absolute',
          bottom: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Dowiedz się więcej <ChevronIcon />
      </Anchor> */}
    </section>
  );
}
