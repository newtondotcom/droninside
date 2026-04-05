import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import type React from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "DronInside",
  description: "Découvrez le site de DronInside",

  // basic fields
  generator: 'Next.js',
  applicationName: 'DronInside',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Typescript', 'Next', 'Drone','DronInside','droninside'],
  authors: [{ name: 'Robin Augereau', url: 'https://nextjs.org' }],
  creator: 'Robin Augereau',
  publisher: 'Robin Augereau',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // robots.txt
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // opengraph
  openGraph: {
    title: 'DronInside',
    description: 'Premier acteur français de vol de drones en intérieur',
    url: 'https://droninside.fr',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://droninside.fr/tranche.png', 
        width: 2688,
        height: 2016,
        alt : "La Tranche Sur Mer"
      },
    ],
    videos: [
      {
        url: 'https://droninside.fr/video.mp4',
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: 'https://droninside.fr/audio.mp3', 
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: RootLayoutProps) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("h-dvh bg-background font-sans antialiased")}>
      <NextIntlClientProvider>
        <TooltipProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        </TooltipProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
