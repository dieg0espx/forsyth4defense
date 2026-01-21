import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Past Client Cases | Criminal Defense Case Archive",
  description:
    "Browse past criminal defense case results by category. Sex crimes, DUI, domestic violence, federal charges, and more. Over 30 years of successful defense outcomes.",
  keywords: [
    "criminal defense cases",
    "sex crimes defense results",
    "DUI case results",
    "domestic violence defense",
    "federal criminal defense cases",
  ],
};

const caseCategories = [
  {
    name: "Sexual Assault/Child Molestation",
    href: "/cases/sex-crimes",
    description:
      "Defense against allegations of sexual assault, child molestation, and internet stings.",
    hasCases: true,
  },
  {
    name: "DUI/Vehicular Homicide",
    href: "/cases/dui",
    description:
      "Defense against DUI charges including vehicular manslaughter and child endangerment.",
    hasCases: true,
  },
  {
    name: "Three Strikes",
    href: "/cases/three-strikes",
    description: "Defense strategies for clients facing three strikes sentencing enhancements.",
    hasCases: true,
  },
  {
    name: "Domestic Violence",
    href: "/cases/domestic-violence",
    description:
      "Defense against domestic violence charges and restraining order violations.",
    hasCases: true,
  },
  {
    name: "Sex Crimes/Registration",
    href: "/practice-areas/sex-crimes",
    description:
      "Cases involving sex crime charges and sex offender registration requirements.",
    hasCases: false,
  },
  {
    name: "Cannabis",
    href: "/practice-areas/cannabis",
    description:
      "Defense in marijuana-related cases including possession, cultivation, and distribution.",
    hasCases: false,
  },
  {
    name: "Attempted Homicide",
    href: "/practice-areas/homicide-kidnapping",
    description: "Defense in attempted murder and assault with intent to kill cases.",
    hasCases: false,
  },
  {
    name: "Federal Weapons Charges",
    href: "/practice-areas/federal-weapons",
    description: "Defense in federal court for weapons-related offenses.",
    hasCases: false,
  },
  {
    name: "Homicide/Kidnapping",
    href: "/practice-areas/homicide-kidnapping",
    description: "Defense in murder, manslaughter, and kidnapping cases.",
    hasCases: false,
  },
];

export default function PastCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Case Archive
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Past Client Cases
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            30+ Years of Successful Criminal Defense
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            Over three decades of criminal defense practice, John D. Forsyth has
            successfully represented clients facing a wide range of criminal charges.
            Browse case categories below to learn more about his experience in specific
            areas of criminal law.
          </p>
        </div>
      </section>

      {/* Case Categories Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Browse Cases
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Browse by Practice Area
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-[#fafafa] border border-gray-200 p-6 hover:border-[#b8860b] transition-colors group"
              >
                <h3 className="font-display text-xl text-[#0a0a0a] mb-2 group-hover:text-[#b8860b] transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex items-center gap-2 text-[#b8860b] font-medium text-sm">
                  {category.hasCases ? "View Case Results" : "Learn More"}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Featured Case
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            The Suzanne Little Case
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            One of the most significant cases in John D. Forsyth&apos;s career, this case
            demonstrates his dedication to thorough investigation and aggressive defense
            strategy.
          </p>
          <Link
            href="/cases/suzanne-little"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#b8860b] text-[#0a0a0a] text-sm uppercase tracking-[0.15em] font-semibold hover:bg-[#d4a017] transition-colors"
          >
            Read the Full Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Take Action Now
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a] mb-6">
            Need Experienced Legal Representation?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            If you or a loved one is facing criminal charges, contact John D. Forsyth
            for a free consultation. Every case receives the same dedicated attention.
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#1a1a1a] transition-colors"
            >
              Request Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
