import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Check, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "DUI Defense Attorney San Francisco | Vehicular Homicide Lawyer",
  description:
    "Experienced DUI defense attorney in San Francisco. Defense against DUI, vehicular manslaughter, vehicular homicide, and DUI with child endangerment charges. Free consultation.",
  keywords: [
    "DUI lawyer San Francisco",
    "vehicular manslaughter attorney",
    "vehicular homicide defense",
    "DUI child endangerment lawyer",
    "felony DUI defense California",
    "drunk driving attorney Bay Area",
  ],
  openGraph: {
    title: "DUI Defense Attorney | Law Office of John D. Forsyth",
    description:
      "San Francisco DUI defense lawyer with 30+ years experience defending clients against DUI and vehicular homicide charges.",
    images: ["/og-image.jpg"],
  },
};

const duiTypes = [
  {
    title: "Standard DUI",
    description:
      "Defense against misdemeanor DUI charges for driving under the influence of alcohol or drugs.",
    penalty: "Up to 6 months jail, fines, license suspension",
  },
  {
    title: "Felony DUI",
    description:
      "Defense when DUI results in injury to others or when you have prior DUI convictions.",
    penalty: "16 months to 4 years state prison",
  },
  {
    title: "Vehicular Manslaughter",
    description:
      "Defense against charges when a DUI results in the death of another person.",
    penalty: "Up to 10 years state prison",
  },
  {
    title: "Vehicular Homicide",
    description:
      "Defense against the most serious DUI-related charges involving gross negligence.",
    penalty: "15 years to life in state prison",
  },
  {
    title: "DUI with Child Endangerment",
    description:
      "Defense when a child under 14 was in the vehicle during a DUI arrest.",
    penalty: "Enhanced penalties including additional jail time",
  },
  {
    title: "Multiple DUI Offenses",
    description:
      "Defense for second, third, or subsequent DUI offenses with escalating penalties.",
    penalty: "Mandatory jail time, longer license suspension",
  },
];

const defenseStrategies = [
  {
    title: "Challenging the Traffic Stop",
    description:
      "Police must have reasonable suspicion to pull you over. If the stop was unlawful, evidence may be suppressed.",
  },
  {
    title: "Questioning Field Sobriety Tests",
    description:
      "Field sobriety tests are subjective and can be affected by medical conditions, fatigue, nervousness, or road conditions.",
  },
  {
    title: "Challenging Breathalyzer Results",
    description:
      "Breathalyzer devices require proper calibration and maintenance. Improper procedures can lead to inaccurate results.",
  },
  {
    title: "Blood Test Procedures",
    description:
      "Blood samples must be properly collected, stored, and analyzed. Chain of custody issues can invalidate results.",
  },
  {
    title: "Rising Blood Alcohol Defense",
    description:
      "Your BAC may have been below the legal limit while driving but rose by the time testing occurred.",
  },
  {
    title: "Medical Conditions",
    description:
      "Certain medical conditions can affect BAC readings or mimic signs of intoxication.",
  },
];

export default function DUIPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-bottom"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026973/186_nn0ala.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Practice Area
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            DUI & Vehicular Homicide Defense
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Aggressive Defense Against Serious DUI Charges
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              DUI charges in California range from misdemeanors to serious felonies that can
              result in years of state prison time. When a DUI results in injury or death,
              the stakes become even higher. Vehicular manslaughter and vehicular homicide
              charges can devastate your life and your family.
            </p>
            <p>
              <strong className="text-[#0a0a0a]">John D. Forsyth has over 30 years of experience</strong> defending clients against all
              types of DUI charges, from first-time offenses to the most serious felony
              vehicular homicide cases. His thorough approach to investigation and aggressive
              defense strategy has helped countless clients achieve favorable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Types of DUI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Areas of Defense
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              DUI Charges We Defend
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {duiTypes.map((type) => (
              <div
                key={type.title}
                className="bg-[#fafafa] border border-gray-200 p-6 hover:border-[#b8860b] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-[#b8860b]" />
                  <h3 className="font-display text-xl text-[#0a0a0a]">{type.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <div className="text-xs bg-[#0a0a0a] text-white/80 px-3 py-2">
                  <strong>Potential Penalty:</strong> {type.penalty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defense Strategies */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              How We Defend You
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              DUI Defense Strategies
            </h2>
          </div>
          <div className="space-y-4">
            {defenseStrategies.map((strategy, index) => (
              <div
                key={strategy.title}
                className="bg-white border border-gray-200 p-6 flex items-start gap-5 hover:border-[#b8860b] transition-colors"
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

      {/* Consequences Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              What&apos;s At Stake
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Consequences of a DUI Conviction
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#fafafa] border border-gray-200 p-6">
              <h3 className="font-semibold text-[#0a0a0a] mb-4">Criminal Penalties</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Jail or prison time
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Substantial fines and fees
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Probation requirements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Mandatory DUI school
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Community service
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Ignition interlock device
                </li>
              </ul>
            </div>
            <div className="bg-[#fafafa] border border-gray-200 p-6">
              <h3 className="font-semibold text-[#0a0a0a] mb-4">Life Consequences</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Driver&apos;s license suspension
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Increased insurance rates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Employment difficulties
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Professional license issues
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Immigration consequences
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Permanent criminal record
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Time Critical Banner */}
      <section className="py-12 bg-[#b8860b]">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-4">
          <AlertTriangle className="h-8 w-8 text-[#0a0a0a]" />
          <p className="text-[#0a0a0a] text-lg font-medium text-center">
            <strong>Time is critical.</strong> You have only 10 days to request a DMV hearing to save your license.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Take Action Now
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Arrested for DUI?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Time is critical after a DUI arrest. Contact John D. Forsyth immediately for
            experienced defense and to protect your driving privileges.
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
