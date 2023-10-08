'use client';

import React from 'react';

import { Stack } from '@/components/common/mantine';
import { Text } from '@/components/common/mantine/Text';

import { RecommendedList } from './RecommendedList';

import { RecommendedItemsGroup } from '@/types/pages';

type Props = {
  data: RecommendedItemsGroup[];
};

export function RecommendedListsSection({ data }: Props) {
  return (
    <Stack spacing={48}>
      {data ? (
        data.map((list) => <RecommendedList list={list} key={list.uuid} />)
      ) : (
        <Text>Brak danych</Text>
      )}
    </Stack>
  );
}
