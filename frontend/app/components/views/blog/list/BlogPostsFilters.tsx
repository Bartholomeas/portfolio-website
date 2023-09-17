'use client';




import { Chip, Group, Stack } from '@/components/common/mantine';
import { TextInput } from '@/components/common/mantine/TextInput';
import { useFiltersCtx } from '@/components/templates/FiltersContextProvider';

import { BlogCategory, FetchResponse } from '@/types';

import { createQueryClient } from '@/utils/createQueryClient';
import { API_URL } from '@/utils/variables';

import { IconSearch } from '@tabler/icons-react';
import React, { use } from 'react';

import { BlogPostFiltersChip } from './BlogPostFiltersChip';

async function getCategories(): Promise<FetchResponse<BlogCategory[]>> {
  try {
    const res = await fetch(
      `${API_URL}/api/blog-categories?fields[0]=code&fields[1]=name`
    );
    return res.json();
  } catch (err) {
    throw new Error('getCategories: error');
  }
}

const queryClient = createQueryClient();

export function BlogPostsFilters() {
  const { handleFilters } = useFiltersCtx();

  const { data } = use(queryClient('blogCategories', () => getCategories()));

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
          {data.map((category) => (
            <BlogPostFiltersChip
              key={category.code}
              value={category.code}
              name={category.name}
            />
          ))}
        </Group>
      </Chip.Group>
    </Stack>
  );
}
