import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Scale, FileText, Quote, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Suzanne Little Case | Landmark Criminal Defense",
  description:
    "The story of The People v. Suzanne Dorene Little - a landmark case in Siskiyou County Superior Court demonstrating the importance of thorough investigation and dedicated criminal defense. Case dismissed.",
  keywords: [
    "Suzanne Little case",
    "criminal defense case study",
    "wrongful accusation defense",
    "Siskiyou County criminal defense",
    "kidnapping defense California",
    "case dismissed",
  ],
};

export default function SuzanneLittlePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1770931788/081_c8gyub.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/95" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-4 md:mb-6 font-medium">
            Landmark Case
          </p>
          <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
            The Suzanne Little Case
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-4 md:mb-6" />
          <p className="text-white/60 text-base md:text-xl max-w-2xl mx-auto">
            The People v. Suzanne Dorene Little
          </p>
          <p className="text-white/40 text-sm mt-2">
            Siskiyou County Superior Court
          </p>
        </div>
      </section>

      {/* Photo and Introduction */}
      <section className="py-14 md:py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="md:flex md:gap-10 md:items-start">
            <div className="max-w-[240px] mx-auto md:max-w-none md:w-1/3 mb-8 md:mb-0 flex-shrink-0">
              <div className="border border-gray-200 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dku1gnuat/image/upload/v1770932437/suzanne_kujuoz.png"
                  alt="Suzanne Dorene Little"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-3">Suzanne Dorene Little</p>
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <Scale className="h-5 w-5 md:h-6 md:w-6 text-[#b8860b]" />
                <h2 className="font-display text-2xl md:text-3xl text-[#0a0a0a]">The Case</h2>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Susanne Little is a 72 year old matriarch of a traditional Hupa dance clan. In October 2008 she was arrested with her former brother-in-law, Gregory Nelson, for the 1976 kidnap and murder of 6 year old Willie Cook, Jr. in Happy Camp, California. After the arrest, Nelson gave an alleged confession to both the kidnapping and murder. He implicated Suzanne Little in the kidnapping. Suzanne Little was charged with kidnapping for ransom which carries a mandatory sentence of life without the possibility of parole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Case Story */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5 md:space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              At the preliminary exam the prosecution produced evidence that an eye witness saw the alleged kidnapping in 1976 and also witnessed the boy murdered by Greg Nelson in Hoopa. This particular witness was interviewed 4 separate times by law enforcement in 2008. Each time he gave a different story with greater detail down to what flavor ice cream he and his brother had on the day of the kidnapping. He never mentioned ever seeing Suzanne Little until the 3rd and 4th interviews. His mother was also interviewed in 2008. Curiously, the recording of her interview was not turned over to the defense until October of 2009 when Gregory Nelson was on trial. The officer responsible testified at trial that he had left the recording in his locker for over 1 year accidentally.
            </p>

            <p>
              Evidence at the preliminary hearing regarding the element of ransom was severely lacking. The only evidence of ransom was that Suzanne Little and her then husband, Antone Aubrey, had not completely repaid a small loan from the Cook boy&apos;s father. Antone Aubrey had been acquitted at trial of the murder of the boy&apos;s uncle the year before, and Suzanne Little&apos;s now deceased sister, Joyce Croy, used to pester the boy&apos;s father for money and gasoline. There was no mention of any ransom demand or ransom notes. The law defines that ransom must be for financial gain. The holding order from the court was unsuccessfully challenged via writ to the appellate court on the grounds that proof of the element of ransom had not been met.
            </p>

            <p>
              During the last day of the preliminary exam the prosecution turned over 700 pages of discovery documents which included the police reports from the 1976 investigation. Recorded interviews with the prosecution&apos;s eye witnesses taken days after the boy&apos;s disappearance revealed that these people had not seen any kidnapping let alone a murder. Incredibly not one law enforcement officer ever went back to the &ldquo;eye witnesses&rdquo; and questioned why their stories had changed some 32 years later. One detective testified that &ldquo;budget constraints&rdquo; prevented re-interviewing the witnesses.
            </p>

            <p>
              The police reports also revealed that the 2008 alleged confession from Greg Nelson was riddled with inconsistencies and/or factual impossibilities when compared with the facts from the investigation in 1976. This included that both Greg Nelson and Joyce Croy were questioned by law enforcement in Happy Camp within a short time after Cook&apos;s disappearance. Suzanne Little was not seen in Happy Camp at anytime during the day in question. Nelson&apos;s 2008 statement was that the boy was taken directly to Hoopa after the kidnapping. Hoopa is hours away from Happy Camp one way. Thus, Nelson&apos;s 2008 claim was impossible. The 1976 reports revealed additional inconsistencies with Nelson&apos;s statement both in the manner in which the boy&apos;s body was disposed of and the location of where the body was found in 1977.
            </p>

            <p>
              The former law enforcement officers who investigated the case in 1976 were called to testify at conditional examinations prior to trial. That hearing produced evidence that the number one suspect in 1977 was a known child molester who lived in Happy Camp during the time in question. One of the former victims of that molester contacted the defense because his several attempts to contact Siskiyou County law enforcement in 2009 were ignored. Defense investigation revealed that the missing boy had been on the molester&apos;s property on the day he went missing. Further, witnesses who knew the molester gave statements that he maintained cardboard barrels on his property that were similar to the barrel that the missing boy&apos;s body was found in. The officers testified that they interviewed the eye witness, his mother and his sister within days of Cook&apos;s disappearance in 1976 and recorded those interviews. None of these witnesses ever claimed to have witnessed a kidnapping or murder. They had not even gone to get ice cream. Additionally, the lead investigating officer in 1976 testified that the F.B.I. refused his requests to become involved since no demands for ransom were ever made.
            </p>

            <p>
              The many hours of the 2008 interrogation of Greg Nelson by law enforcement was nearly completely recorded. Review of the tapes revealed that virtually every detail of the alleged confession had been told to Nelson by the interviewing officers before he admitted any of it. For 2 days Nelson was questioned without counsel. On the second day, after hours of interrogation, a visit from the Siskiyou County District Attorney and pressure applied to his sister by the detectives, Greg Nelson admitted the kidnapping and murder. Public Defender Lael Kayfetz filed a motion to suppress the statement as being coerced. Dr. Richard Leo testified regarding his research and experience with false and coerced confessions. His analysis of the Nelson interrogation revealed a multitude of mistakes made by law enforcement. The investigating officers testified as well. What became clear was that the detectives who interrogated Nelson were undertrained and literally &ldquo;flying by the seat of their pants.&rdquo; The detectives denied that they had knowledge that the eyewitness had previously told one of their colleagues that he saw Greg Nelson murder Cook. This was despite the fact that the detectives told Nelson certain details about the day of the murder that were precisely what the eyewitness stated one week earlier. The motion to suppress the statement was denied and the case proceeded to trial.
            </p>

            <p>
              The cases were severed as the prosecution intended to use the Nelson statement in their case in chief. The law prevents co-defendant confessions to be used against another non-confessing defendant. Greg Nelson proceeded to trial ahead of Suzanne Little over the objections of her attorney. Despite having four deputy district attorneys qualified to prosecute a homicide case, the District Attorney used drug asset forfeiture funds to hire a special prosecutor for the Nelson trial.
            </p>

            <p>
              In September, 2009 Greg Nelson proceeded to trial with Siskiyou County Public Defender Lael Kayfetz. Incredibly, the prosecution did not call the &ldquo;eye witnesses&rdquo; in their case. Those witnesses were called by the defense and proved absolutely unbelievable. What the evidence revealed was that prior to any arrests, the investigating officers theorized who was responsible for Cook&apos;s death. They sold that theory to the Cook family in order to get their cooperation which included exhumation of the boy&apos;s body. The theory was based on the 2008 statements of the eyewitnesses. However, not one law enforcement officer ever reviewed the 1976 interviews or reports prior to the arrest of Greg Nelson and Suzanne Little. Thus, they had no knowledge of the inconsistent 1976 statements of the witnesses. The boy&apos;s father testified that he received phone calls and written demands for ransom but he had never told law enforcement in 1976 because he lost faith in their efforts to find his son. He further testified that he had turned over the demands to his private investigators in 1977. This was the first time the boy&apos;s father ever mentioned ransom even after 3 separate interviews with law enforcement in 2008. The father&apos;s investigators denied ever seeing any written ransom demands or made any reports about phone calls demanding ransom.
            </p>

            <p>
              The case now focused on the interrogation of Nelson and whether or not the confession was coerced. After 2 1/2 months of trial the court declared a mistrial. The jury was dead locked 6 to 6 on the charge of kidnapping and only 7 voted guilty of murder. Interviews with jurors indicated that there was very little chance of ever getting a conviction or an acquittal of Greg Nelson. There was too much and not enough at the same time.
            </p>

            <p>
              The case against Suzanne Little was even weaker. Suzanne was offered a plea agreement to a misdemeanor that would be dismissed in 1 year. She responded, &ldquo;HELL NO.&rdquo;
            </p>

            <p>
              Rather than take Suzanne&apos;s case immediately to trial, the prosecution stalled by filing a motion to consolidate the two previously severed cases. The motion to consolidate the defendants was granted over defense objections. The matters were now joined and set to proceed to trial with 2 separate juries.
            </p>

            <p>
              On December 14, 2009 the District Attorney citing the split Nelson jury, the lack of evidence against Suzanne Little and budget constraints preventing him from re-hiring the special prosecutor, dismissed the cases against Greg Nelson and Suzanne Little.
            </p>
          </div>

          {/* Outcome */}
          <div className="flex items-center gap-3 bg-[#0a0a0a] p-4 md:p-6 mt-8 md:mt-12">
            <Check className="h-5 w-5 md:h-6 md:w-6 text-[#b8860b] flex-shrink-0" />
            <span className="font-display text-white text-xl md:text-2xl">
              CASE DISMISSED.
            </span>
          </div>
        </div>
      </section>

      {/* Acknowledgments */}
      <section className="py-14 md:py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <FileText className="h-5 w-5 md:h-6 md:w-6 text-[#b8860b]" />
            <h2 className="font-display text-2xl md:text-3xl text-[#0a0a0a]">
              Acknowledgments
            </h2>
          </div>
          <div className="text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              The Law Office of John D. Forsyth wishes to thank the following people who assisted and supported the efforts to defend Suzanne Little: The Law Office of Jeffery Schwartz, Siskiyou County Public Defender Lael Kayfetz and her entire staff, Mr. Eric Bergstrom, J. Tony Serra, Diana Samuelson, James Bustamante, Julie Schumer and last, but not least, investigators Harvey C. Shapiro and Carol Palacio. I am forever grateful to all of you.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Letter */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <Quote className="h-5 w-5 md:h-6 md:w-6 text-[#b8860b]" />
            <h2 className="font-display text-2xl md:text-3xl text-[#0a0a0a]">
              In Suzanne&apos;s Own Words
            </h2>
          </div>
          <div className="bg-[#fafafa] border border-gray-200 p-5 md:p-12">
            <Quote className="h-8 w-8 md:h-10 md:w-10 text-[#b8860b]/20 mb-6 md:mb-8" />
            <div className="space-y-5 md:space-y-6 text-gray-600 text-sm md:text-base leading-relaxed italic">
              <p>
                This letter is in regards to the tremendous support, love and prayers from all of &ldquo;Indian Country&rdquo; and others this past year. I want to thank my attorney, John D. Forsyth of San Francisco (a member of the Round Valley Indian reservation) and his investigators, the talented Harvey Shapiro and the lovely Carol Palacio. I would like to thank Lael Kayfetz and Robert Sheldon of the Siskiyou Public Defender&apos;s Office for their tireless efforts. I would like to thank attorneys Jeff Schwartz of Arcata, California and Eric Bergstrom of Yreka, California for standing in for me in court. I would like to thank the correctional staff of the Siskiyou County jail for their complete professionalism in this case. I would like to thank Aunt Betty, Diane and Zooby for their faith, support and love. I would like to especially thank my family. My children and their spouses, my grandchildren and their spouses, great grandchildren and members of the community for your loyal support. Lastly, I would thank our Creator, who knows all, and with your prayers, helped me make it through each day and to see this through. It made me feel very loved.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="font-display text-xl text-[#0a0a0a]">
                Suzanne Dorene Little
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Take Action Now
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-white mb-6">
            Facing Serious Criminal Charges?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Every client receives the same dedication and thorough approach demonstrated
            in the Suzanne Little case. Contact John D. Forsyth for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+14158123257"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 md:px-8 md:py-4 bg-[#b8860b] text-[#0a0a0a] text-sm uppercase tracking-[0.15em] font-semibold hover:bg-[#d4a017] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call (415) 812-3257
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 border border-white/30 text-white text-sm uppercase tracking-[0.15em] font-medium hover:border-white hover:bg-white/5 transition-all"
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

      {/* More Case Results */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-6">
            See More Results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/cases/recent"
              className="text-white font-medium hover:text-[#b8860b] transition-colors inline-flex items-center gap-2"
            >
              Recent Cases
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cases/past"
              className="text-white font-medium hover:text-[#b8860b] transition-colors inline-flex items-center gap-2"
            >
              Past Cases by Category
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
