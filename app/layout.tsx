import type { Metadata } from "next";
import "./globals.css";
import { productionSiteUrl } from "./site-config";

const title = "WetWorldWanderlust Studios | Websites, Funnels & Brand Storytelling";
const description = "We create strategic websites, landing pages, funnels and human brand stories for businesses that value clarity, thoughtful design and modern execution.";
const socialImageUrl = `${productionSiteUrl}/social/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(productionSiteUrl),
  title,
  description,
  alternates: { canonical: productionSiteUrl },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    title,
    description,
    url: productionSiteUrl,
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: "Tanja and Christoph of WetWorldWanderlust Studios collaborating" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImageUrl] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
