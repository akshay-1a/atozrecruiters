import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Wrapper from "@/components/wrapper/wrapper";
import { MetaData, MetaDataKey } from '../lib/constants'
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "A TO Z Recruiters",
//   description: "Your personal A to Z Recruitment and Staffing firm, we don't just fill positions; we shape futures.",
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-950`}
      >
        <Wrapper>
          {children}
          <Analytics />
        </Wrapper>
      </body>
    </html>
  );
}
