import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Check, ArrowRight, Scale, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Attempted Homicide Defense Attorney San Francisco",
  description:
    "Experienced attempted murder defense attorney in San Francisco. Defense against attempted homicide, assault with intent to kill, and other violent assault charges.",
  keywords: [
    "attempted murder defense attorney San Francisco",
    "attempted homicide lawyer California",
    "assault with intent to kill defense",
    "violent assault defense",
    "attempted murder charges",
  ],
  openGraph: {
    title: "Attempted Homicide Defense | Law Office of John D. Forsyth",
    description:
      "San Francisco attempted murder defense lawyer with 30+ years experience defending serious violent felony charges.",
    images: ["/og-image.jpg"],
  },
};

const attemptedHomicideCharges = [
  "Attempted Murder",
  "Assault with Intent to Kill",
  "Assault with Deadly Weapon",
  "Mayhem",
  "Conspiracy to Commit Murder",
  "Solicitation of Murder",
];

const defenseStrategies = [
  {
    title: "Lack of Specific Intent",
    description:
      "Attempted murder requires proof of specific intent to kill. We challenge whether the prosecution can prove you had the intent to cause death rather than just injury.",
  },
  {
    title: "Self-Defense / Defense of Others",
    description:
      "California law permits the use of force when you reasonably believe you or another person faces imminent danger of death or great bodily harm.",
  },
  {
    title: "Imperfect Self-Defense",
    description:
      "If you held an honest but unreasonable belief in the need for self-defense, this may provide a defense to attempted murder charges.",
  },
  {
    title: "Challenging Evidence",
    description:
      "We scrutinize forensic evidence, medical testimony, eyewitness accounts, and police procedures to identify weaknesses in the prosecution's case.",
  },
  {
    title: "Accident or Recklessness",
    description:
      "We may establish that injuries resulted from accident or recklessness rather than intentional conduct designed to kill.",
  },
  {
    title: "Mistaken Identity",
    description:
      "In cases involving multiple parties or chaotic circumstances, we investigate whether you were misidentified as the perpetrator.",
  },
];

export default function AttemptedHomicidePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/IMG_8158.JPG')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Practice Area
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Attempted Homicide Defense
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Defending Against Serious Violent Assault Charges
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Attempted murder and attempted homicide charges are among the most serious
              criminal accusations in California. These charges carry severe penalties including
              life sentences, and require immediate, aggressive defense representation.
            </p>
            <p>
              <strong className="text-[#0a0a0a]">John D. Forsyth has over 30 years of experience</strong> defending clients against
              attempted murder and violent assault charges. The key to defending these cases
              is often proving lack of specific intent to kill—a critical element the prosecution
              must establish beyond a reasonable doubt.
            </p>
            <p>
              Unlike other assault charges, attempted murder requires proof that you specifically
              intended to kill the victim, not merely to injure them. This distinction is crucial
              and provides important defense opportunities.
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
              Charges We Defend
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {attemptedHomicideCharges.map((charge) => (
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

      {/* Sentencing Info */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Understanding Penalties
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white">
              California Attempted Murder Penalties
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <h3 className="font-display text-xl text-[#b8860b] mb-6">First Degree Attempted Murder</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Life in prison with possibility of parole
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Minimum of 15 years before parole eligibility
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Qualifies as a "strike" under Three Strikes Law
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <h3 className="font-display text-xl text-[#b8860b] mb-6">Second Degree Attempted Murder</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  5, 7, or 9 years in state prison
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Enhanced if victim is police officer or firefighter
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Qualifies as a "strike" under Three Strikes Law
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#b8860b]/10 border border-[#b8860b] p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-[#b8860b] flex-shrink-0" />
              <p className="text-white/80">
                <strong className="text-white">Important:</strong> If a firearm was used, an additional
                and consecutive sentence of 20 years to life may be imposed. Gang enhancements
                can add 15 years to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Legal Elements */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Legal Requirements
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              What Prosecution Must Prove
            </h2>
          </div>
          <div className="bg-white border border-gray-200 p-8">
            <p className="text-gray-600 mb-6">
              To convict you of attempted murder, the prosecution must prove beyond a reasonable doubt:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="font-display text-[#b8860b] text-2xl flex-shrink-0">1</span>
                <div>
                  <h3 className="font-semibold text-[#0a0a0a] mb-1">Specific Intent to Kill</h3>
                  <p className="text-gray-600 text-sm">
                    You must have had the specific intent to kill another person, not just to injure them.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-display text-[#b8860b] text-2xl flex-shrink-0">2</span>
                <div>
                  <h3 className="font-semibold text-[#0a0a0a] mb-1">Direct Act Toward Killing</h3>
                  <p className="text-gray-600 text-sm">
                    You must have taken a direct but ineffective step toward accomplishing the killing.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-display text-[#b8860b] text-2xl flex-shrink-0">3</span>
                <div>
                  <h3 className="font-semibold text-[#0a0a0a] mb-1">No Justification</h3>
                  <p className="text-gray-600 text-sm">
                    The act was not justified by lawful self-defense or defense of others.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Defense Strategies */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              How We Fight
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Defense Strategies
            </h2>
          </div>
          <div className="space-y-4">
            {defenseStrategies.map((strategy) => (
              <div
                key={strategy.title}
                className="bg-[#fafafa] border border-gray-200 p-6 flex items-start gap-5 hover:border-[#b8860b] transition-colors"
              >
                <Check className="h-5 w-5 text-[#b8860b] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#0a0a0a] mb-1">{strategy.title}</h3>
                  <p className="text-gray-600 text-sm">{strategy.description}</p>
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
            Facing Attempted Murder Charges?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Your freedom is at stake. Contact John D. Forsyth immediately for experienced
            defense against attempted homicide charges.
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
