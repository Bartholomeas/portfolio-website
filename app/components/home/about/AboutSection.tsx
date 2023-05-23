import React from 'react';

import {
  Box,
  Group,
  Image,
  SimpleGrid,
  Stack,
  createStyles,
} from '@mantine/core';

import { IconArrowRight, IconPencil, IconTerminal } from '@tabler/icons-react';
import { SectionHeading } from '../../common/design/SectionHeading';
import { Text } from '../../common/mantine/Text';
import { ShapeWithGlow } from '../../common/ShapeWithGlow';
import { Button } from '../../common/mantine/Button';
import { Card } from '../../common/mantine/Card';
import { Title } from '../../common/mantine/Title';
import { Glow } from '../../common/design/Glow';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
    height: '100%',
    width: '100%',
    padding: '100px 0',
  },

  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    [theme.fn.largerThan('md')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
    },
  },
  bgImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    maxWidth: 900,
    margin: '0 auto',
    zIndex: -100,
    opacity: 0.3,
  },

  shapePosition: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    right: 0,
    transform: 'translateY(-75%)',
  },
}));

export function AboutSection() {
  const { classes } = useStyles();

  return (
    <section className={classes.wrapper}>
      <Box sx={{ position: 'relative' }}>
        <ShapeWithGlow className={classes.shapePosition} />

        <Stack>
          <div className={classes.grid}>
            <Image
              src="./man.jpg"
              alt="my portrait photo"
              sx={{ borderRadius: 8, overflow: 'hidden' }}
            />
            <Stack justify="center">
              <SectionHeading
                title="Cześć, jestem Bartek!"
                subtext="Kim jestem?"
              />
              <Text size={16}>
                Lorem ipsum dolor sit amet consectetur. Sit in amet amet dui
                orci feugiat diam. Condimentum turpis tortor lorem blandit orci
                morbi. Malesuada purus vel commodo iaculis semper lacinia tortor
                lectus. Lorem consequat ultricies diam enim.Lorem ipsum dolor
                sit Loreorem consequat ultricies diam enim.Lorem ipsum dolor sit
                Lorem ipsum.Lorem ipsum dolor sit amet consectetur. Sit in amet
                amet dui orci feugiat diam. Condimentum turpis tortor lorem
                blandit orci morbi. Malesuada purus vel commodo iaculis semper
                lacinia tortor lectus. Lorem consequat ultricies diam enim.Lorem
                ipsum dolor sit Lorem ipsum.
              </Text>
              <Button
                onClick={() => {
                  console.log('contact');
                }}
                size="lg"
                variant="subtle"
                color="primary"
                sx={{ alignSelf: 'end' }}
                rightIcon={<IconArrowRight />}
              >
                Skontaktuj się
              </Button>
            </Stack>
          </div>
          <AboutSpecializationsGrid />
        </Stack>
      </Box>
      <Glow
        position={{ top: 200, left: -50, right: 0, bottom: 0 }}
        size={500}
        zIndex={-10}
      />
    </section>
  );
}

function AboutSpecializationsGrid() {
  return (
    <SimpleGrid cols={1} breakpoints={[{ minWidth: 'sm', cols: 2 }]}>
      <Card>
        <Stack spacing={8}>
          <Group position="apart">
            <Title order={4} textColor="primary">
              Front-end
            </Title>
            <Box sx={(theme) => ({ color: theme.other.primary })}>
              <IconTerminal size={32} />
            </Box>
          </Group>
          <Text textColor="textSecondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quia
            asperiores rem aut rerum modi eum fugiat, cupiditate perspiciatis
            deserunt incidunt dolor molestias blanditiis necessitatibus aliquid
            ut in maiores inventore?
          </Text>
        </Stack>
      </Card>
      <Card>
        <Stack spacing={8}>
          <Group position="apart">
            <Title order={4} textColor="primary">
              Design
            </Title>
            <Box sx={(theme) => ({ color: theme.other.primary })}>
              <IconPencil size={32} />
            </Box>
          </Group>
          <Text textColor="textSecondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quia
            asperiores rem aut rerum modi eum fugiat, cupiditate perspiciatis
            deserunt incidunt dolor molestias blanditiis necessitatibus aliquid
            ut in maiores inventore?
          </Text>
        </Stack>
      </Card>
    </SimpleGrid>
  );
}
