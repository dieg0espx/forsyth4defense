import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Free Consultation with Criminal Defense Attorney",
  description:
    "Contact the Law Office of John D. Forsyth for a free consultation. San Francisco criminal defense attorney with 30+ years experience. Call (415) 812-3257.",
  keywords: [
    "criminal defense attorney consultation",
    "San Francisco lawyer contact",
    "free legal consultation",
    "criminal defense lawyer near me",
  ],
  openGraph: {
    title: "Contact | Law Office of John D. Forsyth",
    description:
      "Get a free consultation with experienced San Francisco criminal defense attorney John D. Forsyth.",
    images: ["/og-image.jpg"],
  },
};

const areasServed = [
  "San Francisco",
  "Alameda",
  "Contra Costa",
  "Marin",
  "San Mateo",
  "Santa Clara",
  "All California",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026972/Old_Bull_lbbglz.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Get in Touch
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Contact Us
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Free Confidential Consultation
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
                Reach Out
              </p>
              <h2 className="font-display text-3xl text-[#0a0a0a] mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                If you or a loved one is facing criminal charges, contact the Law Office
                of John D. Forsyth immediately. Early legal intervention can make a
                significant difference in the outcome of your case.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+14158123257"
                  className="flex items-start gap-5 p-5 bg-white border border-gray-200 hover:border-[#b8860b] transition-all group"
                >
                  <div className="w-12 h-12 bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#b8860b]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                      Call Now
                    </p>
                    <p className="text-xl font-display text-[#0a0a0a] group-hover:text-[#b8860b] transition-colors">
                      (415) 812-3257
                    </p>
                    <p className="text-gray-500 text-sm mt-1">Available for urgent matters</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:john@forsyth4defense.com"
                  className="flex items-start gap-5 p-5 bg-white border border-gray-200 hover:border-[#b8860b] transition-all group"
                >
                  <div className="w-12 h-12 bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#b8860b]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                      Email
                    </p>
                    <p className="text-lg text-[#0a0a0a] group-hover:text-[#b8860b] transition-colors">
                      john@forsyth4defense.com
                    </p>
                    <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-5 p-5 bg-white border border-gray-200">
                  <div className="w-12 h-12 bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#b8860b]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                      Location
                    </p>
                    <p className="text-lg text-[#0a0a0a]">San Francisco, California</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Serving all California counties
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-5 p-5 bg-white border border-gray-200">
                  <div className="w-12 h-12 bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-[#b8860b]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                      Office Hours
                    </p>
                    <p className="text-[#0a0a0a]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Emergency calls accepted 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white border border-gray-200 p-8 md:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="h-5 w-5 text-[#b8860b]" />
                  <span className="text-sm text-gray-500">
                    All communications are confidential
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#0a0a0a] mb-8">
                  Request a Consultation
                </h3>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-[#b8860b] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-200 focus:border-[#b8860b] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#b8860b] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#b8860b] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="caseType"
                      className="block text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-2"
                    >
                      Type of Case
                    </label>
                    <select
                      id="caseType"
                      name="caseType"
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#b8860b] focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a case type</option>
                      <option value="sex-crimes">Sex Crimes</option>
                      <option value="dui">DUI / Vehicular</option>
                      <option value="domestic-violence">Domestic Violence</option>
                      <option value="drug-offenses">Drug Offenses</option>
                      <option value="federal">Federal Charges</option>
                      <option value="assault">Assault</option>
                      <option value="theft">Theft / Fraud</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-2"
                    >
                      Brief Description of Your Situation
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#b8860b] focus:outline-none transition-colors resize-none"
                      placeholder="Please provide a brief description of your legal matter..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#b8860b] text-[#0a0a0a] py-4 font-semibold text-sm uppercase tracking-[0.15em] hover:bg-[#d4a017] transition-colors"
                  >
                    Request Free Consultation
                  </button>
                </form>
                <p className="text-xs text-gray-400 mt-6 text-center">
                  By submitting this form, you agree to be contacted by our office.
                  This does not create an attorney-client relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4 text-center">
            Service Area
          </p>
          <h2 className="font-display text-3xl text-[#0a0a0a] text-center mb-4">
            Areas Served
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            John D. Forsyth represents clients throughout California in both state and
            federal courts.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {areasServed.map((county) => (
              <div
                key={county}
                className="bg-[#fafafa] border border-gray-200 p-4 text-center hover:border-[#b8860b] transition-colors"
              >
                <span className="text-[#0a0a0a] text-sm font-medium">{county}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl text-white mb-12">
            Why Contact John D. Forsyth?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="font-display text-[#b8860b] text-4xl mb-2">30+</p>
              <p className="text-white/60 text-sm">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="font-display text-[#b8860b] text-4xl mb-2">90%</p>
              <p className="text-white/60 text-sm">Sex Crime Cases</p>
            </div>
            <div className="text-center">
              <p className="font-display text-[#b8860b] text-4xl mb-2">Free</p>
              <p className="text-white/60 text-sm">Initial Consultation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
