import React from 'react';
import dayjs from 'dayjs';

import { Stack } from '@mantine/core';

import { FooterNewsletterSection } from './FooterNewsletterSection';
import { Text } from '../../mantine/Text';

export function Footer() {
  return (
    <Stack spacing={0} mt={128}>
      <FooterNewsletterSection />
      <footer style={{ paddingTop: 4 }}>
        <Text size="sm" textColor="textSecondary">
          Bartosz Stefaniak &copy; {dayjs().year()}
        </Text>
      </footer>
    </Stack>
  );
}
