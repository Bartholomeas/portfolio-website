'use client';

import React from 'react';
import { Button, Stack, createStyles } from '@mantine/core';

import Text from '@/components/common/mantine/Text';
import { Title } from '@/components/common/mantine/Title';
import ShapeWithGlow from '@/components/common/ShapeWithGlow';

const useStyles = createStyles(() => ({
  wrapper: {
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
        <ShapeWithGlow />
        <Title order={1}>bartosz stefaniak</Title>
        <Text textColor="textSecondary">front-end development</Text>
        <Text textColor="textSecondary">design</Text>
        <Button variant="outline" color="black">
          Zajrzyj na blog
        </Button>
      </Stack>
    </section>
  );
};

export default LandingSection;
