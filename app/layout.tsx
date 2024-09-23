export const dynamic = "force-dynamic"

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { appName } from "@/constants";
import { AuthProvider } from "@/contexts/user-context";
import { AccountProvider } from "@/contexts/account-context";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: appName,
  description: `${appName} is a modern banking platfrom for everyone.`,
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AccountProvider>
        <AuthProvider>
          <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
        </AuthProvider>
      </AccountProvider>
    </html>
  );
}
