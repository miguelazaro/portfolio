import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteUrl } from '@/lib/site';
import "./globals.css";

const bodyFont = localFont({ src: '../../public/fonts/dm-sans.ttf', variable: '--font-body', weight: '100 900', display: 'swap' });
const displayFont = localFont({ src: '../../public/fonts/space-grotesk.ttf', variable: '--font-display', weight: '300 700', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: siteUrl,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  title: "Miguel Ángel Lázaro | Desarrollador Fullstack Mid",
  description: "Desarrollador Fullstack Mid en Tehuacán, Puebla. React, Next.js, TypeScript y Node.js para sistemas multiempresa, integraciones y reglas de negocio con pruebas automatizadas.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    title: "Miguel Ángel Lázaro | Desarrollador Fullstack Mid",
    description: "Aplicaciones de negocio con React, Next.js, TypeScript y Node.js. Experiencia en sistemas multiempresa, autenticación y pruebas automatizadas.",
    siteName: "Miguel Ángel Lázaro Portfolio",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Miguel Ángel Lázaro — Desarrollador Fullstack Mid. React, Next.js, TypeScript y Node.js.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: '/social-card.png', alt: 'Miguel Ángel Lázaro — Desarrollador Fullstack Mid' }],
    title: "Miguel Ángel Lázaro | Desarrollador Fullstack Mid",
    description: "Aplicaciones de negocio con React, Next.js, TypeScript y Node.js. Experiencia en sistemas multiempresa, autenticación y pruebas automatizadas.",
  },
};

export const viewport: Viewport = { themeColor: '#17191d' };


const theme = createTheme({
  primaryColor: 'orange',
  defaultRadius: 'sm',
  fontFamily: 'var(--font-body), Arial, sans-serif',
  headings: { fontFamily: 'var(--font-display), Arial, sans-serif', fontWeight: '500' },
  colors: {
    orange: [
      '#fff3eb',
      '#f7dfce',
      '#efc5aa',
      '#e5a681',
      '#d98458',
      '#c76032',
      '#b64018',
      '#963511',
      '#792b0e',
      '#5b210c'
    ],
    olive: [
      '#F4F6E8',
      '#E8EDD4',
      '#D4DDAF',
      '#C0CD8A',
      '#9FAD5C',
      '#8B9B4A',
      '#6B7A3A',
      '#5A6831',
      '#495628',
      '#38441F'
    ]
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
