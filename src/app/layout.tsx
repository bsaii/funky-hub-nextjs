import type { Metadata } from 'next';
import { BaseWebProvider } from '@/lib/provider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <BaseWebProvider>{children}</BaseWebProvider>
      </body>
    </html>
  );
}
