import { createStyles, rem } from '@mantine/core';
import { subscribeUser } from '@strapi-newsletter/react';

import { IconMail, IconSend } from '@tabler/icons-react';

import { useState } from 'react';

import { Container, Image, Stack } from '../../mantine';

import { Button } from '../../mantine/Button';

import { Text } from '@/_components/common/mantine/Text';
import { TextInput } from '@/_components/common/mantine/TextInput';
import { Title } from '@/_components/common/mantine/Title';

import { API_URL } from '@/_utils/variables';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
    backgroundColor: theme.other.bgDark,
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
    zIndex: 999,
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

  control: {
    position: 'relative',
    backgroundColor: theme.other.primary,
    color: theme.other.bg,

    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: -10,
      width: 15,
      height: '100%',
      backgroundColor: theme.other.primary,
    },
  },
}));

export function FooterNewsletterSection() {
  const { classes } = useStyles();
  const [userEmail, setUserEmail] = useState('');

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
                miw={100}
                icon={<IconMail size={16} />}
                label="Your email"
                onChange={(val) => setUserEmail(val.target.value)}
              />
              <Button
                variant="filled"
                sx={(theme) => ({ color: theme.other.bg })}
                onClick={() => {
                  if (checkEmailIsValid(userEmail)) {
                    handleUserSubscribe(userEmail);
                  }
                }}
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

const handleUserSubscribe = async (email: string) => {
  await subscribeUser(email, API_URL);
};

const checkEmailIsValid = (email: string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};
