import { useState } from 'react';
import { createStyles, rem } from '@mantine/core';

import { IconMail, IconSend } from '@tabler/icons-react';


import { Container, Stack } from '../mantine';

import { Button } from '../mantine/Button';
import { Image } from '../mantine/Image';
import { MacWindow } from '../special/macWindow/MacWindow';

import { Text } from '@/components/common/mantine/Text';
import { TextInput } from '@/components/common/mantine/TextInput';
import { Title } from '@/components/common/mantine/Title';

import { subscribeToNewsletter } from '@/utils/subscribeToNewsletter';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
    paddingBottom: 0,

    '&::before': {
      position: 'absolute',
      content: "''",
      background: `linear-gradient(175deg, ${theme.other.primary} -12.04%, ${theme.other.secondary} 58.47%, ${theme.other.secondary} 58.48%, ${theme.other.accent} 125.19%)`,
      left: 0,
      right: 0,
      bottom: 0,
      height: '50%',

      [theme.fn.largerThan('sm')]: {
        height: '30%',
      },
    },

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  gridWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    [theme.fn.largerThan('sm')]: {
      display: 'grid',
      gridTemplateColumns: '3fr 1.5fr',
      alignItems: 'flex-end',
      gap: rem(32),
    },
  },

  macWindow: {
    width: '100%',
    [theme.fn.largerThan('sm')]: {
      transform: `translateY(-${rem(24)})`,
    },
  },

  signupBox: {
    display: 'grid',
    alignItems: 'flex-end',
    gridTemplateColumns: '1fr min-content',
    gap: rem(4),
    marginTop: rem(8),
    maxWidth: rem(450),
    zIndex: 99,
  },

  title: {
    color: theme.other.secondary,
    marginBottom: rem(8),
    fontWeight: 700,
  },

  newsletterImage: {
    height: 'auto',
    width: '100%',
    bottom: 0,
  },
}));

export function FooterNewsletterSection() {
  const { classes } = useStyles();

  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (email: string) => {
    setIsLoading(true);
    setError('');
    if (checkEmailIsValid(email)) {
      subscribeToNewsletter(email)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setError('Email jest niepoprawny');
    }
  };

  return (
    <div className={classes.wrapper}>
      <Container
        size="lg"
        p={0}
        className={classes.gridWrapper}
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MacWindow className={classes.macWindow}>
          <Stack spacing={8} p={24}>
            <Title order={2} className={classes.title}>
              Bądź na bieżąco!
            </Title>
            <Text size="lg" fw={500} textColor="textPrimary">
              Zapisz się do mojego newslettera, aby otrzymywać najświeższe
              wiadomości i aktualizacje prosto na swoją skrzynkę mailową! Tak
              jak Ty, też nie przepadam za spamem - zapewniam, że moje
              wiadomości będą zawierać tylko najważniejsze informacje.
            </Text>

            <div className={classes.signupBox}>
              <TextInput
                error={error}
                miw={100}
                icon={<IconMail size={16} />}
                label="Twój e-mail"
                onChange={(val) => setUserEmail(val.target.value)}
              />
              <Button
                variant="filled"
                sx={(theme) => ({ color: theme.other.bg })}
                onClick={() => {
                  handleSubscribe(userEmail);
                }}
                loading={isLoading}
                rightIcon={<IconSend />}
              >
                Zapisz się
              </Button>
            </div>
          </Stack>
        </MacWindow>

        <Image
          src="/avatars/me_hallo.png"
          alt="Emoji wykonujące gest dzwonienia."
          width="0"
          height="0"
          sizes="100vw"
          className={classes.newsletterImage}
        />
      </Container>
    </div>
  );
}

const checkEmailIsValid = (email: string) => {
  if (!email.trim()) return false;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};
