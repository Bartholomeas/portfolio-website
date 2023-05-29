import React from 'react';

import { Group, Stack } from '@mantine/core';

import { IconSearch } from '@tabler/icons-react';
import { TextInput } from '../../common/mantine/TextInput';
import { SelectInput } from '../../common/mantine/SelectInput';

export function BlogPostsFilters() {
  return (
    <Stack>
      <Group>
        <TextInput
          label="Szukaj"
          color="primary"
          icon={<IconSearch size={16} />}
        />
        <SelectInput data={[{ label: 'saad', value: '' }]} />
      </Group>
    </Stack>
  );
}
