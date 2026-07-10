import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VitaNova - Real-Time Blood Donation & Care Network",
  description: "Connecting real-time blood needs with a community of verified donors and hospitals nationwide. Find donors, post urgent requests, and save lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
