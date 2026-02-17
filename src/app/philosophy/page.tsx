import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Scale, Shield, Heart, Users, ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Philosophy | Criminal Defense Approach",
  description:
    "Learn about John D. Forsyth's approach to criminal defense. Dedicated to protecting constitutional rights and providing aggressive, thorough representation.",
  keywords: [
    "criminal defense philosophy",
    "defense attorney approach",
    "constitutional rights protection",
    "aggressive criminal defense",
  ],
};

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026974/The_Boss.2_j4edin.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Our Approach
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Professional Philosophy
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Standing Up for Those Who Cannot Stand Alone
          </p>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Quote className="h-10 w-10 text-[#b8860b]/30 mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl text-[#0a0a0a] leading-relaxed italic mb-4">
              &ldquo;Everyone deserves a vigorous defense. The Constitution guarantees it,
              and I dedicate myself to making that guarantee a reality.&rdquo;
            </blockquote>
            <p className="text-[#b8860b] font-medium">— John D. Forsyth</p>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed mt-16">
            <p>
              John D. Forsyth&apos;s commitment to criminal defense was shaped early in his
              career. During law school, working for the tribal attorney on the Hoopa
              Valley Reservation, he witnessed firsthand how those without resources or
              a voice are often steamrolled by the government. That experience instilled
              a deep desire to stand up for the rights of the accused.
            </p>
            <p>
              After spending two years with the Alameda County District Attorney&apos;s Office,
              John understood how prosecutors build cases—and how to tear them apart.
              He has since dedicated over 30 years to defending those accused by state and
              federal agencies, with nearly 90% of his practice focused on the most
              serious allegations: sexual misconduct and violent felonies.
            </p>
            <p>
              Every client, regardless of the charges against them, receives the same
              dedication, thoroughness, and aggressive representation. Because in our
              system of justice, everyone deserves their day in court with a skilled
              advocate at their side.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Scale,
                title: "Justice",
                description:
                  "Fighting to ensure the constitutional rights of every client are protected",
              },
              {
                icon: Shield,
                title: "Protection",
                description:
                  "Standing as a shield between the accused and the full power of the government",
              },
              {
                icon: Heart,
                title: "Dedication",
                description:
                  "Treating every case with the same commitment, regardless of publicity",
              },
              {
                icon: Users,
                title: "Respect",
                description:
                  "Treating every client with dignity and without judgment",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 border border-gray-200 hover:border-[#b8860b] transition-colors group"
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-gray-200 flex items-center justify-center group-hover:border-[#b8860b] transition-colors">
                  <value.icon className="h-6 w-6 text-[#0a0a0a] group-hover:text-[#b8860b] transition-colors" />
                </div>
                <h3 className="font-display text-xl text-[#0a0a0a] mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              How We Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              The Defense Approach
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: "Thorough Investigation",
                description:
                  "Every case begins with a complete investigation. We examine every piece of evidence, interview witnesses, review police procedures, and leave no stone unturned in building your defense.",
              },
              {
                title: "Challenging the Prosecution",
                description:
                  "We hold the prosecution to their burden of proof. Every allegation is scrutinized, every piece of evidence is challenged, and every witness is cross-examined to expose weaknesses in the state's case.",
              },
              {
                title: "Strategic Defense",
                description:
                  "Whether pursuing dismissal, negotiating a favorable resolution, or taking the case to trial, we develop a strategy tailored to achieve the best possible outcome for each client's unique situation.",
              },
              {
                title: "Client Communication",
                description:
                  "You will never be left wondering about your case. We keep you informed at every step, explain the process in plain language, and ensure you understand your options before making decisions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 flex items-start gap-6 hover:border-[#b8860b] transition-colors"
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

      {/* Quote Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="h-10 w-10 text-[#b8860b]/30 mx-auto mb-8" />
          <blockquote className="font-display text-2xl md:text-3xl text-white leading-relaxed italic mb-6">
            &ldquo;The accused are not criminals until proven so. My job is to ensure that
            the government proves its case—or fails trying.&rdquo;
          </blockquote>
          <p className="text-[#b8860b] font-medium">— John D. Forsyth</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Take Action
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a] mb-6">
            Need a Dedicated Defense Attorney?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            If you or a loved one is facing criminal charges, you deserve an attorney who
            will fight for you. Contact John D. Forsyth for a free consultation.
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
