import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SkillLevelProvider } from "@/contexts/SkillLevelContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://turpi.ai"),
  title: "Turpi AI - IA sin misterios",
  description: "Guía práctica de herramientas de IA para latinos. Aprende a usar Claude, ChatGPT, Midjourney y más. Gratis o casi gratis.",
  openGraph: {
    title: "Turpi AI - IA sin misterios",
    description: "Guía práctica de herramientas de IA para latinos. Aprende a usar Claude, ChatGPT, Midjourney y más.",
    images: [
      {
        url: "/assets/og_image_v2.png",
        width: 1200,
        height: 630,
        alt: "Turpi AI - IA sin misterios",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turpi AI - IA sin misterios",
    description: "Guía práctica de herramientas de IA para latinos. Aprende a usar Claude, ChatGPT, Midjourney y más.",
    images: ["/assets/og_image_v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SkillLevelProvider>
          {children}
        </SkillLevelProvider>
      </body>
    </html>
  );
}
