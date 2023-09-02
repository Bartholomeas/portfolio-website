import { Box, Group, SimpleGrid, Stack } from '@mantine/core';

import { IconPencil, IconTerminal } from '@tabler/icons-react';

import { Card } from '@/_components/common/mantine';
import { Text } from '@/_components/common/mantine/Text';
import { Title } from '@/_components/common/mantine/Title';

import { AboutMeSection } from '@/_types/pages';

type Props = { skills: AboutMeSection['skillCards'] };

export function AboutSpecializationsGrid({ skills }: Props) {
  return (
    <SimpleGrid cols={1} breakpoints={[{ minWidth: 'sm', cols: 2 }]}>
      {skills &&
        skills.map((item) => (
          <Card key={item.title}>
            <Stack spacing={8}>
              <Group position="apart">
                <Title order={4} textColor="primary">
                  {item.title ?? ''}
                </Title>
                <Box sx={(theme) => ({ color: theme.other.primary })}>
                  {item.title === 'Front-end' ? (
                    <IconTerminal size={32} />
                  ) : (
                    <IconPencil size={32} />
                  )}
                </Box>
              </Group>
              <Text textColor="textSecondary">{item.description ?? ''}</Text>
            </Stack>
          </Card>
        ))}
    </SimpleGrid>
  );
}
