import { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import React from 'react';

import { Notifications } from '@/_components/common/mantine';
import { AppModalsProvider } from '@/_components/templates/AppModalsProvider';
import { AppShell } from '@/_components/templates/AppShell';
import { FiltersContextProvider } from '@/_components/templates/FiltersContextProvider';
import RootStyleRegistry from '@/_components/templates/RootStyleRegistry';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'bartholomeas',
  description: 'Bartholomeas website',
  keywords: 'front-end, web design, javascript, css, react, nextjs',
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
