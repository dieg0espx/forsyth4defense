import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ExternalLink, Newspaper, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Legal Updates | Criminal Defense News",
  description:
    "Stay informed about criminal defense news, legal updates, and relevant articles. News coverage and media articles featuring cases handled by the Law Office of John D. Forsyth.",
  keywords: [
    "criminal defense news",
    "John Forsyth news",
    "legal updates California",
    "criminal law news",
    "San Francisco legal news",
  ],
};

interface NewsArticle {
  title: string;
  description: string;
  source: string;
  url: string;
}

const newsArticles: NewsArticle[] = [
  {
    title: "Marin County Jury Convicts Accused Child Molester",
    description:
      "A man charged with molesting two children he babysat for friends in Novato was convicted by a Marin County jury.",
    source: "Marin Independent Journal",
    url: "https://www.marinij.com/2020/11/10/marin-county-jury-convicts-accused-child-molester/",
  },
  {
    title: "San Bruno Man Faces a Year Behind Bars",
    description:
      "A San Bruno man faces a year behind bars after pleading no contest to a hit-and-run crash that killed a pedestrian, who police have said was at fault.",
    source: "The Mercury News",
    url: "https://forsyth4defense.squarespace.com/s/SanBruno_Man_Faces.pdf",
  },
  {
    title: "Little Released from Custody",
    description:
      "A Siskiyou County judge agreed to release Hoopa resident Suzanne Little (Aubrey) from custody on Monday after her attorney, John D. Forsyth, requested to have her released\u2026",
    source: "Two Rivers Tribune",
    url: "https://www.forsyth4defense.com/s/Two_Rivers_Tribune.pdf",
  },
  {
    title: "Former Exec Gets 3 Years in Internet Sex Case",
    description:
      "A Marin interactive-TV executive will spend nearly three years in federal prison for using the internet to solicit sex from a minor, a federal judge ruled in San Francisco\u2026",
    source: "Marin Independent Journal",
    url: "https://www.forsyth4defense.com/s/Former_Exec_gets_3_years4.pdf",
  },
  {
    title: "California Trial Judge Says NET PORN LAW Violative of Speech Rights, Commerce Clause",
    description:
      "A California law that makes it illegal to knowingly transmit sexual material to a minor via the internet is unconstitutionally overbroad in violation of the First Amendment\u2026 Judge says law on sending material to minors violates Constitution; prosecutors will pursue trial against ex-teacher in state court\u2026",
    source: "Bureau of National Affairs, Washington D.C.",
    url: "https://www.forsyth4defense.com/s/CA_Trial_Judge_Says.pdf",
  },
  {
    title: "Internet Seduction Felony Case Dismissed",
    description:
      "The case of a San Ramon man arrested last summer by Piedmont Police after having sexual conversations on the internet with a supposed teenage girl is being challenged in the Contra Costa County Courts\u2026",
    source: "Contra Costa Times",
    url: "https://www.forsyth4defense.com/s/Internet_Seduction.pdf",
  },
  {
    title: "Internet Sex Case Dispute",
    description:
      "A Contra Costa County Superior Court Judge on Monday declared unconstitutional a Penal Code section that makes it illegal to transmit sexual material over the internet if the person sending the information knows the recipient is a minor.",
    source: "Contra Costa County Times",
    url: "https://www.forsyth4defense.com/s/Internet_Sex_Case_Dispute.pdf",
  },
  {
    title: "Judge Strikes Law Against Online Sex Info to Minors",
    description:
      "As pedophiles turn to the Web, are sex crimes on the rise?",
    source: "CalLaw",
    url: "https://www.forsyth4defense.com/s/Judge_Strikes_Law.pdf",
  },
  {
    title: "A Pedophile\u2019s New Tool",
    description:
      "A state law designed to net people who use the Internet to lure kids is being called unconstitutional by some attorneys.",
    source: "CyberCrime News",
    url: "https://www.forsyth4defense.com/s/A_Pedophiles_New_Tool.pdf",
  },
  {
    title: "Caught in the Web",
    description:
      "\u2026Criminal Defense Attorney John Forsyth feared that Maddock would believe \u201Cprison is good for everyone.\u201D Instead, Forsyth said Maddock gave his client\u2019s case a fair hearing and carefully considered defense briefs\u2026",
    source: "The Recorder",
    url: "https://www.forsyth4defense.com/s/Caught_in_the_Web.pdf",
  },
  {
    title: "Judge Brings Sacramento Savvy to CoCo Bench",
    description:
      "",
    source: "The Recorder",
    url: "https://www.forsyth4defense.com/s/Judge_Bring_Sac_Savvy.pdf",
  },
];

