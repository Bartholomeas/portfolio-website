'use client';

import React from 'react';

import {Stack} from '@/components/common/mantine';
import {Text} from '@/components/common/mantine/Text';

import {RecommendedList} from './RecommendedList';

import {RecommendedItemsGroup} from '@/types/pages';
import {slugify} from "@/utils/slugify";

type Props = {
    data: RecommendedItemsGroup[];
};

export function RecommendedListsSection({data}: Props) {
    return (
        <Stack spacing={48} h="100%" w="100%">
            {data ? (
                data.map((list) => <RecommendedList list={list}
                                                    key={slugify(`recommendedList-${slugify(`${list?.title}-${list?.id}`)}`)}/>)
            ) : (
                <Text>Brak danych</Text>
            )}
        </Stack>
    );
}
