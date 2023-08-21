import '@/styles/globals.scss';

import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

type CustomMetadata = Pick<Metadata, 'title' | 'description'> & {
  image: string;
};

const { title, description, image }: CustomMetadata = {
  title: 'Binar Academy',
  description:
    'This is a list of the assignments that I have done during the Binar Academy.',
  image:
    'https://ccrsxx.me/api/og?title=Binar%20Academy&description=This%20is%20a%20list%20of%20the%20assignments%20that%20I%20have%20done%20during%20the%20Binar%20Academy.'
};

export const metadata: Metadata = {
  title: title,
  description: description,
  colorScheme: 'dark',
  themeColor: '#000000',
  generator: 'Next.js',
  keywords: ['Binar Academy', 'Assignment'],
  authors: [{ name: 'Risal Amin', url: 'https://ccrsxx.me' }],
  twitter: {
    title: title,
    description: description,
    card: 'summary_large_image',
    site: '@ccrsxx',
    creator: '@ccrsxx',
    images: {
      url: image,
      alt: title
    }
  },
  openGraph: {
    title: title,
    description: description,
    url: 'https://binar-academy.ccrsxx.me',
    locale: 'en_US',
    siteName: 'ccrsxx.me',
    determiner: 'auto',
    images: {
      url: image,
      alt: title,
      type: 'image/png',
      width: 1200,
      height: 600
    }
  }
};

export default function RootLayout({
  children
}: PropsWithChildren): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
