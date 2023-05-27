import React from 'react';

import { Group, Dialog as MantineDialog, Stack } from '@mantine/core';

import { IconMail, IconSend, IconUser } from '@tabler/icons-react';
import { Title } from './Title';
import { TextInput } from './TextInput';
import { Button } from './Button';

export function Dialog() {
  return (
    <MantineDialog
      opened
      withCloseButton
      onClose={() => console.log('dialog')}
      size="md"
      position={{ bottom: 16, right: 64 }}
    >
      <Stack spacing={8}>
        <Title order={4} textColor="primary">
          Zapisz się do newslettera
        </Title>
        <Group spacing={4} noWrap>
          <TextInput
            placeholder="E-mail"
            icon={<IconMail size={16} />}
            w="100%"
          />
          <TextInput
            placeholder="Imie"
            icon={<IconUser size={16} />}
            w="100%"
          />
        </Group>
        <Button
          variant="outline"
          onClick={() => console.log('newsletter')}
          leftIcon={<IconSend />}
        >
          Prześlij
        </Button>
      </Stack>
    </MantineDialog>
  );
}
