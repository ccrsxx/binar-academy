import '@/styles/globals.scss';

import { Layout } from '@/components/layout/layout';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Rent a Car',
  description:
    'Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.',
  authors: { name: 'Risal Amin', url: 'https://risalamin.com' },
  generator: 'Next.js',
  openGraph: {
    title: 'Rent a Car',
    description:
      'Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.',
    determiner: 'auto',
    url: 'https://binar-academy.risalamin.com',
    locale: 'en_US',
    siteName: 'risalamin.com',
    images: {
      url: 'https://risalamin.com/api/og?title=Rent%20a%20Car&description=Kami%20menyediakan%20mobil%20kualitas%20terbaik%20dengan%20harga%20terjangkau.%20Selalu%20siap%20melayani%20kebutuhanmu%20untuk%20sewa%20mobil%20selama%2024%20jam.',
      alt: 'Rent a Car',
      type: 'image/png',
      width: 1200,
      height: 600
    }
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ccrsxx',
    creator: '@ccrsxx',
    title: 'Rent a Car',
    description:
      'Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.',
    images: {
      url: 'https://risalamin.com/api/og?title=Rent%20a%20Car&description=Kami%20menyediakan%20mobil%20kualitas%20terbaik%20dengan%20harga%20terjangkau.%20Selalu%20siap%20melayani%20kebutuhanmu%20untuk%20sewa%20mobil%20selama%2024%20jam.',
      alt: 'Rent a Car'
    }
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9'
          crossOrigin='anonymous'
        />
        <script
          defer
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js'
          integrity='sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa'
          crossOrigin='anonymous'
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
