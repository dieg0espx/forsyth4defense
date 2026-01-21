import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, Scale, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Domestic Violence Case Results | DV Defense Attorney",
  description:
    "Domestic violence defense case results from the Law Office of John D. Forsyth. Successful outcomes including dismissed charges and avoided felony convictions throughout California.",
  keywords: [
    "domestic violence defense results",
    "DV case dismissed",
    "felony domestic violence defense",
    "restraining order violation defense",
    "California domestic violence lawyer",
  ],
};

interface CaseResult {
  court: string;
  description: string;
  outcome: string;
}

const caseResults: CaseResult[] = [
  {
    court: "Superior Court of San Francisco",
    description:
      "Client was arrested for felony domestic violence causing bodily injury which is a strike. Client was also charged with felony domestic violence from a similar incident that had occurred the year before with the same woman. The previous incident had been charged the year before as misdemeanors and dropped by the district attorney when the woman refused to cooperate. California law allows domestic violence charges to be re-filed within 6 months of dismissal. The district attorney illegally re-filed the former charges as felonies because the 6 month time limit for dismissed charges had run as had the one year statute of limitations for misdemeanors. The case proceeded to preliminary exam where the charges from the previous incident were dismissed. Cross examination of the victim revealed that she had drank 6 shots of whiskey in a 45 minute period before starting a fight with the defendant. The victim also testified that the client had threatened to kill her while he strangled her. This was a fact she did not report on the night of the incident. Further cross examination revealed that the victim had filed for a civil restraining order and had stated under perjury that she had suffered injury and bruising to her neck that required medical attention for days after the incident. The victim had posted photos of herself on Facebook at a party days after the event. The photo showed her drink in hand with a low cut dress that revealed no bruising to her neck. Investigation of the victim revealed she had two prior DUI convictions and the night of the incident she went straight to a bar with the defendant after attending her drinker driver class. Investigation also uncovered the fact that the victim had provided false information to her attorney regarding her alcohol consumption for one of her DUI arrests. All of this information was made available to the district attorney prior to trial. As a result, the district attorney dropped all felony charges and settled the case for a single misdemeanor with no jail.",
    outcome: "FELONY STRIKES DISMISSED. NO JAIL.",
  },
  {
    court: "Superior Court of San Francisco",
    description:
      "Client is a prominent Bay Area physician and was arrested for felony domestic violence and felony child endangerment. A conviction for any of these charges jeopardized his license to practice medicine. Client and his former girlfriend have a 5 y/o child that they share informal custody and care of. The girlfriend picked up the Client and the child from the Oakland Airport smelling of alcohol. When the Client insisted that he drive the car an argument ensued. The girlfriend struck the Client in the face. The Client did not report this to the police. 5 days later the boyfriend of the child's mother told police that the Client had physically abused the child and her mother. The mother confirmed this false allegation. The police arrested the Client and served him with a protective order that prevented him having contact with his child. The Office of John D. Forsyth immediately got to work and advised the district attorney of several facts including that the incident occurred in Alameda County and that the woman actually committed physical violence. The district attorney contacted the woman and confirmed this. The district attorney declined to file criminal charges as a result.",
    outcome: "CASE DISMISSED.",
  },
  {
    court: "Superior Court of San Francisco",
    description:
      "Client is a single mother of a 3 year old child. She was arrested and charged with misdemeanor domestic violence and child endangerment after she assaulted the father of the child. The criminal court issued a \"stay away\" order which prevented the client from contacting her child. The case proceeded on a time not waived basis directly to trial. The facts revealed that the father of the child had instigated an argument with the client. She refused and called 911 ordering him from her apartment. He then used a key he had to her apartment and entered. He took the 3 year old child from the apartment without permission. She assaulted him in her efforts to stop him. The father of the child told the police 3 different stories claiming the child ran out of the apartment into his arms. The defense investigation revealed he had assaulted the client on a previous occasion when she refused to argue with him. His statements to the police avoided all responsibility for his actions and blamed the client for her bad parenting skills. The 911 recording revealed she had ordered him from the apartment and demanded her key back. On the day of trial the district attorney dismissed the case.",
    outcome: "CASE DISMISSED. The client picked up her son that very day.",
  },
  {
    court: "San Francisco Superior Court",
    description:
      "Client was charged with felony domestic violence, assault with force likely to cause injury with an enhancement alleging serious bodily injury. The client had a prior conviction for domestic violence. Client was facing a felony strike conviction and a likely jail sentence. The complaining witness, his wife, went to a local hospital and was treated for a broken arm that she reported to the emergency physician had been caused when the client struck her with a suitcase. Client was interviewed by the police and admitted that he had a fight with his wife and was forced to defend himself after she scratched his face. He admitted to grabbing her arms in that effort. He also admitted that the wife had engaged in a tug of war with him with a suitcase. He told the police his mother-in-law had treated him for the cuts to his face caused by the wife. The wife prevented the police from speaking with the mother-in-law and recanted her story. As the case proceeded to preliminary exam, the prosecution relented and settled the matter for a misdemeanor and no jail.",
    outcome: "NO FELONY STRIKE CONVICTION. NO JAIL.",
  },
  {
    court: "Santa Clara County Superior Court",
    description:
      "Client was in the process of divorce when he was charged with domestic violence and criminal threats after his wife and in-laws accused him of threatening them with a knife. Client was a Chinese national seeking U.S. citizenship. Defense investigators discovered that wife had secretly married another man in the United States in an effort to gain citizenship. Wife had provided a fraudulent divorce decree from China. Wife had tried to bribe witnesses to keep them from testifying in divorce case. Defense was able to bring all this to the district attorney who dropped the charges.",
    outcome: "CASE DISMISSED.",
  },
  {
    court: "Alameda County Superior Court",
    description:
      "Client charged with multiple counts of violating a court order preventing contact with his estranged wife.",
    outcome: "CASE DISMISSED after motion by defense asserting speedy trial rights.",
  },
  {
    court: "Contra Costa County Superior Court",
    description:
      "Client suffered from bi-polar disorder and was charged with violating a court order not to harass his ex-wife. Client was resistant to treatment and medication, which caused him to be even more unpredictable. After his second arrest for violating the court order, the court refused to grant bail citing his escalating behavior and possible danger to the community. Defense moved court to allow client to be released into the custody of psychological treatment facility. After a short time the client stabilized and the court granted a release on his own recognizance. Client continued out patient services and medication.",
    outcome: "CASE DISMISSED. Our office arranged for a conservatorship for the client and his substantial assets allowing his siblings to take control of his estate until he is capable of doing so once again.",
  },
];

