import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, Scale, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Three Strikes Case Results | Strike Defense Attorney",
  description:
    "Three strikes defense case results from the Law Office of John D. Forsyth. Successful outcomes avoiding life sentences and strike convictions throughout California courts.",
  keywords: [
    "three strikes defense",
    "strike conviction attorney",
    "25 to life defense",
    "Romero motion attorney",
    "California three strikes lawyer",
  ],
};

interface CaseResult {
  court: string;
  description: string;
  outcome: string;
}

const caseResults: CaseResult[] = [
  {
    court: "San Mateo County Superior Court",
    description:
      "Client charged with illegal possession of a firearm and had a previous juvenile strike conviction of armed robbery with use of a gun enhancement. Recent case law prevents juvenile strike convictions from being used on adults. However, the district attorney treated this as a strike prior in that they refused to make any pre-trial offer. Client was exposed to state prison. The defense filed a motion to dismiss for violation of the client's right to a speedy trial. Defense team had interviewed witnesses who stated the police officer had made them guess when shown a photo line-up could not identify the client now as it had been almost 2 years since the incident.",
    outcome: "CASE DISMISSED.",
  },
  {
    court: "San Francisco Superior Court",
    description:
      "18 y/o client was charged with felony assault with a deadly weapon, terrorist threats, false imprisonment and domestic violence. Client was exposed to 6 years of state prison and 2 strike convictions. Investigation and preliminary exam testimony revealed that no weapon was ever found. The alleged victim's testimony indicated that she was very inconsistent with her story about the use of a knife. Charges were reduced to simple assault and client was granted probation.",
    outcome: "No strike convictions. No state prison.",
  },
  {
    court: "Marin County Superior Court",
    description:
      "3 strike case. Client facing 25 to life as the result of two prior sexual assault convictions and the new charge of assault with a deadly weapon. Client was at the Renaissance Pleasure Faire and drew his sword in a fight with two drunken men. Investigation revealed that the witnesses did not witness any assault, but rather a brandishing of the weapon. At preliminary exam the charge was reduced to a misdemeanor and the client was granted probation with community service.",
    outcome: "No jail. No felony 3 strike conviction.",
  },
];

export default function ThreeStrikesCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1770931785/015_1_rdoxby.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Case Results
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Three Strikes Case Results
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Defending Against Life Sentences
          </p>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-4 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/cases/past"
            className="inline-flex items-center gap-2 text-[#0a0a0a] hover:text-[#b8860b] transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Case Categories
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            California&apos;s Three Strikes Law can result in life sentences for individuals
            with prior strike convictions. These cases demonstrate John D. Forsyth&apos;s
            expertise in defending clients facing potential life sentences, utilizing
            strategies including Romero motions, speedy trial violations, and aggressive
            preliminary examination tactics.
          </p>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {caseResults.map((caseResult, index) => (
              <div
                key={index}
                className="bg-[#fafafa] border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Scale className="h-4 w-4 text-[#b8860b]" />
                    <span className="font-medium text-[#0a0a0a] text-sm">
                      {caseResult.court}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {caseResult.description}
                  </p>
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

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Take Action Now
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Facing Strike Charges?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            A strike conviction can mean decades or life in prison. Contact
            John D. Forsyth immediately for experienced three strikes defense.
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
          <p className="text-white/30 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
            There is no charge for the first consultation if conducted at the office. Any consultation conducted off-site or at a detention facility requires a fee paid up front. If the client decides to retain the office, 100% of the consultation fee will be applied to the initial retainer for services.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-xs">
            <strong className="text-gray-600">Disclaimer:</strong> These case results are representative of past
            outcomes. Every case is unique and results depend on specific facts and
            circumstances. Past results do not guarantee future outcomes.
          </p>
        </div>
      </section>
    </>
  );
}
