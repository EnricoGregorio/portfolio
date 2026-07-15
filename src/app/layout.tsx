import type { Metadata, Viewport } from "next";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Enrico | Desenvolvedor Back-end",
  description: "Portfólio de Enrico, focado em sistemas robustos e de alta performance.",
};

export const viewport: Viewport = {
  themeColor: "#E9204F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}