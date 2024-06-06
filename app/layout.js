import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0/client';
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "PWA-Login-test",
  description: "By Adonis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-US">
     <Head>
     <link rel="manifest" href="/manifest.json" />
     </Head>
    <UserProvider>
      <body>{children}</body>
    </UserProvider>
    </html>
  );
}
