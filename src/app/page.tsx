import Link from "next/link";
import {
  Shield,
  Scale,
  Award,
  Clock,
  Phone,
  ArrowRight,
  Check,
  Quote,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Sex Crime Defense",
    description:
      "Strategic defense against the most serious accusations. Protecting your rights, reputation, and future.",
    href: "/practice-areas/sex-crimes",
  },
  {
    title: "DUI & Vehicular Homicide",
    description:
      "Comprehensive DUI defense to protect your driving privileges and minimize consequences.",
    href: "/practice-areas/dui",
  },
  {
    title: "Domestic Violence",
    description:
      "Thoughtful, aggressive defense to protect your freedom, family, and career.",
    href: "/practice-areas/domestic-violence",
  },
  {
    title: "Three Strikes Cases",
    description:
      "Fighting to reduce or dismiss strikes that could result in life imprisonment.",
    href: "/practice-areas/three-strikes",
  },
  {
    title: "Federal Criminal Defense",
    description:
      "Experienced representation against federal charges including weapons and drug offenses.",
    href: "/practice-areas/federal-weapons",
  },
  {
    title: "Homicide & Kidnapping",
    description:
      "Serious felony defense requiring the most experienced and dedicated representation.",
    href: "/practice-areas/homicide-kidnapping",
  },
];

const caseResults = [
  {
    type: "Child Molestation",
    court: "Butte County Superior Court",
    result: "NOT GUILTY",
    description:
      "Client acquitted after jury deliberated just 80 minutes. Defense exposed false accusations.",
  },
  {
    type: "Child Pornography",
    court: "U.S. District Court",
    result: "60 MONTHS",
    subtext: "vs 108-135 Guidelines",
    description:
      "Federal sentence reduced by nearly half through comprehensive defense strategy.",
  },
  {
    type: "Child Molestation",
    subtype: "11 Counts",
    court: "Alameda County Superior Court",
    result: "DISMISSED",
    description:
      "All sex crime charges dismissed after aggressive preliminary hearing strategy.",
  },
];

const stats = [
  { number: "30+", label: "Years Experience" },
  { number: "90%", label: "Focus on Sex Crimes" },
  { number: "1000+", label: "Cases Handled" },
  { number: "100%", label: "Commitment" },
];

