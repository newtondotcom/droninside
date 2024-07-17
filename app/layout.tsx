import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './assets/globals.css';
import Footer from '@/components/sm/footer';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Droninside',
  description: `Nous sommes une entreprise de vidéographie par drone qui fait voler des drones en intérieur pour créer des vidéos de visites virtuelles pour l'immobilier, les hôtels, les bureaux et bien plus encore !`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // className={fontSans.variable}
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
