'use client';

import React from 'react';

import { Chip, Group, Stack } from '@mantine/core';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IconFilter, IconSearch } from '@tabler/icons-react';
import { useFiltersCtx } from '@/components/templates/FiltersContextProvider';

import { TextInput } from '../../common/mantine/TextInput';
import { SelectInput } from '../../common/mantine/SelectInput';
import { BlogPostFiltersChip } from './BlogPostFiltersChip';

const postsCategories = [
  'html',
  'javascript',
  'css',
  'frameworki',
  'lifestyle',
  'tricki',
  'inne',
];

export function BlogPostsFilters() {
  const { handleFilters } = useFiltersCtx();
  // const { handleFilters: handleSearch } = useFilters('Search');
  // const { handleFilters: handleChip } = useFilters('Categories');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const onSelect = (name: string, e: any) => {
  //   console.log(Array.from(searchParams.entries()));
  //   const current = new URLSearchParams(Array.from(searchParams.entries()));

  //   const value = e.target.value.trim();

  //   if (!value) {
  //     current.delete(name);
  //   } else {
  //     current.set(name, value);
  //   }

  //   const search = current.toString();
  //   const query = search ? `?${search}` : '';
  //   current.append(name, value);
  //   router.push(`${pathname}${query}`, { shallow: true });
  // };

  return (
    <Stack>
      <Group align="end">
        <TextInput
          icon={<IconSearch size={16} />}
          onChange={(e) => handleFilters('Search', e.target.value)}
          // onChange={(e) => handleSearch(e.target.value)}
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
          handleFilters('Categories', e);
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
