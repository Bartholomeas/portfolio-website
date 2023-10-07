import { createStyles, rem } from '@mantine/core';

import { notifications } from '@mantine/notifications';
import { IconMail, IconSend } from '@tabler/icons-react';

import { useState } from 'react';

import { Container, Image, Stack } from '../mantine';

import { Button } from '../mantine/Button';
import { Text } from '@/components/common/mantine/Text';
import { TextInput } from '@/components/common/mantine/TextInput';
import { Title } from '@/components/common/mantine/Title';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
    backgroundColor: theme.other.box,
    borderTop: `1px solid ${theme.other.primary}`,
    overflow: 'hidden',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
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

  bgImg: {
    ...theme.fn.cover(-40),
    opacity: 0.2,
  },

  body: {
    display: 'grid',
    gridTemplateColumns: '1fr min-content',
    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.other.primary,
    marginBottom: rem(8),
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
        size="md"
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className={classes.body}>
          <Stack spacing={8}>
            <Title order={3} color="primary" className={classes.title}>
              Bądź na bieżąco!
            </Title>
            <Text size="sm" textColor="textPrimary">
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
        </div>
        <Image
          src="/newsletterPath.svg"
          height={150}
          fit="contain"
          alt="Abstract shape"
          className={classes.bgImg}
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

const subscribeToNewsletter = async (email: string) => {
  notifications.show({
    id: 'fetching-newsletter',
    title: 'Prosimy o cierpliwość',
    message: 'Trwa zapisywanie do newslettera..',
    loading: true,
    color: 'teal',
    autoClose: false,
    withCloseButton: false,
  });
  try {
    const res = await fetch('/api/newsletter', {
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      method: 'POST',
    });

    setTimeout(() => {
      notifications.update({
        id: 'fetching-newsletter',
        title: 'Potwierdź zapisanie się do newslettera na swoim e-mailu!',
        message:
          'Dzieli Cię tylko jeden krok od otrzymywania wiadomości, potwierdź swoje członkostwo w newsletterze poprzez wiadomość, która wysłaliśmy na Twoją skrzynkę pocztową.',
      });
    }, 100);
    return res.json();
  } catch (err: any) {
    notifications.clean();
    setTimeout(() => {
      notifications.update({
        id: 'fetching-newsletter',
        title: 'Ajajaj',
        message:
          'Wystąpił jakiś błąd, nie mogliśmy zapisać Cię do newslettera. :(',
        color: 'red',
      });
    }, 100);
    throw new Error(`Error${err.message}`);
  }
};
