import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PWA-Login-test",
  description: "By Adonis",
  applicationName: "JorgePwa",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "JorgePwa",
  },
  formatDetection: {
    telephone: false,
  },
  mobileWebApp: true,
  msapplication: {
    TileColor: "#2B5797",
    tapHighlight: false,
  },
  themeColor: "#8936FF",
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/icons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/icons/favicon-16x16.png" },
    ],
    apple: [
      { rel: "apple-touch-icon", sizes: "120x120", url: "/icons/touch-icon-iphone.png" },
      { rel: "apple-touch-icon", sizes: "152x152", url: "/icons/touch-icon-ipad.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/icons/touch-icon-iphone-retina.png" },
      { rel: "apple-touch-icon", sizes: "167x167", url: "/icons/touch-icon-ipad-retina.png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  manifest: "/manifest.json",
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover",
  openGraph: {
    type: "website",
    url: "https://pwatest-rouge.vercel.app",
    title: "JorgePwa",
    description: "Best PWA App in the world",
    siteName: "JorgePwa",
    images: [
      {
        url: "https://pwatest-rouge.vercel.app/icons/apple-touch-icon.png",
      },
    ],
  },
  twitter: {
    card: "summary",
    url: "https://pwatest-rouge.vercel.app",
    title: "JorgePwa",
    description: "Best PWA App in the world",
    image: "https://pwatest-rouge.vercel.app/icons/android-chrome-192x192.png",
    creator: "@DavidWShadow",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-US">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
