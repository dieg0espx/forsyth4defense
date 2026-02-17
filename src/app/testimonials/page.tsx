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

interface Testimonial {
  name: string;
  location?: string;
  paragraphs: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Suzanne Dorene Little",
    paragraphs: [
      'This letter is in regards to the tremendous support, love and prayers from all of "Indian Country" and others this past year. I want to thank my attorney, John D. Forsyth of San Francisco (a member of the Round Valley Indian reservation) and his investigators, the talented Harvey Shapiro and the lovely Carol Palacio. I would like to thank Lael Kayfetz and Robert Sheldon of the Siskiyou Public Defender\'s Office for their tireless efforts. I would like to thank attorneys Jeff Schwartz of Arcata, California and Eric Bergstrom of Yreka, California for standing in for me in court. I would like to thank the correctional staff of the Siskiyou County jail for their complete professionalism in this case. I would like to thank Aunt Betty, Diane and Zooby for their faith, support and love. I would like to especially thank my family. My children and their spouses, my grandchildren and their spouses, great grandchildren and members of the community for your loyal support. Lastly, I would thank our Creator, who knows all, and with your prayers, helped me make it through each day and to see this through. It made me feel very loved.',
    ],
  },
  {
    name: "Steven D.",
    location: "Palo Alto, California",
    paragraphs: [
      "From the moment I had my first conversation with John, my family and I had significant stress put to ease, knowing that someone professional and realistic was now helping with my situation. John has shown personality traits that I find incredibly well-suited to the field of criminal defense, exhibiting confidence and straightforward communications that leave nothing ambiguous. He was referred to me by a highly prestigious staff member at the university I attend, and was gracious in considering my financial situation and other contextual factors.",
      "In addition to strictly working with me on my legal charges, John has offered a valuable support role in dealing with repercussions from my university and the DMV with regard to my situation. After consulting with a couple of university-supplied attorneys, I was not at all feeling optimistic about my case. As soon as I spoke with John, I was able to understand the potential situations I was faced with and begin planning my next moves, which was absolutely invaluable.",
      "From simple court cases to felony trials, I am confident that John's experience, expertise, and fierceness are very competitive in the Bay Area, and I would absolutely recommend speaking with him about any legal matters one may face.",
    ],
  },
  {
    name: "Michael S.",
    location: "El Cerrito, California",
    paragraphs: [
      'I won\'t ever forget my first consultation with John. He raked me over the coals and I thought to myself, "what the hell?" but then I realized he was preparing me for a serious battle. He was always on time and knew two steps ahead what would happen at the proceedings.',
      "John would also tell me what I needed to know so I could focus on getting my life ready for the next step and not stress too much about the proceedings in general. He sincerely cares for his clients and will not stop fighting for them. I am very happy he is my lawyer, and friend. Thanks to him, I have a fighting chance to rectify the wrongs that were done to me.",
    ],
  },
  {
    name: "Lorraine Florence",
    location: "Arizona",
    paragraphs: [
      "My family lives in Arizona and I had searched numerous attorneys online trying to find the right fit for my son. My son has mental retardation and is on the borderline with his disability. However, according to the state of Arizona, you pretty much have to be drooling and extremely disabled to not be convicted of a sex crime.",
      "My son at the time was 30 years old. He cannot drive and is not able to work because of his brain damage. He's smart in some areas and very immature in others. He's approximately a 10-14 year old by child standards. He does not understand innuendos or more than a 2-step process. He has trouble understanding many situations and can't remember a lot.",
      "One day my son was on the internet and he was in a porn chatroom. I know, he should not have been there and I did not know he was there. He found the site and was watching everyone talk back and forth. He never interacted with anyone but saw the posts they were putting out on the site. One of the posts said that they just had to go to this website and look at it to see how good it was. My son did not know that there was even such a thing as child pornography and he wanted to see what everyone was talking about. He went to go look at the site but saw that it had to be down loaded. He looked at it and thought it was weird and didn't understand. In Arizona, the state police, FBI and local official can bait and trap people to go to those sites. They do not know who is looking at them or who understands the content.",
      "The Swat team, FBI and police came to my home one morning and arrested my son on 2 counts of child pornography.",
      "I found John online and saw that he had helped many other families who had someone with mental retardation.",
      "I met with John and he let me know that in the state of Arizona this was a worst case scenario. Arizona has a 17 year minimum for 1 download of child pornography. I was devastated because I knew my son had never met anyone or tried to do anything weird with anyone. He didn't even know that there was such a thing as child pornography but this is what happens when someone like my son who does not belong on the internet and starts browsing. I have since removed his computer from my home and found other ways to fill his time and interests.",
      "It took 1 year and John stuck by us all the way till the end. My son saw a defense doctor, prosecution doctor and then a court doctor who all of them found him incompetent. This process took 1 year. John called me one evening just before Christmas and told us we could take my son home! We all cried for an hour.",
      "John was always available, kind and very strong fighting for my son in the courtroom. If I could give John more than 5 stars, I would. My son could have spent 34 years in prison but instead he came home.",
    ],
  },
  {
    name: "Randy P.",
    location: "Sacramento, California",
    paragraphs: [
      "John has displayed qualities that other lawyers that I have hired have lacked. He was honest from our first meeting to the end. His integrity was inspiring and his determination and belief in me gave me hope & comfort. I was in a difficult place with false allegations that separated me from my family but now I have my children back in my life and the healing continues. I would recommend his services without reservation.",
    ],
  },
  {
    name: "Kevin",
    location: "San Francisco, CA",
    paragraphs: [
      "When I met with John, he was very upfront about my case and what I was up against. He inspired confidence in him by his strong and forthright nature. I felt at ease and trusted him from the get go that he would do all he could with regards to the false accusations made against me. Though the case has not gone to trial as of this review, it could well be that it won't with John's capable representation.",
    ],
  },
  {
    name: "A.P.",
    location: "Chicago, Illinois",
    paragraphs: [
      "When I was told that my arrest would result in several felony charges and jail time, I sought a lawyer that could help me navigate the San Francisco justice system. John was recommended to me as an excellent lawyer who could help me out.",
      "I found John Forsyth to be a dedicated legal professional. He has gone to great lengths to insure that my trial and legal processes took into account the complex nature of my criminal behavior and the underlying psychological issues that I had to deal with.",
      "He patiently guided me through the steps involved in trial and was able to have my charges reduced to a single misdemeanor and a drug diversion program.",
      "I am extremely satisfied with his services and most importantly the personable way in which he was able to connect with me and to work with the court to represent me in a positive light.",
      "I would recommend John Forsyth to anyone in need of expert legal help in San Francisco.",
    ],
  },
  {
    name: "M.M.",
    location: "Berkeley, California",
    paragraphs: [
      "Last summer, my son had an incident with a parking lot attendant that appeared to be a tangled legal mess. When I contacted John, he was immediately on task and prevented any further escalation or charges filed. I have know John for about 18 years and on occasion asked for his legal advice but this occasion particularly called for his polished skills. I would not hesitate to recommend him for any type of legal problem.",
    ],
  },
  {
    name: "V.P.",
    location: "Chicago, Illinois",
    paragraphs: [
      "When my son called collect from San Francisco county jail, it was a quiet Saturday evening in our home in Chicago. Our world turned upside down with this call. We never thought something like that could happen in our immediate circle of friends, let alone in our family.",
      "Being overwhelmed, angered, and disappointed, we did not know how to deal with the situation. By midday Sunday we were given the name of John D. Forsyth and were told that he was the best. At the end of the day we were already in touch with Mr. Forsyth, and immediately felt that we were in good hands.",
      "During the following four months Mr. Forsyth not only worked on the case; he took his time to explain a lot of details to us and showed that he cared about not getting repeat customers. He guided my son not only in how to avoid being taken into custody, but most importantly, how to address the issues which led to arrest in the first place.",
      "John D. Forsyth possesses a combination of experience and devotion to his clients, sense of humor and understanding of seriousness of the issues that clients are dealing with.",
      "I would not wish to anybody to be in a position of looking for a criminal defense lawyer, but if life throws you into a situation like this, I strongly recommend John D. Forsyth.",
    ],
  },
  {
    name: "J.H.",
    location: "San Francisco, California",
    paragraphs: [
      "John is an excellent attorney. He handled my situation with great professionalism and sensitivity. He is personable and kind, with a terrific sense of humor. I found it refreshing that he has avoided the attorney attitude and was down to earth. He always listened to my concerns and gave good advice. We worked as a team. He included family and friends in the decision making process.",
      'His services were terrific. He took the ball and ran all the way with it. His expertise in my situation was excellent. He always kept me informed and spent extra time in explaining what he was doing and why. He has an established network of attorneys in San Francisco that he relies on for advice. He was fair and honest, as well as forthright. He believes in the judicial system and will push ahead on issues, even if there was a possibility that ruling from the Court system appeared flawed. Very tenacious for his clients. I found him as an attorney that will diligently fight for his client. He never took the easy way out.',
      'He also cares about how the outcome will affect his clients, both in their careers and personal life. I found him to be sensitive and care. Jon always stayed in contact, either by phone, e-mail or personally and updated me in a timely fashion. He has a great personality and tries to give reassurance and support. "Relax! Let the system work." If you select John Forsyth to represent you, you have made a wise choice.',
    ],
  },
  {
    name: "G.J.",
    location: "Salt Lake City, California",
    paragraphs: [
      "While I can't say that the circumstances of our meeting were enjoyable or positive, your support, knowledge, and assistance with my case certainly were. My case involved a DUI and several criminal charges, which could've resulted in extended jail time, loss of my job and license.",
      "You have demonstrated a comprehensive knowledge of California criminal law, and you have been a great advisor to me and my brother throughout this ordeal. Through your direction, I was able to obtain a new drivers license, continue working, and make significant progress with my case while diminishing the charges against me. You have saved us time, especially during court appearances, through your relationships and knowledge of the San Francisco Court system.",
      "I always felt like I was in good hands whenever you walked into the courtroom to represent me. Thank you for all your support, professionalism throughout my ordeal.",
      "I would not hesitate to recommend you to anyone in my situation.",
    ],
  },
  {
    name: "Dan R., A Healthcare Professional",
    location: "Contra Costa County, California",
    paragraphs: [
      "My experience with John Forsyth was nothing short of miraculous. After having been arrested in my own home and charged with a DUI and three counts of Felony Child Endangerment, I needed a really good attorney. John did a fantastic job of mounting my defense by coordinating a super team of investigators and expert witnesses. The result, I didn't loose my license, the Felony charges were dropped, and no DUI.",
      "I would strongly recommend John to any one in need of a serious legal defense.",
    ],
  },
  {
    name: "M.M.",
    location: "Sunnyvale, California",
    paragraphs: [
      "This letter is being written as a strong recommendation for the law offices of John D. Forsyth and John's efforts to right a wrong. In early 2007 my girlfriend and I were falsely accused of numerous crimes and arrested for no reason. My girlfriend was released almost immediately and I was left to deal with not only four felonies, but also the parole board. Once my girlfriend retained John, the ball really began to bounce and we saw results immediately. The following day after our arrest, John got the charges dropped and I was left to deal with the parole board. This was also skillfully handled by John in an expeditious fashion and I was released from San Quentin State Prison within two weeks.",
      "Anyone who has ever been violated on parole knows that beating any charges at screening let alone your Morrissey hearing is virtually unheard of. John beat half the charges at screening, got me released on my own recognizance and then one month later, with the so called victim testifying against me, beat the other half of the allegations, completely vindicated me and brought justice full circle.",
      "John is not only compassionate, understanding but also very forthright and one hell of an attorney!",
    ],
  },
  {
    name: "R.H.",
    location: "Lakeport, California",
    paragraphs: [
      'I would like to take this opportunity to share my experience with John D Forsyth Attorney at Law. We all know the stories and tales we hear about Attorneys. Most of the stories are unpleasant ones, which leaves us with a bad taste in our mouths. One of the biggest reasons of this bad taste is your butt is on the line. The Attorney is just there doing his or her JOB. You feel helpless. The whole judicial system is overwhelming. If you don\'t feel confident in the ability of your Attorney, it only makes it that much more unpleasant. We all know win or lose your Attorney gets paid and paid well. Let me tell you of my past experience with John D Forsyth. Never in my life have the words "you get what you pay for" been so true.',
      "I was facing big, ugly charges and time in a State pen. It was John and his resources against the state. In the beginning I felt overwhelmed not knowing the ins and outs of the courtroom. But it all slowly came to me and I felt more and more comfortable with John and his strategy. With the resources available to him, we quickly assembled a team and went to war against the state. In the end I came out on top. The battle was hard and fought tough with fine precision and aggressive tactics. John and his team of investigators and expert witnesses were victorious.",
      "I have my life back. That says it all. Thank you John.",
    ],
  },
  {
    name: "R.P.",
    location: "Pleasanton, California",
    paragraphs: [
      "The services of John D. Forsyth, attorney at Law, has been of great benefit to me during an extremely trying time in my life. I am grateful for his legal expertise and knowledge but also his patience and insight in a very complicated and emotional situation that life has handed to me.",
    ],
  },
  {
    name: "E.W.K.",
    location: "San Francisco, California",
    paragraphs: [
      "Mr. Forsyth is the best San Francisco attorney in the business, because he is not only personable, but he also provides expert advice to clients to resolve their difficulties as promptly and expeditiously as possible.",
    ],
  },
  {
    name: "S.W.",
    location: "Walnut Creek, California",
    paragraphs: [
      "Hey John, Thanks for saving my ass from additional time behind bars. The only bars I intend to visit in the future are where the beer runs cold and into the night! YOU'RE INVITED.",
    ],
  },
  {
    name: "D.H.",
    location: "Tulare, California",
    paragraphs: [
      "I first learned of the false sexual allegations being brought against me one evening when two local police officers arrived at my door informing me that a detective, from another state (California), wanted me to contact her for questioning in regard to those allegations. Devastated, scared, and confused, my wife and I began our search for an attorney. Our search led us to John Forsyth.",
      "Our first interaction with John was by telephone since we lived in another state, as previously mentioned. John told me that he would contact the detective on my behalf, and that I should not speak to her myself. He explained to the detective that he was representing me, and if charges were going to be filed against me, that she should contact him directly. Naturally, being the police, she ignored him, she set up a court hearing without letting John or myself know about it, and subsequently, I was considered a Fugitive, arrested for Felony Failure to Appear and sent to jail. After 9 days in jail, John was able to get me released.",
      'My wife and I booked a flight to California to meet with John in person. My first impression of John was that he was matter of fact, no holds barred and not someone that would "candy coat" anything. He is a straight shooter, doesn\'t mince words, he just simply tells it like it is. HOWEVER; he is caring, and he will fight "tooth and nail" for you.',
      "During the course of my ordeal (3+ years) John, and his absolutely AMAZING defense team, were thrown curveball after curveball, and each and every time, he, and they, rose to the challenge! John fought extremely hard for me. He was tenacious. He always had a response to everything the Prosecution threw our way. By the time this long ordeal was reaching it's end, hearing after hearing, litigation after litigation, the Prosecution finally realized it was not going to get the desired outcome they wanted, so we ended up agreeing to a far lesser plea.",
      "Although I didn't get the desired full exoneration I had hoped for, I absolutely got the best outcome I could have hoped for. I received probation, but most importantly of all, I didn't get a sexual conviction, which means I didn't have to register as a sexual offender, and I didn't face any future prison time what so ever! This may have gone on for who knows how long with all the court cases that were backlogged due to the yearlong court closures caused by the pandemic. Also; with the #METOO movement, the high profile sexual assault cases flooding the news, and the gender and racial turmoil constantly being reported on by the media, who knows if I would have been treated fairly had we gone to trial?",
      "I truly believe John saved my life, and I owe him so much for doing so!",
      "When you first meet John, he may come across as gruff, matter of fact, to the point, and not a hand holding kind of guy, but the charges you are facing are absolutely serious, and he won't let you forget that, he will always tell it like it is. HOWEVER; the longer you work with John and as a rapport builds between the two of you, you will see that he is caring, compassionate, tenacious on your behalf, and a true professional through and through, a real fighter. Although he may not like me revealing this part, but he can also be sensitive to how your feelings, and actually a pretty funny guy too.",
      "I feel I can refer to John as a friend now, and as my friend, I just want to say I owe you so much gratitude, and so many thanks ...your the BEST!",
    ],
  },
  {
    name: "L.H.",
    location: "Tulare, California",
    paragraphs: [
      "If you find yourself in need of a great attorney, John D. Forsyth is your man. Trust me, you don't want to risk your life and your future on anyone less than the best. And here's why:",
      'First, if you think our legal system is about determining truth vs. lies, you are dead wrong\u2026 It is about winning vs. losing, and the truth has very little to do with it. Prosecutors, who too often have aspirations of rising through the ranks, are more interested in getting another notch in their belts (i.e., a win) than in figuring out what the truth is. Judges are most often former prosecutors. Do the math.',
      "Second, if you think you are innocent until proven guilty, again, you are dead wrong. When you have numerous high profile public figures, along with the masses on Twitter, saying that if a woman accuses you of a sexual crime, they will believe her hands down with no hard evidence, well then, explain how you could possible start with a presumption of innocence after you have been falsely accused? From the get-go, you are at an extreme disadvantage--required to prove your innocence, even if your situation is simply a case of a she-said he-said.",
      "Third, if you think you will be treated fairly by the police and prosecution, once again, you are dead wrong. In our personal experience, the police weren't interested in talking to people who refuted what the alleged \"victim\" had to say, and they intentionally left out key info when getting the DA to file charges (e.g., the fact that we had a lawyer, that my husband was willing to come in and give his side of it, etc.). They also did not tell his lawyer that a court date had been set (resulting in the issuance of a fugitive warrant, 3 cop cars and a K-9 unit showing up at our house, and 9 days in jail). On the prosecution side, after the DA dismissed their case for lack of proper evidence at the preliminary exam, the DA refiled the case with more serious charges that exposed my husband to life in prison\u2014with no new evidence to really warrant the increased severity of the charges (charges which were later thrown out by the judge). We also experienced what seemed to us to be attempted manipulation for increased leverage (in our case, trying FOUR TIMES to increase bail from $100,000 to $12.5 million), and blocking conflicting testimony at the second preliminary exam (in our case, the repeated changes of ages by the alleged \"victim\"). If you think you will get a chance for any significant challenge to the truth of anything said before trial, again, you are dead wrong. But in our case, John Forsyth was able to aggressively and successfully attack the DA's case by way of pre-trial motions.",
      "Fourth, if you think hiring a good, experienced lawyer costs too much, then ask yourself what your life and your future is worth to you. Then go sit in an actual, real, criminal courtroom and watch the proceedings as defendants come and go.",
      "Without John Forsyth, my husband would have been drawn-and-quartered by a system bent on winning\u2014truth be damned. At every turn, John gave practical, sound information and advice that empowered us to make decisions about our next steps\u2026 pros and cons, implications of various decisions, etc. He cut through the quagmire of legal jargon and procedure to help us understand what was going on. He had a team of experts that helped investigate, research, and make (successful) challenges in court. John was compassionate but did not sugarcoat the situation, give false hope, or do a lot of hand-holding\u2026 BUT he fought like hell inside and outside the courtroom, kept us informed at every turn, and leveraged all of his experience, expertise, and resources to essentially help us get the best win possible inside of a justice system that is, in fact, unjust. My husband owes his life to John, and because of John we emerged from a horrendous, 3+ year fight with many scars, but with hope for our future.",
    ],
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
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026974/Schwartz_Hut.1_1_sxjbld.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/90" />

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

      {/* Testimonials */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 md:p-10 hover:border-[#b8860b] transition-colors"
            >
              <Quote className="h-8 w-8 text-[#b8860b]/20 mb-6" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed italic">
                {testimonial.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>&ldquo;{pIndex === 0 ? "" : ""}{paragraph}{pIndex === testimonial.paragraphs.length - 1 ? "\u201D" : ""}</p>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4 mt-6">
                <p className="font-semibold text-[#0a0a0a]">
                  {testimonial.name}
                </p>
                {testimonial.location && (
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                )}
              </div>
            </div>
          ))}
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
            <strong>Disclaimer:</strong> These testimonials reflect the experiences of
            individual clients. Every case is unique and past results do not guarantee
            future outcomes.
          </p>
        </div>
      </section>
    </>
  );
}
