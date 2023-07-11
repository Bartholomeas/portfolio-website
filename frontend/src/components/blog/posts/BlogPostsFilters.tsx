'use client';

import React from 'react';

import { Chip, Group, Stack } from '@mantine/core';

import { IconFilter, IconSearch } from '@tabler/icons-react';
import { useFiltersCtx } from '@/components/templates/FiltersContextProvider';

import { TextInput } from '../../common/mantine/TextInput';
import { SelectInput } from '../../common/mantine/SelectInput';
import { BlogPostFiltersChip } from './BlogPostFiltersChip';

const postsCategories = [
  'html',
  'javascript',
  'css',
  'framework',
  'lifestyle',
  'tricks',
  'other',
];

export function BlogPostsFilters() {
  const { handleFilters } = useFiltersCtx();

  return (
    <Stack>
      <Group align="end">
        <TextInput
          icon={<IconSearch size={16} />}
          onChange={(e) => handleFilters!('Search', e.target.value)}
          sx={{ flexGrow: 1 }}
          label="Szukaj"
          placeholder="Wyszukaj wpis!"
          color="primary"
        />
        <SelectInput
          placeholder="Wybierz filtry"
          icon={<IconFilter size={16} />}
          data={[
            { label: 'Data dodania rosnąco', value: 'asc' },
            { label: 'Data dodania malejąco', value: 'dsc' },
          ]}
        />
      </Group>
      <Chip.Group
        multiple
        onChange={(e) => {
          handleFilters!('Categories', e);
        }}
      >
        <Group>
          {postsCategories.map((category) => (
            <BlogPostFiltersChip key={category} value={category} />
          ))}
        </Group>
      </Chip.Group>
    </Stack>
  );
}
