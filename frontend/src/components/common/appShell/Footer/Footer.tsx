import { Stack } from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';

import { Text } from '../../mantine/Text';
import { FooterNewsletterSection } from './FooterNewsletterSection';

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
