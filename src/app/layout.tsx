import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DynaStudio - Agencia Digital",
  description: "Sitio web creado con Next.js y Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
