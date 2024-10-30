import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrumentsans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  ${instrumentSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
