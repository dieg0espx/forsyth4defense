import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Star, Quote, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials | Criminal Defense Attorney Reviews",
  description:
    "Read what clients say about working with criminal defense attorney John D. Forsyth. Real testimonials from clients in San Francisco and throughout California.",
  keywords: [
    "criminal defense attorney reviews",
    "client testimonials",
    "San Francisco lawyer reviews",
    "criminal defense lawyer testimonials",
  ],
};

const testimonials = [
  {
    quote:
      "John Forsyth saved my life. I was facing serious charges that could have sent me to prison for years. He investigated every aspect of my case, found inconsistencies in the prosecution's evidence, and got the charges dismissed. I can't thank him enough.",
    initials: "M.R.",
    location: "San Francisco",
    caseType: "Sex Crimes Defense",
  },
  {
    quote:
      "When I was arrested, I was terrified and didn't know what to do. John was calm, professional, and immediately got to work. He explained everything clearly and kept me informed throughout the entire process. The outcome was better than I could have hoped for.",
    initials: "J.T.",
    location: "Alameda County",
    caseType: "Domestic Violence",
  },
  {
    quote:
      "I was facing a third strike and potential life in prison. John fought for me every step of the way. He filed motions I didn't even know were possible and negotiated with the prosecutor. Because of his work, I'm home with my family instead of in prison.",
    initials: "R.S.",
    location: "Contra Costa County",
    caseType: "Three Strikes",
  },
  {
    quote:
      "After being falsely accused, I thought my life was over. John believed in my innocence and proved it. His thorough investigation uncovered the truth and exposed the lies. I was acquitted at trial. John is a true fighter for justice.",
    initials: "D.L.",
    location: "San Mateo County",
    caseType: "False Accusation Defense",
  },
  {
    quote:
      "John's experience with DUI cases was evident from our first meeting. He challenged the traffic stop, questioned the breathalyzer results, and found problems with the blood test procedures. The felony charges were reduced significantly.",
    initials: "K.B.",
    location: "Marin County",
    caseType: "DUI Defense",
  },
  {
    quote:
      "As a professional, I had everything to lose. John understood what was at stake and handled my case with the utmost discretion and professionalism. He protected not only my freedom but also my career and reputation.",
    initials: "P.H.",
    location: "San Francisco",
    caseType: "Professional License Protection",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
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
            Client Feedback
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Client Testimonials
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            What Our Clients Say
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-6 w-6 text-[#b8860b] fill-[#b8860b]"
              />
            ))}
          </div>
          <p className="text-white/60 text-sm">
            Over 30 years of dedicated criminal defense representation
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 hover:border-[#b8860b] transition-colors"
              >
                <Quote className="h-8 w-8 text-[#b8860b]/20 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-[#0a0a0a]">
                        {testimonial.initials}
                      </p>
                      <p className="text-gray-400 text-xs">{testimonial.location}</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider bg-[#0a0a0a] text-white/80 px-2 py-1">
                      {testimonial.caseType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              The Difference
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Why Clients Choose John D. Forsyth
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "30+ Years Experience",
                description:
                  "Decades of criminal defense experience across all types of cases.",
              },
              {
                title: "Personal Attention",
                description:
                  "Every client receives direct access to their attorney, not just staff.",
              },
              {
                title: "Thorough Investigation",
                description:
                  "We leave no stone unturned in building the strongest possible defense.",
              },
              {
                title: "Proven Results",
                description:
                  "Track record of dismissals, acquittals, and reduced charges.",
              },
              {
                title: "Clear Communication",
                description:
                  "We keep you informed and explain the legal process in plain language.",
              },
              {
                title: "Aggressive Advocacy",
                description:
                  "We fight relentlessly to protect your rights and your future.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-4">
                <Check className="h-5 w-5 text-[#b8860b] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#0a0a0a] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
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
            Get Started
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Join the many clients who have trusted John D. Forsyth with their defense.
            Contact us today for a free, confidential consultation.
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

      {/* Disclaimer */}
      <section className="py-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/30 text-xs">
            <strong>Disclaimer:</strong> These testimonials reflect the experiences of
            individual clients. Every case is unique and past results do not guarantee
            future outcomes. Client identities have been protected for confidentiality.
          </p>
        </div>
      </section>
    </>
  );
}
