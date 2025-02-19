import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wills Apparel | #CustomJerseyAntiRibet | Jersey Custom & Peralatan Olahraga",
  description:
    "Bikin jersey custom tanpa ribet di Wills Apparel! #CustomJerseyAntiRibet dengan desain premium & bahan berkualitas tinggi di Malang, Indonesia.",
  keywords: [
    "custom jersey",
    "jersey custom",
    "custom jersey anti ribet",
    "jersey printing",
    "seragam olahraga",
    "toko olahraga Malang",
    "desain jersey tim",
    "baju olahraga kustom",
    "pakaian atletik",
    "jersey futsal custom",
    "jersey basket custom",
    "#customjerseyantiribet",
  ],
  authors: [{ name: "Wills Apparel", url: "https://willsapparel.id/" }],
  creator: "Wills Apparel",
  publisher: "Wills Apparel",
  applicationName: "Wills Apparel",
  openGraph: {
    title: "Wills Apparel | #CustomJerseyAntiRibet | Jersey Custom & Peralatan Olahraga",
    description:
      "Pesan jersey custom tanpa ribet! #CustomJerseyAntiRibet dari Wills Apparel, solusi terbaik untuk tim olahraga dan atlet di Indonesia.",
    url: "https://willsapparel.id/",
    siteName: "Wills Apparel",
    images: [
      {
        url: "https://willsapparel.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wills Apparel - #CustomJerseyAntiRibet",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@willsapparel",
    title: "Wills Apparel | #CustomJerseyAntiRibet",
    description:
      "Bikin jersey tanpa ribet? Wills Apparel solusinya! #CustomJerseyAntiRibet, desain bebas & bahan premium.",
    images: ["https://willsapparel.id/twitter-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://willsapparel.id/",
    languages: {
      "id": "https://willsapparel.id/",
      "en": "https://willsapparel.id/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
