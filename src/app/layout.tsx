import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://willsapparel.id'),
  title: {
    default: 'Wills Apparel | Jersey Custom & Peralatan Olahraga Premium',
    template: '%s | Wills Apparel',
  },
  description:
    'Solusi bikin jersey custom tanpa ribet di Wills Apparel! #CustomJerseyAntiRibet. Desain premium, bahan berkualitas, & pengerjaan cepat di Malang, Indonesia.',
  keywords: [
    'custom jersey',
    'jersey custom',
    'custom jersey anti ribet',
    'jersey printing',
    'seragam olahraga',
    'toko olahraga Malang',
    'desain jersey tim',
    'baju olahraga kustom',
    'pakaian atletik',
    'jersey futsal custom',
    'jersey basket custom',
    '#customjerseyantiribet',
    'konveksi jersey malang',
    'jersey esport custom',
  ],
  authors: [{ name: 'Wills Apparel', url: 'https://willsapparel.id/' }],
  creator: 'Wills Apparel',
  publisher: 'Wills Apparel',
  applicationName: 'Wills Apparel',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Wills Apparel | #CustomJerseyAntiRibet | Jersey Custom Premium',
    description:
      'Pesan jersey custom tanpa ribet! Solusi terbaik untuk tim olahraga, komunitas, dan atlet di Indonesia. Kualitas premium & desain eksklusif.',
    url: '/',
    siteName: 'Wills Apparel',
    images: [
      {
        url: '/assets/images/wills-logo-white.webp',
        width: 1200,
        height: 630,
        alt: 'Wills Apparel - #CustomJerseyAntiRibet',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@willsapparel',
    title: 'Wills Apparel | #CustomJerseyAntiRibet',
    description:
      'Bikin jersey tanpa ribet? Wills Apparel solusinya! Desain bebas, bahan premium, & pengerjaan cepat.',
    images: ['/assets/images/wills-logo-white.webp'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Wills Apparel',
    image: 'https://willsapparel.id/assets/images/wills-logo-white.webp',
    url: 'https://willsapparel.id',
    telephone: '+6285607125828',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Malang',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.9839,
      longitude: 112.6214,
    },
    description:
      'Premium custom jersey and sportswear in Malang, Indonesia. #CustomJerseyAntiRibet',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '22:00',
    },
    sameAs: [
      'https://www.instagram.com/willsapparel.id/',
      'https://www.facebook.com/profile.php?id=100076669931596',
      'https://www.tiktok.com/@willsapparel.id',
    ],
  };

  return (
    <html lang='id'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
