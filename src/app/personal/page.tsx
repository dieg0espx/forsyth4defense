import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mountain, Camera, Heart, Dog, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Up Close and Personal | John D. Forsyth",
  description:
    "Get to know John D. Forsyth beyond the courtroom. Family man, outdoor enthusiast, photographer, and proud Anatolian Shepherd owner in the Sierra Nevada.",
  keywords: [
    "John Forsyth personal",
    "criminal defense attorney hobbies",
    "Sierra Nevada outdoor photography",
    "Anatolian Shepherd",
  ],
};

export default function PersonalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dku1gnuat/image/upload/v1769026973/Cecile_Lake_1_ouhjob.jpg')",
            backgroundPosition: "center 70%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#b8860b] mb-6 font-medium">
            Beyond the Courtroom
          </p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Up Close and Personal
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Life Beyond the Courtroom
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              When he isn&apos;t practicing law, John spends his time with his family and
              pursuing the great outdoors. His interests include: road cycling,
              backpacking, fly fishing, kayaking, cross country skiing and outdoor
              photography. The photos on this site were taken by John.
            </p>

            <p>
              John has spent many summers in the Sierra Nevada, trekked through the
              Himalayas and ridden elephants through the jungles of Nepal.
            </p>

            <p>
              John and his family have visited many of our Great National Parks in the
              west and take pride in the fact that they spent every night there on the
              ground. Yearly trips to the Eastside of the Sierra are a family tradition.
              His daughter is currently in law school, following in her father&apos;s
              footsteps.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Outside the Office
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              Passions & Pursuits
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mountain,
                title: "Backpacking",
                description: "Sierra Nevada summers and National Park adventures",
              },
              {
                icon: Camera,
                title: "Photography",
                description: "Capturing the beauty of the great outdoors",
              },
              {
                icon: Heart,
                title: "Family",
                description: "Quality time with loved ones in nature",
              },
              {
                icon: Dog,
                title: "Anatolian Shepherds",
                description: "Loyal companions on every adventure",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 border border-gray-200 hover:border-[#b8860b] transition-colors group"
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-gray-200 flex items-center justify-center group-hover:border-[#b8860b] transition-colors">
                  <item.icon className="h-6 w-6 text-[#0a0a0a] group-hover:text-[#b8860b] transition-colors" />
                </div>
                <h3 className="font-semibold text-[#0a0a0a] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dogs Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Loyal Companions
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a]">
              The Anatolian Shepherds
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shakira */}
            <div className="bg-white border border-gray-200 p-8 text-center">
              <div className="w-24 h-24 bg-[#0a0a0a] mx-auto mb-6 flex items-center justify-center">
                <Dog className="h-10 w-10 text-[#b8860b]/50" />
              </div>
              <h3 className="font-display text-2xl text-[#0a0a0a] mb-2">
                The Mighty Shakira
              </h3>
              <p className="text-[#b8860b] text-sm font-medium mb-4">2012 – 2026</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                A beloved family companion who protected her family on countless
                adventures through the Sierra Nevada. Shakira was a faithful guardian
                and will always be remembered for her courage and loyalty.
              </p>
            </div>

            {/* Ajax */}
            <div className="bg-white border border-gray-200 p-8 text-center">
              <div className="w-24 h-24 bg-[#0a0a0a] mx-auto mb-6 flex items-center justify-center">
                <Dog className="h-10 w-10 text-[#b8860b]/50" />
              </div>
              <h3 className="font-display text-2xl text-[#0a0a0a] mb-2">
                Ajax the Greater
              </h3>
              <p className="text-[#b8860b] text-sm font-medium mb-4">Current Companion</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The newest member of the Forsyth family, Ajax continues the tradition
                of Anatolian Shepherds as loyal protectors and adventure companions.
                Named after the legendary Greek hero, Ajax is a worthy successor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
              Gallery
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0a0a0a] mb-4">
              Through the Lens
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Photography by John D. Forsyth — capturing the beauty of California&apos;s
              wilderness and the Sierra Nevada.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026974/Sentinel_Dome_yngham.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026974/Schwartz_Hut.1_1_sxjbld.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026974/The_Boss.2_j4edin.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026974/Yosemite_Falls_ct7pws.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026973/186_nn0ala.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026973/Mt_Conness2_wqhvpr.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026972/018_lwz4jv.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026973/Cecile_Lake_1_ouhjob.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026972/FB_IMG_1719529469471_qvleya.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026972/Old_Bull_lbbglz.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026972/North_Pal_myhti7.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026972/Machapuchre_caaie0.jpg",
              "https://res.cloudinary.com/dku1gnuat/image/upload/v1769026972/FB_IMG_1583208998591_bsr7lw.jpg",
            ].map((imageUrl, i) => (
              <div
                key={i}
                className="aspect-square relative overflow-hidden border border-gray-200 hover:border-[#b8860b] transition-colors group"
              >
                <img
                  src={imageUrl}
                  alt={`Photography by John D. Forsyth ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Need Experienced Legal Representation?
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            While John enjoys the outdoors, his dedication to clients never wavers.
            Contact the Law Office of John D. Forsyth for a free consultation.
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
        </div>
      </section>
    </>
  );
}
