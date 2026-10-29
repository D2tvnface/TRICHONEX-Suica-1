import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ogImage, siteDescription, siteName, siteTitle, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "TRICHONEX",
    "TRICHONEX opinie",
    "TRICHONEX na wypadanie włosów",
    "TRICHONEX gdzie kupić",
    "TRICHONEX oficjalna strona",
  ],
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName,
    title: siteTitle,
    description: siteDescription,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0091e4",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
