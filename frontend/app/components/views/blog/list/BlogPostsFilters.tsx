'use client';

import { IconSearch } from '@tabler/icons-react';

import React, { use } from 'react';

import { Chip, Group, Stack } from '@/components/common/mantine';
import { TextInput } from '@/components/common/mantine/TextInput';

import { BlogPostFiltersChip } from './BlogPostFiltersChip';

import { SearchParamsCodes } from '@/hooks/usePostsFilters';
import { useQueryParams } from '@/hooks/useQueryParams';
import { getBlogCategories } from '@/lib/blog/getBlogCategories';

import { createQueryClient } from '@/utils/createQueryClient';

const queryClient = createQueryClient();

type SearchParams = Record<keyof SearchParamsCodes, string | string[]>;

export function BlogPostsFilters() {
  const { setQueryParams } = useQueryParams<SearchParams>();

  const { data } = use(
    queryClient('blogCategories', () => getBlogCategories())
  );

  return (
    <Stack>
      <Group align="end">
        <TextInput
          icon={<IconSearch size={16} />}
          onChange={(e) => setQueryParams({ Search: e.target.value })}
          sx={{ flexGrow: 1 }}
          label="Szukaj"
          placeholder="Wyszukaj wpis!"
          color="primary"
        />
      </Group>
      <Chip.Group
        multiple
        onChange={(e) => {
          setQueryParams({ Categories: e });
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
