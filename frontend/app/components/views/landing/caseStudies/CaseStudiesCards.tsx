'use client'

import {useState} from 'react';
import {CaseStudiesItem} from '@/types/pages';
import {slugify} from "@/utils/slugify";
import {SimpleGrid} from '@/components/common/mantine';
import {CaseStudiesCard} from './CaseStudiesCard';

type Props = {
    data: CaseStudiesItem[];
};

export function CaseStudiesCards({data}: Props) {
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);


    const setCardId = (cardId: string | null) => {
        setSelectedCardId(cardId);
    };

    return (
        <SimpleGrid
            cols={1}
            breakpoints={[
                {minWidth: 'sm', cols: 2},
                {minWidth: 'lg', cols: 3},
            ]}
        >
            {data?.map((item) => {
                const slugId = slugify(item?.title)
                const isSelected = slugId === selectedCardId;

                return (
                    <CaseStudiesCard
                        key={`caseStudiesCard-${slugId}`}
                        item={item}
                        onClick={setCardId}
                        isSelected={isSelected}
                    />
                );
            })}
        </SimpleGrid>
    );
}
