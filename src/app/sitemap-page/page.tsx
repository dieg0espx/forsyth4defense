import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Sitemap for the Law Office of John D. Forsyth website. Find every page and section of our criminal defense practice.",
  alternates: {
    canonical: "https://www.forsyth4defense.com/sitemap-page",
  },
};

const sections = [
  {
    title: "Main",
    links: [
      { name: "Home", href: "/" },
      { name: "Meet John D. Forsyth", href: "/attorney" },
      { name: "Professional Philosophy", href: "/philosophy" },
      { name: "Up Close and Personal", href: "/personal" },
      { name: "Resources", href: "/resources" },
      { name: "News", href: "/news" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Practice Areas",
    links: [
      { name: "Sex Crimes Defense", href: "/practice-areas/sex-crimes" },
      { name: "DUI / Vehicular Homicide", href: "/practice-areas/dui" },
      { name: "Three Strikes", href: "/practice-areas/three-strikes" },
      { name: "Domestic Violence", href: "/practice-areas/domestic-violence" },
      { name: "Cannabis", href: "/practice-areas/cannabis" },
      { name: "Federal Criminal Defense", href: "/practice-areas/federal-weapons" },
      { name: "Attempted Homicide", href: "/practice-areas/attempted-homicide" },
      { name: "Homicide / Kidnapping", href: "/practice-areas/homicide-kidnapping" },
    ],
  },
  {
    title: "Results",
    links: [
      { name: "Recent Client Cases", href: "/cases/recent" },
      { name: "Past Client Cases", href: "/cases/past" },
      { name: "Client Testimonials", href: "/testimonials" },
      { name: "Sex Crimes Cases", href: "/cases/sex-crimes" },
      { name: "DUI Cases", href: "/cases/dui" },
      { name: "Three Strikes Cases", href: "/cases/three-strikes" },
      { name: "Domestic Violence Cases", href: "/cases/domestic-violence" },
      { name: "Suzanne Little Case", href: "/cases/suzanne-little" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center bg-[#0a0a0a]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Site Index
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl mb-6">
            Sitemap
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Every page on the Law Office of John D. Forsyth website, organized by section.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[11px] uppercase tracking-[0.2em] text-[#b8860b] mb-6 font-semibold">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-[#b8860b] transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
