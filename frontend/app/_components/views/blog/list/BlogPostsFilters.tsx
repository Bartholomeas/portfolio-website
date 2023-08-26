'use client';

import { IconSearch } from '@tabler/icons-react';

import React, { use } from 'react';

import { BlogPostFiltersChip } from './BlogPostFiltersChip';

import { Chip, Group, Stack } from '@/_components/common/mantine';
import { TextInput } from '@/_components/common/mantine/TextInput';
import { useFiltersCtx } from '@/_components/templates/FiltersContextProvider';

import { BlogCategory, FetchResponse } from '@/_types';

import { createQueryClient } from '@/_utils/createQueryClient';
import { API_TOKEN, API_URL } from '@/_utils/variables';

async function getCategories(): Promise<FetchResponse<BlogCategory[]>> {
  try {
    const res = await fetch(
      `${API_URL}/api/blog-categories?fields[0]=code&fields[1]=name`,
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
      }
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
          {data?.map((category) => (
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
