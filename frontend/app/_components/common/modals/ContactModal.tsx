'use client';

import { Box, Checkbox, Flex, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

import { ContextModalProps } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import {
  IconAt,
  IconHeading,
  IconMessage,
  IconSend,
  IconUser,
  IconX,
} from '@tabler/icons-react';

import React, { useState } from 'react';

import { Button } from '../mantine/Button';
import { Textarea } from '../mantine/Textarea';

import { TextInput } from '../mantine/TextInput';
import { ShapeWithGlow } from '../ornaments/ShapeWithGlow';

export function ContactModal({ context, id }: ContextModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      title: '',
      message: '',
      agree: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Niepoprawny e-mail'),
      name: (value) =>
        value.length < 2 ? 'Imie musi mieć conajmniej 2 znaki' : null,
      title: (value) =>
        value.length < 10 ? 'Tytuł musi mieć conajmniej 8 znaków' : null,
      message: (value) =>
        value.length < 50 ? 'Imie musi mieć conajmniej 50 znaków' : null,
      agree: (value) => (!value ? 'Musisz wyrazić zgodę!' : null),
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.isValid()) return form.validate();
    setIsLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          email: form.values.email,
          title: form.values.title,
          name: form.values.name,
          message: form.values.message,
        }),
      });

      notifications.show({
        title: 'Dziękuję za kontakt!',
        message:
          'Wiadomość została wysłana, odpiszę najprędzej jak tylko będę mógł!',
        color: 'teal',
      });
      return res.json();
    } catch (err: any) {
      throw new Error(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Stack sx={{ position: 'relative' }}>
      <form onSubmit={handleSubmit}>
        <Stack py={24} spacing={24}>
          <TextInput
            id="contact_name"
            label="Twoje imie"
            placeholder="Wpisz swoje imie"
            icon={<IconUser size={16} />}
            onChange={(e) => form.setFieldValue('name', e.target.value)}
            error={form.getInputProps('name').error}
          />
          <TextInput
            id="contact_email"
            label="Twój e-mail"
            placeholder="Oraz swój e-mail!"
            icon={<IconAt size={16} />}
            error={form.getInputProps('email').error}
            onChange={(e) => form.setFieldValue('email', e.target.value)}
          />
          <TextInput
            id="contact_title"
            label="Tytuł wiadomości"
            placeholder="Jak chcesz zatytułować tę wiadomość?"
            icon={<IconHeading size={16} />}
            error={form.getInputProps('title').error}
            onChange={(e) => form.setFieldValue('title', e.target.value)}
          />
          <Textarea
            id="contact_message"
            label="Treść wiadomości"
            placeholder="Tutaj jest miejsce na Twoją wiadomość! Daj się poznać! :)"
            icon={<IconMessage size={16} />}
            error={form.getInputProps('message').error}
            onChange={(e) => form.setFieldValue('message', e.target.value)}
          />
          <Checkbox
            label="Zgadzam się na przetwarzanie moich danych osobowych"
            error={form.getInputProps('agree', { type: 'checkbox' }).error}
            onChange={(e) => form.setFieldValue('agree', e.target.checked)}
          />
        </Stack>
        <Flex direction={{ base: 'column', sm: 'row' }} gap={16} justify="end">
          <Button
            onClick={() => {
              context.closeModal(id);
              form.reset();
            }}
            color="gray"
            variant="outline"
            leftIcon={<IconX size={16} />}
          >
            Anuluj
          </Button>
          <Button
            type="submit"
            color="primary"
            variant="outline"
            leftIcon={<IconSend size={16} />}
            onClick={() => {}}
            loading={isLoading}
          >
            Wyślij wiadomość
          </Button>
        </Flex>
      </form>
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
    </Stack>
  );
}
