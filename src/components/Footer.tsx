import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const practiceAreas = [
  { name: "Sex Crimes Defense", href: "/practice-areas/sex-crimes" },
  { name: "DUI/Vehicular Homicide", href: "/practice-areas/dui" },
  { name: "Domestic Violence", href: "/practice-areas/domestic-violence" },
  { name: "Three Strikes", href: "/practice-areas/three-strikes" },
  { name: "Federal Charges", href: "/practice-areas/federal-weapons" },
  { name: "Homicide/Kidnapping", href: "/practice-areas/homicide-kidnapping" },
];

const quickLinks = [
  { name: "About John D. Forsyth", href: "/attorney" },
  { name: "Case Results", href: "/cases/recent" },
  { name: "Client Testimonials", href: "/testimonials" },
  { name: "Resources", href: "/resources" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

const areasServed = [
  "San Francisco County",
  "Alameda County",
  "Contra Costa County",
  "Marin County",
  "San Mateo County",
  "Santa Clara County",
  "All California Counties",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pb-24 md:pb-0">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Top section with logo and CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
              Law Office of
            </p>
            <p className="font-display text-2xl md:text-3xl">John D. Forsyth</p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-6 py-3 border border-[#b8860b] text-[#b8860b] text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8860b] hover:text-[#0a0a0a] transition-all duration-300"
          >
            Schedule Consultation
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Contact Info */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#b8860b] mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+14158123257"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 text-[#b8860b]/60 group-hover:text-[#b8860b] transition-colors" />
                <span className="text-sm">(415) 812-3257</span>
              </a>
              <a
                href="mailto:john@forsyth4defense.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <Mail className="h-4 w-4 text-[#b8860b]/60 group-hover:text-[#b8860b] transition-colors" />
                <span className="text-sm">john@forsyth4defense.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="h-4 w-4 text-[#b8860b]/60" />
                <span className="text-sm">San Francisco, California</span>
              </div>
            </div>
            <p className="mt-6 text-[11px] uppercase tracking-[0.15em] text-white/30">
              Available 24/7 for urgent matters
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#b8860b] mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#b8860b] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#b8860b] mb-6">
              Areas Served
            </h4>
            <ul className="space-y-3">
              {areasServed.map((area) => (
                <li key={area} className="text-sm text-white/60">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs text-center md:text-left">
              &copy; {currentYear} Law Office of John D. Forsyth. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link
                href="/privacy"
                className="text-white/30 hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/disclaimer"
                className="text-white/30 hover:text-white/60 transition-colors"
              >
                Disclaimer
              </Link>
              <Link
                href="/sitemap"
                className="text-white/30 hover:text-white/60 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-white/20 text-[10px] text-center mt-6 max-w-4xl mx-auto leading-relaxed">
            The information on this website is for general information purposes only.
            Nothing on this site should be taken as legal advice for any individual
            case or situation. This information is not intended to create, and receipt
            or viewing does not constitute, an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
