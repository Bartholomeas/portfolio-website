import { Container, createStyles, Stack } from '@mantine/core';
import React from 'react';

import { Text } from '../../mantine/Text';
import { Title } from '../../mantine/Title';

import { FooterNewsletterAssignBox } from './FooterNewsletterAssignBox';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'static',
    padding: 16,
    backgroundColor: theme.other.primary,
  },

  title: {
    color: theme.other.bgDark,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 32,

    [theme.fn.largerThan('md')]: {
      gridTemplateColumns: '1fr  1fr',
    },
  },
}));
export function FooterNewsletterSection() {
  const { classes } = useStyles();

  return (
    <section className={classes.wrapper}>
      <Stack>
        <Container size="md">
          <div className={classes.grid}>
            <Stack spacing={8}>
              <Title order={3} className={classes.title}>
                Pssst, chcesz być na bieżąco?
              </Title>
              <Text textColor="bg">
                Bądź na bieżąco z najnowszymi postami i nowinkami
                front-endowymi! Zapisz się do mojego newslettera i odkrywaj
                inspirujące treści, praktyczne wskazówki i najświeższe trendy.
                <br />
                Dołącz do nas ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)
              </Text>
            </Stack>

            <FooterNewsletterAssignBox />
          </div>
        </Container>
      </Stack>
    </section>
  );
}
