import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { DonationProvider } from "@/contexts/donation-context";
import "./globals.css";
import { Provider } from "@/providers/Provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AeroBooking - Encuentra tu vuelo perfecto",
  description: "Compara precios de vuelos y encuentra las mejores ofertas",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable} antialiased`}
    >
      <body className="font-sans">
        <Provider>
          <DonationProvider>{children}</DonationProvider>
        </Provider>
      </body>
    </html>
  );
}
