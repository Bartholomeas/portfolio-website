import { notifications } from '@mantine/notifications';

export const subscribeToNewsletter = async (email: string) => {
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
