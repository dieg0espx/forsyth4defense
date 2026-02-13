import type { Metadata } from "next";
import Link from "next/link";
import { Phone, GraduationCap, BookOpen, Users, Award, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet John D. Forsyth | San Francisco Criminal Defense Attorney",
  description:
    "John D. Forsyth is a San Francisco native with 30+ years of criminal defense experience. Stanford Law School faculty member specializing in sex crimes defense, DUI, and serious felonies.",
  keywords: [
    "John D. Forsyth attorney",
    "San Francisco criminal defense lawyer",
    "sex crimes defense attorney",
    "Stanford Law faculty criminal defense",
    "Native American attorney California",
    "UC San Francisco College of the Law graduate",
  ],
  openGraph: {
    title: "Meet John D. Forsyth | Criminal Defense Attorney",
    description:
      "San Francisco criminal defense attorney with 30+ years experience. Stanford Law School faculty member.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "John D. Forsyth",
  image: "/attorney-photo.jpg",
  jobTitle: "Criminal Defense Attorney",
  description:
    "San Francisco criminal defense attorney with over 30 years of experience defending clients against serious criminal charges.",
  worksFor: {
    "@type": "LegalService",
    name: "Law Office of John D. Forsyth",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "UC Berkeley",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of California San Francisco College of the Law",
    },
  ],
  knowsAbout: [
    "Criminal Defense",
    "Sex Crimes Defense",
    "DUI Defense",
    "Federal Criminal Defense",
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Round Valley Indian Tribes",
    },
  ],
};

const stats = [
  { number: "30+", label: "Years Experience" },
  { number: "90%", label: "Sex Crimes Focus" },
  { number: "1000+", label: "Cases Handled" },
];

