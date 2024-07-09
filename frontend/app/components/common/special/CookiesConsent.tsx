'use client';

import React, { useEffect, useState } from 'react';
import { IconX } from '@tabler/icons-react';

import { ActionIcon, Dialog, Divider, Group, Stack } from '../mantine';
import { Button } from '../mantine/Button';
import { Text } from '../mantine/Text';

import { setCookie } from '@/requests/setCookie';

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
    <Dialog opened={cookiesConsentOpened} size="xl" p={24}>
      <Stack spacing={24}>
        <Group position="apart" align="center" w="100%">
          <Text textColor="primary" size="xl" fw={700} lh={1}>
            Ciasteczka 🍪
          </Text>
          <ActionIcon
            color="primary"
            variant="subtle"
            onClick={() => setCookiesConsentOpened(false)}
          >
            <IconX />
          </ActionIcon>
        </Group>
        <Divider my={0} />
        <Text textColor="textPrimary">
          Niektóre funkcje naszej strony mogą nie działać w pełni poprawnie bez
          Twojej zgody na pliki cookies. Pliki cookies pomagają nam również
          analizować ruch na stronie. Klikając {`'Akceptuję'`}, zgadzasz się na
          używanie plików cookies.
        </Text>
        <Divider />
        <Group w="100%" grow>
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
