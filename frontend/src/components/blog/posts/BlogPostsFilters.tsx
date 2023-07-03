import React from 'react';

import { Chip, Group, Stack } from '@mantine/core';

import { TextInput } from '../../common/mantine/TextInput';
import { SelectInput } from '../../common/mantine/SelectInput';
import { BlogPostFiltersChip } from './BlogPostFiltersChip';

import { IconFilter, IconSearch } from '@tabler/icons-react';

const postsCategories = [
  'html',
  'javascript',
  'css',
  'frameworki',
  'lifestyle',
  'tricki',
  'inne',
];
type BlogPostsFiltersProps = {
  onChange: (value: string) => void;
};
export function BlogPostsFilters({ onChange }: BlogPostsFiltersProps) {
  return (
    <Stack>
      <Chip.Group multiple>
        <Group>
          {postsCategories.map((category) => (
            <BlogPostFiltersChip key={category} value={category} />
          ))}
        </Group>
      </Chip.Group>
      <Group>
        <TextInput
          icon={<IconSearch size={16} />}
          onChange={(event) => onChange(event.target.value)}
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
    </Stack>
  );
}
