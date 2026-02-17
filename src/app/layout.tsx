import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

// Clean, professional sans-serif for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Elegant serif display font for headlines - sophisticated and authoritative
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.forsyth4defense.com"),
  title: {
    default: "Criminal Defense Attorney San Francisco | Law Office of John D. Forsyth",
    template: "%s | Law Office of John D. Forsyth",
  },
  description:
    "San Francisco criminal defense attorney with 30+ years of experience. Specializing in sex crimes defense, DUI, domestic violence, federal charges, and serious felonies. Free consultation: (415) 812-3257",
  keywords: [
    "criminal defense attorney san francisco",
    "san francisco criminal lawyer",
    "sex crimes attorney california",
    "DUI lawyer san francisco",
    "child molestation defense lawyer",
    "sexual assault defense attorney",
    "domestic violence lawyer",
    "federal criminal defense",
    "three strikes attorney california",
    "felony defense lawyer bay area",
  ],
  authors: [{ name: "John D. Forsyth" }],
  creator: "Law Office of John D. Forsyth",
  publisher: "Law Office of John D. Forsyth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.forsyth4defense.com",
    siteName: "Law Office of John D. Forsyth",
    title: "Criminal Defense Attorney San Francisco | John D. Forsyth",
    description:
      "Experienced San Francisco criminal defense attorney. 30+ years defending clients against sex crimes, DUI, domestic violence, and serious felonies. Call (415) 812-3257.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Law Office of John D. Forsyth - Criminal Defense Attorney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criminal Defense Attorney San Francisco | John D. Forsyth",
    description:
      "San Francisco criminal defense attorney with 30+ years experience. Sex crimes, DUI, federal charges. Free consultation.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://www.forsyth4defense.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD Schema for Law Firm
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.forsyth4defense.com/#organization",
  name: "Law Office of John D. Forsyth",
  alternateName: "Forsyth4Defense",
  url: "https://www.forsyth4defense.com",
  logo: "https://www.forsyth4defense.com/logo.png",
  image: "https://www.forsyth4defense.com/og-image.jpg",
  description:
    "San Francisco criminal defense attorney with over 30 years of experience defending clients against serious criminal charges including sex crimes, DUI, domestic violence, and federal charges.",
  telephone: "+1-415-812-3257",
  email: "john@forsyth4defense.com",
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "San Francisco",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94102",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7749,
    longitude: -122.4194,
  },
  areaServed: [
    {
      "@type": "City",
      name: "San Francisco",
    },
    {
      "@type": "State",
      name: "California",
    },
    {
      "@type": "AdministrativeArea",
      name: "Bay Area",
    },
  ],
  founder: {
    "@type": "Person",
    name: "John D. Forsyth",
    jobTitle: "Criminal Defense Attorney",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "UC Berkeley",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of California San Francisco College of the Law",
      },
    ],
  },
  knowsAbout: [
    "Criminal Defense",
    "Sex Crimes Defense",
    "DUI Defense",
    "Domestic Violence Defense",
    "Federal Criminal Defense",
    "Three Strikes Law",
    "Child Molestation Defense",
    "Sexual Assault Defense",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Criminal Defense Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sex Crimes Defense",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "DUI Defense",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Domestic Violence Defense",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Federal Criminal Defense",
        },
      },
    ],
  },
  sameAs: [],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
