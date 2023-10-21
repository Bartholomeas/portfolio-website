import React from 'react';

import { Loader, Stack } from '@/components/common/mantine';

export default function Loading() {
  return (
    <Stack h="100%" w="100%" align="center" justify="center" mih="100vh">
      <Loader size="xl" variant="bars" />
    </Stack>
  );
}
