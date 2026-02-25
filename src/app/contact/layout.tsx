import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Free Consultation with Criminal Defense Attorney",
  description:
    "Contact the Law Office of John D. Forsyth for a free consultation. San Francisco criminal defense attorney with 30+ years experience. Call (415) 812-3257.",
  keywords: [
    "criminal defense attorney consultation",
    "San Francisco lawyer contact",
    "free legal consultation",
    "criminal defense lawyer near me",
  ],
  openGraph: {
    title: "Contact | Law Office of John D. Forsyth",
    description:
      "Get a free consultation with experienced San Francisco criminal defense attorney John D. Forsyth.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
