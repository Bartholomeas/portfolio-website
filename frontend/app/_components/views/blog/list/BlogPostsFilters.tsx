'use client';

import { IconSearch } from '@tabler/icons-react';
import React from 'react';

import { BlogPostFiltersChip } from './BlogPostFiltersChip';

import { Chip, Group, Stack } from '@/_components/common/mantine';
import { TextInput } from '@/_components/common/mantine/TextInput';
import { useFiltersCtx } from '@/_components/templates/FiltersContextProvider';

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
