import { IconArrowDown, IconArrowRight } from '@tabler/icons-react';
import React from 'react';

import { Flex } from '@/components/common/mantine';
import { ButtonLink } from '@/components/common/mantine/Button';

import { routes } from '@/misc/routes';

export function LandingButtons() {
  return (
    <Flex
      direction="row"
      gap={8}
      my={16}
      align="center"
      justify={{ base: 'center', md: 'flex-start' }}
      w="100%"
    >
      <ButtonLink
        href={routes.blog}
        color="primary"
        variant="filled"
        rightIcon={<IconArrowRight size={16} />}
      >
        Sprawdź bloga
      </ButtonLink>
      <ButtonLink
        href={routes.about}
        variant="outline"
        rightIcon={<IconArrowDown size={16} />}
      >
        Dowiedz się więcej
      </ButtonLink>
    </Flex>
  );
}
