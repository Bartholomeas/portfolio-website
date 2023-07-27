import { Box, Checkbox, Flex, Stack } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';

import {
  IconAt,
  IconHeading,
  IconMessage,
  IconSend,
  IconUser,
  IconX,
} from '@tabler/icons-react';

import React from 'react';

import { Button } from '../mantine/Button';
import { Textarea } from '../mantine/Textarea';
import { TextInput } from '../mantine/TextInput';

import { ShapeWithGlow } from '../ShapeWithGlow';

export function ContactModal({ context, id }: ContextModalProps) {
  return (
    <Stack sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translate(-60%, -120%)',
          zIndex: 1000,
        }}
      >
        <ShapeWithGlow shape="circle1" size={100} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          transform: 'translate(0, 140%)',
          zIndex: 1000,
          filter: 'blur(5px)',
          opacity: 0.6,
        }}
      >
        <ShapeWithGlow shape="circle2" size={80} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          transform: 'translate(70%, 95%)',
          zIndex: 1000,
        }}
      >
        <ShapeWithGlow shape="circle2" size={80} />
      </Box>

      <Stack py={24} spacing={24}>
        <TextInput
          label="Twoje imie"
          placeholder="Wpisz swoje imie"
          icon={<IconUser size={16} />}
        />
        <TextInput
          label="Twój e-mail"
          placeholder="Oraz swój e-mail!"
          icon={<IconAt size={16} />}
        />
        <TextInput
          label="Tytuł wiadomości"
          placeholder="Jak chcesz zatytułować tę wiadomość?"
          icon={<IconHeading size={16} />}
        />
        <Textarea
          label="Treść wiadomości"
          placeholder="Tutaj jest miejsce na Twoją wiadomość! Daj się poznać! :)"
          icon={<IconMessage size={16} />}
        />
        <Checkbox label="Zgadzam się na przetwarzanie moich danych osobowych" />
      </Stack>
      <Flex direction={{ base: 'column', sm: 'row' }} gap={16} justify="end">
        <Button
          onClick={() => context.closeContextModal(id)}
          color="gray"
          variant="outline"
          leftIcon={<IconX size={16} />}
        >
          Anuluj
        </Button>
        <Button
          onClick={() => console.log('contact')}
          color="primary"
          variant="outline"
          leftIcon={<IconSend size={16} />}
        >
          Wyślij wiadomość
        </Button>
      </Flex>
    </Stack>
  );
}
