import React from 'react';

import { RecommendedList } from './RecommendedList';

import { Stack } from '@/_components/common/mantine';
import { Text } from '@/_components/common/mantine/Text';

import { RecommendedItems } from '@/_types';

type Props = {
  data: RecommendedItems[];
};

export function RecommendedListsSection({ data }: Props) {
  return (
    <Stack spacing={48}>
      {data.length > 0 ? (
        data?.map((list) => <RecommendedList list={list} key={list.id} />)
      ) : (
        <Text>Brak danych</Text>
      )}
    </Stack>
  );
}
