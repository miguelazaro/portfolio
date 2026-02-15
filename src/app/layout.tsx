import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { LanguageProvider } from "@/context/LanguageContext";
import { PWARegister } from "@/components/PWARegister";
import "./globals.css";
import '@mantine/carousel/styles.css';

export const metadata: Metadata = {
  title: "Miguel Ángel Lázaro | Full Stack Developer",
  description: "Portafolio profesional de Miguel Ángel Lazaro, desarrollador Full Stack especializado en React, Next.js, TypeScript y Node.js",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "M. Lazaro Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://miguelazaro.vercel.app",
    title: "Miguel Ángel Lázaro | Full Stack Developer",
    description: "Portafolio profesional de desarrollo web Full Stack",
    siteName: "Miguel Ángel Lázaro Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Ángel Lázaro | Full Stack Developer",
    description: "Portafolio profesional de desarrollo web Full Stack",
  },
};


const theme = createTheme({
  primaryColor: 'cyan', 
  defaultRadius: 'md', 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <meta name="theme-color" content="#22b8cf" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icon-192.svg" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <LanguageProvider>
            <PWARegister />
            {children}
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}