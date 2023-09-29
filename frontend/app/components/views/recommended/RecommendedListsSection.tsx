import React from 'react';

import { Stack } from '@/components/common/mantine';
import { Text } from '@/components/common/mantine/Text';

import { RecommendedList } from './RecommendedList';

import { RecommendedItems } from '@/types';

type Props = {
  data: RecommendedItems[];
};

export function RecommendedListsSection({ data }: Props) {
  return (
    <Stack spacing={48}>
      {data ? (
        data.map((list) => <RecommendedList list={list} key={list.id} />)
      ) : (
        <Text>Brak danych</Text>
      )}
    </Stack>
  );
}