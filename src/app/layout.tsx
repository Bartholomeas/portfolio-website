import { Metadata } from 'next';

import ThemeProvider from '@/components/templates/ThemeProvider';
import AppShell from '@/components/templates/AppShell';
import RootStyleRegistry from './emotion';

export const metadata: Metadata = {
  title: 'bartholomeas',
  description: 'Bartholomeas website',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl">
      <body>
        <RootStyleRegistry>
          {/* <ThemeProvider> */}
          <AppShell>{children}</AppShell>
          {/* </ThemeProvider> */}
        </RootStyleRegistry>
      </body>
    </html>
  );
};
export default RootLayout;
