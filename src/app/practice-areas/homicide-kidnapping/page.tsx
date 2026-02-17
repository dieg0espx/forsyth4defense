import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Check, ArrowRight, Scale, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Homicide & Kidnapping Defense Attorney San Francisco",
  description:
    "Experienced homicide and kidnapping defense attorney in San Francisco. Defense against murder, manslaughter, kidnapping, and other serious violent felony charges.",
  keywords: [
    "homicide defense attorney San Francisco",
    "murder defense lawyer California",
    "manslaughter defense attorney",
    "kidnapping defense lawyer",
    "violent felony defense",
    "capital case defense",
  ],
  openGraph: {
    title: "Homicide & Kidnapping Defense | Law Office of John D. Forsyth",
    description:
      "San Francisco homicide defense lawyer with 30+ years experience defending serious violent felonies.",
    images: ["/og-image.jpg"],
  },
};

const homicideCharges = [
  "First Degree Murder",
  "Second Degree Murder",
  "Voluntary Manslaughter",
  "Involuntary Manslaughter",
  "Vehicular Manslaughter",
  "Attempted Murder",
  "Conspiracy to Commit Murder",
  "Felony Murder",
];

const kidnappingCharges = [
  "Simple Kidnapping",
  "Aggravated Kidnapping",
  "Kidnapping for Ransom",
  "Kidnapping During Carjacking",
  "Child Abduction",
  "False Imprisonment",
];

const defenseStrategies = [
  {
    title: "Self-Defense / Defense of Others",
    description:
      "California law permits the use of deadly force when you reasonably believe you or another person faces imminent danger of death or great bodily harm.",
  },
  {
    title: "Lack of Intent",
    description:
      "Many homicide charges require proof of specific intent. We examine whether the prosecution can prove the required mental state.",
  },
  {
    title: "Imperfect Self-Defense",
    description:
      "If you held an honest but unreasonable belief in the need for self-defense, charges may be reduced from murder to manslaughter.",
  },
  {
    title: "Challenging Evidence",
    description:
      "We scrutinize forensic evidence, eyewitness testimony, and police procedures to identify weaknesses in the prosecution's case.",
  },
  {
    title: "Consent Defense (Kidnapping)",
    description:
      "For kidnapping charges, we may establish that the alleged victim consented to accompany the defendant.",
  },
  {
    title: "Heat of Passion",
    description:
      "Evidence of provocation may reduce murder charges to voluntary manslaughter, significantly reducing potential sentences.",
  },
];

export default function HomicideKidnappingPage() {
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
            Homicide &amp; Kidnapping Defense
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Defending Against the Most Serious Charges
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              When you or a loved one is facing homicide or kidnapping charges, the stakes
              could not be higher. These are among the most serious charges in California&apos;s
              criminal justice system, carrying potential sentences of life in prison, life
              without parole, or even death.
            </p>
            <p>
              <strong className="text-[#0a0a0a]">John D. Forsyth has over 30 years of experience</strong> defending clients against
              the most serious violent felony charges. His thorough investigation, aggressive
              defense strategy, and courtroom experience have resulted in acquittals, reduced
              charges, and favorable outcomes in cases where clients faced life sentences.
            </p>
            <p>
              These cases require immediate action. Evidence must be preserved, witnesses
              interviewed, and defense strategies developed from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Homicide Charges */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Areas of Defense
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Homicide Charges We Defend
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {homicideCharges.map((charge) => (
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
              California Homicide Penalties
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <h3 className="font-display text-xl text-[#b8860b] mb-6">First Degree Murder</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  25 years to life in prison
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Life without parole (special circumstances)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Death penalty (special circumstances)
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <h3 className="font-display text-xl text-[#b8860b] mb-6">Second Degree Murder</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  15 years to life in prison
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Enhanced for prior murder convictions
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Enhanced for drive-by shooting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kidnapping Charges */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Areas of Defense
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Kidnapping Charges We Defend
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {kidnappingCharges.map((charge) => (
              <div
                key={charge}
                className="bg-white border border-gray-200 p-4 flex items-center gap-3 hover:border-[#b8860b] transition-colors"
              >
                <Shield className="h-4 w-4 text-[#b8860b] flex-shrink-0" />
                <span className="text-[#0a0a0a] text-sm font-medium">{charge}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#0a0a0a] border-2 border-[#b8860b] p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-[#b8860b] flex-shrink-0" />
              <p className="text-white/80">
                <strong className="text-white">Warning:</strong> Aggravated kidnapping in California is punishable by
                life in prison without the possibility of parole. Simple kidnapping carries
                3, 5, or 8 years in state prison.
              </p>
            </div>
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

      {/* Case Result */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Notable Case
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white">
              The Suzanne Little Case
            </h2>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-4 w-4 text-[#b8860b]" />
              <span className="font-medium text-white">Landmark Case</span>
            </div>
            <p className="text-white/70 mb-6">
              One of the most significant cases in John D. Forsyth&apos;s career, demonstrating
              the importance of thorough investigation and dedicated criminal defense in
              serious felony cases.
            </p>
            <Link
              href="/cases/suzanne-little"
              className="inline-flex items-center gap-2 text-[#b8860b] font-medium hover:text-[#d4a017] transition-colors"
            >
              Read the full case study
              <ArrowRight className="h-4 w-4" />
            </Link>
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
            Facing Homicide or Kidnapping Charges?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Your freedom and potentially your life are at stake. Contact John D. Forsyth
            immediately for experienced defense against the most serious criminal charges.
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
          <div className="mt-8 max-w-2xl mx-auto border border-white/10 p-6">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#b8860b] font-semibold mb-3">
              Consultation Fee Policy
            </p>
            <ul className="space-y-2 text-sm text-white/50 leading-relaxed text-left">
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
