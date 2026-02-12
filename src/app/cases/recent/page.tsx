import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, Scale, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Recent Case Results | Criminal Defense Victories",
  description:
    "See recent case results from the Law Office of John D. Forsyth. Successful outcomes in sex crimes defense, child molestation cases, federal charges, DUI, and more in San Francisco and throughout California.",
  keywords: [
    "criminal defense case results",
    "sex crimes defense victories",
    "child molestation case dismissed",
    "federal criminal defense results",
    "San Francisco criminal lawyer wins",
    "not guilty verdicts California",
  ],
  openGraph: {
    title: "Recent Case Results | Law Office of John D. Forsyth",
    description:
      "Successful criminal defense outcomes in San Francisco and California. See how John D. Forsyth has helped clients facing serious charges.",
    images: ["/og-image.jpg"],
  },
};

interface CaseResult {
  year?: string;
  court: string;
  charge: string;
  description: string;
  outcome: string;
  highlight?: boolean;
}

const recentCases: CaseResult[] = [
  {
    court: "United States District Court, Northern District of California",
    charge: "Federal Child Pornography",
    description:
      "Client was charged with federal child pornography offenses. The federal sentencing guidelines called for a sentence of 108 to 135 months (9 to 11+ years) in federal prison. Through extensive negotiation and presentation of mitigating factors, the defense achieved a significantly reduced sentence.",
    outcome: "60 MONTHS FEDERAL PRISON. SENTENCE 50% BELOW GUIDELINES.",
  },
  {
    court: "Alameda County Superior Court",
    charge: "Child Molestation - 13 Counts",
    description:
      "Client was charged with 13 counts of child molestation. Through aggressive defense strategy and thorough investigation, all charges related to sex crimes were dismissed.",
    outcome: "13 COUNTS DISMISSED. NO SEX CRIME CONVICTION.",
  },
  {
    court: "Alameda County Superior Court",
    charge: "Child Molestation - 11 Counts",
    description:
      "Client faced 11 counts of child molestation with potential sentence of 15 years to life in state prison. Through skilled negotiation and defense preparation, the client avoided the maximum sentence and achieved a significantly reduced term.",
    outcome: "15+ YEARS TO LIFE AVOIDED. PLEA TO 20-YEAR TERM.",
  },
  {
    court: "Butte County Superior Court",
    charge: "Child Molestation",
    description:
      "Client was charged with one count of child molestation after his ex-girlfriend's 10 year old daughter made accusations. Investigation revealed the child was highly sexualized, volatile and vindictive. During cross-examination, the child blamed the defendant for her own internet activity viewing adult content. The jury deliberated for exactly one hour and twenty minutes.",
    outcome: "NOT GUILTY VERDICT. ACQUITTAL.",
  },
  {
    court: "Supreme Court of Arizona, Pinal County Superior Court",
    charge: "Child Pornography & Felony Voyeurism",
    description:
      "Client was a 28 year old intellectually disabled man charged with possession of child pornography and felony voyeurism. Arizona law carries 15 years per item plus lifetime probation and sex registration. The DA offered 12 years. Defense centered on client's competence due to childhood encephalitis. After three forensic psychological experts examined the client, the court found him incompetent to stand trial and unable to be rehabilitated.",
    outcome: "CASE DISMISSED.",
  },
  {
    court: "Contra Costa County Superior Court",
    charge: "Sexual Penetration of Minor - 10 Counts",
    description:
      "Client was a 22 year old high school volleyball coach who became romantically involved with a 17 year old from another school. He faced 10 felony counts, jail time, and lifetime sex registration. Defense focused on the investigating officer's coercive interview techniques - she called the young woman a liar 31 times and threatened arrest. After defense motions demanding officer training records and personnel file complaints, the case was settled.",
    outcome: "NO FELONY SEX CRIME CONVICTION. NO SEX REGISTRATION. NO JAIL.",
  },
  {
    court: "San Francisco Superior Court",
    charge: "Felony Domestic Violence (Strike)",
    description:
      "Client charged with felony domestic violence causing bodily injury (a strike) plus additional felony charges from a prior incident. Defense revealed victim had consumed 6 shots of whiskey in 45 minutes before starting the fight. Investigation uncovered Facebook photos showing no neck bruising days after the alleged strangulation, plus two prior DUI convictions and false statements to her attorney.",
    outcome: "FELONY STRIKES DISMISSED. NO JAIL.",
  },
  {
    court: "Alameda County Superior Court",
    charge: "Misdemeanor Child Molest - 2 Counts",
    description:
      "Client faced lifetime sex registration after allegedly touching two unaccompanied children on a Southwest Airlines flight at Oakland Airport. Defense moved to dismiss due to illegal citizen's arrest - California law only allows arrests for misdemeanors occurring in one's presence. The facts revealed only patting a leg and tickling under the chin with no sexual motive.",
    outcome: "SEX CHARGES DISMISSED. NO SEX REGISTRATION. NO JAIL.",
  },
  {
    court: "San Francisco Superior Court",
    charge: "Marijuana Possession for Sale",
    description:
      "Client was arrested after traffic stop with 7 lbs. of marijuana. Both client and girlfriend had current medicinal cannabis cards and were part of a collective of designated caregivers. Evidence of the collective was immediately presented to the district attorney.",
    outcome: "CHARGES NOT FILED. CASE DISMISSED.",
  },
  {
    court: "San Francisco Superior Court",
    charge: "Felony Assault with Great Bodily Injury (Strike)",
    description:
      "Client was a high-profile civil attorney from Chicago visiting San Francisco. After watching a USC/Stanford game, he was confronted by drunk patrons who threatened to 'kick his ass.' Client defended himself with a beer glass, then was savagely beaten by 5 men in the street, suffering brain injury and cracked ribs. At preliminary exam, the court found this was mutual combat and client had the right to defend himself.",
    outcome: "CASE DISMISSED.",
  },
  {
    court: "San Francisco Superior Court",
    charge: "Possession for Sale (Oxycontin) & Felon in Possession of Firearm",
    description:
      "Client had 4 prior convictions resulting in prison terms and faced certain state prison time. Defense focused on legitimate prescription for 120 Oxycontin monthly (client was wheelchair-bound after being shot 6 times). At preliminary exam, investigating officers contradicted each other regarding the 'controlled buy' and search warrant execution. Defense filed motions to dismiss and suppress evidence.",
    outcome: "CASE DISMISSED.",
  },
  {
    court: "San Francisco Superior Court",
    charge: "Indecent Exposure - 2 Counts & Child Endangerment",
    description:
      "Client was arrested near a high school while urinating in public. He had a prior conviction from 10 years before and faced jail time and lifetime sex registration. Defense demanded officer training records regarding interviewing child witnesses. Court granted defense motion for sanctions when DA failed to produce records.",
    outcome: "SEX CHARGES DISMISSED. NO LIFETIME SEX REGISTRATION.",
  },
  {
    court: "San Francisco Superior Court",
    charge: "Felony Domestic Violence & Child Endangerment",
    description:
      "Client was a prominent Bay Area physician whose medical license was at risk. His ex-girlfriend, who had picked him up from the airport smelling of alcohol, struck him in the face. Five days later, her boyfriend made false allegations to police. The Law Office immediately advised the DA that the incident occurred in Alameda County and that the woman committed the physical violence.",
    outcome: "CASE DISMISSED.",
  },
  {
    court: "San Francisco Superior Court",
    charge: "Marijuana & Weapons Charges - 18+ lbs.",
    description:
      "64 year old Vietnamese father and grandfather was charged after police conducted a warrantless search finding 18+ lbs. of marijuana, a shotgun, ammunition, silencer, and $42,000 cash. Police coerced client and his son to sign consent forms despite neither being able to read English. Defense filed motion to suppress all evidence due to illegal warrantless search.",
    outcome: "FELONY CHARGES DISMISSED. NO JAIL.",
  },
  {
    court: "San Francisco Superior Court",
    charge: "Felony Domestic Violence with Serious Bodily Injury (Strike)",
    description:
      "Client had a prior domestic violence conviction and faced felony strike and likely jail. Wife went to hospital with broken arm claiming client struck her with a suitcase. Investigation revealed wife had scratched client's face and they had engaged in a tug-of-war with the suitcase. Wife recanted her story and prevented police from speaking with mother-in-law who had treated client's injuries.",
    outcome: "NO FELONY STRIKE CONVICTION. NO JAIL.",
  },
];