const credentials = [
  "Stanford Law School Trial Advocacy Faculty since 2001",
  "UC Berkeley Graduate",
  "University of California San Francisco College of the Law",
  "Prosecutorial Experience at the Alameda County District Attorney's Office",
  "Round Valley Indian Tribes",
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Full viewport, dramatic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026974/Yosemite_Falls_ct7pws.jpg')`,
          }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/65 to-[#0a0a0a]/95" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          {/* Subtle label */}
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-8 font-medium">
            San Francisco Criminal Defense Attorney
          </p>

          {/* Main headline */}
          <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1]">
            A Safe Harbor
            <br />
            <span className="text-[#b8860b]">In a Time of Crisis</span>
          </h1>

          {/* Divider */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-8" />

          {/* Subheadline */}
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            Over 30 years defending clients against the most serious criminal charges.
            Sex crimes. Federal offenses. Life-altering accusations.
          </p>

          <p className="font-display text-white/80 text-xl md:text-2xl mb-12 italic">
            The Law Office of John D. Forsyth
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+14158123257"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#b8860b] text-[#0a0a0a] text-sm uppercase tracking-[0.15em] font-semibold hover:bg-[#d4a017] transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              (415) 812-3257
              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-[0.15em] font-medium hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              Request Consultation
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">
              Confidential consultations available 24/7
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Stats Section - Elegant, minimal */}
      <section className="bg-[#0a0a0a] py-16 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-[#b8860b] text-4xl md:text-5xl mb-2">
                  {stat.number}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Split layout, premium feel */}
      <section className="py-24 md:py-32 bg-[#fafafa] relative">
        {/* Background image for visual interest */}
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026973/Mt_Conness2_wqhvpr.jpg')`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4 font-medium">
                Your Attorney
              </p>
              <h2 className="font-display text-[#0a0a0a] text-4xl md:text-5xl mb-8 leading-tight">
                John D. Forsyth
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  A San Francisco native with deep roots in the community. Education
                  entirely local: St. Brendan Elementary, Saint Ignatius College
                  Preparatory, UC Berkeley, and University of California San Francisco College of the Law.
                </p>
                <p>
                  As a tribally enrolled member of the{" "}
                  <strong className="text-[#0a0a0a]">Round Valley Indian Tribes</strong>,
                  John developed his passion for defending the rights of those without
                  a voice during summers spent working for tribal attorneys.
                </p>
                <p>
                  After graduation, John spent two years with the Alameda County
                  District Attorney&apos;s Office. Since then, he has dedicated himself
                  to defending those accused by state and federal agencies. In the
                  last <strong className="text-[#0a0a0a]">30+ years</strong>, nearly
                  90% of his work has involved accusations of sexual misconduct and
                  serious violent felonies.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <ul className="space-y-3">
                  {credentials.map((credential, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-[#b8860b] flex-shrink-0" />
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <Link
                  href="/attorney"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] font-semibold text-[#0a0a0a] hover:text-[#b8860b] transition-colors group"
                >
                  Learn More About John
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Defense Philosophy Card */}
            <div className="relative">
              <div className="bg-[#0a0a0a] p-10 md:p-12">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-6">
                  The Defense Approach
                </p>
                <h3 className="font-display text-white text-2xl md:text-3xl mb-8">
                  Leaving No Stone Unturned
                </h3>

                <ul className="space-y-6">
                  {[
                    "Ascertain all available defenses and develop a winning strategy",
                    "Assemble a team of expert professionals including investigators and forensic psychologists",
                    "Prepare every case for jury trial to present the strongest possible posture",
                    "Let the opposition know you're ready to fight for your rights",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-6 h-6 rounded-full bg-[#b8860b]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#b8860b] text-xs font-semibold">
                          {index + 1}
                        </span>
                      </span>
                      <span className="text-white/80 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#b8860b]/30" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#b8860b]/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas - Clean grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4 font-medium">
              Areas of Expertise
            </p>
            <h2 className="font-display text-[#0a0a0a] text-4xl md:text-5xl mb-6">
              Practice Areas
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive criminal defense representation for the most serious charges.
              Every case receives personalized attention and aggressive advocacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="group p-8 border border-gray-200 hover:border-[#b8860b] transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <Shield className="h-8 w-8 text-[#0a0a0a] group-hover:text-[#b8860b] transition-colors duration-300" />
                  <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-[#b8860b] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <h3 className="font-display text-xl text-[#0a0a0a] mb-3 group-hover:text-[#b8860b] transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results - Dark, impactful */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4 font-medium">
              Proven Results
            </p>
            <h2 className="font-display text-white text-4xl md:text-5xl mb-6">
              Recent Case Results
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              A track record of success defending clients against the most serious
              criminal charges in California courts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseResults.map((caseItem, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-[#b8860b]/50 transition-all duration-500 group"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#b8860b] mb-1">
                  {caseItem.type}
                </p>
                {caseItem.subtype && (
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-3">
                    {caseItem.subtype}
                  </p>
                )}
                <p className="text-white/40 text-xs mb-6">{caseItem.court}</p>

                <p className="font-display text-white text-3xl mb-1 group-hover:text-[#b8860b] transition-colors">
                  {caseItem.result}
                </p>
                {caseItem.subtext && (
                  <p className="text-[11px] text-[#b8860b] mb-4">{caseItem.subtext}</p>
                )}

                <p className="text-white/60 text-sm leading-relaxed mt-4">
                  {caseItem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cases/recent"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#b8860b] text-[#b8860b] text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#b8860b] hover:text-[#0a0a0a] transition-all duration-300"
            >
              View All Case Results
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Clean, authoritative */}
      <section className="py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4 font-medium">
              Your Defense Matters
            </p>
            <h2 className="font-display text-[#0a0a0a] text-4xl md:text-5xl">
              Why Choose John D. Forsyth?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "30+ Years Experience",
                description:
                  "Decades of courtroom experience defending clients against the most serious criminal charges.",
              },
              {
                icon: Shield,
                title: "Specialized Focus",
                description:
                  "90% of practice dedicated to sex crimes and serious felony defense.",
              },
              {
                icon: Award,
                title: "Stanford Faculty",
                description:
                  "Teaching trial advocacy to the next generation of lawyers since 2001.",
              },
              {
                icon: Scale,
                title: "Proven Results",
                description:
                  "Track record of dismissals, acquittals, and reduced charges for clients.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 border border-gray-200 flex items-center justify-center group-hover:border-[#b8860b] transition-colors duration-300">
                  <item.icon className="h-7 w-7 text-[#0a0a0a] group-hover:text-[#b8860b] transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-[#0a0a0a] text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 md:py-32 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="h-12 w-12 text-[#b8860b]/30 mx-auto mb-8" />
          <blockquote className="font-display text-2xl md:text-3xl text-[#0a0a0a] leading-relaxed mb-8 italic">
            &ldquo;John Forsyth&apos;s expertise and dedication were evident from our first meeting.
            His thorough preparation and courtroom presence made all the difference in my case.&rdquo;
          </blockquote>
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
            Former Client
          </p>
          <div className="mt-10">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] font-semibold text-[#0a0a0a] hover:text-[#b8860b] transition-colors group"
            >
              Read More Testimonials
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Dramatic, compelling */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026974/Sentinel_Dome_yngham.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-6 font-medium">
            Take Action Now
          </p>
          <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Your Future Is Worth
            <br />
            Fighting For
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            When you&apos;re facing criminal charges, you need an attorney who will
            fight for you. Contact the Law Office of John D. Forsyth today for a
            free, confidential consultation.
          </p>

          <a
            href="tel:+14158123257"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-[#b8860b] text-[#0a0a0a] text-lg md:text-xl font-semibold hover:bg-[#d4a017] transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            (415) 812-3257
          </a>

          <p className="text-white/30 mt-8 text-sm">
            Available 24/7 for urgent matters
          </p>
          <p className="text-white/30 text-xs mt-6 max-w-2xl mx-auto leading-relaxed">
            There is no charge for the first consultation if conducted at the office. Any consultation conducted off-site or at a detention facility requires a fee paid up front. If the client decides to retain the office, 100% of the consultation fee will be applied to the initial retainer for services.
          </p>
        </div>
      </section>
    </>
  );
}
