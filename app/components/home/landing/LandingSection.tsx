import React from 'react';
import { ChevronIcon, Stack, createStyles } from '@mantine/core';

import { Title } from '../../common/mantine/Title';
import { ShapeWithGlow } from '../../common/ShapeWithGlow';
import { Anchor } from '../../common/mantine/Anchor';
import { ButtonLink } from '../../common/mantine/ButtonLink';

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

function LandingSection() {
  const { classes } = useStyles();
  {
  }

  return (
    <section className={classes.wrapper}>
      <Stack align="center" spacing={8}>
        <ShapeWithGlow size={250} />
        <Title order={1}>bartosz stefaniak</Title>
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
      </Anchor>
    </section>
  );
}

export default LandingSection;
