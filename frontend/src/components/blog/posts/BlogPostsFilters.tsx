import React from 'react';

import { Chip, Group, Stack } from '@mantine/core';

import { IconFilter, IconSearch } from '@tabler/icons-react';
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
          sx={{ flexGrow: 1 }}
          label="Szukaj"
          color="primary"
          icon={<IconSearch size={16} />}
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
