import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Law Office of John D. Forsyth website. How we collect, use, and protect your information.",
  alternates: {
    canonical: "https://www.forsyth4defense.com/privacy",
  },
};

const lastUpdated = "May 15, 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center bg-[#0a0a0a]">
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Legal
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl mb-6">
            Privacy Policy
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-neutral">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">Introduction</h2>
              <p>
                The Law Office of John D. Forsyth (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                &ldquo;us&rdquo;) respects your privacy and is committed to protecting the
                personal information you share with us through this website. This Privacy
                Policy explains how we collect, use, and safeguard your information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                Information We Collect
              </h2>
              <p>
                When you submit the contact form on our website, we collect the
                information you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>First and last name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Type of case</li>
                <li>Description of your legal matter</li>
              </ul>
              <p className="mt-3">
                We may also automatically collect non-personally-identifying information
                that web browsers and servers typically make available, such as browser
                type, language preference, referring site, and the date and time of each
                visitor request.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Respond to your consultation request</li>
                <li>Evaluate whether we can represent you</li>
                <li>Communicate with you about your legal matter</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                Confidentiality
              </h2>
              <p>
                Submitting information through this website does not create an
                attorney-client relationship. However, we treat all communications as
                confidential and do not share, sell, or rent your information to third
                parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                Data Retention &amp; Security
              </h2>
              <p>
                We retain submitted information for as long as needed to respond to your
                inquiry and to comply with our legal and professional obligations. We
                employ reasonable administrative and technical safeguards to protect the
                information you submit, but no method of transmission over the Internet
                is completely secure.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                Cookies &amp; Analytics
              </h2>
              <p>
                This website may use cookies and similar technologies to understand how
                visitors use the site and to improve their experience. You can configure
                your browser to refuse cookies or alert you when cookies are being sent.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                Your Rights
              </h2>
              <p>
                You may request that we update, correct, or delete personal information
                you have provided to us by contacting our office. We will respond to
                reasonable requests in accordance with applicable law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version
                will be indicated by the &ldquo;Last updated&rdquo; date at the top of
                this page.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0a0a0a] mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
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
