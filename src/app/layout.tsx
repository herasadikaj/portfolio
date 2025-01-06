import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Hera Sadikaj',
  description: 'I am Hera Sadikaj, a creative designer and developer. Explore my portfolio to see projects, skills, and contact information.',
  keywords: [
    'Hera Sadikaj',
    'hera sadikaj',
    'Creative Designer',
    'Developer',
    'Portfolio',
    'UI/UX',
  ],
  authors: {
    name: 'Hera Sadikaj',
  },
  icons: {
    icon: 'https://png.pngtree.com/png-vector/20240908/ourmid/pngtree-divine-elegance-a-mythological-icon-png-image_13794311.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
