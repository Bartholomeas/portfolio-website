import { createStyles, Group } from '@mantine/core';
import { subscribeUser } from '@strapi-newsletter/react';

import { IconMailbox, IconSend } from '@tabler/icons-react';

import { useState } from 'react';

import { Container } from '../../mantine';

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
    padding: theme.spacing.xl,
    backgroundColor: theme.other.bgDark,
    overflow: 'hidden',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  bgImg: {
    ...theme.fn.cover(),
    opacity: 0.1,
    position: 'absolute',
    right: 0,
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.other.textPrimary,
    marginBottom: theme.spacing.md,
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
      <IconMailbox size={150} stroke={1.5} className={classes.bgImg} />
      <Container size="md">
        <div className={classes.body}>
          <Title order={3} className={classes.title}>
            Bądź na bieżąco!
          </Title>
          <Text size="sm" textColor="textSecondary">
            Zapisz się do mojego newslettera, aby otrzymywać najświeższe
            wiadomości i aktualizacje prosto na swoją skrzynkę mailową! Tak jak
            Ty, też nie przepadam za spamem - zapewniam, że moje wiadomości będą
            zawierać tylko najważniejsze informacje.
          </Text>

          <Group spacing={0} align="end" noWrap w="100%">
            <TextInput
              miw={100}
              w="100%"
              placeholder="Your email"
              onChange={(val) => setUserEmail(val.target.value)}
            />
            <Button
              onClick={() => handleUserSubscribe(userEmail)}
              rightIcon={<IconSend />}
            >
              Zapisz się
            </Button>
          </Group>
        </div>
      </Container>
    </div>
  );
}

const handleUserSubscribe = async (email: string) => {
  await subscribeUser(email, API_URL);
};
