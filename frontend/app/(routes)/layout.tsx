import { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import React from 'react';

import { Notifications } from '@/components/common/mantine';
import { AppModalsProvider } from '@/components/templates/AppModalsProvider';
import { AppShell } from '@/components/templates/AppShell';
import { FiltersContextProvider } from '@/components/templates/FiltersContextProvider';
import RootStyleRegistry from '@/components/templates/RootStyleRegistry';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Frontend Developer i freelancer | Bartosz Stefaniak',
  description:
    'Tworzę profesjonalne i kreatywne strony internetowe oraz projekty graficzne. Chcesz się przekonać? Napisz do mnie!',
  keywords:
    'Frontend Developer, Freelancer, Web Design, JavaScript, CSS, React, Next.js',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={poppins.className}
        style={{ overflowX: 'hidden', width: '100vw' }}
      >
        <RootStyleRegistry>
          <AppModalsProvider>
            <FiltersContextProvider>
              <Notifications zIndex={9999} />
              <AppShell>{children}</AppShell>
            </FiltersContextProvider>
          </AppModalsProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
export default RootLayout;
