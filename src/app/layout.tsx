import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ilia Tsiklauri',
  description: 'Portfolio to showcase my work',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
