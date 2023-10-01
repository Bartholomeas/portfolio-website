import { IconArrowDown, IconArrowRight } from '@tabler/icons-react';
import React from 'react';

import { Stack } from '@/components/common/mantine';
import { ButtonLink } from '@/components/common/mantine/Button';

import { routes } from '@/misc/routes';

export function LandingButtons() {
  return (
    <Stack spacing={8} my={16} align="flex-start">
      <ButtonLink
        href={routes.blog}
        color="primary"
        variant="filled"
        rightIcon={<IconArrowRight size={16} />}
      >
        Sprawdź bloga
      </ButtonLink>
      <ButtonLink
        href="#about"
        variant="outline"
        rightIcon={<IconArrowDown size={16} />}
      >
        Dowiedz się więcej
      </ButtonLink>
    </Stack>
  );
}
