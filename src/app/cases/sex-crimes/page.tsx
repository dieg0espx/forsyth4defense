import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, Scale, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sex Crimes Case Results | Child Molestation Defense",
  description:
    "Detailed sex crimes defense case results from the Law Office of John D. Forsyth. Successful outcomes in child molestation, sexual assault, and internet sting cases throughout California.",
  keywords: [
    "sex crimes defense results",
    "child molestation defense attorney",
    "sexual assault case dismissed",
    "internet sting defense",
    "sex crime acquittal California",
  ],
};

interface CaseResult {
  court: string;
  description: string;
  outcome: string;
}

const caseResults: CaseResult[] = [
  {
    court: "Butte County Superior Court",
    description:
      "Client was charged with one count of child molestation after his ex-girlfriend's 10-year-old daughter told her grandmother that the client was \"very sexual.\" This was immediately after the client had found her on the Internet looking at adult content and took the computer away. The investigation took off with the girl giving statements several times to police, the district attorney, CPS, and a forensic child interviewer. Each time her stories about the sexual conduct of the client got more detailed and more sinister. She was given excessive attention prior to trial including being presented with a puppy a few days before. Once on the stand, her stories became even more detailed and more sinister. When cross-examined regarding her use of the Internet to view adult content, she blamed the defendant and said he was the one who was looking at pornography. It was made quite clear that the child was highly sexualized, volatile, and vindictive to the jury. They took exactly one hour and twenty minutes to return...",
    outcome: "NOT GUILTY VERDICT resulting in an ACQUITTAL.",
  },
  {
    court: "Alameda County Superior Court",
    description:
      "Client was arrested and charged with 2 counts of misdemeanor child molest. Client was facing sex registration for life. The incident occurred on a Southwest Airlines jet awaiting take off at the Oakland Airport. The client allegedly touched 2 children who were unaccompanied on the jet. The flight attendant pulled his hand away from one of the children and told him not to touch the children. An argument ensued and she called the Alameda County Sheriff at the airport. The sheriffs escorted him and the children from the jet and interviewed them. The sheriffs then called the children's father back to the airport and had him execute an illegal citizen's arrest. The defense moved to dismiss the case due the illegal citizen's arrest. California law empowers a citizen and a peace officer to make arrests for misdemeanors that occur only in their presence. The motion was denied and the case proceeded to trial on a time not waived basis. The facts revealed that the defendant's acts consisted of merely patting the girl on the leg and tickling the boy under his chin. There was no evidence of a sexual motive or intent as required by law. On the first day of trial the district attorney settled the case for a misdemeanor battery, no jail time and probation.",
    outcome: "SEX CHARGES DISMISSED. NO SEX REGISTRATION. NO JAIL.",
  },
  {
    court: "Superior Court of San Francisco",
    description:
      "Client was charged with 2 counts of indecent exposure and one count of child endangerment after he was arrested near a high school while urinating in public. Client had a prior arrest and conviction involving indecent exposure 10 years before. The district attorney planned to introduce that evidence at trial. The client faced jail time and lifetime sex registration if convicted of indecent exposure. The defense focused on the 15-year-old girl who called 911 and the investigation by the police of the incident. The district attorney refused to turn over training records from the officers regarding their training and experience interviewing child witnesses. The court ordered the production of the records and granted a defense motion for sanctions for failure to produce the records. The case proceeded to trial on a time not waived basis. On the first day of trial the district attorney dropped all sex charges against the client. The client pleaded to a misdemeanor with probation and no jail.",
    outcome: "SEX CHARGES DISMISSED. NO LIFETIME SEX REGISTRATION.",
  },
  {
    court: "Superior Court of San Francisco",
    description:
      "Client owned and operated a local day spa. Three separate women claimed they were touched inappropriately on their breasts and genitalia during massages by the client. He was charged with three felony counts of sexual battery. After the arrest more women came forward claiming similar assaults. Client faced multiple sex charges, the possibility of consecutive state prison terms and sex registration for life. The trial strategy involved expert witnesses who could demonstrate that the techniques used by the client were appropriate and acceptable within the industry. Long time women clients were prepared to testify he had never touched them inappropriately during massages. All offers by the district attorney were rejected and the case proceeded to trial. On the second day of trial the case settled for a single misdemeanor charge of battery and probation.",
    outcome: "NO FELONY SEX CHARGE CONVICTION. NO SEX REGISTRATION. NO JAIL.",
  },
  {
    court: "Sacramento County Superior Court",
    description:
      "Client was charged with felony sexual battery and digital penetration by his estranged wife. Facing jail time and lifetime sex registration. Investigation revealed that wife was bi-polar and had falsely accused client of child molest in the past. Defense investigators discovered that wife had admitted she made up the accusation of sexual assault in an effort to retain custody of the 4 children. At preliminary exam the defense called client's stepdaughter to the stand who testified that her mother admitted the false accusation to her. One felony was reduced to a misdemeanor at preliminary exam and case was set for trial. All settlement offers by the district attorney were rejected and the case moved forward.",
    outcome: "CASE DISMISSED. Client's other misdemeanor charges for domestic violence were also dismissed in Alameda County.",
  },
  {
    court: "Lake County Superior Court",
    description:
      "Client was charged with forcible rape and facing 8 years of state prison and sex registration for life. The first trial was handled by a local attorney and resulted in a hung jury. 11 of the jurors voting for conviction. The client hired the Law Office of John D. Forsyth for the new trial. The trial team consisted of medical experts and investigators. The new trial strategy focused on the lack of medical evidence of rape and the alleged victim's propensity for vindictiveness. On the first day of trial the prosecution reduced the charge to false imprisonment and client was granted probation.",
    outcome: "No state prison. No sex registration.",
  },
  {
    court: "San Francisco Superior Court",
    description:
      "Client charged with assault with intent to commit rape and assault with intent to commit oral copulation. Client was exposed to 22 years of state prison; strike convictions and sex registration for life. Investigation revealed that the alleged victim was the client's mistress and had exaggerated the events to the police and to her new lover. Prosecution reduced the charges to simple assault and client was granted probation.",
    outcome: "No state prison. No strike convictions. No sex registration.",
  },
  {
    court: "Alameda County Superior Court",
    description:
      "Client was arrested for kidnapping, false imprisonment, forcible rape, forcible sodomy and domestic violence with weapons enhancements based on accusations from his wife. Client admitted to police the sexual contact and not allowing the wife to leave the house. Client was facing strike offenses, state prison and sex registration for life. Investigation immediately revealed that the wife was having an affair with a co-worker and that her claims of kidnapping, forcible rape and sodomy were false. The district attorney took over 8 months to file charges. The prosecution later dropped all sex charges and the client enters a plea to domestic violence and false imprisonment.",
    outcome: "Client was granted probation and avoided prison; strike convictions and sex registration for life.",
  },
  {
    court: "Lake County Superior Court",
    description:
      "Client confessed to molest of his teenaged daughter years before. At issue was the age of the daughter at the time of the alleged molest. Molest of a child under 14 years of age or younger is more serious than a child 15 years or older. Investigator was able to interview daughter and use receipts from a computer that was purchased for her 15th birthday to corroborate that she was 15 years of age at the time of the alleged molest. Prosecution reduced the charge to a \"wobbler\" offense. Psychological evaluation of the client revealed that he was not a danger to the community. Client was granted probation and credit for time served. \"Wobbler\" offenses can be reduced to a misdemeanor after completion of probation.",
    outcome: "No state prison. No strike convictions.",
  },
  {
    court: "Contra Costa County Superior Court",
    description:
      "Client confessed to fondling a teenaged girl. Negotiations with the district attorney and a psychological evaluation reduced the charge to a misdemeanor with a grant of probation and a short term of home arrest.",
    outcome: "No felony conviction. No jail.",
  },
  {
    court: "United States District Court, Northern District of California",
    description:
      "A high profile child molest/Internet sting case involving the CEO of a local high tech company. The client was prosecuted by both the federal government and the State of California. Federal prosecution involved an Internet sting by the F.B.I. and child molest charges. Client was exposed to 30 years to life in federal prison due the substantial sexual contact with a minor charges. The US Attorney attempted to get a court order preventing the defense investigator from interviewing the alleged victim who had also claimed to have been raped by her uncle and had consensual sex with several adult men she met on the Internet. US Attorney also refused to turn over any discovery items regarding the alleged victim's statements to her school counselor. Eventually, the sex with a minor charges were dropped and the client entered a plea to the Internet sting case. The US Attorney unsuccessfully attempted to require the client to make restitution to the alleged victim. The court ruled against the government at sentencing due to the fact that they refused to turn over any discovery regarding the alleged victim. Client was sentenced to 34 months of federal prison.",
    outcome: "Sex with minor charges DROPPED. 34 months federal prison (down from 30 years to life exposure).",
  },
  {
    court: "Santa Clara County Superior Court",
    description:
      "The state charges against the client exposed him to 16 years of state prison for forcibly molesting a child. The prosecutor made an initial offer of 16 years and threatened to amend the charges in such a way that the client would be exposed to a life term if the defense took the case to a preliminary exam. This required several motions for discovery of confidential school records and records from the juvenile dependency court in an effort to obtain evidence that the alleged victim was not forcibly molested. The court ruled in favor of the release of the school records, which revealed that the sex was consensual. The district attorney reduced the offer to 10 years and agreed to allow the remainder of the federal sentence to run concurrent with the state sentence.",
    outcome: "Charges significantly reduced. Sentences run concurrent.",
  },
  {
    court: "Alameda County Superior Court",
    description:
      "Internet sting case where cop used a chat room and pretended to be a 15-year-old girl. Client was charged under the new California Penal Code section 288.2 and faced prison time and sex registration for life. Defense motions challenged the constitutionality of the new law.",
    outcome: "CASE DISMISSED.",
  },
  {
    court: "Contra Costa County Superior Court",
    description:
      "Took up where the Alameda County case left off. Because the client lived in another county where he used his computer, that county asserted jurisdiction. Once again the California statute was challenged constitutionally.",
    outcome: "Once again CASE DISMISSED by the Superior Court Appellate Division.",
  },
  {
    court: "Alameda County Superior Court",
    description:
      "Client was charged with felony molest after he developed a sexual relationship with a 15-year-old boy over the Internet. Client faced state prison and sex registration for life. Investigation revealed that the boy represented he was over 18 and was frequenting gay bars, gay chat rooms and night clubs in San Francisco developing relationships with older men. The prosecution reduced the charge to misdemeanor attempted child endangerment.",
    outcome: "Client was granted probation, avoided a felony conviction for child molest and lifetime sex registration.",
  },
  {
    court: "Alameda County Superior Court",
    description:
      "Client was a mentally retarded 18-year-old man who was accused of orally copulating his 3-year-old cousin. Client was held and interrogated by police for over 8 hours before being arrested. He did not confess despite intimidation and unconscionable tactics at the hands of police. An aggressive defense posture forced the prosecution to relent and reduce the charge to child endangerment.",
    outcome: "Client was granted probation and served no jail time. No felony strike conviction. No lifetime sex registration.",
  },
  {
    court: "Lake County Superior Court",
    description:
      "Client was a 27-year-old mentally retarded man who was sexually involved with a 15-year-old girl. When her father found out about the relationship she claimed rape. Investigation revealed that the girl was reluctant to testify that she had been raped and was pushed into making the exaggerated allegations by her father. Further, review of the DNA evidence, done by the forensic lab for the California Department of Justice, was suspect in that the criminalist had been unethical in her testing and analysis. Defense analysis of California law regarding mentally retarded defendants compelled the court to postpone prosecution while client went through evaluation and counseling at the local regional center.",
    outcome: "CASE DISMISSED.",
  },
];

export default function SexCrimesCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Case Results
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Sex Crimes Case Results
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Sexual Assault, Child Molestation &amp; Internet Stings
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
            These cases represent John D. Forsyth&apos;s extensive experience defending
            clients against sex crime allegations. Each case demonstrates the importance
            of thorough investigation, aggressive defense strategy, and challenging
            the prosecution&apos;s evidence at every stage.
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
            Facing Sex Crime Allegations?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Sex crime accusations can destroy your life, career, and reputation.
            Contact John D. Forsyth immediately for experienced defense representation.
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
