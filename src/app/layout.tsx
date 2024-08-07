import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const inter = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ilia Tsiklauri',
  description: 'Portfolio to showcase my work',
  icons: {
    icon: '/icons/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
