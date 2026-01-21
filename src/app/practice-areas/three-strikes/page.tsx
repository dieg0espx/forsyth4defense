import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Check, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Three Strikes Defense Attorney California | Strike Lawyer",
  description:
    "Experienced three strikes defense attorney in California. Defense against third strike charges, strike priors, and life sentences. Romero motions and strike dismissals.",
  keywords: [
    "three strikes lawyer California",
    "strike defense attorney",
    "Romero motion attorney",
    "third strike defense",
    "25 to life defense lawyer",
    "strike prior dismissal",
  ],
};

const strikeOffenses = [
  "Murder/Manslaughter",
  "Robbery",
  "Rape/Sexual Assault",
  "Child Molestation",
  "Assault with a Deadly Weapon",
  "Carjacking",
  "Kidnapping",
  "Burglary (First Degree)",
  "Arson",
  "Any felony with firearm use",
  "Domestic Violence (felony)",
  "Witness/Victim Intimidation",
];

const defenseStrategies = [
  {
    title: "Romero Motion",
    description:
      "A motion asking the judge to dismiss one or more prior strikes in the interest of justice. We present evidence about the nature of your prior offenses and your personal history to argue for dismissal.",
  },
  {
    title: "Challenging the Current Charges",
    description:
      "Aggressive defense of the current charges may result in acquittal, reduced charges, or dismissal, preventing a third strike conviction entirely.",
  },
  {
    title: "Proposition 36 Relief",
    description:
      "If you were sentenced under the old Three Strikes Law for a non-violent third strike, you may be eligible for resentencing under Proposition 36.",
  },
  {
    title: "Challenging Prior Strikes",
    description:
      "We examine whether your prior convictions actually qualify as strikes under California law and challenge improperly alleged strikes.",
  },
  {
    title: "Negotiated Plea Agreements",
    description:
      "In some cases, we may negotiate with prosecutors to reduce charges or reach agreements that avoid third strike consequences.",
  },
];

export default function ThreeStrikesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Practice Area
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Three Strikes Defense
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Fighting Life Sentences in California
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              California&apos;s Three Strikes Law is one of the harshest sentencing schemes in
              the nation. Originally enacted in 1994, the law was designed to impose longer
              sentences on repeat offenders. A third strike conviction can result in a sentence
              of <strong className="text-[#0a0a0a]">25 years to life in state prison</strong>.
            </p>
            <p>
              While Proposition 36 (2012) modified the law to require that the third strike be
              a serious or violent felony in most cases, the consequences remain severe. If you
              have prior strike convictions and are facing new charges, you need an experienced
              attorney who understands how to defend against strike allegations and pursue
              options to have prior strikes dismissed.
            </p>
            <p>
              <strong className="text-[#0a0a0a]">John D. Forsyth has extensive experience</strong> defending clients facing three strikes
              charges. He has successfully argued Romero motions to have prior strikes dismissed
              and has achieved favorable outcomes in cases where clients faced potential life
              sentences.
            </p>
          </div>
        </div>
      </section>

      {/* How Three Strikes Works */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Understanding the Law
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              California&apos;s Three Strikes Law
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-[#fafafa] border border-gray-200 p-6">
              <div className="flex items-start gap-5">
                <span className="w-10 h-10 bg-[#b8860b] text-[#0a0a0a] font-display text-xl flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <div>
                  <h3 className="font-display text-xl text-[#0a0a0a] mb-2">First Strike</h3>
                  <p className="text-gray-600 text-sm">
                    A conviction for any &quot;serious&quot; or &quot;violent&quot; felony as defined under
                    California law. This strike stays on your record permanently.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#fafafa] border border-gray-200 p-6">
              <div className="flex items-start gap-5">
                <span className="w-10 h-10 bg-[#b8860b] text-[#0a0a0a] font-display text-xl flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <div>
                  <h3 className="font-display text-xl text-[#0a0a0a] mb-2">Second Strike</h3>
                  <p className="text-gray-600 text-sm">
                    If you have one prior strike and are convicted of any new felony, your
                    sentence is doubled. You must serve 80% of your sentence before parole
                    eligibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#0a0a0a] border-2 border-[#b8860b] p-6">
              <div className="flex items-start gap-5">
                <span className="w-10 h-10 bg-[#b8860b] text-[#0a0a0a] font-display text-xl flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <div>
                  <h3 className="font-display text-xl text-white mb-2">Third Strike</h3>
                  <p className="text-white/70 text-sm">
                    If you have two prior strikes and are convicted of a new serious or violent
                    felony, you face <strong className="text-white">25 years to life in state prison</strong>. Even non-violent
                    third strikes can result in significantly enhanced sentences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defense Strategies */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              How We Fight
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Three Strikes Defense Strategies
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

      {/* Strike Offenses */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Know the Charges
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Common Strike Offenses in California
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strikeOffenses.map((offense) => (
              <div
                key={offense}
                className="bg-[#fafafa] border border-gray-200 p-4 flex items-center gap-3 hover:border-[#b8860b] transition-colors"
              >
                <Shield className="h-4 w-4 text-[#b8860b] flex-shrink-0" />
                <span className="text-[#0a0a0a] text-sm font-medium">{offense}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-12 bg-[#b8860b]">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-4">
          <AlertTriangle className="h-8 w-8 text-[#0a0a0a]" />
          <p className="text-[#0a0a0a] text-lg font-medium text-center">
            <strong>The stakes couldn&apos;t be higher.</strong> A third strike means 25 years to life.
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
            Facing a Third Strike?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            If you&apos;re facing charges that could be your third strike, contact John D. Forsyth
            immediately for aggressive defense.
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
