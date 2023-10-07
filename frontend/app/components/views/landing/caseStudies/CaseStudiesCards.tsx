'use client';

import { useState } from 'react';

import { SimpleGrid } from '@/components/common/mantine';

import { CaseStudiesCard } from './CaseStudiesCard';

import { CaseStudiesItem } from '@/types/pages';

type Props = {
  data: CaseStudiesItem[];
};

export function CaseStudiesCards({ data }: Props) {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const setCardId = (cardId: string | null) => {
    setSelectedCardId(cardId);
  };

  return (
    <SimpleGrid
      cols={1}
      breakpoints={[
        { minWidth: 'sm', cols: 2 },
        { minWidth: 'lg', cols: 3 },
      ]}
    >
      {data?.map((item) => {
        const isSelected = item.uuid === selectedCardId;

        return (
          <CaseStudiesCard
            key={item.uuid}
            item={item}
            onClick={setCardId}
            isSelected={isSelected}
          />
        );
      })}
    </SimpleGrid>
  );
}
