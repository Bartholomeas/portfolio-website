import { IconArrowRight, IconPhone } from '@tabler/icons-react';
import React from 'react';

import { Group } from '@/components/common/mantine';
import { Button, ButtonLink } from '@/components/common/mantine/Button';

import { routes } from '@/misc/routes';

export function LandingButtons() {
  return (
    <Group spacing={8} my={16} w="100%">
      <ButtonLink
        href={routes.blog}
        color="primary"
        variant="filled"
        rightIcon={<IconArrowRight size={16} />}
      >
        Sprawdź bloga
      </ButtonLink>
      <Button
        onClick={() => {
          console.log('contact');
        }}
        variant="outline"
        rightIcon={<IconPhone size={16} />}
      >
        Skontaktuj się!
      </Button>
    </Group>
  );
}
