import { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import AppShell from './components/templates/AppShell';
import RootStyleRegistry from './components/templates/emotion';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: 'bartholomeas',
  description: 'Bartholomeas website',
  keywords: 'front-end, web design, javascript, css, react, nextjs',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={poppins.className}>
        <RootStyleRegistry>
          <AppShell>{children}</AppShell>
        </RootStyleRegistry>
      </body>
    </html>
  );
};
export default RootLayout;
