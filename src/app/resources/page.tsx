import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Scale, Search, Users, ArrowRight, Globe, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Resources | Trusted Attorneys & Investigators",
  description:
    "Trusted legal resources and professional contacts recommended by the Law Office of John D. Forsyth. Civil attorneys, criminal defense lawyers, and private investigators in the San Francisco Bay Area.",
  keywords: [
    "San Francisco attorneys",
    "Bay Area criminal defense lawyers",
    "private investigators California",
    "civil attorneys San Francisco",
    "legal resources Bay Area",
  ],
};

const civilAttorneys = [
  {
    name: "Paul J. Smoot",
    firm: "Smoot PC",
    address: ["526 South Humboldt Street", "San Mateo, California 94402"],
    phone: "(650) 548-0900",
    email: "pjs@smootpc.com",
  },
];

const criminalDefenseAttorneys = [
  {
    name: "James A. Bustamante",
    firm: null,
    address: ["1000 Brannan Street, Suite 488", "San Francisco, California 94103"],
    phone: "(415) 394-3808",
    email: null,
  },
  {
    name: "Gilg & Rahn",
    firm: null,
    address: [
      "Sausalito Plaza",
      "1505 Bridgeway, Suite 103",
      "Sausalito, California 94965",
    ],
    phone: "(415) 324-7071",
    email: null,
  },
  {
    name: "Edward Burch",
    firm: "Law Office of Michael & Burch, LLP",
    address: ["1 Sansome St, Suite 3500", "San Francisco, CA 94104"],
    phone: "(415) 946-8996",
    email: "edward@michaelburchlaw.com",
    website: "www.michaelburchlaw.com",
  },
  {
    name: "Sam O'Keefe",
    firm: "Law Office of Douglas Horngrad",
    address: ["1736 Stockton St, Suite 4", "San Francisco, CA 94133"],
    phone: "(415) 397-9509",
    fax: "(415) 397-9519",
    email: "sam@douglashorngradlawoffices.com",
    website: "www.horngradlaw.com",
  },
];

const investigators = [
  {
    name: "Sonny Chayra",
    firm: "Chayra Investigations",
    address: ["P.O. Box 2363", "Mill Valley, California 94942"],
    phone: "(415) 309-6559",
    email: "sundoginv@comcast.net",
  },
];

interface ContactCardProps {
  name: string;
  firm: string | null;
  address: string[];
  phone: string;
  fax?: string | null;
  email: string | null;
  website?: string | null;
}

function ContactCard({ name, firm, address, phone, fax, email, website }: ContactCardProps) {
  return (
    <div className="bg-white border border-gray-200 p-6 hover:border-[#b8860b] transition-colors">
      <h3 className="font-display text-xl text-[#0a0a0a] mb-1">{name}</h3>
      {firm && <p className="text-[#b8860b] text-sm font-medium mb-4">{firm}</p>}
      <div className="space-y-3 mt-4">
        <div className="flex items-start gap-3 text-gray-600">
          <MapPin className="h-4 w-4 text-[#b8860b] flex-shrink-0 mt-1" />
          <div className="text-sm">
            {address.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
        <a
          href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
          className="flex items-center gap-3 text-gray-600 hover:text-[#b8860b] transition-colors"
        >
          <Phone className="h-4 w-4 text-[#b8860b]" />
          <span className="text-sm">{phone}</span>
        </a>
        {fax && (
          <div className="flex items-center gap-3 text-gray-600">
            <Printer className="h-4 w-4 text-[#b8860b]" />
            <span className="text-sm">Fax: {fax}</span>
          </div>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-gray-600 hover:text-[#b8860b] transition-colors"
          >
            <Mail className="h-4 w-4 text-[#b8860b]" />
            <span className="text-sm">{email}</span>
          </a>
        )}
        {website && (
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-600 hover:text-[#b8860b] transition-colors"
          >
            <Globe className="h-4 w-4 text-[#b8860b]" />
            <span className="text-sm">{website}</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026973/186_nn0ala.jpg')",
            backgroundPosition: "center 80%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Professional Network
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Resources
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Trusted Legal Professionals in the Bay Area
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            Over the years, John D. Forsyth has developed professional relationships
            with trusted attorneys and investigators throughout the Bay Area. These
            professionals are recommended for their expertise, integrity, and dedication
            to their clients.
          </p>
        </div>
      </section>

      {/* Civil Attorneys Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="h-6 w-6 text-[#b8860b]" />
            <h2 className="font-display text-2xl text-[#0a0a0a]">Civil Attorneys</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civilAttorneys.map((attorney) => (
              <ContactCard key={attorney.name} {...attorney} />
            ))}
          </div>
        </div>
      </section>

      {/* Criminal Defense Attorneys Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-[#b8860b]" />
            <h2 className="font-display text-2xl text-[#0a0a0a]">
              Criminal Defense Attorneys
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criminalDefenseAttorneys.map((attorney) => (
              <ContactCard key={attorney.name} {...attorney} />
            ))}
          </div>
        </div>
      </section>

      {/* Investigators Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Search className="h-6 w-6 text-[#b8860b]" />
            <h2 className="font-display text-2xl text-[#0a0a0a]">Investigation</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investigators.map((investigator) => (
              <ContactCard key={investigator.name} {...investigator} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Need Legal Representation?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            If you are facing criminal charges in San Francisco or the Bay Area, contact
            John D. Forsyth for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14158123257"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#b8860b] text-[#0a0a0a] text-sm uppercase tracking-[0.15em] font-semibold hover:bg-[#d4a017] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call (415) 812-3257
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-[0.15em] font-medium hover:border-white hover:bg-white/5 transition-all"
            >
              Contact Online
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-white/30 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
            There is no charge for the first consultation if conducted at the office. Any consultation conducted off-site or at a detention facility requires a fee paid up front. If the client decides to retain the office, 100% of the consultation fee will be applied to the initial retainer for services.
          </p>
        </div>
      </section>
    </>
  );
}
