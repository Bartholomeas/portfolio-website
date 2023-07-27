import { Box, Group, SimpleGrid, Stack } from '@mantine/core';

import { IconPencil, IconTerminal } from '@tabler/icons-react';

import { Card } from '../../common/mantine';
import { Text } from '../../common/mantine/Text';
import { Title } from '../../common/mantine/Title';

export function AboutSpecializationsGrid() {
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
