import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comunidade Aberta Maestros da IA — Grátis via WhatsApp",
  description:
    "Entre na maior comunidade brasileira de IA para negócios. Lives semanais, sistemas prontos, suporte direto. Totalmente grátis. Acesse agora pelo WhatsApp.",
  openGraph: {
    title: "Comunidade Aberta Maestros da IA — Grátis",
    description:
      "Lives semanais, sistemas prontos, suporte direto. Totalmente grátis. Acesse agora.",
    type: "website",
    locale: "pt_BR",
    url: "https://v2free.maestrosdaia.com",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
