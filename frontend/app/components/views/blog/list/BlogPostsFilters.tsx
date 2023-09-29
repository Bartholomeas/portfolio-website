// 'use client';

import { IconSearch } from '@tabler/icons-react';

import React from 'react';

import { Chip, Group, Stack } from '@/components/common/mantine';
import { TextInput } from '@/components/common/mantine/TextInput';
import { useFiltersCtx } from '@/components/templates/FiltersContextProvider';

import { BlogPostFiltersChip } from './BlogPostFiltersChip';

import { getBlogCategories } from '@/lib/blog/getBlogCategories';

import { createQueryClient } from '@/utils/createQueryClient';

const queryClient = createQueryClient();

export async function BlogPostsFilters() {
  const { handleFilters } = useFiltersCtx();

  const blogCategoriesData = queryClient('blogCategories', () =>
    getBlogCategories()
  );
  const { data } = await blogCategoriesData;

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
