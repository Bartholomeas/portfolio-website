'use client';

import React from 'react';
import { IconSearch } from '@tabler/icons-react';


import { Chip, Group, Stack } from '@/components/common/mantine';
import { TextInput } from '@/components/common/mantine/TextInput';

import { BlogPostFiltersChip } from './BlogPostFiltersChip';

import { useQueryParams } from '@/hooks/useQueryParams';
import { BlogCategory } from '@/types';

type Props = {
  categories: BlogCategory[] | undefined;
};

export function BlogPostsFilters({ categories }: Props) {
  const { setQueryParams } = useQueryParams();

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
          {categories?.map((category) => (
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
