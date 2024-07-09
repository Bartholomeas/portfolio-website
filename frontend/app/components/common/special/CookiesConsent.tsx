'use client';

import React, {useEffect, useState} from 'react';
import {IconX} from '@tabler/icons-react';

import {createStyles} from "@mantine/core";

import {ActionIcon, Dialog, Divider, Group, Stack} from '../mantine';
import {Button} from '../mantine/Button';
import {Text} from '../mantine/Text';

import {routes} from "@/misc/routes";
import {setCookie} from '@/requests/setCookie';

import {Link} from "@/components/common/special/Link";

const useStyles = createStyles((theme) => ({
    spanLink: {
        display: 'inline-block'
    },
    primaryLink: {
        fontSize: theme.fontSizes.lg,
        color: theme.other.primary
    },
    bolder: {
        fontWeight: 600
    }
}))

type Props = {
    consent: boolean;
};

export function CookiesConsent({consent}: Props) {
    const {classes} = useStyles()
    const [cookiesConsentOpened, setCookiesConsentOpened] = useState(!consent);

    useEffect(() => {
        if (window.gtag)
            window.gtag('consent', 'update', {
                analytics_storage: consent ? 'granted' : 'denied',
            });
    }, [consent, cookiesConsentOpened]);

    return (
        <Dialog opened={cookiesConsentOpened} size="xl" p={24}>
            <Stack spacing={24}>
                <Group position="apart" align="center" w="100%">
                    <Text textColor="primary" size="xl" fw={700} lh={1}>
                        Ciasteczka 🍪
                    </Text>
                    <ActionIcon
                        color="primary"
                        variant="subtle"
                        onClick={() => setCookiesConsentOpened(false)}
                    >
                        <IconX/>
                    </ActionIcon>
                </Group>
                <Divider my={0}/>
                <Text textColor="textPrimary"
                      className={classes.spanLink}>
                    Używamy plików cookies, w tym Google Analytics, do analizowania ruchu na naszej stronie, co pomaga
                    nam ulepszać jej funkcjonalność i treści. Twoje dane są przetwarzane zgodnie z naszą <Link
                    href={routes.privacyPolicy} className={classes.primaryLink}>polityką
                    prywatności.</Link> Klikając <span className={classes.bolder}>{`'Akceptuję'`}</span>, zgadzasz się
                    na używanie plików cookies. Jeśli nie zgadzasz się, kliknij <span
                    className={classes.bolder}>{`'Odrzuć'`}</span>.
                </Text>
                <Divider/>
                <Group w="100%" grow>
                    <Button
                        variant="outline"
                        color="primary"
                        onClick={() => {
                            setCookie(false);
                            setCookiesConsentOpened(false);
                        }}
                    >
                        Odrzuć
                    </Button>
                    <Button
                        variant="filled"
                        color="primary"
                        onClick={() => {
                            setCookie(true);
                            setCookiesConsentOpened(false);
                        }}
                    >
                        Akceptuję
                    </Button>
                </Group>
            </Stack>
        </Dialog>
    );
}
