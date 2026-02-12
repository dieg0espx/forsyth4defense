import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Check, ArrowRight, Scale, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Federal Criminal Defense Attorney San Francisco | Weapons Charges",
  description:
    "Experienced federal criminal defense attorney in San Francisco. Defense against federal weapons charges, drug offenses, white collar crimes, and other federal charges.",
  keywords: [
    "federal criminal defense attorney San Francisco",
    "federal weapons charges lawyer",
    "federal drug crimes defense",
    "federal court attorney California",
    "white collar crime defense",
    "federal firearm charges",
  ],
  openGraph: {
    title: "Federal Criminal Defense | Law Office of John D. Forsyth",
    description:
      "San Francisco federal criminal defense lawyer with 30+ years experience in federal court.",
    images: ["/og-image.jpg"],
  },
};

const federalCharges = [
  "Federal Weapons Violations",
  "Felon in Possession of Firearm",
  "Drug Trafficking",
  "Federal Drug Conspiracy",
  "White Collar Crimes",
  "Bank Fraud",
  "Wire Fraud",
  "Tax Evasion",
  "Federal Child Pornography",
  "RICO Charges",
  "Immigration Crimes",
  "Money Laundering",
];

const defenseApproach = [
  {
    title: "Early Intervention",
    description:
      "Engaging during the investigation phase, before charges are filed, can sometimes prevent prosecution entirely.",
  },
  {
    title: "Pre-Trial Motions",
    description:
      "Aggressive motion practice to suppress evidence, challenge the indictment, and protect your constitutional rights.",
  },
  {
    title: "Sentencing Advocacy",
    description:
      "Comprehensive presentation of mitigating factors to achieve sentences below the federal guidelines.",
  },
  {
    title: "Expert Consultation",
    description:
      "Working with forensic experts, investigators, and specialists to challenge the government's evidence.",
  },
  {
    title: "Trial Readiness",
    description:
      "Preparing every case for trial to maintain the strongest possible negotiating position.",
  },
];

export default function FederalWeaponsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1770931783/IMG_8055_fyylo9.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Practice Area
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Federal Criminal Defense
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Experienced Representation in Federal Court
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Federal criminal charges are prosecuted differently than state charges. Federal
              prosecutors have vast resources, federal sentencing guidelines are often more
              severe, and federal judges have less discretion in sentencing. If you are under
              investigation or have been charged with a federal crime, you need an attorney
              who understands the federal system.
            </p>
            <p>
              <strong className="text-[#0a0a0a]">John D. Forsyth has over 30 years of experience</strong> defending clients in federal
              court. His understanding of federal sentencing guidelines, his relationships
              with federal prosecutors, and his experience before federal judges has resulted
              in favorable outcomes for clients facing serious federal charges.
            </p>
          </div>
        </div>
      </section>

      {/* Federal vs State */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Critical Differences
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white">
              Why Federal Cases Are Different
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <h3 className="font-display text-xl text-[#b8860b] mb-6">Federal Prosecution</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Vast investigative resources (FBI, DEA, ATF)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Longer investigations before charges filed
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Mandatory minimum sentences
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Federal sentencing guidelines
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Generally higher conviction rates
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <h3 className="font-display text-xl text-[#b8860b] mb-6">Defense Strategy</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Early intervention critical
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Complex motion practice
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Sentencing advocacy essential
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Cooperation agreements may apply
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#b8860b] rounded-full" />
                  Experienced federal counsel required
                </li>
              </ul>
            </div>
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
              Federal Charges We Defend
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {federalCharges.map((charge) => (
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

      {/* Defense Approach */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              How We Fight
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Our Federal Defense Approach
            </h2>
          </div>
          <div className="space-y-4">
            {defenseApproach.map((strategy) => (
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

      {/* Case Result */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Proven Results
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Federal Case Result
            </h2>
          </div>
          <div className="bg-[#fafafa] border border-gray-200 p-8">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-4 w-4 text-[#b8860b]" />
              <span className="font-medium text-[#0a0a0a]">U.S. District Court</span>
            </div>
            <p className="text-gray-600 mb-6">
              Client charged with possession of child pornography in federal court. Federal
              sentencing guidelines called for 108-135 months in federal prison. Through
              comprehensive defense strategy and effective sentencing advocacy.
            </p>
            <div className="flex items-center gap-3 bg-[#0a0a0a] p-4">
              <Check className="h-5 w-5 text-[#b8860b] flex-shrink-0" />
              <span className="font-display text-white text-lg">
                60 MONTHS - Nearly half the guideline minimum
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-12 bg-[#b8860b]">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-4">
          <AlertTriangle className="h-8 w-8 text-[#0a0a0a]" />
          <p className="text-[#0a0a0a] text-lg font-medium text-center">
            <strong>Federal cases move quickly.</strong> Early intervention can make the difference in your case.
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
            Facing Federal Charges?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Federal cases require specialized knowledge and experience. Contact John D. Forsyth
            immediately for experienced federal criminal defense representation.
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
    </>
  );
}
