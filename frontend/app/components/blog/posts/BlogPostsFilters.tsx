import { Group, Select, Stack } from '@mantine/core';
import React from 'react';
import { TextInput } from '../../common/mantine/TextInput';

export function BlogPostsFilters() {
  return (
    <Stack>
      <Group>
        <TextInput label="Szukaj" color="primary" />
        <Select data={[{ label: 'saad', value: '' }]} />
      </Group>
    </Stack>
  );
}
