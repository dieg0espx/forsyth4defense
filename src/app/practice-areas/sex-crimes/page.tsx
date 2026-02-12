import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Lock, AlertTriangle, Check, ArrowRight, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Sex Crimes Defense Attorney San Francisco | Child Molestation Lawyer",
  description:
    "Experienced sex crimes defense attorney in San Francisco. Over 30 years defending clients against sexual assault, child molestation, rape, and internet sting charges. Free confidential consultation.",
  keywords: [
    "sex crimes defense attorney",
    "child molestation lawyer San Francisco",
    "sexual assault defense attorney California",
    "rape defense lawyer",
    "internet sting defense",
    "sex offender registration attorney",
    "false accusation defense",
  ],
  openGraph: {
    title: "Sex Crimes Defense Attorney | Law Office of John D. Forsyth",
    description:
      "San Francisco sex crimes defense lawyer with 30+ years experience. Nearly 90% of practice dedicated to defending sexual misconduct allegations.",
    images: ["/og-image.jpg"],
  },
};

const chargeTypes = [
  "Sexual Assault",
  "Child Molestation",
  "Rape",
  "Statutory Rape",
  "Internet Stings",
  "Child Pornography",
  "Indecent Exposure",
  "Lewd Acts",
  "Sexual Battery",
  "Date Rape",
  "False Imprisonment",
  "Sex Offender Registration",
];

const caseResults = [
  {
    court: "Alameda County Superior Court",
    charge: "Child Molestation - 13 Counts",
    outcome: "13 COUNTS DISMISSED. NO SEX CRIME CONVICTION.",
    year: "2026",
  },
  {
    court: "Alameda County Superior Court",
    charge: "Child Molestation - 11 Counts",
    outcome: "15+ YEARS TO LIFE AVOIDED.",
    year: "2026",
  },
  {
    court: "Butte County Superior Court",
    charge: "Child Molestation",
    outcome: "NOT GUILTY VERDICT. ACQUITTAL.",
  },
  {
    court: "Contra Costa County Superior Court",
    charge: "Sexual Penetration of Minor - 10 Counts",
    outcome: "NO FELONY SEX CRIME. NO SEX REGISTRATION. NO JAIL.",
  },
  {
    court: "Arizona Superior Court",
    charge: "Child Pornography & Felony Voyeurism",
    outcome: "CASE DISMISSED.",
  },
];

const defenseApproach = [
  {
    title: "Thorough Investigation",
    description:
      "We investigate every aspect of the case, interview witnesses, and gather evidence that may exonerate you.",
  },
  {
    title: "Challenging Evidence",
    description:
      "We scrutinize forensic evidence, question DNA testing procedures, and challenge the credibility of testimony.",
  },
  {
    title: "Expert Witnesses",
    description:
      "We work with psychologists, forensic experts, and other specialists to build the strongest defense.",
  },
  {
    title: "Protecting Your Rights",
    description:
      "We ensure law enforcement followed proper procedures and challenge any violations of your constitutional rights.",
  },
  {
    title: "Aggressive Negotiation",
    description:
      "When appropriate, we negotiate with prosecutors to achieve dismissals or reduced charges before trial.",
  },
  {
    title: "Trial Experience",
    description:
      "With decades of courtroom experience, we are prepared to fight for you at trial if necessary.",
  },
];

