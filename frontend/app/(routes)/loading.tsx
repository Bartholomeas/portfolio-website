'use client';

import { Loader } from '@mantine/core';
import React from 'react';

import { Stack } from '@/_components/common/mantine';

export default function Loading() {
  return (
    <Stack h="100%" w="100%" align="center" justify="center">
      <Loader size="xl" variant="bars" />
    </Stack>
  );
}
