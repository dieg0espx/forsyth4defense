import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Scale, FileText, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Suzanne Little Case | Landmark Criminal Defense",
  description:
    "The story of The People v. Suzanne Dorene Little - a landmark case demonstrating the importance of thorough investigation and dedicated criminal defense.",
  keywords: [
    "Suzanne Little case",
    "criminal defense case study",
    "wrongful accusation defense",
    "false imprisonment case",
  ],
};

const defenseElements = [
  {
    title: "Thorough Investigation",
    description:
      "Every aspect of the case was investigated, including witness backgrounds, physical evidence, and timeline inconsistencies.",
  },
  {
    title: "Expert Consultation",
    description:
      "Forensic experts and specialists were brought in to examine evidence and provide expert testimony.",
  },
  {
    title: "Witness Examination",
    description:
      "Careful cross-examination revealed inconsistencies and exposed weaknesses in the prosecution's case.",
  },
  {
    title: "Dedicated Advocacy",
    description:
      "Relentless pursuit of justice through aggressive but ethical defense strategies.",
  },
];

export default function SuzanneLittlePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026973/Mt_Conness2_wqhvpr.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Landmark Case
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            The Suzanne Little Case
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            The People v. Suzanne Dorene Little
          </p>
        </div>
      </section>

      {/* Case Overview */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="h-6 w-6 text-[#b8860b]" />
            <h2 className="font-display text-3xl text-[#0a0a0a]">Case Overview</h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              The People v. Suzanne Dorene Little stands as one of the most significant
              cases in John D. Forsyth&apos;s career&mdash;a case that demonstrates both the
              dangers of wrongful accusation and the power of thorough, dedicated defense
              work.
            </p>
            <p>
              This case exemplifies why John D. Forsyth approaches every defense with
              the same level of dedication, investigation, and aggressive advocacy.
              When a client&apos;s freedom is at stake, leaving no stone unturned is not
              just a philosophy&mdash;it&apos;s a necessity.
            </p>
          </div>
        </div>
      </section>

      {/* Key Elements */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              How We Won
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Defense Strategy Elements
            </h2>
          </div>
          <div className="space-y-4">
            {defenseElements.map((element) => (
              <div
                key={element.title}
                className="bg-[#fafafa] border border-gray-200 p-6 flex items-start gap-5 hover:border-[#b8860b] transition-colors"
              >
                <Check className="h-5 w-5 text-[#b8860b] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#0a0a0a] mb-1">{element.title}</h3>
                  <p className="text-gray-600 text-sm">{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-[#b8860b]" />
            <h2 className="font-display text-3xl text-white">
              Lessons from This Case
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-white mb-2 font-medium">Early intervention matters.</p>
              <p className="text-white/60 text-sm">
                Engaging a defense attorney immediately can preserve evidence and protect your rights from the start.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-white mb-2 font-medium">Investigation is critical.</p>
              <p className="text-white/60 text-sm">
                A thorough, independent investigation can uncover evidence that challenges the prosecution&apos;s case.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-white mb-2 font-medium">The Constitution protects everyone.</p>
              <p className="text-white/60 text-sm">
                Regardless of the accusations, every person deserves a vigorous defense and the presumption of innocence.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-white mb-2 font-medium">Experience matters.</p>
              <p className="text-white/60 text-sm">
                An experienced defense attorney knows how to navigate the complexities of serious criminal cases and build effective defense strategies.
              </p>
            </div>
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
            Facing Serious Criminal Charges?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Every client receives the same dedication and thorough approach demonstrated
            in the Suzanne Little case. Contact John D. Forsyth for a free consultation.
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

      {/* More Case Results */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-6">
            See More Results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/cases/recent"
              className="text-white font-medium hover:text-[#b8860b] transition-colors inline-flex items-center gap-2"
            >
              Recent Cases
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cases/past"
              className="text-white font-medium hover:text-[#b8860b] transition-colors inline-flex items-center gap-2"
            >
              Past Cases by Category
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
