import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';

import React from 'react';

import { Button, Flex, Stack } from '@/components/common/mantine';
import { Title } from '@/components/common/mantine/Title';
import { FloatingShape } from '@/components/common/ornaments/FloatingShape';
import { AccentSpan } from '@/components/common/special/AccentSpan';

import { routes } from '@/misc/routes';

export function AboutHeader() {
  return (
    <Stack align="center" w="100%" sx={{ position: 'relative' }}>
      <Stack spacing={32}>
        <Title size={64} order={1} color="primary" ta="center" lh={1}>
          Kilka słów o mnie
        </Title>

        <Stack align="center">
          <Title order={2}>
            Sprawdź też <AccentSpan>moje profile!</AccentSpan>
          </Title>
          <Flex gap={16} justify="center" align="center" wrap="wrap">
            <Button
              component="a"
              target="_blank"
              variant="light"
              leftIcon={<IconBrandGithub />}
              href={routes.github}
            >
              Github
            </Button>
            <Button
              component="a"
              target="_blank"
              variant="light"
              leftIcon={<IconBrandLinkedin />}
              href={routes.linkedin}
            >
              Linkedin
            </Button>
            <Button
              component="a"
              target="_blank"
              variant="light"
              leftIcon={<IconBrandDiscord />}
              href={routes.discord}
            >
              Discord
            </Button>
          </Flex>
        </Stack>
      </Stack>

      <FloatingShape
        shape="firstShape"
        size={150}
        sx={{
          position: 'absolute',
          top: '-5%',
          right: 0,
        }}
      />

      <FloatingShape
        shape="firstShape"
        size={350}
        rotate={85}
        sx={{
          position: 'absolute',
          top: -200,
          left: '10%',
          opacity: 0.8,
        }}
      />
      <FloatingShape
        shape="firstShape"
        size={250}
        rotate={238}
        sx={{
          position: 'absolute',
          bottom: -300,
          left: '35%',
        }}
      />
    </Stack>
  );
}
