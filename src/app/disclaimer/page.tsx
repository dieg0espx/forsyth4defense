import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description:
    "Legal disclaimer for the Law Office of John D. Forsyth website. The information here is for general information purposes only.",
  alternates: {
    canonical: "https://www.forsyth4defense.com/disclaimer",
  },
};

const lastUpdated = "May 15, 2026";

export default function DisclaimerPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center bg-[#0a0a0a]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Legal
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl mb-6">
            Legal Disclaimer
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                No Legal Advice
              </h2>
              <p>
                The information provided on this website by the Law Office of John D.
                Forsyth is for general information purposes only. Nothing on this site
                should be taken as legal advice for any individual case or situation.
                Reading this information does not create an attorney-client relationship.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                No Attorney-Client Relationship
              </h2>
              <p>
                Contacting us through this website, by phone, by email, or through any
                other means does not create an attorney-client relationship between you
                and the firm. An attorney-client relationship is established only after
                a signed written engagement agreement is in place and a conflict-of-interest
                check has been completed.
              </p>
              <p className="mt-3">
                Please do not send confidential or time-sensitive information through the
                contact form or by email until an attorney-client relationship has been
                established in writing.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                No Guarantee of Results
              </h2>
              <p>
                Past case results described on this website do not guarantee or predict
                a similar outcome in your matter. Every case is different, and the
                outcome of any particular case depends on many factors including the
                specific facts and applicable law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                Jurisdiction
              </h2>
              <p>
                John D. Forsyth is licensed to practice law in the State of California
                and in federal courts in which he has been admitted. He does not seek
                to represent clients in any jurisdiction where this website would not
                comply with applicable laws and ethical rules.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                Third-Party Content
              </h2>
              <p>
                This website may contain links to third-party websites. The Law Office
                of John D. Forsyth is not responsible for the content of any linked
                third-party sites and does not endorse the contents of such sites.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                Advertising
              </h2>
              <p>
                This website may constitute attorney advertising under the rules of
                certain jurisdictions. Prior results do not guarantee a similar outcome.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about this disclaimer, please contact us:
              </p>
              <p className="mt-3">
                <strong>Law Office of John D. Forsyth</strong>
                <br />
                San Francisco, California
                <br />
                Phone:{" "}
                <a
                  href="tel:+14158123257"
                  className="text-[#b8860b] hover:underline"
                >
                  (415) 812-3257
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:john@forsyth4defense.com"
                  className="text-[#b8860b] hover:underline"
                >
                  john@forsyth4defense.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] font-semibold text-[#0a0a0a] hover:text-[#b8860b] transition-colors"
            >
              Contact the Firm
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
