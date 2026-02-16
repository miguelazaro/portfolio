import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import '@mantine/carousel/styles.css';

export const metadata: Metadata = {
  title: "Miguel Ángel Lázaro | Full Stack Developer",
  description: "Portafolio profesional de Miguel Ángel Lazaro, desarrollador Full Stack especializado en React, Next.js, TypeScript y Node.js",
  icons: {
    icon: [
      { url: "/logo1.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo1.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://miguelazaro-portfolio.vercel.app",
    title: "Miguel Ángel Lázaro | Full Stack Developer",
    description: "Portafolio profesional de desarrollo web Full Stack",
    siteName: "Miguel Ángel Lázaro Portfolio",
    images: [
      {
        url: "/logo1.svg",
        width: 200,
        height: 200,
        alt: "Miguel Lázaro Logo",
      },
    ],
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
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}