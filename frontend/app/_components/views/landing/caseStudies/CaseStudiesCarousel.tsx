'use client';

import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useState } from 'react';

import { CaseStudiesCard } from './CaseStudiesCard';

import { Box, Grid, Group, Stack } from '@/_components/common/mantine';
import { Text } from '@/_components/common/mantine/Text';
import { Title } from '@/_components/common/mantine/Title';

import { CaseStudiesItem } from '@/_types/pages';

type Props = {
  data: CaseStudiesItem[];
};

export function CaseStudiesCarousel({ data }: Props) {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const setCardId = (cardId: string | null) => {
    setSelectedCardId(cardId);
  };

  const theme = useMantineTheme();
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  const slides = data?.map((item, index) => {
    const reversedOrder = isDesktop && index % 2 !== 0;
    const isSelected = item.uuid === selectedCardId;

    return (
      <Grid key={item.uuid}>
        <Grid.Col span={12} md={6} order={reversedOrder ? 2 : 1}>
          <CaseStudiesCard
            item={item}
            onClick={setCardId}
            isSelected={isSelected}
          />
        </Grid.Col>
        <Grid.Col span={12} md={6} order={reversedOrder ? 1 : 2}>
          <Stack
            h="100%"
            justify="center"
            spacing={8}
            align={reversedOrder ? 'flex-end' : 'flex-start'}
          >
            <Stack
              spacing={4}
              align={reversedOrder ? 'flex-end' : 'flex-start'}
            >
              <Title order={2} textColor="primary">
                {item.title}
              </Title>
              <Group spacing={8}>
                {item.tools.map((tool) => (
                  <Text key={tool.uuid} textColor="textPrimary">
                    #{tool.name}
                  </Text>
                ))}
              </Group>
              <Text textColor="textSecondary">{item.shortDescription}</Text>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    );
  });

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: `repeat(${data.length}, 1fr)`,
      }}
    >
      {slides}
    </Box>
  );
}