export default function AttorneyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026973/Mt_Conness2_wqhvpr.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Your Attorney
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            John D. Forsyth
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            San Francisco Criminal Defense Attorney
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0a0a0a] py-12 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-[#b8860b] text-3xl md:text-4xl mb-1">
                  {stat.number}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Sidebar with Quick Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Attorney Card */}
                <div className="bg-[#0a0a0a] p-8">
                  <div className="aspect-[3/4] relative bg-[#1a1a1a] mb-6 overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dku1gnuat/image/upload/v1770976683/John_Headshot_ehwxhy.webp"
                      alt="John D. Forsyth - San Francisco Criminal Defense Attorney"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <a
                    href="tel:+14158123257"
                    className="flex items-center justify-center gap-3 bg-[#b8860b] text-[#0a0a0a] py-3.5 font-semibold text-sm uppercase tracking-[0.1em] w-full hover:bg-[#d4a017] transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    (415) 812-3257
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="bg-[#0a0a0a] p-8">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#b8860b] mb-6">
                    At a Glance
                  </p>
                  <ul className="space-y-4 text-white/70">
                    <li className="flex items-start gap-3">
                      <Award className="h-4 w-4 text-[#b8860b] flex-shrink-0 mt-1" />
                      <span className="text-sm">30+ Years of Experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <GraduationCap className="h-4 w-4 text-[#b8860b] flex-shrink-0 mt-1" />
                      <span className="text-sm">Stanford Law School Faculty</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-4 w-4 text-[#b8860b] flex-shrink-0 mt-1" />
                      <span className="text-sm">Published Legal Author</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-4 w-4 text-[#b8860b] flex-shrink-0 mt-1" />
                      <span className="text-sm">1000+ Cases Defended</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Bio Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
                  Background
                </p>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    John D. Forsyth is a San Francisco native. His education is entirely
                    local: St. Brendan Elementary, Saint Ignatius College Preparatory, U.C.
                    Berkeley and University of California San Francisco College of the Law.
                  </p>

                  <p>
                    John is a tribally enrolled member of the{" "}
                    <strong className="text-[#0a0a0a]">Round Valley Indian Tribes</strong> in
                    Mendocino County. Family members still reside on the{" "}
                    <strong className="text-[#0a0a0a]">Hoopa Valley Reservation</strong> in
                    Humboldt County. During law school, John spent his summers working there
                    for the tribal attorney and environmental protection division. That
                    experience instilled his desire to stand up for the rights of those who
                    lack a voice against the government.
                  </p>

                  <p>
                    After graduation from law school, John spent 2 years with the Alameda
                    County District Attorney&apos;s Office assisting in the prosecution of white
                    collar crimes. Since then John has dedicated himself to defending those
                    accused by both state and federal agencies. In the last{" "}
                    <strong className="text-[#0a0a0a]">30 plus years</strong> nearly 90% of
                    this work involved accusations of sexual misconduct and other serious
                    violent felonies.
                  </p>

                  <p>
                    John has served on the faculty at the Stanford Law School Trial Advocacy
                    Program since 2001 and has served as a judge at the Stanford Law School
                    Moot Court Trial Competition.
                  </p>
                </div>
              </div>

              {/* Education Section */}
              <div className="border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="h-6 w-6 text-[#b8860b]" />
                  <h2 className="font-display text-2xl text-[#0a0a0a]">Education</h2>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      school: "University of California San Francisco College of the Law",
                      detail: "San Francisco, CA — Juris Doctorate, December 1993",
                    },
                    {
                      school: "University of California, Berkeley",
                      detail: "Bachelor of Arts, English Literature and Native American Studies, June 1989",
                    },
                    {
                      school: "Saint Ignatius College Preparatory",
                      detail: "San Francisco, CA — Class of 1977",
                    },
                    {
                      school: "St. Brendan Elementary",
                      detail: "San Francisco, CA — Class of 1973",
                    },
                  ].map((edu, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-1 h-full bg-[#b8860b]/30" />
                      <div>
                        <h3 className="font-semibold text-[#0a0a0a] mb-1">{edu.school}</h3>
                        <p className="text-gray-500 text-sm">{edu.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publications Section */}
              <div className="border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="h-6 w-6 text-[#b8860b]" />
                  <h2 className="font-display text-2xl text-[#0a0a0a]">Publications</h2>
                </div>
                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="font-semibold text-[#0a0a0a] mb-2">
                    &quot;California Criminal Procedure and the Native Defendant&quot;
                  </h3>
                  <p className="text-[#b8860b] text-sm mb-3 italic">
                    News from Native California, Volume 12, nos. 1 – 4
                  </p>
                  <p className="text-gray-600 text-sm">
                    A series of magazine articles detailing a step-by-step guide for Native
                    defendants and how they can be affected by the criminal justice system.
                  </p>
                </div>
              </div>

              {/* Teaching Experience Section */}
              <div className="border-t border-gray-200 pt-12">
                <div className="flex items-center gap-3 mb-8">
                  <Users className="h-6 w-6 text-[#b8860b]" />
                  <h2 className="font-display text-2xl text-[#0a0a0a]">
                    Teaching Experience
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 p-6">
                    <h3 className="font-semibold text-[#0a0a0a] mb-1">
                      Stanford Law School Advocacy Skills Workshop
                    </h3>
                    <p className="text-[#b8860b] text-sm mb-3">2002 to Present</p>
                    <p className="text-gray-600 text-sm">
                      Instructor for law school program designed to teach 2nd year law
                      students trial techniques and skills.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6">
                    <h3 className="font-semibold text-[#0a0a0a] mb-1">
                      Stanford Law School Moot Court Competition
                    </h3>
                    <p className="text-[#b8860b] text-sm mb-3">2007 to Present</p>
                    <p className="text-gray-600 text-sm">
                      Judge for national moot court trial competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026972/North_Pal_myhti7.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Take Action
          </p>
          <h2 className="font-display text-white text-3xl md:text-4xl mb-6">
            Schedule Your Free Consultation
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            If you or a loved one is facing criminal charges, contact John D. Forsyth
            today for experienced legal representation.
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
              Contact Online
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 max-w-2xl mx-auto border border-white/10 p-6">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#b8860b] font-semibold mb-3">
              Consultation Fee Policy
            </p>
            <ul className="space-y-2 text-sm text-white/50 leading-relaxed text-left">
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
