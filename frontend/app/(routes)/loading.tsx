import { Loader, Stack } from '@/components/common/mantine';

import React from 'react';

export default function Loading() {
  return (
    <Stack h="100%" w="100%" align="center" justify="center">
      <Loader size="xl" variant="bars" />
    </Stack>
  );
}