const legalResources = [
  {
    title: "Understanding Your Rights During a Police Stop",
    description:
      "Know your constitutional rights when stopped by police. What you should and shouldn't say to protect yourself.",
    category: "Know Your Rights",
  },
  {
    title: "California's Three Strikes Law: Recent Changes",
    description:
      "How Proposition 36 changed California's Three Strikes Law and what it means for those with prior convictions.",
    category: "Legal Updates",
  },
  {
    title: "The Importance of Early Legal Intervention",
    description:
      "Why contacting a criminal defense attorney immediately after an arrest can make a critical difference in your case.",
    category: "Defense Strategy",
  },
  {
    title: "Sex Crime Allegations: False Accusations and Defense",
    description:
      "Understanding how false accusations occur and the defense strategies available to those wrongly accused.",
    category: "Sex Crimes Defense",
  },
  {
    title: "DUI Defense: Challenging Breathalyzer Results",
    description:
      "Common issues with breathalyzer tests and how they can be challenged in court.",
    category: "DUI Defense",
  },
  {
    title: "Domestic Violence: Understanding the Charges",
    description:
      "What constitutes domestic violence under California law and the potential consequences of conviction.",
    category: "Domestic Violence",
  },
];

const externalResources = [
  {
    name: "California Courts - Self-Help Center",
    url: "https://www.courts.ca.gov/selfhelp.htm",
    description: "Official California courts information and resources",
  },
  {
    name: "State Bar of California",
    url: "https://www.calbar.ca.gov/",
    description: "Information about attorneys and legal resources",
  },
  {
    name: "California Penal Code",
    url: "https://leginfo.legislature.ca.gov/",
    description: "Official California law and statutes",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1770932038/112_u5zyyy.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Stay Informed
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            News & Resources
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Legal Updates & Information
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            Cases handled by the Law Office of John D. Forsyth have been covered by
            publications across California and nationally. Below is a selection of news
            articles featuring notable cases and legal developments.
          </p>
        </div>
      </section>

      {/* News Articles - Media Coverage */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Media Coverage
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              In the News
            </h2>
          </div>
          <div className="space-y-6">
            {newsArticles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#fafafa] border border-gray-200 p-6 md:p-8 hover:border-[#b8860b] transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block text-[10px] uppercase tracking-[0.2em] bg-[#0a0a0a] text-white/80 px-3 py-1 mb-4">
                      {article.source}
                    </span>
                    <h3 className="font-display text-xl text-[#0a0a0a] mb-3 group-hover:text-[#b8860b] transition-colors">
                      {article.title}
                    </h3>
                    {article.description && (
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {article.description}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-300 group-hover:text-[#b8860b] transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Resources Grid */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Knowledge Center
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Legal Resources
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalResources.map((article, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 hover:border-[#b8860b] transition-colors group"
              >
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] bg-[#0a0a0a] text-white/80 px-3 py-1 mb-4">
                  {article.category}
                </span>
                <h3 className="font-display text-xl text-[#0a0a0a] mb-3 group-hover:text-[#b8860b] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Additional Resources
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Helpful External Resources
            </h2>
          </div>
          <div className="space-y-4">
            {externalResources.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 p-5 bg-[#fafafa] border border-gray-200 hover:border-[#b8860b] transition-all group"
              >
                <div className="w-10 h-10 bg-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-4 w-4 text-[#b8860b]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0a0a0a] group-hover:text-[#b8860b] transition-colors">
                    {resource.name}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Newspaper className="h-10 w-10 text-[#b8860b]/50 mx-auto mb-6" />
          <h2 className="font-display text-3xl text-[#0a0a0a] mb-4">
            Stay Informed
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Legal news and updates can impact your rights. If you have questions about
            how changes in the law might affect you, contact our office for a consultation.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Get Answers
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Have Legal Questions?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            If you&apos;re facing criminal charges or have questions about your legal
            situation, contact John D. Forsyth for a free consultation. Don&apos;t rely on
            general information when your freedom is at stake.
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
          <div className="mt-8 max-w-2xl mx-auto border border-white/10 p-6">
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

      {/* Disclaimer */}
      <section className="py-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/30 text-xs">
            <strong>Disclaimer:</strong> The information provided on this page is for
            general educational purposes only and does not constitute legal advice. Every
            case is unique. For advice about your specific situation, please contact our
            office for a consultation.
          </p>
        </div>
      </section>
    </>
  );
}
