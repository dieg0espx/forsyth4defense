import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Check, ArrowRight, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Domestic Violence Defense Attorney San Francisco | DV Lawyer",
  description:
    "Experienced domestic violence defense attorney in San Francisco. Defense against DV charges, restraining orders, and spousal abuse allegations. Free consultation.",
  keywords: [
    "domestic violence attorney San Francisco",
    "DV defense lawyer",
    "spousal abuse defense",
    "restraining order defense",
    "domestic battery lawyer",
    "false DV accusation defense",
  ],
};

const dvCharges = [
  "Corporal Injury to Spouse (PC 273.5)",
  "Domestic Battery (PC 243(e)(1))",
  "Criminal Threats (PC 422)",
  "Stalking (PC 646.9)",
  "Violating Restraining Order (PC 273.6)",
  "Child Endangerment (PC 273a)",
  "Elder Abuse (PC 368)",
  "Assault (PC 240/242)",
];

const caseResults = [
  {
    court: "San Francisco Superior Court",
    description:
      "Client charged with felony domestic violence causing bodily injury (a strike) plus additional felony charges from a prior incident. Cross-examination revealed victim consumed 6 shots of whiskey in 45 minutes before starting the fight. Facebook photos showed no neck bruising days after alleged strangulation.",
    outcome: "FELONY STRIKES DISMISSED. NO JAIL.",
  },
  {
    court: "San Francisco Superior Court",
    description:
      "Prominent Bay Area physician arrested for felony domestic violence and child endangerment. License to practice medicine at risk. Investigation revealed the girlfriend had actually committed physical violence against the client.",
    outcome: "CASE DISMISSED.",
  },
  {
    court: "San Francisco Superior Court",
    description:
      "Single mother charged with misdemeanor domestic violence and child endangerment. Criminal court issued a 'stay away' order preventing contact with her child. Investigation revealed the father had instigated the argument and took the child without permission.",
    outcome: "CASE DISMISSED. Client reunited with child same day.",
  },
];

export default function DomesticViolencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026972/018_lwz4jv.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Practice Area
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Domestic Violence Defense
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Protecting Your Rights, Family & Future
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Domestic violence allegations can have devastating consequences that extend far
              beyond the criminal case. You may face immediate arrest, emergency restraining
              orders that separate you from your home and children, loss of gun rights, and
              damage to your career and reputation.
            </p>
            <p>
              Unfortunately, domestic violence accusations are sometimes made falsely or
              exaggerated during contentious divorces, custody battles, or relationship breakups.
              A skilled defense attorney can investigate the allegations, identify inconsistencies,
              and present evidence that challenges the prosecution&apos;s case.
            </p>
            <p>
              <strong className="text-[#0a0a0a]">John D. Forsyth has over 30 years of experience</strong> defending clients against domestic
              violence charges in San Francisco and throughout California. He understands the
              complexities of these emotionally charged cases and fights to protect his clients&apos;
              rights, families, and futures.
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
              Domestic Violence Charges We Defend
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dvCharges.map((charge) => (
              <div
                key={charge}
                className="bg-[#fafafa] border border-gray-200 p-4 flex items-center gap-3 hover:border-[#b8860b] transition-colors"
              >
                <Shield className="h-4 w-4 text-[#b8860b] flex-shrink-0" />
                <span className="text-[#0a0a0a] text-sm font-medium">{charge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              What&apos;s At Stake
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Consequences of a DV Conviction
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="font-semibold text-[#0a0a0a] mb-4">Immediate Consequences</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Emergency protective order
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Removal from your home
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Separation from children
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Arrest and booking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Bail or jail until arraignment
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="font-semibold text-[#0a0a0a] mb-4">Long-Term Consequences</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Permanent criminal record
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Loss of firearm rights
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Impact on custody proceedings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Mandatory batterer&apos;s program
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Immigration consequences
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Professional license issues
                </li>
              </ul>
            </div>
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
              Domestic Violence Case Results
            </h2>
          </div>
          <div className="space-y-4">
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

      {/* CTA Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Take Action Now
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a] mb-6">
            Facing Domestic Violence Charges?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Time is critical. Contact John D. Forsyth immediately for experienced defense
            and to protect your rights, your family, and your future.
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
          <div className="mt-8 max-w-2xl mx-auto border border-gray-300 p-6">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#b8860b] font-semibold mb-3">
              Consultation Fee Policy
            </p>
            <ul className="space-y-2 text-sm text-gray-600 leading-relaxed text-left">
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b] font-bold mt-0.5">&#8226;</span>
                <span>There is no charge for the first consultation if conducted at the office.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b] font-bold mt-0.5">&#8226;</span>
                <span>Any consultation conducted off-site or at a detention facility requires a fee paid up front.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b8860b] font-bold mt-0.5">&#8226;</span>
                <span>If the client decides to retain the office, 100% of the consultation fee will be applied to the initial retainer for services.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
