import { Metadata } from 'next';

import ThemeProvider from '@/components/templates/ThemeProvider';
import AppShell from '@/components/templates/AppShell';

export const metadata: Metadata = {
  title: 'bartholomeas',
  description: 'Bartholomeas website',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
