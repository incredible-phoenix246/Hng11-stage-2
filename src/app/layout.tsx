import type { Metadata } from "next";
import StateContextProvider from "@/context/StateCtx";
import { Toaster } from "@/components/ui/toaster";
import { unica, raleway } from "@/fonts";
import "../styles/globals.scss";
import "../styles/slider.scss";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASEURL as string),
  title: {
    default: "FiWears",
    template: `%s | Cloud shop`,
  },
  description: `Welcome to FiWears, where fashion meets function. Explore our curated collection of clothing, bags, shoes, and glasses. From timeless classics to trendy must-haves, we’ve got you covered.`,
  openGraph: {
    title: "FiWears",
    description:
      "Welcome to FiWears, where fashion meets function. Explore our curated collection of clothing, bags, shoes, and glasses. From timeless classics to trendy must-haves, we’ve got you covered.",
    url: process.env.NEXT_PUBLIC_BASEURL,
    siteName: "FiWears",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "FiWears",
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StateContextProvider>
        <body
          className={`${raleway.className} ${unica.variable} bg-base-white`}
        >
          {children}
          <Toaster />
        </body>
      </StateContextProvider>
    </html>
  );
}
