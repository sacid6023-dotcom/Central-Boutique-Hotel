import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Ornament, Hairline } from "@/components/ornament";
import { Eyebrow } from "@/components/eyebrow";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeroCarousel } from "@/components/hero-carousel";
import { ExclusivelyForYouSection } from "@/components/exclusively-for-you";
import { TajExclusivelyForYouSection } from "@/components/taj-exclusively-for-you";
import { TestimonialsSection } from "@/components/testimonials-section";
import { promotions } from "@/lib/site-data";
import storyImg from "@/assets/story-corridor.jpg";

import banquetImg from "@/assets/gallery-dining-1.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader transparentOnHero />
      <main>
        <HeroCarousel />
        <StorySection />

        {/* Exact Taj Hotels replica section below (previous design commented out for client review) */}
        {/* <ExclusivelyForYouSection /> */}
        <TajExclusivelyForYouSection />

        <BanquetSection />
        <PromotionsSection />
        <TestimonialsSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}

function StorySection() {
  return (
    <section className="relative py-28 md:py-36 grain">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <ScrollReveal>
          <div className="relative">
            <Image
              src="/secondSection.webp"
              alt="Hotel corridor"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -inset-4 border border-gold/30 -z-10 translate-x-6 translate-y-6" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl mt-6 leading-[1.05] text-wine">
            An address that turns the city inside.
          </h2>
          <Hairline className="mt-8 !bg-gradient-to-r !from-gold/60 !to-transparent max-w-[100px] !bg-gold/60" />
          <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed font-light">
            <p>
              A boutique hotel is defined by its intimate size. Hospitality experts agree that a true boutique hotel typically features no more than 100 rooms, creating a personalized atmosphere, exceptional service, and the premium, elite experience that makes it one of the best stays in Moradabad.
            </p>
            <p>
              The first premium boutique hotel in Moradabad, centrally located in the heart of the city, this elite 14-room property showcases ultra-modern design, sophisticated décor, and a refined ambience, making it one of the best luxury hospitality experiences in Moradabad.
            </p>
          </div>
          <div className="mt-10 flex gap-10 border-l border-gold/40 pl-6">
            <div>
              <p className="font-serif text-5xl text-wine leading-none">14</p>
              <p className="eyebrow mt-2">Rooms</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-wine leading-none">01</p>
              <p className="eyebrow mt-2">Address</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-wine leading-none">&infin;</p>
              <p className="eyebrow mt-2">Details</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PromotionsSection() {
  return (
    <section className="bg-cream py-28 md:py-36 grain">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <Ornament />
          <p className="eyebrow mt-6">Promotions</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-wine">Considered offerings</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {promotions.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <article className="group bg-ivory border border-gold/20 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/50 to-transparent" />
                  <span className="absolute top-4 left-4 bg-gold/95 text-charcoal px-3 py-1 text-[0.65rem] tracking-[0.22em] uppercase z-10">
                    {p.tag}
                  </span>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl text-wine">{p.title}</h3>
                  <div className="h-px w-10 bg-gold my-4" />
                  <p className="text-sm text-foreground/75 leading-relaxed flex-1">{p.body}</p>
                  <Link
                    href={p.link}
                    className="mt-6 self-start text-gold uppercase text-xs tracking-[0.24em] link-underline"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Ornament />
        <p className="eyebrow mt-6">Plan Your Stay</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-4 text-wine leading-[1.1]">
          Every stay begins with a conversation.
        </h2>
        <p className="mt-6 text-foreground/70 max-w-xl mx-auto">
          Speak with our small, attentive team about your visit &mdash; dates, occasions, quiet requests.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-10 btn-wine-fill px-10 py-4 uppercase text-xs tracking-[0.28em]"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

function BanquetSection() {
  const highlights = [
    { label: "2,500 sq. ft.", desc: "Premium Banquet Hall" },
    { label: "Up to 125 Guests", desc: "Capacity & Seating Arrangement" },
    { label: "Private Dining Rooms", desc: "PDRs for Exclusive Gatherings" },
    { label: "Versatile Celebrations", desc: "Corporate Events, Birthdays, Kitty Parties, Weddings & Anniversaries" },
  ];

  return (
    <section className="py-28 md:py-36 bg-ivory relative overflow-hidden grain border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left Column: Image Showcase */}
        <ScrollReveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/30 shadow-2xl">
              <Image
                src={banquetImg}
                alt="Gulmohar Banquets - Premium Banquet Hall in Moradabad"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-charcoal/85 backdrop-blur-md border border-gold/30 text-ivory">
                <p className="eyebrow !text-gold-soft text-[0.65rem]">VENUE HIGHLIGHT</p>
                <h4 className="font-serif text-2xl text-ivory mt-1">Gulmohar Banquets</h4>
                <p className="text-ivory/70 text-xs mt-1">2,500 sq. ft. · Up to 125 Guests · Moradabad</p>
              </div>
            </div>
            <div className="absolute -inset-4 border border-gold/20 -z-10 translate-x-6 translate-y-6 hidden sm:block" />
          </div>
        </ScrollReveal>

        {/* Right Column: Content & Highlights */}
        <ScrollReveal delay={0.1}>
          <Eyebrow>Exclusive Banquet Hall</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-[1.08] text-wine">
            Celebrate Every Occasion in Style
          </h2>
          <Hairline className="mt-6 !bg-gradient-to-r !from-gold/60 !to-transparent max-w-[100px] !bg-gold/60" />

          <p className="mt-6 text-foreground/80 leading-relaxed font-light text-base md:text-lg">
            Host unforgettable celebrations and successful corporate gatherings at <strong className="font-medium text-wine">Gulmohar Banquets</strong>, an elegant venue designed with contemporary interiors, premium amenities, and personalised hospitality. Whether it's a private celebration or a professional event, every occasion becomes truly memorable.
          </p>

          <div className="mt-8 pt-6 border-t border-gold/20">
            <h3 className="font-serif text-2xl md:text-3xl text-wine">
              Gulmohar Banquets &mdash; One of a Kind in Moradabad
            </h3>
            <p className="mt-3 text-foreground/75 leading-relaxed font-light text-sm md:text-base">
              Recognised as one of Moradabad's finest banquet venues, Gulmohar Banquets combines sophisticated design with exceptional hospitality. Our versatile event space is perfect for intimate celebrations, social gatherings, and corporate functions, offering a seamless experience for every guest.
            </p>
          </div>

          {/* Highlights Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="p-4 bg-cream/70 border border-gold/25 rounded-sm">
                <p className="font-serif text-lg text-wine font-medium">{h.label}</p>
                <p className="text-xs text-foreground/70 mt-1 leading-snug">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-wine-fill px-8 py-3.5 uppercase text-xs tracking-[0.24em] font-medium shadow-md"
            >
              Enquire Now
            </Link>
            <a
              href="https://wa.me/917895591010?text=Hello%20Central%20Boutique%20Hotel,%20I%20would%20like%20to%20enquire%20about%20booking%20Gulmohar%20Banquets."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-discover-white-fill px-8 py-3.5 uppercase text-xs tracking-[0.24em] font-medium"
            >
              Book Your Event
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
