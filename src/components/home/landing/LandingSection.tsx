'use client';

import React, { Suspense } from 'react';
import { Button, ChevronIcon, Stack, UnstyledButton, createStyles } from '@mantine/core';

import Text from '@/components/common/mantine/Text';
import { Title } from '@/components/common/mantine/Title';
import ShapeWithGlow from '@/components/common/ShapeWithGlow';
import { Anchor } from '@/components/common/mantine/Anchor';

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

const LandingSection = () => {
  const { classes } = useStyles();
  {
  }

  return (
    <section className={classes.wrapper}>
      <Stack align="center" spacing={8}>
        <ShapeWithGlow size={250} />
        <Title order={1}>bartosz stefaniak</Title>
        <Text textColor="textSecondary">front-end development</Text>
        <Text textColor="textSecondary">design</Text>
        <Button variant="outline" color="black">
          Zajrzyj na blog
        </Button>
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
        }}>
        Dowiedz się więcej <ChevronIcon />
      </Anchor>
    </section>
  );
};

export default LandingSection;
