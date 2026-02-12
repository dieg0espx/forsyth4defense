import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, Scale, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "DUI Case Results | Vehicular Homicide Defense",
  description:
    "DUI and vehicular homicide defense case results from the Law Office of John D. Forsyth. Successful outcomes including dismissed charges, no jail time, and preserved licenses throughout California.",
  keywords: [
    "DUI defense results",
    "vehicular homicide defense attorney",
    "DUI case dismissed",
    "child endangerment DUI defense",
    "California DUI lawyer",
  ],
};

interface CaseResult {
  court: string;
  description: string;
  outcome: string;
}

const caseResults: CaseResult[] = [
  {
    court: "Alameda County Superior Court",
    description:
      "Client was charged with grossly negligent vehicular homicide while DUI. Client was exposed to 22 years of state prison and two strikes, as there were two separate victims. The details of the accident were quite grisly as two people died in a fiery crash. By assembling a team consisting of an accident reconstructionist and 2 investigators, the defense was able to get the charges reduced to vehicular manslaughter while DUI and the client was granted probation and served a short county jail sentence. Further, the DMV did not suspend the client's driver's license after an administrative hearing where one of the investigating officers made misrepresentations regarding what he observed the night of the incident.",
    outcome: "No state prison. No DMV license suspension.",
  },
  {
    court: "Contra Costa County Superior Court",
    description:
      "Client was an 80 year old man who was involved in a traffic accident that ended in the death of his wife, the death of another driver and severe injuries to a third driver. Client was charged with two counts of misdemeanor vehicular homicide. Witness statements revealed that the client's car drifted across into oncoming traffic. The defense contended that this was evidence that he had been unconscious. The case proceeded to trial on a \"no time waiver\" basis.",
    outcome: "On the first day of trial the CASE WAS DISMISSED by the district attorney.",
  },
  {
    court: "Contra Costa County Superior Court",
    description:
      "Client was charged with DUI and 3 counts of child endangerment as his 3 young children were in the car. Client faced a minimum of 30 days jail and, more importantly, loss of custody rights of his children and the possible loss of his license to practice dentistry. The investigation revealed that the person who reported the client as drunk and driving was a friend of his estranged wife. Other witnesses from the same party were located and painted a different picture. Additional information indicated that the wife and the arresting officers may have withheld evidence. On the eve of the motion to suppress evidence, the prosecution reduced the charges to reckless driving and a fine. Additionally the DMV did not suspend the client's license after an administrative hearing.",
    outcome: "No jail. No conviction that jeopardized child custody or professional license. No DMV driver's license suspension.",
  },
];

export default function DUICasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1770931783/079_ja60l5.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Case Results
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            DUI Case Results
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Vehicular Homicide &amp; Child Endangerment Defense
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
            DUI charges involving injury or death carry severe consequences including
            state prison, strike convictions, and loss of driving privileges. These cases
            demonstrate John D. Forsyth&apos;s ability to achieve favorable outcomes even
            in the most serious DUI cases through expert witnesses, thorough investigation,
            and aggressive defense strategies.
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
            Facing DUI or Vehicular Homicide Charges?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            DUI charges can destroy your career, freedom, and future. Contact
            John D. Forsyth immediately for experienced defense representation.
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
