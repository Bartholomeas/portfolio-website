import React from 'react';
import { Metadata } from 'next';

import { Dosis } from 'next/font/google';

import { cookies } from 'next/headers';

import { Notifications } from '@/components/common/mantine';
import { CookiesConsent } from '@/components/common/special/CookiesConsent';
import { AppModalsProvider } from '@/components/templates/AppModalsProvider';
import { AppShell } from '@/components/templates/AppShell';
import RootStyleRegistry from '@/components/templates/RootStyleRegistry';
import { GoogleAnalytics } from '@/lib/gtag/GoogleAnalytics';

const inter = Dosis({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-variable',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bstefaniak.pl/'),
  title: 'Bartosz Stefaniak | Frontend Developer & Web Designer',
  description:
    'Programista i grafik specjalizujący się w tworzeniu nowoczesnych stron i aplikacji internetowych. Ekspert w najnowszych technologiach webowych.',
  keywords: [
    'Frontend Developer',
    'Web Designer',
    'React',
    'Next.js',
    'JavaScript',
    'CSS',
    'Responsive Design',
    'UI/UX',
    'Freelancer',
    'Polska',
  ],
  authors: [{ name: 'Bartosz Stefaniak' }],
  creator: 'Bartosz Stefaniak',
  publisher: 'Bartosz Stefaniak',
  alternates: {
    canonical: 'https://www.bstefaniak.pl/',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.bstefaniak.pl/',
    title: 'Bartosz Stefaniak | Frontend Developer & Web Designer',
    description:
      'Programista i grafik specjalizujący się w tworzeniu nowoczesnych stron i aplikacji internetowych. Ekspert w najnowszych technologiach webowych.',
    images: [
      {
        url: 'og_img.webp',
        width: 1200,
        height: 675,
        alt: 'Bartosz Stefaniak - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bartosz Stefaniak | Frontend Developer & Web Designer',
    description:
      'Programista i grafik specjalizujący się w tworzeniu nowoczesnych stron i aplikacji internetowych. Ekspert w najnowszych technologiach webowych.',
    images: ['og_img.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#E94B61',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const consent = cookieStore.get('consent');

  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={inter.className}
        style={{ overflowX: 'hidden', width: '100vw' }}
      >
        <GoogleAnalytics />
        {/* <GoogleAnalytics GA_MEASUREMENT_ID={GTAG_ID!} /> */}
        <RootStyleRegistry>
          <AppModalsProvider>
            <Notifications zIndex={9999} />
            <AppShell>{children}</AppShell>
            <CookiesConsent consent={!!consent} />
          </AppModalsProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
