import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Scale, Shield, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cannabis Defense Attorney | Marijuana Charges California",
  description:
    "Experienced cannabis defense attorney in San Francisco. Defense against marijuana possession, cultivation, distribution, and dispensary compliance issues. Free consultation.",
  keywords: [
    "cannabis defense attorney",
    "marijuana lawyer San Francisco",
    "cannabis possession defense",
    "marijuana cultivation attorney",
    "cannabis dispensary lawyer",
    "California marijuana laws",
  ],
  openGraph: {
    title: "Cannabis Defense Attorney | Law Office of John D. Forsyth",
    description:
      "San Francisco cannabis defense lawyer with decades of experience in marijuana-related cases.",
    images: ["/og-image.jpg"],
  },
};

const cannabisCharges = [
  "Possession Over Legal Limits",
  "Cultivation Violations",
  "Distribution/Sales",
  "Transportation",
  "Dispensary Compliance",
  "Federal Cannabis Charges",
  "Unlicensed Operations",
  "Cannabis DUI",
  "Probation Violations",
];

const caseResults = [
  {
    court: "San Francisco Superior Court",
    description:
      "Client was arrested after traffic stop with 7 lbs. of marijuana. Both he and his girlfriend were in possession of current medicinal cannabis cards. However, the law limits the amount of medicinal marijuana a person can possess or grow. The client was also part of a collective of designated caregivers and qualified patients. That allowed the client to transport and/or possess more marijuana as it was for purposes of use by the entire collective. This evidence was presented to the district attorney immediately.",
    outcome: "CHARGES NOT FILED. CASE DISMISSED.",
  },
  {
    court: "San Francisco Superior Court",
    description:
      "Client was arrested after a traffic stop with 1 lb. of marijuana. He did not have a current medicinal cannabis card. Client was a designated caregiver to an AIDS patient who did have a current card. The law now requires that designated caregivers have a greater role in the qualified patient's life beyond just supplying medicinal marijuana. Evidence of the relationship between the client and the patient was immediately presented to the district attorney.",
    outcome: "CHARGES WITHDRAWN. CASE DISMISSED.",
  },
];

export default function CannabisPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Practice Area
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Cannabis Defense
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Experienced Marijuana Defense in California
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Despite the legalization of recreational cannabis in California, marijuana-related
              charges remain common. The complex web of state regulations regarding possession
              limits, cultivation, distribution, and commercial operations means that many
              Californians still face criminal charges related to cannabis.
            </p>
            <p>
              <strong className="text-[#0a0a0a]">John D. Forsyth has extensive experience</strong> defending clients against cannabis-related
              charges dating back to the medical marijuana era. His understanding of California&apos;s
              evolving cannabis laws and the defenses available under the Compassionate Use Act
              and subsequent legislation has resulted in numerous dismissals and favorable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Charges We Defend */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Areas of Defense
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Cannabis Charges We Defend
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cannabisCharges.map((charge) => (
              <div
                key={charge}
                className="bg-[#fafafa] border border-gray-200 p-5 flex items-center gap-4 hover:border-[#b8860b] transition-colors"
              >
                <Shield className="h-5 w-5 text-[#b8860b] flex-shrink-0" />
                <span className="text-[#0a0a0a] font-medium">{charge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Proven Results
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white">
              Cannabis Case Results
            </h2>
          </div>
          <div className="space-y-6">
            {caseResults.map((result, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Scale className="h-4 w-4 text-[#b8860b]" />
                  <span className="font-medium text-white">{result.court}</span>
                </div>
                <p className="text-white/70 text-sm mb-4">{result.description}</p>
                <div className="flex items-center gap-3 bg-white/10 p-4">
                  <Check className="h-5 w-5 text-[#b8860b] flex-shrink-0" />
                  <span className="font-display text-white text-lg">{result.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Landscape */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Know the Law
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Understanding California Cannabis Laws
            </h2>
          </div>
          <div className="bg-white border border-gray-200 p-8">
            <p className="text-gray-600 mb-6">
              While California has legalized recreational cannabis for adults 21 and over,
              the regulations are complex. Key limitations include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full mt-2" />
                <span className="text-gray-600">Adults may possess up to 28.5 grams of cannabis flower</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full mt-2" />
                <span className="text-gray-600">Cultivation is limited to 6 plants per household for personal use</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full mt-2" />
                <span className="text-gray-600">Commercial operations require proper licensing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full mt-2" />
                <span className="text-gray-600">Federal law still classifies cannabis as a Schedule I substance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full mt-2" />
                <span className="text-gray-600">Local jurisdictions may impose additional restrictions</span>
              </li>
            </ul>
            <p className="text-gray-600">
              Violations of these limits can result in misdemeanor or felony charges
              depending on the circumstances. An experienced cannabis defense attorney
              can help navigate these complex regulations and build a strong defense.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Take Action Now
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Facing Cannabis Charges?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            If you&apos;re facing marijuana-related charges in California, contact John D. Forsyth
            for experienced defense. Understanding your rights under California&apos;s cannabis
            laws is the first step to building a strong defense.
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
              Request Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
