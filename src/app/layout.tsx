import type { Metadata } from "next";
import StateContextProvider from "@/context/StateCtx";
import { Toaster } from "@/components/ui/toaster";
import { unica, raleway } from "@/fonts";
import "../styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASEURL as string),
  title: {
    default: "Cloud Shop",
    template: `%s | Cloud shop`,
  },
  description: `Hng 11 stage 2 task a `,
  openGraph: {
    title: "Cloud Shop",
    description: "Hng 11 stage 2 task a ",
    url: process.env.NEXT_PUBLIC_BASEURL,
    siteName: "Cloud Shop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Cloud Shop",
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
