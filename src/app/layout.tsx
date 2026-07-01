import { Caveat, Lexend, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { getSiteContent } from "@/lib/content";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display-family",
  display: "swap",
  preload: true,
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-family",
  display: "swap",
  preload: true,
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-accent-family",
  display: "swap",
  preload: false,
});

const siteUrl = getSiteUrl();

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  const { seo, site } = content;
  const ogImage = seo.ogImage.startsWith("http") ? seo.ogImage : `${siteUrl}${seo.ogImage}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: seo.title,
      template: `%s | ${site.name}`,
    },
    description: seo.description,
    applicationName: site.name,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: siteUrl,
      siteName: site.name,
      title: seo.title,
      description: seo.description,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#0C3318",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${plusJakarta.variable} ${lexend.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
