'use client';

import React, { useEffect, useState } from 'react';

import { Dialog, Divider, Group, Stack } from '../mantine';
import { Button } from '../mantine/Button';
import { Text } from '../mantine/Text';

import { setCookie } from '@/lib/setCookie';

type Props = {
  consent: boolean;
};

export function CookiesConsent({ consent }: Props) {
  const [cookiesConsentOpened, setCookiesConsentOpened] = useState(!consent);

  useEffect(() => {
    window.gtag('consent', 'update', {
      analytics_storage: consent ? 'granted' : 'denied',
    });
  }, [consent, cookiesConsentOpened]);

  return (
    <Dialog opened={cookiesConsentOpened} size="xl">
      <Stack spacing={16}>
        <Text>Ciasteczka 🍪</Text>
        <Text>
          Niektóre funkcje naszej strony mogą nie działać w pełni poprawnie bez
          Twojej zgody na pliki cookies. Pliki cookies pomagają nam również
          analizować ruch na stronie. Klikając {`'Akceptuję'`}, zgadzasz się na
          używanie plików cookies.
        </Text>
        <Divider />
        <Group w="100%">
          <Button
            variant="outline"
            color="primary"
            onClick={() => {
              setCookie(false);
              setCookiesConsentOpened(false);
            }}
          >
            Odrzuć
          </Button>
          <Button
            variant="filled"
            color="primary"
            onClick={() => {
              setCookie(true);
              setCookiesConsentOpened(false);
            }}
          >
            Akceptuję
          </Button>
        </Group>
      </Stack>
    </Dialog>
  );
}
