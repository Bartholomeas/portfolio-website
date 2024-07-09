import React from 'react';
import {Metadata} from 'next';

import {Dosis} from 'next/font/google';

import {cookies} from 'next/headers';

import {Notifications} from '@/components/common/mantine';
import {CookiesConsent} from '@/components/common/special/CookiesConsent';
import {AppModalsProvider} from '@/components/templates/AppModalsProvider';
import {AppShell} from '@/components/templates/AppShell';
import RootStyleRegistry from '@/components/templates/RootStyleRegistry';
import {GoogleAnalytics} from "@/lib/gtag/GoogleAnalytics";

const inter = Dosis({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-variable',
});

export const metadata: Metadata = {
    title: 'Strony i aplikacje internetowe, programista | Bartosz Stefaniak',
    description:
        'Odkryj profesjonalizm i kreatywność moich projektów! Specjalizuję się w tworzeniu stron internetowych, aplikacji oraz projektach graficznych. Skontaktuj się ze mną, aby dowiedzieć się więcej!',
    keywords:
        'Frontend Developer, Freelancer, Web Design, JavaScript, CSS, React, Next.js',
};

function RootLayout({children}: { children: React.ReactNode }) {
    const cookieStore = cookies();
    const consent = cookieStore.get('consent');

    return (
        <html lang="pl" suppressHydrationWarning>
        <body
            className={inter.className}
            style={{overflowX: 'hidden', width: '100vw'}}
        >
        <GoogleAnalytics/>
        {/* <GoogleAnalytics GA_MEASUREMENT_ID={GTAG_ID!} /> */}
        <RootStyleRegistry>
            <AppModalsProvider>
                <Notifications zIndex={9999}/>
                <AppShell>{children}</AppShell>
                <CookiesConsent consent={!!consent}/>
            </AppModalsProvider>
        </RootStyleRegistry>
        </body>
        </html>
    );
}

export default RootLayout;
