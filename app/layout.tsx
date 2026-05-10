import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paws & Purrs | Pet Care & Neighborhood Help — Upper West Side NYC",
  description:
    "Dog walking, cat feeding, 30-min pet sitting visits, errands, tutoring, computer help, and more. " +
    "Serving Lincoln Towers and the Upper West Side. Run by Greg Myers.",
  keywords: [
    "dog walking Upper West Side",
    "cat feeding NYC",
    "pet sitting Lincoln Towers",
    "neighborhood help NYC",
    "errands Upper West Side",
    "tutoring NYC",
    "Greg Myers",
  ],
  openGraph: {
    title: "Paws & Purrs",
    description: "Pet care + neighborhood help on the Upper West Side, NYC.",
    siteName: "Paws & Purrs",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B2A4A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
