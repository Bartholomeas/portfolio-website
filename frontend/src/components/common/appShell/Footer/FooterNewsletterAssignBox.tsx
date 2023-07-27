import { Group, Stack } from '@mantine/core';

import { IconMail, IconSend, IconUser } from '@tabler/icons-react';
import React from 'react';

import { Button } from '../../mantine/Button';
import { TextInput } from '../../mantine/TextInput';
import { Title } from '../../mantine/Title';

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
        <TextInput label="E-mail" icon={<IconMail size={16} />} w="100%" />
        <TextInput label="Imie" icon={<IconUser size={16} />} w="100%" />
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