export default function DomesticViolenceCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026973/Cecile_Lake_1_ouhjob.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Case Results
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Domestic Violence Case Results
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Protecting Your Rights &amp; Future
          </p>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-4 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/cases/past"
            className="inline-flex items-center gap-2 text-[#0a0a0a] hover:text-[#b8860b] transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Case Categories
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 leading-relaxed">
            Domestic violence allegations can have devastating consequences on your
            career, custody rights, and freedom. These cases demonstrate John D.
            Forsyth&apos;s experience uncovering false accusations, challenging
            prosecution evidence, and achieving dismissals and reduced charges for
            clients facing serious domestic violence allegations.
          </p>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {caseResults.map((caseResult, index) => (
              <div
                key={index}
                className="bg-[#fafafa] border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Scale className="h-4 w-4 text-[#b8860b]" />
                    <span className="font-medium text-[#0a0a0a] text-sm">
                      {caseResult.court}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {caseResult.description}
                  </p>
                  <div className="flex items-center gap-3 bg-[#0a0a0a] p-4">
                    <Check className="h-5 w-5 text-[#b8860b] flex-shrink-0" />
                    <span className="font-display text-white">
                      {caseResult.outcome}
                    </span>
                  </div>
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
            Take Action Now
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Facing Domestic Violence Charges?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Domestic violence accusations can destroy families and careers. Contact
            John D. Forsyth immediately for experienced defense representation.
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
      <section className="py-8 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-xs">
            <strong className="text-gray-600">Disclaimer:</strong> These case results are representative of past
            outcomes. Every case is unique and results depend on specific facts and
            circumstances. Past results do not guarantee future outcomes.
          </p>
        </div>
      </section>
    </>
  );
}
