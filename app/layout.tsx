import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { AnalyticsProvider } from './_components/AnalyticsProvider';
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
  title: 'Portfolio | Paul George Tibulca',
  description: 'A compilation of my work and projects',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} vertical center-h bg-stone-900 font-mono text-stone-50 antialiased`}
      >
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