export default function SexCrimesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026972/Machapuchre_caaie0.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Practice Area
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Sex Crimes Defense
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Experienced. Confidential. Aggressive Defense.
          </p>
        </div>
      </section>

      {/* Confidentiality Banner */}
      <section className="py-4 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-3">
          <Lock className="h-5 w-5 text-[#b8860b]" />
          <p className="text-white/80 text-sm">
            <strong className="text-white">100% Confidential.</strong> All consultations are protected by
            attorney-client privilege.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-[#b8860b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display text-4xl text-[#0a0a0a] mb-1">90%</p>
              <p className="text-[#0a0a0a]/70 text-sm">Practice Dedicated to Sex Crimes</p>
            </div>
            <div>
              <p className="font-display text-4xl text-[#0a0a0a] mb-1">30+</p>
              <p className="text-[#0a0a0a]/70 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-4xl text-[#0a0a0a] mb-1">1000+</p>
              <p className="text-[#0a0a0a]/70 text-sm">Cases Defended</p>
            </div>
            <div>
              <p className="font-display text-4xl text-[#0a0a0a] mb-1">100%</p>
              <p className="text-[#0a0a0a]/70 text-sm">Confidential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Being accused of a sex crime is one of the most devastating experiences a
              person can face. The stigma alone can destroy careers, families, and
              reputations—even before a verdict is reached. The consequences of a
              conviction include lengthy prison sentences, lifetime sex offender registration,
              and permanent damage to every aspect of your life.
            </p>
            <p>
              <strong className="text-[#0a0a0a]">John D. Forsyth has dedicated nearly 90% of his 30+ year practice to
              defending clients accused of sexual misconduct and serious violent felonies.</strong>
              His experience, thorough investigation methods, and aggressive defense strategy
              have resulted in dismissals, acquittals, and favorable outcomes in cases
              throughout California.
            </p>
            <p>
              If you or a loved one is facing sex crime accusations, you need an attorney
              who understands the complexities of these cases and will fight for your rights
              without judgment.
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
              Sex Crimes We Defend
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {chargeTypes.map((charge) => (
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

      {/* Case Results */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Proven Results
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white">
              Recent Sex Crime Defense Results
            </h2>
          </div>
          <div className="space-y-4">
            {caseResults.map((result, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border ${
                  result.year === "2026" ? "border-[#b8860b]" : "border-white/10"
                } p-6`}
              >
                {result.year && (
                  <span className="inline-block bg-[#b8860b] text-[#0a0a0a] text-[10px] uppercase tracking-wider font-semibold px-3 py-1 mb-4">
                    {result.year}
                  </span>
                )}
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Scale className="h-4 w-4 text-[#b8860b]" />
                    <span className="font-medium text-white">{result.court}</span>
                  </div>
                  <span className="text-white/50 text-sm">{result.charge}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-4">
                  <Check className="h-5 w-5 text-[#b8860b] flex-shrink-0" />
                  <span className="font-display text-white text-lg">{result.outcome}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/cases/recent"
              className="inline-flex items-center gap-2 text-[#b8860b] hover:text-[#d4a017] transition-colors text-sm uppercase tracking-wider font-medium"
            >
              View All Case Results
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* False Accusations Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AlertTriangle className="h-10 w-10 text-[#b8860b] mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a] mb-6">
            False Accusations Happen
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              False accusations of sex crimes occur more frequently than many people realize.
              Motivations can include custody disputes, revenge, financial gain, or simply
              misunderstanding. Unfortunately, the presumption of innocence is often forgotten
              in these emotionally charged cases.
            </p>
            <p>
              John D. Forsyth conducts thorough investigations to uncover the truth. His
              experience includes cross-examining accusers, challenging forensic evidence,
              exposing inconsistencies in testimony, and presenting compelling evidence of
              innocence.
            </p>
          </div>
        </div>
      </section>

      {/* Defense Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              How We Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Our Defense Approach
            </h2>
          </div>
          <div className="space-y-4">
            {defenseApproach.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#fafafa] border border-gray-200 p-6 flex items-start gap-5 hover:border-[#b8860b] transition-colors"
              >
                <span className="w-8 h-8 bg-[#0a0a0a] text-[#b8860b] flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[#0a0a0a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
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
            Facing Sex Crime Allegations?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Don&apos;t wait. Early intervention by an experienced attorney can make a critical
            difference in the outcome of your case. All consultations are completely
            confidential.
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
              Request Confidential Consultation
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