export default function RecentCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026974/Sentinel_Dome_yngham.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/95" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Case Results
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Recent Client Cases
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Proven Results in Criminal Defense
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-4xl text-[#b8860b] mb-2">30+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-4xl text-[#b8860b] mb-2">90%</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Sex Crime Cases</div>
            </div>
            <div>
              <div className="font-display text-4xl text-[#b8860b] mb-2">1000+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Cases Handled</div>
            </div>
            <div>
              <div className="font-display text-4xl text-[#b8860b] mb-2">100%</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Client Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            Every case is unique, and past results do not guarantee future outcomes.
            However, these recent cases demonstrate John D. Forsyth&apos;s commitment to
            aggressive, thorough defense of his clients facing serious criminal charges.
          </p>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {recentCases.map((caseResult, index) => (
              <div
                key={index}
                className={`bg-[#fafafa] border ${
                  caseResult.highlight ? "border-[#b8860b]" : "border-gray-200"
                } overflow-hidden`}
              >
                {caseResult.year && (
                  <div className="bg-[#b8860b] text-[#0a0a0a] px-6 py-2 text-sm font-semibold uppercase tracking-wider">
                    {caseResult.year} Case Result
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap items-start gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4 text-[#b8860b]" />
                      <span className="font-medium text-[#0a0a0a] text-sm">
                        {caseResult.court}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-[#b8860b]" />
                      <span className="text-gray-600 text-sm">{caseResult.charge}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{caseResult.description}</p>
                  <div className="flex items-center gap-3 bg-[#0a0a0a] p-4">
                    <Check className="h-5 w-5 text-[#b8860b] flex-shrink-0" />
                    <span className="font-display text-white">
                      {caseResult.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suzanne Little Case Link */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Featured Case
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            The Suzanne Little Case
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            One of the most significant cases in John D. Forsyth&apos;s career, demonstrating
            his dedication to justice and thorough defense preparation.
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
            Facing Criminal Charges?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Every case deserves the same dedication and aggressive defense strategy.
            Contact John D. Forsyth for a free consultation about your case.
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
          <p className="text-gray-400 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
            There is no charge for the first consultation if conducted at the office. Any consultation conducted off-site or at a detention facility requires a fee paid up front. If the client decides to retain the office, 100% of the consultation fee will be applied to the initial retainer for services.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/40 text-xs">
            <strong className="text-white/60">Disclaimer:</strong> The case results presented above are
            representative of past outcomes. Every case is unique and results depend on
            the specific facts and circumstances. Past results do not guarantee or predict
            future outcomes. The information provided is for general informational
            purposes only and should not be considered legal advice.
          </p>
        </div>
      </section>
    </>
  );
}
