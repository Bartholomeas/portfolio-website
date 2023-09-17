'use client';

import { IconExternalLink } from '@tabler/icons-react';

import React from 'react';

import {
  ActionIcon,
  Card,
  Group,
  Stack,
  Timeline,
  TimelineItem,
  Tooltip,
} from '@/components/common/mantine';
import { Text } from '@/components/common/mantine/Text';
import { Title } from '@/components/common/mantine/Title';

import { RecommendedItems } from '@/types';

type RecommendedListProps = {
  list: RecommendedItems;
};
export function RecommendedList({ list }: RecommendedListProps) {
  return (
    <Stack>
      <Title textColor="textPrimary" order={2}>
        {list.title}
      </Title>

      <Timeline
        bulletSize={24}
        lineWidth={2}
        color="primary"
        styles={(theme) => ({
          itemBullet: {
            [`&[data-with-child]`]: {
              background: theme.other.bg,
              border: `1px solid ${theme.other.primary}`,
            },
          },
        })}
      >
        {list.items.length > 0 ? (
          list.items.map((item, index) => (
            <TimelineItem
              mt={8}
              key={`${item.title}-${item.id}`}
              bullet={
                <Text size="sm" fw={700} textColor="textPrimary">
                  {index + 1}
                </Text>
              }
              title={
                <Group spacing={8}>
                  <Text fw={600} textColor="textPrimary" size="sm">
                    {item.title}
                  </Text>
                  {item.link && (
                    <Tooltip label={item.link}>
                      <ActionIcon
                        component="a"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        color="primary"
                        radius={999}
                        size="xs"
                      >
                        <IconExternalLink size={12} />
                      </ActionIcon>
                    </Tooltip>
                  )}
                </Group>
              }
            >
              {item.description && (
                <Card py={8} px={16}>
                  <Stack spacing={4}>
                    <Text textColor="textSecondary" size="xs">
                      {item.description}
                    </Text>
                  </Stack>
                </Card>
              )}
            </TimelineItem>
          ))
        ) : (
          <Text textColor="textSecondary">Brak wyników</Text>
        )}
      </Timeline>
    </Stack>
  );
}
