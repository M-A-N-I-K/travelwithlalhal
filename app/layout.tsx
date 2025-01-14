import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://travelwithlalhal.vercel.app/"),
  title: {
    default: "Travel With LaLhal - Explore Jammu & Kashmir",
    template: "%s | Travel With LaLhal"
  },
  description: "Discover the beautiful destinations of Jammu & Kashmir including Kathua, Bani, and Basohli. Experience local culture, heritage sites, and breathtaking landscapes.",
  keywords: ["travel", "Jammu & Kashmir", "Kathua", "Bani", "Basohli", "tourism", "India travel", "cultural tours", "travel with lalhal"],
  authors: [{ name: "Manik Dingra" }],
  creator: "Travel With LaLhal",
  publisher: "Travel With LaLhal",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://travelwithlalhal.vercel.app/",
    siteName: "Travel With LaLhal",
    title: "Travel With LaLhal - Explore Jammu & Kashmir",
    description: "Discover the beautiful destinations of Jammu & Kashmir including Kathua, Bani, and Basohli.",
    images: [
      {
        url: "/og-image.jpg",  // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Travel With LaLhal Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel With LaLhal - Explore Jammu & Kashmir",
    description: "Discover the beautiful destinations of Jammu & Kashmir including Kathua, Bani, and Basohli.",
    images: ["/twitter-image.jpg"],  // Add your Twitter card image
    creator: "@yourtwitterhandle",
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
  verification: {
    google: "your-google-site-verification",  // Add your Google verification code
    yandex: "your-yandex-verification",      // Add if targeting Russian market
    yahoo: "your-yahoo-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="canonical" href="https://travelwithlalhal.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased bg-white dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}