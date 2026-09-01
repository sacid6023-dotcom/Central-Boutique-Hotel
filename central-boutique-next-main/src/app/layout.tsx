import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { BookingPopup } from "@/components/booking-popup";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Central Boutique Hotel — Moradabad's First Boutique Hotel",
  description: "Central Boutique Hotel — the first boutique hotel in Moradabad. Fifteen ultra-modern chic rooms in the heart of Civil Lines.",
  metadataBase: new URL("https://hotelcentral.co.in"),
  openGraph: {
    title: "Central Boutique Hotel — Moradabad",
    description: "The first boutique hotel in Moradabad. Fifteen rooms in Civil Lines.",
    type: "website",
    siteName: "Central Boutique Hotel",
    images: [
      {
        url: "/logo2.jpeg",
        width: 800,
        height: 600,
        alt: "Central Boutique Hotel Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo2.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Central Boutique Hotel",
    "description": "Moradabad's first boutique hotel — fifteen quietly composed rooms of modern chic décor in Civil Lines.",
    "image": [
      "https://hotelcentral.co.in/hero-1.jpg",
      "https://hotelcentral.co.in/room-deluxe.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 2, Cross Road Mall, Civil Lines",
      "addressLocality": "Moradabad",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "244001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.8415",
      "longitude": "78.7748"
    },
    "telephone": "+91-591-231-3333",
    "email": "info@hotelcentral.co.in",
    "url": "https://hotelcentral.co.in",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4"
    },
    "priceRange": "$$",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Elevator", "value": true }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppWidget />
        <BookingPopup />
      </body>
    </html>
  );
}
