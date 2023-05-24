import React from 'react';

import {
  Box,
  Checkbox,
  Modal,
  ModalProps,
  Stack,
  createStyles,
} from '@mantine/core';

import {
  IconAt,
  IconHeading,
  IconMessage,
  IconSend,
  IconUser,
} from '@tabler/icons-react';
import { Button } from '../mantine/Button';
import { TextInput } from '../mantine/TextInput';
import { Textarea } from '../mantine/Textarea';

import { ShapeWithGlow } from '../ShapeWithGlow';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.other.bg,
  },

  body: {
    position: 'relative',
    overflowY: 'visible',
    backgroundColor: theme.other.bg,

    borderRadius: 8,
    border: `1px solid ${theme.fn.rgba(theme.other.white, 0.2)}`,
    backdropFilter: 'blur(10px)',
  },
  title: {
    color: theme.other.textPrimary,
    fontWeight: 700,
    fontSize: theme.fontSizes.lg,
  },
}));

export function ContactModal({ opened, onClose }: ModalProps) {
  const { classes } = useStyles();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Skontaktuj się ze mną!"
      centered
      classNames={{
        title: classes.title,
        content: classes.body,
        header: classes.header,
      }}
      transitionProps={{
        transition: 'skew-up',
        duration: 200,
        timingFunction: 'ease-out',
      }}
    >
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

        <Stack py={24} spacing={16}>
          <TextInput label="Twoje imie" icon={<IconUser size={16} />} />
          <TextInput label="Twój e-mail" icon={<IconAt size={16} />} />
          <TextInput
            label="Tytuł wiadomości"
            icon={<IconHeading size={16} />}
          />
          <Textarea label="Treść wiadomości" icon={<IconMessage size={16} />} />
          <Checkbox label="Zgadzam się na przetwarzanie moich danych osobowych" />
        </Stack>
        <Button
          onClick={() => console.log('contact')}
          color="primary"
          variant="outline"
          leftIcon={<IconSend size={16} />}
        >
          Wyślij
        </Button>
      </Stack>
    </Modal>
  );
}
