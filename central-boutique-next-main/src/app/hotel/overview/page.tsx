import type { Metadata } from "next";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Ornament, Hairline } from "@/components/ornament";
import { Eyebrow } from "@/components/eyebrow";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "The Hotel — Central Boutique Hotel Moradabad",
  description: "The story of Moradabad's first boutique hotel: fifteen rooms, ultra-modern chic décor, an intimate address in Civil Lines.",
};

export default function Overview() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="The Hotel"
          title="A house of fifteen rooms"
          image="/central/Delux/390601.webp"
          crumb="Overview"
        />

        <section className="py-28 md:py-36">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <Ornament />
              <p className="eyebrow mt-6">Boutique. Central. Personal.</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-6 text-wine leading-[1.1]">
                The first of its kind in the city.
              </h2>
              <Hairline className="mt-10 max-w-[120px] mx-auto" />
              <div className="mt-10 space-y-6 text-foreground/80 text-lg leading-relaxed font-light">
                <p>
                  When we opened, Moradabad had never seen a boutique hotel. Fifteen rooms felt
                  small by any measure — and precisely the point. A boutique hotel's intimacy is
                  the whole design brief: an unhurried welcome, a familiar face at the desk, a
                  room prepared for you specifically.
                </p>
                <p>
                  Civil Lines sets the frame. Broad, tree-lined, the historic quarter of the city —
                  the address puts everything within a short walk.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <StatsStrip />

        <AlternatingSection
          eyebrow="Design"
          title="Ultra-modern chic, warmed by wine and gold"
          body="Our interiors read as a considered whole. Wine velvet, antique gold, hushed marble, and lighting that lands where it should. The palette is decisive; the details, quiet. Ornament is present, but never loud — the design keeps you company without asking to be noticed."
          image="/central/superior Room/390632.webp"
          reverse={false}
        />

        <AlternatingSection
          eyebrow="Location"
          title="The centre of the centre"
          body="Civil Lines is Moradabad's heart. Restaurants, markets, the brass district, the railway station — all within reach on foot or a short ride. Business is easy from here. So is leisure. So is simply doing nothing at all, if that is what the day asks for."
          image="/central/exterior/390480.webp"
          reverse
        />

        <AlternatingSection
          eyebrow="Service"
          title="A small team, an attentive house"
          body="Fifteen rooms mean our team knows your name, your coffee, your preferred wake time — without a checklist. Every service is available without ceremony. Ask, and it is done. That is the whole promise of a boutique house."
          image="/central/Party Hall  Or Gulmohar Hotel/390551.webp"
          reverse={false}
        />

        <section className="py-24 bg-wine text-ivory text-center relative">
          <div className="absolute inset-6 border border-gold/25 pointer-events-none" />
          <div className="max-w-2xl mx-auto px-6 z-10 relative">
            <Ornament className="[&_span]:!bg-gold/50" />
            <h3 className="font-serif text-3xl md:text-4xl mt-6">
              Rooms are best chosen in conversation.
            </h3>
            <Link
              href="/hotel/rooms-suites"
              className="inline-block mt-8 btn-gold-outline px-8 py-3 uppercase text-xs tracking-[0.24em]"
            >
              View Rooms & Suites
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function StatsStrip() {
  const stats = [
    { n: "14", l: "Intimate Rooms" },
    { n: "01", l: "Boutique Address" },
    { n: "Civil Lines", l: "City Centre" },
    { n: "First", l: "Of its kind in Moradabad" },
  ];
  return (
    <section className="border-y border-gold/25 bg-cream/60 py-14">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
        {stats.map((s) => (
          <div key={s.l}>
            <p className="font-serif text-4xl md:text-5xl text-wine leading-none">{s.n}</p>
            <p className="eyebrow mt-3">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AlternatingSection({
  eyebrow,
  title,
  body,
  image,
  reverse,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string | StaticImageData;
  reverse: boolean;
}) {
  return (
    <section className="py-24 md:py-32">
      <div className={`mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <ScrollReveal>
          <div className="relative">
            <Image
              src={image}
              alt=""
              width={1200}
              height={960}
              className="w-full aspect-[5/4] object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={`absolute -inset-4 border border-gold/30 -z-10 ${reverse ? "-translate-x-6" : "translate-x-6"} translate-y-6`} />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h3 className="font-serif text-3xl md:text-4xl mt-5 text-wine leading-[1.1]">{title}</h3>
          <Hairline className="mt-6 max-w-[80px]" />
          <p className="mt-6 text-foreground/75 leading-relaxed">{body}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
