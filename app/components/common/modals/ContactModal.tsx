import React from 'react';

import {
  Box,
  Checkbox,
  Flex,
  Group,
  Modal,
  ModalProps,
  Stack,
  createStyles,
} from '@mantine/core';

import {
  Icon,
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconHeading,
  IconMail,
  IconMessage,
  IconSend,
  IconUser,
  IconX,
} from '@tabler/icons-react';

import Link from 'next/link';

import { Button } from '../mantine/Button';
import { TextInput } from '../mantine/TextInput';
import { Textarea } from '../mantine/Textarea';
import { Card } from '../mantine/Card';
import { Text } from '../mantine/Text';

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
  overlay: {
    backgroundColor: theme.fn.rgba(theme.other.bg, 0.7),

    backdropFilter: 'blur(10px)',
  },
}));

const socials = [
  {
    text: 'Linkedin',
    href: 'https://www.linkedin.com/in/bartosz-stefaniak-a82727222/',
    icon: IconBrandLinkedin,
  },
  {
    text: 'Github',
    href: 'https://github.com/Bartholomeas',
    icon: IconBrandGithub,
  },
  {
    text: 'Medium',
    href: 'https://www.medium.com',
    icon: IconBrandMedium,
  },
];
export function ContactModal({ opened, onClose }: ModalProps) {
  const { classes } = useStyles();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Skontaktuj się ze mną!"
      centered
      size="lg"
      classNames={{
        title: classes.title,
        content: classes.body,
        header: classes.header,
        overlay: classes.overlay,
      }}
      transitionProps={{
        transition: 'pop',
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
        <Flex direction={{ base: 'column', sm: 'row' }} gap={16} justify="end">
          <Button
            onClick={onClose}
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
        <Card>
          <Group position="apart">
            {socials.map(({ text, href, icon }) => (
              <ContactSocialLink
                key={href}
                text={text}
                href={href}
                icon={icon}
              />
            ))}
            <Group spacing={8}>
              <IconMail />
              <Text>barth.webdesign@gmail.com</Text>
            </Group>
          </Group>
        </Card>
      </Stack>
    </Modal>
  );
}

type ContactSocialLinkProps = {
  text: string;
  href: string;
  icon: Icon;
};

function ContactSocialLink({ text, href, icon }: ContactSocialLinkProps) {
  const IconElement = icon;
  return (
    <Link target="_blank" href={href}>
      <Group spacing={8}>
        <IconElement />
        <Text>{text}</Text>
      </Group>
    </Link>
  );
}
