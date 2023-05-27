import React from 'react';

import { Group, Stack } from '@mantine/core';

import { IconMail, IconSend, IconUser } from '@tabler/icons-react';
import { Title } from '../../mantine/Title';
import { TextInput } from '../../mantine/TextInput';
import { Button } from '../../mantine/Button';

export function FooterNewsletterAssignBox() {
  return (
    <Stack
      spacing={8}
      sx={(theme) => ({
        backgroundColor: theme.other.bg,
        borderRadius: theme.spacing.sm,
        height: 'fit-content',
      })}
      p={16}
    >
      <Title order={5} textColor="primary">
        Zapisz się do newslettera
      </Title>
      <Group spacing={4} noWrap>
        <TextInput
          placeholder="E-mail"
          icon={<IconMail size={16} />}
          w="100%"
        />
        <TextInput placeholder="Imie" icon={<IconUser size={16} />} w="100%" />
      </Group>
      <Button
        variant="outline"
        onClick={() => console.log('newsletter')}
        leftIcon={<IconSend size={16} />}
      >
        Zapisz się!
      </Button>
    </Stack>
  );
}
