import type { Metadata } from 'next';
import { Alata, Josefin_Sans } from 'next/font/google';
import './globals.css';

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
});

const alata = Alata({
  variable: '--font-alata',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'loopstudios',
  description: 'loopstudios landing page',
  icons: '/favicon-32x32.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${josefinSans.variable} ${alata.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
