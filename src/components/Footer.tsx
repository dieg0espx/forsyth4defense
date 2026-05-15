import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { SITE, CONTACT } from "@/lib/site-config";
import {
  practiceAreas,
  footerQuickLinks as quickLinks,
  areasServed,
} from "@/lib/site-navigation";

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
            <span className="sr-only">{SITE.name}</span>
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
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 text-[#b8860b]/60 group-hover:text-[#b8860b] transition-colors" />
                <span className="text-sm">{CONTACT.phone}</span>
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <Mail className="h-4 w-4 text-[#b8860b]/60 group-hover:text-[#b8860b] transition-colors" />
                <span className="text-sm">{CONTACT.email}</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="h-4 w-4 text-[#b8860b]/60" />
                <span className="text-sm">{CONTACT.address}</span>
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
              &copy; {currentYear} {SITE.name}. All rights reserved.
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
                href="/sitemap-page"
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
